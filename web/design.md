# SIARIALABS — Landing Page V.2.1 (Vite + React + Tailwind v4)

This document describes how the Stitch screen **Landing Page V.2.1** (export title: *SIARIA LABS — Unified Neon Green Home*, project *SIARIA LABS Hero Section*) maps onto this **Vite** app: tokens, scroll-reveal behavior, and file layout. **V.2.1** removes one top-nav tab versus V.2: only **HOME** and **SOLUTIONS** remain before the CTA.

## Tech stack

- **Vite** — dev server and production build (`vite.config.ts`).
- **React** — UI (`src/App.tsx`, `src/components/**`).
- **Tailwind CSS v4** — `@import "tailwindcss"` + `@theme { }` in `src/index.css`.
- **Path alias `@/`** — `src/` (see `vite.config.ts`, `tsconfig.app.json`).
- **React Router** — `/` = landing (Landing Page V.2.1), `/solutions` = **Solutions Page V.2** (Stitch). `TopNavBar` uses `Link` + `useLocation()` for active states and layout (landing vs solutions header).

## Directory layout

```text
web/
├── index.html
├── public/
├── design.md
├── vite.config.ts
├── tsconfig*.json
└── src/
    ├── main.tsx              # BrowserRouter
    ├── App.tsx               # Routes: /, /solutions
    ├── pages/
    │   ├── HomePage.tsx
    │   └── SolutionsPage.tsx
    ├── index.css
    ├── hooks/
    │   └── useRevealOnScroll.ts   # IntersectionObserver → .reveal.active
    ├── constants/
    │   ├── assets.ts
    │   └── solutionsAssets.ts
    └── components/
        ├── layout/
        │   ├── TopNavBar.tsx
        │   └── Footer.tsx
        ├── sections/
        │   ├── HeroSection.tsx
        │   ├── ManifestoSection.tsx
        │   ├── CapabilitiesAccordionSection.tsx
        │   ├── CapabilitiesGridSection.tsx
        │   └── CtaSection.tsx
        └── ui/
            ├── NeonPulseButton.tsx  # Bordered neon + pulse (primary CTAs)
            ├── MaterialIcon.tsx
            └── RevealSection.tsx / RevealDiv.tsx
```

## Design tokens (Tailwind v4)

Semantic colors, radii, and font stacks live in `@theme` in `src/index.css`.

- **Brand highlight**: Stitch V.2 uses **`#72FF70`** (`--color-brand-highlight`) for accents, pulses, and accordion neon (not the older Streamlined `#4ade80`).
- **Motion**: `.reveal` / `.reveal.active` (scroll fade-up) and `.pulse-animation` (`@keyframes pulse-glow`) mirror the exported HTML.
- **Accordions**: Extra glow on open state via `.accordion-indicator` and `details[open] .group-open\:bg-brand-highlight` in `@layer components`.

Custom classes (`.liquid-metal-gradient`, `.flowchart-watermark`, etc.) remain in `index.css` for reuse even where V.2 prefers **NeonPulseButton** over metallic gradients.

## Components

| File | Responsibility |
|------|------------------|
| `TopNavBar` | **HOME** → `/`, **SOLUTIONS** → `/solutions`; solutions route uses centered nav + **Solutions** halo |
| `HeroSection` | Hero copy V.2, **FIX YOUR PRESENCE** / **VIEW SOLUTIONS**; hero is always `.reveal.active` (above the fold) |
| `ManifestoSection` | Vision copy + “See how we work” |
| `CapabilitiesAccordionSection` | `name="presence-accordion"` details, **SYSTEM BLUEPRINT v2.0** mock |
| `CapabilitiesGridSection` | Brand Architecture / Digital Presence / Technology |
| `CtaSection` | **Get Started Now** / **Start a Conversation** |
| `Footer` | Tagline: “Stay visible. Stay relevant.” |
| `SolutionsPage` | Full **Solutions Page V.2** (hero, intro, four capability rows, CTA, footer) |
| `NeonPulseButton` | Primary CTA pattern from Stitch (border + pulse) |
| `MaterialIcon` | Material Symbols Outlined |
| `useRevealOnScroll` | Attaches `.reveal` → `.active` when section enters viewport |

## Scripts

```bash
cd web
npm install
npm run dev
npm run build
npm run preview
```

## Stitch reference

### Landing (home)

- **Canvas label**: Landing Page V.2.1  
- **Screen resource**: `projects/632105961591611509/screens/9617b8a31e974f068f23d8279065da2f`  
- **API title**: SIARIA LABS - Unified Neon Green Home  

### Solutions

- **Canvas label**: Solutions Page V.2  
- **Screen resource**: `projects/632105961591611509/screens/87699132fd18403891627b9dfdfec945`  
- **API title**: SIARIA LABS - Unified Neon Green Solutions  

## Performance notes

- Remote images in `constants/assets.ts` — replace with optimized local or CDN assets for production.
