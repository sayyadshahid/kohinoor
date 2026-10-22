# Kohinoor Atelier

Bespoke tailoring studio website — precision alterations, ladies suit stitching and hand zardozi embroidery.

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS v4 via PostCSS (design tokens live in `app/globals.css` under `@theme`)
- Fraunces + Inter, self-hosted with `next/font/local` (`app/fonts/`)
- lucide-react icons
- Oxlint

## Design system

The palette is strictly two-hue: **mocha brown** (primary) and **platinum silver** (secondary/metallic).
All colours are defined as tokens in `app/globals.css` — components must not use raw hex values.

| Token group | Purpose |
| --- | --- |
| `--color-mocha-*` | Brand ramp, dark surfaces, headings |
| `--color-platinum-*` | Cool metallic ramp, borders, ornament |
| `--color-canvas` / `canvas-alt` | Page + section backgrounds |
| `--color-surface` | Cards and panels |
| `--color-ink` / `ink-soft` / `ink-muted` | Text hierarchy |
| `--color-brand` / `brand-hover` / `brand-soft` | Buttons and accents |
| `--color-line` / `line-strong` | Hairlines and dividers |
| `--color-whatsapp` | WhatsApp CTA (functional accent) |
| `--color-danger` | Form validation errors |

Typography: Fraunces (serif display) + Inter (body). Shadows: `shadow-card`, `shadow-lift`, `shadow-deep`.

## Editing content

Phone number, address, hours and the map query all live in the `SITE` object at the top of `src/App.jsx` — change them there and they flow through the page. The same values are mirrored in `app/layout.jsx` for the Open Graph metadata and the `ClothingStore` JSON-LD block, so update both.

Page title, description, Open Graph/Twitter tags and the canonical `metadataBase` are exported from `app/layout.jsx` as well — replace `SITE_URL` with the real domain before deploying.

## Commands

```bash
npm install
npm run dev      # start the dev server (http://localhost:3000)
npm run lint     # oxlint
npm run build    # production build (.next/)
npm start        # serve the production build
```

## Architecture

The page is composed from small, single-purpose components. State lives as close to where it
is used as possible; the only shared state (the fitting-inquiry form) sits in a context.

```
app/
  layout.jsx            document shell, metadata, fonts, JSON-LD
  page.jsx              route entry → src/views/HomePage
  globals.css           Tailwind v4 theme tokens + utilities
  icon.svg              favicon (Next.js file convention)
  fonts/                self-hosted Fraunces / Inter woff2

src/
  views/
    HomePage.jsx        composition root (Header → sections → Footer)
  config/
    site.js             SITE, waLink, nav, section ids, map URLs
  data/
    services.js         service swatch cards
    gallery.js          gallery items + filters
    alterations.js      before/after case studies
    testimonials.js     quotes
    content.js          stats, specialties, form options, footer links
  context/
    booking-context.js  context + useBooking hook
    BookingProvider.jsx form state, validation, service pre-fill
  hooks/
    useActiveSection.js useScrollProgress.js useScrolledPast.js
    useScrollLock.js    useEscapeKey.js
  lib/
    scroll.js           scrollToTop / scrollToSection helpers
  components/
    brand/              Logo, StitchedThreadLine, NeedleAndThreadIcon
    ui/                 Button, Badge, Card, Section, SectionHeading,
                        Reveal, Eyebrow, IconTile, CheckList, StatList,
                        StarRating, ColumnsIcon
    layout/             Header, DesktopNav, MobileNav, ReadingProgress,
                        Footer, FloatingActions
    sections/           Hero, Services, Alterations, Gallery, About,
                        Testimonials, Contact
    services/           ServiceCard
    alterations/        BeforeAfterSlider, SideBySideCompare,
                        ToggleCompare, ViewModeToggle, CaseTabs,
                        TransformationDetails
    gallery/            GalleryCard, Lightbox
    contact/            ContactForm, ContactDetails, FormControls
    testimonials/       TestimonialCard
```

### Conventions

- **Content is data.** Copy for services, gallery, case studies and testimonials lives in
  `src/data/`; components only render it.
- **Design tokens only.** Colours, fonts, shadows and animations come from `@theme` in
  `app/globals.css` — no raw hex values in components.
- **Reusable primitives.** Buttons, badges, cards, headings, check lists and stat groups are
  shared components; new UI should compose them rather than duplicate class strings.
- **Local state first.** Filters, lightbox, compare modes and navigation state live inside the
  component that owns them. Only the inquiry form is lifted into `BookingProvider` so service
  CTAs can pre-fill it from anywhere.
- **Client boundary.** `HomePage` is the single `'use client'` entry point; everything it
  imports is part of the client tree, so leaf files stay directive-free.
