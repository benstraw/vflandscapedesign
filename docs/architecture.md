# Architecture

## Overview

The site is a **static single-page marketing website** built with Astro and Tailwind CSS, deployed to Vercel. There is no backend, no database, and no JavaScript framework — just static HTML, CSS, and a small amount of vanilla JS for interactive UI elements.

## Tech Stack

| Layer | Technology | Why |
|---|---|---|
| Framework | Astro 4.x | Zero-JS by default, component model, great static output |
| Styling | Tailwind CSS 3.x | Utility-first, no unused CSS in prod via purge |
| Forms | Formspree | No-backend form handling with spam filtering |
| Hosting | Vercel | Free tier, auto-deploy from GitHub, custom domains |
| Fonts | Google Fonts | Playfair Display + Inter, self-hosted by Google CDN |
| Images | Unsplash | Placeholder images; swap for real photos when ready |
| Maps | Google Maps Embed | No API key required for basic embed |

## Static Output

`astro.config.mjs` sets `output: 'static'`, which means:
- `astro build` produces a `dist/` folder of pure HTML/CSS/JS
- No Node.js server required at runtime
- Vercel serves files directly from CDN edge nodes

## File Tree

```
/
├── astro.config.mjs          — Astro config (output: static, Tailwind integration)
├── tailwind.config.mjs       — Brand colors, custom fonts, content paths
├── tsconfig.json             — Extends astro/tsconfigs/strict
├── package.json              — Dependencies and npm scripts
├── vercel.json               — Minimal Vercel config (framework: astro)
├── .env.example              — PUBLIC_FORMSPREE_ENDPOINT template
├── .gitignore
├── public/
│   └── favicon.svg           — Brand leaf SVG icon
├── src/
│   ├── layouts/
│   │   └── Layout.astro      — HTML shell: head, fonts, global CSS, SEO meta
│   ├── components/
│   │   ├── Nav.astro         — Sticky nav, hamburger menu (inline JS)
│   │   ├── Hero.astro        — Full-viewport hero section
│   │   ├── Services.astro    — 6-card services grid
│   │   ├── About.astro       — 2-col about section
│   │   ├── ServiceArea.astro — Google Maps embed + town tags
│   │   ├── Contact.astro     — Formspree form (fetch-based, inline JS)
│   │   └── Footer.astro      — Single-row footer
│   └── pages/
│       └── index.astro       — Assembles all components into one page
└── docs/                     — Project documentation
    ├── architecture.md       — This file
    ├── design-system.md      — Colors, typography, spacing
    ├── components.md         — Per-component notes
    ├── forms.md              — Formspree setup and configuration
    ├── deployment.md         — Vercel deploy steps
    ├── email.md              — Zoho Mail setup
    └── content.md            — All copy and placeholder content
```

## Component Data Flow

All components are fully static — they receive no dynamic props at runtime. Data is defined in component frontmatter (`---` blocks) or hardcoded in markup. The only runtime interactivity is:

1. **Nav.astro** — Inline `<script>` adds a border on scroll and toggles mobile menu
2. **Contact.astro** — Inline `<script>` intercepts form submit, POSTs to Formspree via `fetch`, shows success/error message

## Why No JavaScript Framework

The CLAUDE.md spec explicitly forbids React/Vue/Svelte. Astro's island architecture allows selective hydration, but this site only needs two tiny vanilla JS behaviours (scroll listener, fetch). Shipping no framework JS means:
- Faster initial page load
- No hydration overhead
- Simpler mental model for a non-JS-developer maintainer
