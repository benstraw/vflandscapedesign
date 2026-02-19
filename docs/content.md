# Content Reference

All copy, images, and placeholder values in one place. Edit the relevant component file when updating.

---

## Placeholder Values to Replace

| Placeholder | Current Value | Replace With | Where |
|---|---|---|---|
| Email | `info@vflandscapedesign.com` | Real inbox (already correct) | `Contact.astro`, `Footer.astro` (if added), `email.md` |
| Phone | `(610) 555-0100` | Matt's real phone | `Contact.astro` |
| Domain | `vflandscapedesign.com` | Already set | `Layout.astro` (canonical, og:url) |
| `og:image` | `/og-image.jpg` (missing file) | Real 1200×630px image in `public/` | `Layout.astro` |
| Map embed | Malvern PA embed URL | Regenerate from maps.google.com if needed | `ServiceArea.astro` |
| Stats | "15+ years", "200+ properties" | Real figures if different | `About.astro` |

---

## Section Copy

### Hero
- **Headline:** `Crafting Exceptional Outdoor Spaces`
- **Subheadline:** `Premium landscape design and care for discerning homeowners in the Philadelphia Main Line and Chester County.`
- **CTA:** `Request a Consultation`

### Services
1. **Landscape Design** — Custom design plans tailored to your property and lifestyle.
2. **Hardscaping** — Patios, walkways, retaining walls, and outdoor living spaces built to last.
3. **Lawn Care & Maintenance** — Seasonal programs to keep your property looking immaculate year-round.
4. **Planting & Garden Design** — Curated plant selections for year-round color and texture.
5. **Irrigation Systems** — Efficient, smart irrigation designed to protect your investment.
6. **Seasonal Cleanup** — Spring and fall programs to prepare your landscape for every season.

### About
- **Heading:** `Built on Craftsmanship`
- **Body:** matty-nice landscaping was founded by Matt with a simple belief: great landscapes require great attention. We work exclusively with homeowners who value quality over shortcuts. Every project is personally managed from the first site visit through final installation and ongoing care.
- **Tag:** Serving the Philadelphia Main Line and Chester County, PA.

### Service Area
- **Heading:** `Where We Work`
- **Subtext:** We proudly serve homeowners across the Philadelphia Main Line, Chester County, and surrounding communities including Malvern, Wayne, Berwyn, Paoli, Devon, and Newtown Square.
- **Town tags:** Malvern, Wayne, Berwyn, Paoli, Devon, Newtown Square, Exton, Villanova, Haverford, Bryn Mawr

### Contact
- **Heading:** `Let's Talk About Your Project`
- **Subtext:** We typically respond within one business day.
- **Email:** info@vflandscapedesign.com
- **Phone:** (610) 555-0100

### Footer
- **Copyright:** © 2026 matty-nice landscaping. All rights reserved.

---

## Images

### Hero Background
- **URL:** `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80`
- **Alt:** `Lush green estate garden with manicured lawn and mature trees`
- **Swap:** Replace with a high-resolution photo of one of Matt's actual projects. Aim for 1920px wide, landscape orientation, well-lit, showing the full scope of a property.

### About Portrait
- **URL:** `https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80`
- **Alt:** `Landscaper working in a lush garden with natural light`
- **Swap:** Replace with a photo of Matt working on-site, or a close-up of a beautifully planted garden. Portrait (tall) orientation works best.

### How to Swap Images
1. Download or optimize your real photo (tools: Squoosh, TinyPNG, or Lightroom export)
2. Place it in the `public/` folder (e.g., `public/hero.jpg`)
3. Update the `src` attribute in the relevant component to `/hero.jpg`
4. Update the `alt` attribute to describe the real photo

---

## Google Maps Embed

Current embed URL in `ServiceArea.astro`:
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97942.07815743063!2d-75.61304684179688!3d40.03677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6e2900019a565%3A0x887d6a34f58d335f!2sMalvern%2C%20PA%2019355!5e0!3m2!1sen!2sus!4v1708000000000
```

**To regenerate:**
1. Go to maps.google.com
2. Search for "Malvern, PA 19355"
3. Click **Share** → **Embed a map** → **Copy HTML**
4. Extract just the `src="..."` URL from the `<iframe>` tag
5. Replace the `src` value in `ServiceArea.astro`

---

## SEO Meta (Layout.astro)

- **Title:** `matty-nice landscaping — Premium Landscape Design, Philadelphia Main Line & Chester County`
- **Description:** `Premium landscape design, hardscaping, and lawn care for discerning homeowners in the Philadelphia Main Line and Chester County, PA.`
- **og:image:** `/og-image.jpg` — **create this file** at `public/og-image.jpg` (1200×630px, JPG)
