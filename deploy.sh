#!/usr/bin/env bash
# ============================================================
#  DOC Website — Deployment Agent (Pre-flight + Deploy)
#  Usage:  ./deploy.sh [--dry-run] [--prod]
#  Flags:
#    --dry-run   Run all checks but skip actual Netlify deploy
#    --prod      Deploy to production (default: deploy preview)
# ============================================================

set -euo pipefail

# ── Colors ──────────────────────────────────────────────────
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
BLUE='\033[0;34m'; BOLD='\033[1m'; RESET='\033[0m'

pass() { echo -e "${GREEN}✓${RESET} $1"; }
fail() { echo -e "${RED}✗ FAILED: $1${RESET}"; exit 1; }
warn() { echo -e "${YELLOW}⚠ $1${RESET}"; }
info() { echo -e "${BLUE}▶ $1${RESET}"; }
header() { echo -e "\n${BOLD}$1${RESET}\n$(printf '─%.0s' {1..50})"; }

# ── Parse flags ─────────────────────────────────────────────
DRY_RUN=false
PROD=false
for arg in "$@"; do
  case $arg in
    --dry-run) DRY_RUN=true ;;
    --prod)    PROD=true ;;
  esac
done

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$REPO_DIR"

echo -e "\n${BOLD}🚀 DOC Website — Deployment Agent${RESET}"
echo "Repo: $REPO_DIR"
echo "Mode: $([ "$PROD" = true ] && echo 'PRODUCTION' || echo 'Preview')"
echo "Dry run: $DRY_RUN"

# ============================================================
# CHECK 1: Required tools
# ============================================================
header "CHECK 1/8 — Required Tools"

command -v node  &>/dev/null && pass "node $(node -v)" || fail "node not found — install via nvm"
command -v npm   &>/dev/null && pass "npm $(npm -v)"   || fail "npm not found"
command -v git   &>/dev/null && pass "git $(git --version | awk '{print $3}')" || fail "git not found"

if command -v netlify &>/dev/null; then
  pass "netlify CLI $(netlify --version | head -1)"
else
  if [ "$DRY_RUN" = false ]; then
    warn "Netlify CLI not found. Installing globally..."
    npm install -g netlify-cli || fail "Could not install netlify-cli"
    pass "netlify CLI installed"
  else
    warn "Netlify CLI not found (dry-run — skipping install)"
  fi
fi

# ============================================================
# CHECK 2: Git status
# ============================================================
header "CHECK 2/8 — Git Status"

BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "unknown")
pass "Branch: $BRANCH"

if [ "$PROD" = true ] && [ "$BRANCH" != "main" ] && [ "$BRANCH" != "master" ]; then
  warn "Deploying to production from branch '$BRANCH' (not main/master)"
  read -p "  Continue? (y/N): " confirm
  [[ "$confirm" =~ ^[Yy]$ ]] || { echo "Aborted."; exit 0; }
fi

UNTRACKED=$(git status --porcelain 2>/dev/null)
if [ -n "$UNTRACKED" ]; then
  warn "Uncommitted changes detected:"
  git status --short
  if [ "$PROD" = true ]; then
    read -p "  Deploy to production with uncommitted changes? (y/N): " confirm
    [[ "$confirm" =~ ^[Yy]$ ]] || { echo "Aborted."; exit 0; }
  fi
else
  pass "Working tree clean"
fi

COMMIT=$(git rev-parse --short HEAD 2>/dev/null || echo "unknown")
pass "Commit: $COMMIT"

# ============================================================
# CHECK 3: Dependencies
# ============================================================
header "CHECK 3/8 — Dependencies"

if [ ! -d "node_modules" ]; then
  info "node_modules missing — running npm ci..."
  npm ci || fail "npm ci failed"
fi

# Check if package-lock.json is in sync
npm ls --depth=0 &>/dev/null && pass "Dependencies look good" || warn "Some dependency issues found (non-blocking)"

# ============================================================
# CHECK 4: Environment / Config
# ============================================================
header "CHECK 4/8 — Config Files"

