# Prompts Log

A chronological record of prompts used to build and evolve this project. Add a new entry here whenever a significant prompt is used with Claude Code.

---

## 2026-02-19 — Initial site build + docs

**Prompt:**
> Implement the following plan:
> # Plan: vflandscapedesign — Full Site Build + Docs
>
> Building a complete Astro + Tailwind single-page marketing website for Matt's landscaping business
> (domain: vflandscapedesign.com, email: info@vflandscapedesign.com) from a blank repo. The user
> wants everything documented in a /docs folder as it's built, plus a comprehensive README.md.

**What was built:**
- Full project scaffold: `package.json`, `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`, `.gitignore`, `.env.example`, `vercel.json`, `public/favicon.svg`
- `src/layouts/Layout.astro` — HTML shell with Google Fonts, SEO meta, global CSS
- 7 components: `Nav.astro`, `Hero.astro`, `Services.astro`, `About.astro`, `ServiceArea.astro`, `Contact.astro`, `Footer.astro`
- `src/pages/index.astro` — assembles all components
- 7 docs files: `architecture.md`, `design-system.md`, `components.md`, `forms.md`, `deployment.md`, `email.md`, `content.md`
- `README.md` — dev setup, services table, placeholder checklist
- Build verified: `astro build` → 1 page, 0 errors

---

## 2026-02-19 — Prompts log + CLAUDE.md update

**Prompt:**
> Can you create a prompts file and keep that updated as well. add that to claude.md to keep prompts file up to date.

**What was built:**
- `docs/prompts.md` — this file; chronological log of all project prompts
- `CLAUDE.md` — added instruction #11 to keep `docs/prompts.md` updated after each session
