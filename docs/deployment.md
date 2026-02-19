# Deployment

## Overview

The site deploys automatically to **Vercel** from GitHub. Every push to the `main` branch triggers a new production deployment.

## Initial Vercel Setup

1. **Push repo to GitHub** — make sure `dist/` is in `.gitignore` (it is)
2. Go to https://vercel.com/new
3. Click **Import Git Repository** → select the `vflandscapedesign` repo
4. Vercel auto-detects Astro and sets:
   - **Framework Preset:** Astro
   - **Build Command:** `astro build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**

## Environment Variables

In the Vercel project dashboard → **Settings → Environment Variables**, add:

| Variable | Value |
|---|---|
| `PUBLIC_FORMSPREE_ENDPOINT` | `https://formspree.io/f/xpqjjwdy` |

Set the environment to **Production** (and optionally Preview + Development).

## Custom Domain

1. In Vercel dashboard → **Settings → Domains**
2. Add `vflandscapedesign.com` and `www.vflandscapedesign.com`
3. Vercel provides DNS records to add at your registrar:
   - **Root domain (`@`):** Add an **A record** pointing to `76.76.21.21`
   - **www subdomain:** Add a **CNAME record** pointing to `cname.vercel-dns.com`
4. DNS propagation takes 5–60 minutes typically

**If using Cloudflare for DNS:** Set the CNAME proxy status to **DNS only** (grey cloud), not proxied, to avoid SSL conflicts with Vercel.

## Build Commands

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server at `http://localhost:4321` |
| `npm run build` | Builds static site to `dist/` |
| `npm run preview` | Previews the `dist/` build locally |

## Triggering a Redeploy

- **Automatic:** Push any commit to `main` on GitHub → Vercel deploys within ~60 seconds
- **Manual:** Vercel dashboard → **Deployments** → click the three-dot menu on any deployment → **Redeploy**
- **Force rebuild:** Useful if env vars changed without a code change — use manual redeploy with "Use existing build cache: off"

## Preview Deployments

Every PR or branch push gets a unique preview URL (e.g., `vflandscapedesign-abc123-matts.vercel.app`). Use these to review changes before merging to `main`.

## Vercel Analytics

**Status: installed and enabled.**

`@vercel/analytics` and `@vercel/speed-insights` are both installed and the components are injected in `Layout.astro`. The Analytics dashboard is active at:
`https://vercel.com/benstraws-projects/vflandscapedesign/analytics`

Speed Insights is installed in the code but requires a one-click Enable in the Vercel dashboard → **Speed Insights** tab. Note: Hobby tier allows Speed Insights on only one project at a time.

Data appears in the dashboards in real-time as visitors hit the site.
