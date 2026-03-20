

## Problem

Your GitHub repository contains the **source code** (React + Vite), but GitHub Pages needs the **built output** (static HTML/CSS/JS). Without a build workflow, GitHub Pages either shows nothing or a default page.

## Solution

Two files need to be created/updated:

### 1. GitHub Actions Deploy Workflow
Create `.github/workflows/deploy.yml` that:
- Triggers on push to `main`
- Installs dependencies with `bun`
- Runs `vite build`
- Deploys the `dist/` folder to GitHub Pages using the official `actions/deploy-pages` action

### 2. Vite Config Update
No `base` change needed since you're using a custom domain (`travelexpresso.in` via the CNAME file). The CNAME file will be copied into `dist/` automatically since it's in `public/` — actually, it's in the root. We need to **move the CNAME file into `public/`** so it gets included in the build output.

### 3. Fix forwardRef warnings
The console still shows ref warnings for `Layout` and a component inside `Header`. These need `forwardRef` wrapping to work properly with `framer-motion`.

## Steps

1. **Move `CNAME` to `public/CNAME`** — ensures it's included in the build output for GitHub Pages custom domain
2. **Create `.github/workflows/deploy.yml`** — GitHub Actions workflow to build with Vite and deploy to GitHub Pages
3. **Fix remaining forwardRef warnings** in `Layout.tsx` and `Header.tsx`

## After Implementation

On GitHub, go to **Settings → Pages → Source** and select **"GitHub Actions"** (not "Deploy from a branch"). Then push — the workflow will automatically build and deploy your site.

