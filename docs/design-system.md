# Design System

## Color Palette

| Name | Hex | Tailwind Class | Usage |
|---|---|---|---|
| warm-white | `#FAFAF8` | `bg-warm-white` | Page background, nav background |
| forest | `#3D6B4F` | `text-forest`, `bg-forest` | Primary brand color, CTAs, icons, labels |
| sage | `#A8B89A` | `text-sage`, `bg-sage` | Accents, dividers, service area bg tint |
| earth | `#C4A882` | `text-earth`, `bg-earth` | CTA hover state, warm accents |
| ink | `#1A1A1A` | `text-ink`, `bg-ink` | Body text, headings, footer background |

All custom colors are registered in `tailwind.config.mjs` under `theme.extend.colors`.

### Usage Rules
- **Never use gradients.** Flat backgrounds only.
- **Never use drop-shadows or card borders.** Editorial, flat layout.
- Use `forest` for all interactive elements (links on hover, form focus borders).
- Use `ink/70` or `ink/60` for secondary/tertiary text (Tailwind opacity modifier).
- The `sage/10` tint on the Service Area section provides subtle section differentiation without a hard color break.

## Typography

### Fonts
Both fonts are loaded via Google Fonts in `Layout.astro`:
```
Playfair Display — weights 400, 700
Inter — weights 400, 500
```

### Font Roles

| Class | Font | Weight | Usage |
|---|---|---|---|
| `font-display` | Playfair Display | 400/700 | All headings (h1–h3), logo |
| `font-body` | Inter | 400/500 | Body copy, labels, nav links, buttons |

### Heading Hierarchy
- **H1 (Hero):** `text-5xl md:text-6xl lg:text-7xl font-bold font-display`
- **H2 (Section headings):** `text-4xl lg:text-5xl font-bold font-display`
- **H3 (Service cards, etc.):** `text-xl font-bold font-display`
- **Section labels (eyebrow text):** `text-sm font-medium tracking-widest uppercase font-body text-forest`

## Spacing Conventions

- **Section vertical padding:** `py-24 lg:py-32` (96px / 128px)
- **Max content width:** `max-w-7xl mx-auto` (1280px centered)
- **Horizontal padding:** `px-6 lg:px-8` (24px / 32px)
- **Component gaps (desktop):** `gap-16 lg:gap-24` for 2-col layouts
- **Card grid gaps:** `gap-12 lg:gap-16` for 3-col grids

## Responsive Breakpoints

Tailwind's default breakpoints apply:

| Breakpoint | Min width | Layout behavior |
|---|---|---|
| Default (mobile) | 375px | Single column; hamburger nav |
| `md:` | 768px | 2-col grid unlocks; desktop nav links appear |
| `lg:` | 1024px | 3-col services grid; larger type sizes |

## Design Principles

1. **No gradients** — backgrounds are flat, solid colors only
2. **No drop-shadows** — depth is created through whitespace, not shadows
3. **No card borders** — service items float without bounding boxes
4. **Generous whitespace** — sections breathe; content is never crowded
5. **Confident typography** — large headings, clean body text
6. **Flat editorial feel** — inspired by high-end print design, not SaaS UIs