[ -f "netlify.toml" ] && pass "netlify.toml exists" || fail "netlify.toml missing"
[ -f "vite.config.ts" ] && pass "vite.config.ts exists" || fail "vite.config.ts missing"
[ -f "tsconfig.json" ] && pass "tsconfig.json exists" || fail "tsconfig.json missing"
[ -f "index.html" ] && pass "index.html exists" || fail "index.html missing"

# Check for .env files
if [ -f ".env.production" ]; then
  pass ".env.production found"
elif [ -f ".env" ]; then
  warn ".env found but no .env.production — will use .env"
else
  warn "No .env file found — ensure all env vars are set in Netlify dashboard"
fi

# ============================================================
# CHECK 5: TypeScript
# ============================================================
header "CHECK 5/8 — TypeScript Compile"

info "Running tsc --noEmit..."
npx tsc --noEmit 2>&1 | tail -20
if [ ${PIPESTATUS[0]} -eq 0 ]; then
  pass "TypeScript: no errors"
else
  fail "TypeScript errors found — fix before deploying"
fi

# ============================================================
# CHECK 6: Lint
# ============================================================
header "CHECK 6/8 — ESLint"

info "Running eslint..."
if npm run lint 2>&1; then
  pass "Lint: clean"
else
  warn "Lint warnings/errors found"
  if [ "$PROD" = true ]; then
    read -p "  Deploy to production with lint issues? (y/N): " confirm
    [[ "$confirm" =~ ^[Yy]$ ]] || { echo "Aborted."; exit 0; }
  fi
fi

# ============================================================
# CHECK 7: Build
# ============================================================
header "CHECK 7/8 — Production Build"

info "Running npm run build..."
npm run build 2>&1 || fail "Build failed"

# Verify dist output
[ -d "dist" ] && pass "dist/ directory created" || fail "dist/ directory missing after build"
[ -f "dist/index.html" ] && pass "dist/index.html exists" || fail "dist/index.html missing"

DIST_SIZE=$(du -sh dist/ | cut -f1)
pass "Build size: $DIST_SIZE"

# Check for _redirects (needed for React Router SPA routing on Netlify)
if [ -f "dist/_redirects" ] || grep -q "redirects" netlify.toml 2>/dev/null; then
  pass "SPA redirects configured"
else
  warn "_redirects not found — React Router may break on page refresh"
fi

# ============================================================
# CHECK 8: Bundle size sanity check
# ============================================================
header "CHECK 8/8 — Bundle Size Sanity Check"

JS_SIZE=$(find dist/assets -name "*.js" -exec du -sk {} \; 2>/dev/null | awk '{sum+=$1} END{print sum}')
CSS_SIZE=$(find dist/assets -name "*.css" -exec du -sk {} \; 2>/dev/null | awk '{sum+=$1} END{print sum}')

if [ -n "$JS_SIZE" ]; then
  if [ "$JS_SIZE" -gt 2048 ]; then
    warn "JS bundle: ${JS_SIZE}KB — consider code splitting (> 2MB)"
  else
    pass "JS bundle: ${JS_SIZE}KB ✓"
  fi
fi

if [ -n "$CSS_SIZE" ]; then
  pass "CSS bundle: ${CSS_SIZE}KB"
fi

# ============================================================
# ALL CHECKS PASSED
# ============================================================
echo -e "\n${GREEN}${BOLD}✅ All checks passed! (commit: $COMMIT)${RESET}\n"

if [ "$DRY_RUN" = true ]; then
  warn "Dry run — skipping Netlify deploy"
  echo -e "\nTo deploy run:  ./deploy.sh $([ "$PROD" = true ] && echo '--prod')"
  exit 0
fi

# ============================================================
# DEPLOY
# ============================================================
header "🚀 Deploying to Netlify"

if [ "$PROD" = true ]; then
  info "Deploying to PRODUCTION..."
  netlify deploy --prod --dir=dist || fail "Netlify production deploy failed"
  pass "🎉 Production deploy complete!"
else
  info "Deploying preview..."
  netlify deploy --dir=dist || fail "Netlify preview deploy failed"
  pass "🎉 Preview deploy complete! Review the URL above before promoting to production."
  echo -e "\nTo promote to production run:  ./deploy.sh --prod"
fi
