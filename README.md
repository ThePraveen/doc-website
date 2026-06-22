# DOC — Data Operations Company

> **AI-Powered Technical Gig Workers, At Scale**

Marketing and recruitment website for **DOC (Data Operations Company)** — the human layer that powers AI training data pipelines via data generation, annotation, and quality-check services.

🌐 **Live:** _Deploy to Netlify to get a URL_
📦 **Repo:** https://github.com/ThePraveen/doc-website

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [How to Setup](#how-to-setup)
- [How to Test](#how-to-test)
- [How to Deploy](#how-to-deploy)
- [Configuration & Placeholders](#configuration--placeholders)
- [Brand & Design System](#brand--design-system)
- [Pages & Routing](#pages--routing)
- [Available Scripts](#available-scripts)
- [Branch Naming Strategy](#branch-naming-strategy)
- [Pull Request Workflow](#pull-request-workflow)
- [Branch Name Enforcement](#branch-name-enforcement)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Tech Stack

| Layer            | Choice                                                    |
| ---------------- | --------------------------------------------------------- |
| Framework        | [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org/) |
| Bundler          | [Vite](https://vite.dev)                                  |
| Routing          | [React Router v6](https://reactrouter.com) (lazy-loaded)  |
| Styling          | [Tailwind CSS v4](https://tailwindcss.com)                |
| Animation        | [Framer Motion](https://www.framer.com/motion/)           |
| SEO              | [react-helmet-async](https://github.com/staylor/react-helmet-async) |
| Hosting          | [Netlify](https://www.netlify.com) (SPA redirects pre-configured) |

---

## Project Structure

```
doc-website/
├── public/
│   └── _redirects              # Netlify SPA fallback
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Sticky nav with mobile menu
│   │   ├── Footer.tsx          # Links, contact, compliance badges
│   │   ├── Logo.tsx            # DOC text + grid motif
│   │   ├── CookieBanner.tsx    # GDPR consent (localStorage)
│   │   ├── ScrollToTop.tsx     # Route + hash scroll handler
│   │   ├── SEO.tsx             # Per-page title/OG/Twitter meta
│   │   ├── PageTransition.tsx  # Framer Motion page wrapper
│   │   └── LegalSection.tsx    # Shared legal page section
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── About.tsx
│   │   ├── Careers.tsx
│   │   ├── RegisterGigWorker.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   ├── Terms.tsx
│   │   └── NotFound.tsx
│   ├── constants.ts            # Brand info + placeholder links
│   ├── App.tsx                 # Routes + layout shell
│   ├── main.tsx                # Bootstrap (Helmet, Router, Suspense)
│   └── index.css               # Tailwind v4 theme tokens
├── netlify.toml                # Build + redirect config
├── vite.config.ts
├── tsconfig*.json
└── package.json
```

---

## How to Setup

### Prerequisites

- **Node.js** 20+ (Node 22 or 24 LTS recommended)
- **npm** 10+ (ships with Node)
- A modern terminal and a Git client

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/ThePraveen/doc-website.git
cd doc-website

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The site will be available at **http://localhost:5173** with hot module replacement.

> **Note:** No `.env` file is required. All configuration lives in [`src/constants.ts`](./src/constants.ts) — see [Configuration & Placeholders](#configuration--placeholders).

---

## How to Test

This project ships with TypeScript strict mode, the Vite production build, and ESLint as its baseline quality checks.

### Type-check + production build

The fastest "does it work" gate. Catches TS errors, missing imports, and bundling issues.

```bash
npm run build
```

A successful build emits `dist/` with all routes code-split as separate chunks.

### Lint

```bash
npm run lint
```

### Preview the production build locally

After building, preview the optimized bundle exactly as Netlify will serve it:

```bash
npm run preview
# → http://localhost:4173
```

Walk through every route, verify:

- [ ] Header nav highlights the active route
- [ ] All page transitions animate smoothly
- [ ] Mobile menu toggles correctly under 1024px
- [ ] Anchor links on `/how-it-works` (`#data-generation`, `#data-annotation`, `#quality-check`) scroll smoothly
- [ ] Careers job cards expand/collapse
- [ ] Cookie banner appears on first visit, persists choice in `localStorage`
- [ ] All "Talk to Us" / "Apply" / "Register" buttons point to your real URLs (not placeholders)
- [ ] 404 page renders for unknown routes
- [ ] Footer contact email + phone are correct

---

## How to Deploy

### Option A — Netlify via Git (recommended)

1. Push to GitHub (already done — see repo URL above).
2. In the [Netlify dashboard](https://app.netlify.com), click **Add new site → Import an existing project**.
3. Authorize GitHub and select **`ThePraveen/doc-website`**.
4. Netlify reads [`netlify.toml`](./netlify.toml) automatically:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **SPA redirects:** `/* → /index.html` (200)
5. Click **Deploy**. Every push to `main` triggers an auto-rebuild.

### Option B — Netlify CLI

```bash
# One-time
npm install -g netlify-cli
netlify login

# Link this directory to a Netlify site
netlify init

# Deploy a preview
netlify deploy

# Deploy to production
netlify deploy --prod
```

### Option C — Any static host

Run `npm run build` and upload the contents of `dist/` to any static host (Vercel, Cloudflare Pages, S3 + CloudFront, GitHub Pages). Ensure SPA fallback is configured to serve `index.html` for unknown routes.

### Custom Domain

In Netlify: **Site configuration → Domain management → Add custom domain**. Netlify provisions a free Let's Encrypt SSL certificate automatically.

After setting your production domain, update the canonical URL placeholder in [`src/components/SEO.tsx`](./src/components/SEO.tsx) (look for the `PLACEHOLDER: production domain` comment).

---

## Configuration & Placeholders

All replaceable values are centralized for easy find-and-replace. Search the codebase for `PLACEHOLDER` to surface every one.

### `src/constants.ts`

```ts
GOOGLE_FORM_LINK              // "Talk to Us" + data requirement Google Form
CAREERS_FORM_LINK             // Careers application Google Form
GIG_WORKER_REGISTRATION_LINK  // DOC App registration URL
COMPANY.email                 // Public contact email
COMPANY.phone                 // Public contact phone
```

### `src/components/SEO.tsx`

- Production domain (`https://doc.example.com`) used for canonical + OG URLs.

### `index.html`

- `<title>`, base `<meta name="description">`, and `<meta name="theme-color">`.

---

## Brand & Design System

Brand tokens are defined in [`src/index.css`](./src/index.css) using Tailwind v4's `@theme` directive. Use them anywhere as Tailwind utilities (e.g. `bg-primary`, `text-ink`).

| Token              | Hex       | Tailwind class                | Purpose                       |
| ------------------ | --------- | ----------------------------- | ----------------------------- |
| `--color-bg`       | `#FAF7F2` | `bg-bg`                       | Page background (warm white)  |
| `--color-primary`  | `#8B5E3C` | `bg-primary` / `text-primary` | Primary accent (warm brown)   |
| `--color-secondary`| `#C4714A` | `bg-secondary`                | Secondary accent (terracotta) |
| `--color-ink`      | `#1A1208` | `text-ink`                    | Body text (deep charcoal)     |
| `--color-sand`     | `#E8D5C0` | `bg-sand` / `border-sand`     | Surface / border              |
| `--color-gold`     | `#D4A853` | `text-gold` / `bg-gold`       | Highlight (earthy gold)       |

**Tone:** Premium B2B, warm, human-forward, globally inclusive.

**Compliance badges** (displayed in the footer on every page): GDPR Compliant · SOC2 Type II · ISO Certified.

---

## Pages & Routing

All pages are **lazy-loaded** as separate JS chunks for fast initial load.

| Route                    | Page                | Purpose                                       |
| ------------------------ | ------------------- | --------------------------------------------- |
| `/`                      | Home                | Hero, What We Do, Why DOC, compliance, CTA    |
| `/how-it-works`          | How It Works        | 3 engine sections (anchor IDs for deep links) |
| `/about`                 | About               | Founder story, mission, stats                 |
| `/careers`               | Careers             | Expandable job cards                          |
| `/register-gig-worker`   | Register Gig Worker | DOC App registration funnel                   |
| `/privacy-policy`        | Privacy Policy      | GDPR, SOC2, ISO, data handling                |
| `/terms`                 | Terms               | Services, IP, payment, SLA, jurisdiction      |
| `*`                      | NotFound            | 404 fallback                                  |

Anchor links supported on `/how-it-works`:

- `#data-generation`
- `#data-annotation`
- `#quality-check`

---

## Available Scripts

| Script            | Purpose                                            |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Start Vite dev server with HMR (port 5173)         |
| `npm run build`   | Type-check then produce optimized production build |
| `npm run preview` | Serve the `dist/` build locally (port 4173)        |
| `npm run lint`    | Run ESLint across the source tree                  |

---

## Branch Naming Strategy

All work happens on a feature branch. **Direct commits to `main` are blocked** — every change must come in via a Pull Request.

### Required format

```
<type>/<short-kebab-description>
```

### Allowed types

| Type        | When to use                                              | Example                              |
| ----------- | -------------------------------------------------------- | ------------------------------------ |
| `feature`   | New page, section, component, or capability              | `feature/careers-filter`             |
| `fix`       | Bug fix in existing functionality                        | `fix/mobile-menu-overflow`           |
| `hotfix`    | Urgent production fix that bypasses normal cadence       | `hotfix/broken-cta-link`             |
| `chore`     | Dependency bumps, tooling, config tweaks                 | `chore/bump-vite`                    |
| `docs`      | Documentation only                                       | `docs/update-readme`                 |
| `refactor`  | Restructuring without behavior change                    | `refactor/extract-job-card`          |
| `test`      | Adding or updating tests                                 | `test/add-cookie-banner-spec`        |
| `ci`        | CI/CD workflow or pipeline changes                       | `ci/add-lighthouse-check`            |

### Rules

- Lowercase only. Words separated by single hyphens (`-`).
- No underscores, spaces, slashes inside the description, or trailing hyphens.
- Description should be short (~2–5 words) and specific.

### Examples

✅ Valid

```
feature/about-page-stats
fix/header-z-index
chore/upgrade-react-router
docs/add-deploy-section
hotfix/google-form-url
```

❌ Invalid

```
my-branch                       # missing type prefix
feature_careers_page            # underscores not allowed
Feature/CareersPage             # uppercase / not kebab-case
fix/                            # missing description
feature/this-is-a-very-long-description-of-everything   # too verbose
main                            # protected — direct work not allowed
```

---

## Pull Request Workflow

```bash
# 1. Sync local main with remote
git checkout main
git pull origin main

# 2. Create a properly named branch
git checkout -b feature/<short-description>

# 3. Make your changes, commit in logical chunks
git add <files>
git commit -m "feat: short, imperative summary

Optional body explaining the *why* of the change."

# 4. Validate locally before pushing
npm run lint
npm run build

# 5. Push and open a PR
git push -u origin feature/<short-description>
gh pr create --base main --fill
```

### PR Checklist

Before requesting review, confirm:

- [ ] Branch follows the naming convention (see above)
- [ ] `npm run build` succeeds with no TypeScript errors
- [ ] `npm run lint` passes with no errors
- [ ] You've previewed the change with `npm run preview` and walked the affected pages
- [ ] No new hard-coded brand colors — uses tokens from `src/index.css`
- [ ] Any new placeholders are marked with `// PLACEHOLDER` comments
- [ ] Mobile layout verified (< 1024px breakpoint)
- [ ] PR description explains **what changed** and **why**
- [ ] PR is targeted at `main` (not another feature branch, unless intentionally stacked)

### PR Title Convention

Use [Conventional Commits](https://www.conventionalcommits.org) style:

```
<type>: <imperative summary>
```

Examples:

- `feat: add filter chips to careers page`
- `fix: prevent header overlap on iOS Safari`
- `docs: document branch naming strategy`
- `chore: bump framer-motion to 12.x`

### Merge Strategy

- **Squash and merge** is preferred — keeps `main` linear and readable.
- Delete the branch after merge (the GitHub UI offers this automatically).
- Never force-push to `main`. Never rewrite `main` history.

---

## Branch Name Enforcement

Two layers of enforcement keep `main` clean:

### 1. Server-side: GitHub Actions (required)

[`.github/workflows/branch-name-check.yml`](.github/workflows/branch-name-check.yml) runs on every PR targeting `main` and **fails the check** if the head branch does not match the allowed pattern. A failing check blocks merge when branch protection is enabled.

**Recommended GitHub branch protection settings for `main`:**

1. Go to **Settings → Branches → Add rule** for `main`.
2. Enable:
   - ✅ **Require a pull request before merging**
   - ✅ **Require status checks to pass before merging** → select `Validate branch name targeting main`
   - ✅ **Require branches to be up to date before merging**
   - ✅ **Do not allow bypassing the above settings**
   - ✅ **Restrict who can push to matching branches** (no direct pushes)

### 2. Client-side: optional local pre-push hook

A pre-push Git hook gives you immediate feedback before you push (instead of waiting for CI to fail). Install once per clone:

```bash
bash scripts/install-git-hooks.sh
```

This installs `.git/hooks/pre-push` which:

- Blocks pushes from `main` directly.
- Rejects pushes from branches that don't match the naming convention.

The hook is local-only and not committed — each contributor installs it themselves.

---

## Browser Support

- Chrome / Edge (latest 2)
- Firefox (latest 2)
- Safari 16+
- Mobile Safari iOS 16+, Chrome Android (latest)

Tailwind v4 uses modern CSS (cascade layers, `@property`, `color-mix`). Older browsers (IE, legacy Edge) are unsupported.

---

## Contributing

Internal project. See [Branch Naming Strategy](#branch-naming-strategy) and [Pull Request Workflow](#pull-request-workflow) for the full process.

Quick principles:

- Stick to existing component patterns.
- Use brand tokens (`bg-primary`, `text-ink`, …) — no hard-coded hex values in components.
- Mark every new external URL or env-specific value with a `// PLACEHOLDER` comment.
- Keep PRs focused. One change, one PR.

---

## License

Proprietary. © 2026 DOC Data Operations Company. All rights reserved.

---

## Contact

- **Email:** [uspraveen@icloud.com](mailto:uspraveen@icloud.com)
- **Phone:** +1-971-818-1796
- **Founder:** Praveen — Founder & CEO

🔒 GDPR Compliant · SOC2 Type II · ISO Certified
