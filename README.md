# vflandscapedesign

Premium single-page marketing website for **Valley Forge Landscape Design** — a high-end residential landscaping business serving the Philadelphia Main Line and Chester County, PA.

Built with Astro (static output) and Tailwind CSS. Deployed on Vercel. Contact form via Formspree. Business email via Zoho Mail.

**Live site:** https://vflandscapedesign.com

---

## Local Development

**Requirements:** Node.js 18+ (run `node -v` to check)

```bash
# 1. Install dependencies
npm install

# 2. Copy the env file
cp .env.example .env

# 3. Start the dev server
npm run dev
# → http://localhost:4321

# 4. Build for production
npm run build
# → output in dist/

# 5. Preview the production build
npm run preview
```

---

## Services Overview

| Service | Purpose | Account / URL |
|---|---|---|
| **Formspree** | Contact form submissions | https://formspree.io/forms/xpqjjwdy/submissions |
| **Vercel** | Hosting + auto-deploy from GitHub | https://vercel.com — log in with the project account |
| **Zoho Mail** | Business email (info@vflandscapedesign.com) | https://mail.zoho.com |
| **Google Maps** | Embedded map in Service Area section | No account needed — static embed |
| **Unsplash** | Placeholder images (swap for real photos) | https://unsplash.com |
| **Google Fonts** | Playfair Display + Inter — loaded from CDN | No account needed |

---

## How to Access Each Service

### Formspree
- URL: https://formspree.io/forms/xpqjjwdy/submissions
- View all contact form submissions here
- Configure notification email, spam filtering, and allowed domains in **Settings**
- See [`docs/forms.md`](docs/forms.md) for full details

### Vercel
- URL: https://vercel.com/dashboard
- The site auto-deploys every time you push to `main` on GitHub
- Add/update env vars under **Settings → Environment Variables**
- See [`docs/deployment.md`](docs/deployment.md) for setup and domain configuration

### Zoho Mail
- Webmail: https://mail.zoho.com
- Log in with `info@vflandscapedesign.com`
- See [`docs/email.md`](docs/email.md) for full DNS and account setup steps

---

## Docs

| File | Contents |
|---|---|
| [`docs/architecture.md`](docs/architecture.md) | Tech stack, file tree, data flow, why no JS framework |
| [`docs/design-system.md`](docs/design-system.md) | Color palette, typography, spacing, design principles |
| [`docs/components.md`](docs/components.md) | Per-component notes, props, JS behavior |
| [`docs/forms.md`](docs/forms.md) | Formspree setup, fetch flow, dashboard settings |
| [`docs/deployment.md`](docs/deployment.md) | Vercel setup, custom domain, build commands |
| [`docs/email.md`](docs/email.md) | Zoho Mail step-by-step: DNS records, SPF, DKIM, IMAP |
| [`docs/content.md`](docs/content.md) | All copy, image URLs, placeholder values to replace |
| [`docs/prompts.md`](docs/prompts.md) | Chronological log of all prompts used to build and modify the site |

---

## Placeholders Matt Needs to Complete

- [ ] **Phone number** — replace `(610) 555-0100` with real number in `src/components/Contact.astro`
- [ ] **OG image** — add a real 1200×630px image at `public/og-image.jpg` for social sharing previews
- [ ] **Hero photo** — swap the Unsplash URL in `src/components/Hero.astro` with a real project photo
- [ ] **About photo** — swap the Unsplash URL in `src/components/About.astro` with a photo of Matt or his work
- [ ] **Stats** — confirm "15+ years" and "200+ properties" in `About.astro` or update to real figures
- [ ] **Formspree notification email** — set to `info@vflandscapedesign.com` in Formspree dashboard settings
- [ ] **Zoho Mail** — complete DNS setup per [`docs/email.md`](docs/email.md) to activate business email
- [ ] **Google Maps** — regenerate embed URL from maps.google.com per [`docs/content.md`](docs/content.md) if the current embed doesn't load

---

## Project Structure

```
src/
├── layouts/Layout.astro      — HTML shell, fonts, SEO meta, global CSS
├── components/
│   ├── Nav.astro             — Sticky nav with hamburger menu
│   ├── Hero.astro            — Full-viewport hero section
│   ├── Services.astro        — 6-service card grid
│   ├── About.astro           — 2-col about section
│   ├── ServiceArea.astro     — Google Maps + town tags
│   ├── Contact.astro         — Formspree contact form
│   └── Footer.astro          — Single-row footer
└── pages/
    └── index.astro           — Assembles all components
```
