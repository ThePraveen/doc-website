#!/usr/bin/env bash
# Installs a local pre-push hook that mirrors the GitHub Actions branch-name check.
# Run once per clone: bash scripts/install-git-hooks.sh

set -e

ROOT="$(git rev-parse --show-toplevel)"
HOOK="$ROOT/.git/hooks/pre-push"

cat > "$HOOK" <<'EOF'
#!/usr/bin/env bash
# Pre-push: block direct pushes to main and validate branch naming.

protected="main"
pattern='^(feature|fix|hotfix|chore|docs|refactor|test|ci)\/[a-z0-9]+(-[a-z0-9]+)*$'

current="$(git symbolic-ref --short HEAD 2>/dev/null || true)"

if [ "$current" = "$protected" ]; then
  echo "✗ Direct pushes to '$protected' are blocked. Create a feature branch."
  echo "  Example: git checkout -b feature/my-change"
  exit 1
fi

if ! echo "$current" | grep -Eq "$pattern"; then
  echo "✗ Branch name '$current' does not follow the naming convention."
  echo ""
  echo "  Required format: <type>/<short-kebab-description>"
  echo "  Allowed types:   feature | fix | hotfix | chore | docs | refactor | test | ci"
  echo ""
  echo "  Rename with:     git branch -m feature/your-new-name"
  exit 1
fi

echo "✓ Branch '$current' passes naming check."
exit 0
EOF

chmod +x "$HOOK"
echo "✓ Installed pre-push hook at $HOOK"
