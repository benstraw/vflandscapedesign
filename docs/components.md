# Components

All components live in `src/components/`. Each is a standalone `.astro` file with no props — all content is static and defined in the component itself.

---

## Layout.astro (`src/layouts/Layout.astro`)

**Purpose:** HTML shell that wraps every page. Loads fonts, sets global CSS, defines SEO meta tags.

**Key implementation notes:**
- Google Fonts loaded via `<link>` in `<head>` with `display=swap` for performance
- Global `scroll-behavior: smooth` applied via `<style is:global>` — enables smooth-scroll for all anchor links
- SEO meta includes: `title`, `description`, `og:type`, `og:url`, `og:title`, `og:description`, `og:image`, Twitter card tags, and `canonical`
- `og:image` points to `/og-image.jpg` — this file doesn't exist yet; add a real image at `public/og-image.jpg` (1200×630px recommended)
- Accepts `title` and `description` props with sensible defaults

---

## Nav.astro

**Purpose:** Sticky top navigation bar with logo, desktop links, and mobile hamburger menu.

**Key implementation notes:**
- Uses `id="nav"` for the scroll JS to reference
- Desktop links are hidden on mobile (`hidden md:flex`); hamburger shown (`md:hidden`)
- Scroll border: an inline `<script>` toggles `border-gray-200` / `border-transparent` on the nav element when `scrollY > 10`
- Hamburger animation: CSS transforms rotate the three lines into an X when open
- Mobile menu closes automatically when a nav link is clicked (`mobile-link` class)
- **This is the only component using an Astro island pattern (inline client script) for the hamburger toggle.** Scroll border also uses inline script.

---

## Hero.astro

**Purpose:** Full-viewport landing section with background image, headline, subheadline, and CTA button.

**Key implementation notes:**
- Background image is an `<img>` with `object-cover`, not a CSS `background-image`, for better performance and LCP optimization
- Dark overlay uses `bg-black/[0.12]` (12% opacity) — stays within the 10–15% spec
- CTA button links to `#contact` for smooth-scroll to the contact section
- Scroll indicator chevron uses `animate-bounce` from Tailwind
- `fetchpriority="high"` on the hero image prioritizes LCP image loading

---

## Services.astro

**Purpose:** 3-column grid of 6 service offerings, each with an icon, name, and description.

**Key implementation notes:**
- Services data is defined as an array in the frontmatter (`---` block)
- Icons are Heroicons v2 outline SVGs, inlined as strings and rendered with `set:html`
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- No borders, no shadows, no card wrappers — flat editorial layout
- Icons render at `w-7 h-7` in `text-forest`

**Services:**
1. Landscape Design (pencil-square icon)
2. Hardscaping (building icon)
3. Lawn Care & Maintenance (sparkles icon)
4. Planting & Garden Design (sun icon)
5. Irrigation Systems (funnel/filter icon)
6. Seasonal Cleanup (sun icon variant)

---

## About.astro

**Purpose:** Two-column section with a portrait photo on the left and brand copy on the right.

**Key implementation notes:**
- Grid: `grid-cols-1 lg:grid-cols-2` — stacks to single column on mobile (image above text)
- Image is 500px tall on mobile, 620px on desktop (`h-[500px] lg:h-[620px]`)
- Stat block (15+ years, 200+ properties) is separated by a `border-t border-sage/40` divider
- `loading="lazy"` on the image since it's below the fold

---

## ServiceArea.astro

**Purpose:** Section explaining the service geography, with an embedded Google Maps iframe and a tag cloud of served towns.

**Key implementation notes:**
- Background: `bg-sage/10` (10% opacity sage) for subtle section differentiation
- Google Maps iframe uses `loading="lazy"` and `referrerpolicy="no-referrer-when-downgrade"`
- Map has a `grayscale` filter by default that lifts to color on hover (`grayscale hover:grayscale-0`) — editorial, controlled look
- Town tags rendered as an array map; add/remove towns directly in the component's array

---

## Contact.astro

**Purpose:** Contact form that submits to Formspree via `fetch`, with inline success/error states.

**Key implementation notes:**
- Form `action` reads from `import.meta.env.PUBLIC_FORMSPREE_ENDPOINT` with a hardcoded fallback
- Vanilla JS `fetch` intercepts submit — no page redirect, no Formspree redirect page
- Submit button is disabled during submission (`disabled` attribute + dimmed opacity)
- Three DOM states: default, success (`#form-success`), error (`#form-error`)
- Contact details (email + phone) shown below the heading in the left column
- Form fields: Name (required), Email (required), Phone (optional), Message (required)

---

## Footer.astro

**Purpose:** Single-row footer with business name, nav links, and copyright.

**Key implementation notes:**
- Background: `bg-ink` (near-black) for strong visual termination
- Layout: `flex-col md:flex-row` — stacks on mobile, single row on desktop
- Copyright year is hardcoded to `2026` (update annually or make dynamic)
- Nav links in footer repeat the same anchor IDs as the main nav for consistency
