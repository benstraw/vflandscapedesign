# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# CLAUDE.md — Project Brief: Matt's Landscaping Business Website

## Project Overview

Build a high-end, single-page marketing website for a premium landscaping business serving the Philadelphia / Malvern, PA area. The site will be deployed on **Vercel** with a custom domain and **Zoho Mail Free** for business email.

The business name is **matty-nice landscaping**. The owner is Matt.

---

## Stack

- **Framework:** Astro (latest stable)
- **Styling:** Tailwind CSS (via `@astrojs/tailwind`)
- **Deployment target:** Vercel (static output, `output: 'static'` in astro.config)
- **Forms:** Netlify Forms won't work on Vercel — use **Formspree** (free tier) for the contact form. Form ID: `xpqjjwdy` (endpoint: `https://formspree.io/f/xpqjjwdy`).
- **Maps:** Embed a static Google Maps iframe centered on Malvern, PA 19355. No API key needed for embed.
- **Images:** Use placeholder images from `https://images.unsplash.com` with a landscaping/nature theme. Add `alt` text for all images.
- **Font:** Use Google Fonts — `Playfair Display` for headings, `Inter` for body copy.

---

## Aesthetic & Design Direction

- **Vibe:** Clean, minimal, modern luxury. Think high-end residential landscaping, not mass-market lawn care.
- **Color palette:**
  - Background: `#FAFAF8` (warm white)
  - Primary green: `#3D6B4F` (deep forest green)
  - Accent: `#A8B89A` (sage)
  - Earth tone: `#C4A882` (warm tan)
  - Text: `#1A1A1A`
- **Whitespace:** Generous. Let sections breathe.
- **Typography:** Large, confident headings. Clean body text. No decorative clutter.
- **No gradients, no drop shadows, no card borders** — flat, editorial feel.
- **Mobile-first** responsive layout.

---

## Site Structure (Single Page)

All sections are on `index.astro`. Use smooth scroll anchors (`#section-id`).

### 1. Nav
- Logo placeholder (text: `matty-nice landscaping`) left-aligned
- Links: Services · About · Service Area · Contact
- Sticky, minimal, white background with a subtle bottom border on scroll
- Mobile: hamburger menu

### 2. Hero
- Full-viewport height
- Large background image (Unsplash: lush green estate garden, bright daylight)
- Headline: `Crafting Exceptional Outdoor Spaces`
- Subheadline: `Premium landscape design and care for discerning homeowners in the Philadelphia Main Line and Chester County.`
- CTA button: `Request a Consultation` → scrolls to `#contact`
- Overlay: very light dark overlay (10–15%) for text legibility

### 3. Services
- Section ID: `#services`
- Heading: `What We Do`
- 3-column grid on desktop, stacked on mobile
- Six placeholder services (use icons from a free icon set like Heroicons or inline SVG):
  1. **Landscape Design** — Custom design plans tailored to your property and lifestyle.
  2. **Hardscaping** — Patios, walkways, retaining walls, and outdoor living spaces built to last.
  3. **Lawn Care & Maintenance** — Seasonal programs to keep your property looking immaculate year-round.
  4. **Planting & Garden Design** — Curated plant selections for year-round color and texture.
  5. **Irrigation Systems** — Efficient, smart irrigation designed to protect your investment.
  6. **Seasonal Cleanup** — Spring and fall programs to prepare your landscape for every season.

### 4. About
- Section ID: `#about`
- Two-column layout: left is a tall portrait-style image (Unsplash: person in field or garden, natural light), right is text
- Heading: `Built on Craftsmanship`
- Body: `matty-nice landscaping was founded by Matt with a simple belief: great landscapes require great attention. We work exclusively with homeowners who value quality over shortcuts. Every project is personally managed from the first site visit through final installation and ongoing care.`
- Secondary line: `Serving the Philadelphia Main Line and Chester County, PA.`

