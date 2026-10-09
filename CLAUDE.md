# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with Turbopack
npm run build      # Production build
npm run lint       # Check with Biome
npm run lint:fix   # Auto-fix lint issues
npm run format     # Format with Biome
```

There are no tests in this project.

## Architecture

This is a **Next.js 16 portfolio** (project name: Zeus) for a full-stack developer named Corentin, deployed at `nitroc.xyz`.

### Internationalization (i18n)

The app uses `next-intl` with two locales: `en` (default) and `fr`. All routes are prefixed with the locale (`/en/...`, `/fr/...`). The middleware in [src/proxy.ts](src/proxy.ts) handles locale detection and routing.

- Routing config: [src/i18n/routing.ts](src/i18n/routing.ts)
- Translation files: [messages/en.json](messages/en.json) and [messages/fr.json](messages/fr.json)
- All user-facing strings must have entries in both locale files

### Data Layer

Content (projects, skills, experiences, uses) lives in [src/data/static-data.ts](src/data/static-data.ts). There are two versions of each dataset:
- **Localized functions** (`getLocalizedProjects`, `getLocalizedSkills`, `getLocalizedExperiences`) - accept a `t()` translator and are the **preferred approach**
- **Hardcoded exports** (`projects`, `skills`, `experiences`) - legacy, kept for reference only

When adding new content, use the localized functions and add the corresponding keys to both `messages/en.json` and `messages/fr.json`.

### Page Structure

- `src/app/layout.tsx` - root layout (metadata only, passes through children)
- `src/app/[locale]/layout.tsx` - locale layout with `NextIntlClientProvider`, `Header`, `Footer`, `Analytics`, `SpeedInsights`
- `src/app/[locale]/page.tsx` - home page composing all sections with Framer Motion scroll animations
- `src/app/[locale]/projects/page.tsx` - standalone projects page
- `src/app/[locale]/contact/page.tsx` - contact page (email and social links, no form)
- `src/app/[locale]/privacy/page.tsx` - privacy policy

### Components

- `src/components/sections/` - page sections (Hero, Projects, Currently)
- `src/components/cards/` - reusable card components (ProjectCard, ExperienceCard)
- `src/components/navigation/` - Header, Footer
- `src/components/project-detail/` - sub-components for the project detail page
- `src/components/ui/` - small shared primitives (scroll-to-top) — flat files, intentional exception to folder convention
- `src/components/icons/` - custom SVG icon components

#### Component folder convention

Every component lives in its own named folder with an `index.tsx` that uses a **named export**:

```
component-name/
  index.tsx   ← export function ComponentName(...)
  props.ts    ← export interface ComponentNameProps {...}  (only when the component has external props)
```

Rules:
- Always **named exports** — never `export default`
- `props.ts` is only created when the component receives props from a caller; zero-prop components (server components that fetch their own data, layout wrappers) omit it
- `ui/` is the only exception: it keeps flat `.tsx` files

### Styling

The site uses the **Personal Design System** (same as Helios). Tokens live in `src/styles/ds/` (copied from Helios `src/styles/ds/`; update them there first, then copy). `src/styles/ds/components.css` holds only the `ds-btn` and `ds-tag` rules.

- Colours: use DS semantic tokens (`--bg`, `--surface-*`, `--text-1..3`, `--line*`, `--accent*`, `--ok/--warn`). The older `--navy-*`, `--text-p-*` and `--portfolio-*` names in `globals.css` are aliases of them.
- Type: sizes come from `--fs-1..6` only (`text-[length:var(--fs-3)]`); page titles are the one deliberate exception. Inter + JetBrains Mono via `next/font`.
- Buttons are `ds-btn ds-btn--md|lg ds-btn--primary|secondary|ghost`; chips are `ds-tag`.
- No gradients, glows, eyebrow labels or card grids; lists and hairlines instead.

Tailwind CSS v4 for layout utilities. The linter is **Biome** (not ESLint/Prettier).

### Environment Variables

None required. The site has no server-side integrations.
