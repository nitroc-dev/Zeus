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

Content (projects, skills, experiences) lives in [src/data/hardcoded-data.tsx](src/data/hardcoded-data.tsx). There are two versions of each dataset:
- **Localized functions** (`getLocalizedProjects`, `getLocalizedSkills`, `getLocalizedExperiences`) - accept a `t()` translator and are the **preferred approach**
- **Hardcoded exports** (`projects`, `skills`, `experiences`) - legacy, kept for reference only

When adding new content, use the localized functions and add the corresponding keys to both `messages/en.json` and `messages/fr.json`.

### Page Structure

- `src/app/layout.tsx` - root layout (metadata only, passes through children)
- `src/app/[locale]/layout.tsx` - locale layout with `NextIntlClientProvider`, `Header`, `Footer`, `Analytics`, `SpeedInsights`, `Toaster`
- `src/app/[locale]/page.tsx` - home page composing all sections with Framer Motion scroll animations
- `src/app/[locale]/projects/page.tsx` - standalone projects page
- `src/app/[locale]/contact/page.tsx` - contact form page
- `src/app/[locale]/privacy/page.tsx` - privacy policy

### Contact Form

The contact form at `src/app/api/contact/route.ts` forwards submissions to a **Discord webhook** via `DISCORD_WEBHOOK_URL` environment variable. Validation uses Formik + Yup (`src/utils/contact-validation.ts`).

### Components

- `src/components/sections/` - page sections (Hero, About, Experience, Skills, Projects, CTA)
- `src/components/cards/` - ExperienceCard, ProjectCard with typed props in adjacent `props.ts` files
- `src/components/navigation/` - Header, Footer
- `src/components/ui/` - shadcn/ui primitives (Button, Card, Input, etc.)
- `src/components/inputs/` - form input wrappers built on top of the UI primitives
- `src/components/icons/` - custom SVG icon components

### Styling

Tailwind CSS v4 with `tw-animate-css`. The linter is **Biome** (not ESLint/Prettier). Biome is configured to use space indentation and has Next.js + React recommended rules enabled.

### Environment Variables

| Variable | Purpose |
|---|---|
| `DISCORD_WEBHOOK_URL` | Required - receives contact form submissions |