### 5. Service Area
- Section ID: `#service-area`
- Heading: `Where We Work`
- Subtext: `We proudly serve homeowners across the Philadelphia Main Line, Chester County, and surrounding communities including Malvern, Wayne, Berwyn, Paoli, Devon, and Newtown Square.`
- Embedded Google Maps iframe centered on Malvern, PA — full width, ~400px tall
- Use this embed URL: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48970.!2d-75.5135!3d40.0368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6e0b0b0b0b0b0%3A0x0!2sMalvern%2C%20PA!5e0!3m2!1sen!2sus!4v1`
  - Note: replace with a working embed URL from maps.google.com for Malvern, PA 19355

### 6. Contact
- Section ID: `#contact`
- Heading: `Let's Talk About Your Project`
- Subtext: `We typically respond within one business day.`
- Simple form: Name, Email, Phone (optional), Message, Submit button
- Form action: Formspree endpoint — use env var `PUBLIC_FORMSPREE_ENDPOINT` or hardcode `https://formspree.io/f/xpqjjwdy`
- Below form: display placeholder email `hello@[businessdomain].com` and phone `(610) 555-0100`

### 7. Footer
- Logo / business name left
- Nav links centered
- Right: `© 2025 matty-nice landscaping. All rights reserved.`
- Simple, one-row, minimal

---

## File Structure to Create

```
/
├── CLAUDE.md                  ← this file
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
├── .env.example               ← PUBLIC_FORMSPREE_ENDPOINT=
├── .gitignore
├── vercel.json                ← minimal, Astro handles routing
├── public/
│   └── favicon.svg
└── src/
    ├── layouts/
    │   └── Layout.astro       ← base HTML shell, head, fonts
    ├── components/
    │   ├── Nav.astro
    │   ├── Hero.astro
    │   ├── Services.astro
    │   ├── About.astro
    │   ├── ServiceArea.astro
    │   ├── Contact.astro
    │   └── Footer.astro
    └── pages/
        └── index.astro        ← imports and assembles all components
```

---

## Deployment Notes (for later)

### Vercel
1. Push repo to GitHub
2. Import project in Vercel dashboard — it will auto-detect Astro
3. Add env var: `PUBLIC_FORMSPREE_ENDPOINT` in Vercel project settings
4. Add custom domain in Vercel → update DNS at your registrar to point to Vercel's nameservers or add A/CNAME records as instructed

### Zoho Mail Free Setup (after domain DNS is on Vercel or Cloudflare)
1. Sign up at zoho.com/mail → choose Free plan → add your domain
2. Verify domain ownership via TXT record
3. Add Zoho MX records to your DNS
4. Create mailbox: `hello@[yourdomain].com`
5. Configure SPF + DKIM records Zoho provides (important for deliverability)
6. Use Zoho Mail app or webmail — or set up IMAP in Apple Mail / Outlook

---

## Placeholder Reminders (Matt to fill in later)

- Business name is `matty-nice landscaping`
- `[businessdomain].com` — actual domain
- `hello@[businessdomain].com` — real email
- `(610) 555-0100` — real phone number
- Formspree endpoint is `https://formspree.io/f/xpqjjwdy` (already configured)
- Replace Unsplash images with real photos of Matt's work
- Google Maps embed — generate a real embed from maps.google.com

---

## Instructions for Claude Code

When entering plan mode, Claude Code should:

1. Scaffold the full Astro + Tailwind project from scratch using the file structure above
2. Build each section as a standalone `.astro` component
3. Use the exact color palette and typography defined above
4. Use Heroicons (inline SVG) for service icons — no external icon library dependency
5. Make the site fully responsive — test mentally for 375px, 768px, 1280px breakpoints
6. Ensure the contact form posts to Formspree and shows a success/error state
7. Add basic SEO meta tags in `Layout.astro`: title, description, og:image placeholder
8. Add smooth scroll behavior globally via CSS
9. Do NOT use any JavaScript frameworks or React — Astro islands only where needed (hamburger nav toggle)
10. Validate that `astro build` would succeed before finishing
11. After completing any significant task or responding to any non-trivial prompt, append a new dated entry to `docs/prompts.md` recording the prompt text and a brief summary of what was changed or built
