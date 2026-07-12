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

The app uses `next-intl` with two locales: `en` (default) and `fr`, with `localePrefix: "as-needed"` — the default locale is served unprefixed (`/about`), French under `/fr/...`. The middleware in [src/proxy.ts](src/proxy.ts) handles locale detection and routing.

- Routing config: [src/i18n/routing.ts](src/i18n/routing.ts)
- Translation files: [messages/en.json](messages/en.json) and [messages/fr.json](messages/fr.json)
- All user-facing strings must have entries in both locale files

Rules:
- **Internal links must use `Link` from `@/i18n/navigation`** (never `next/link` with a manual `/${locale}/...` prefix); external links use plain `<a>`
- **Every page must call `setRequestLocale(locale)`** at the top of the component (and layouts too) — this is what keeps the site statically rendered. `generateMetadata` uses `getTranslations({ locale, namespace })`.
- `NextIntlClientProvider` in the locale layout only ships the namespaces client components use (`nav`, `contact`). If a new client component needs another namespace, add it to `clientMessages` there.

### Data Layer

Content (projects, skills, experiences, /uses items) lives in [src/data/static-data.ts](src/data/static-data.ts) with bilingual fields (`nameEn`/`nameFr`, `descriptionEn`/`descriptionFr`, ...). Access goes through the async wrappers in [src/lib/data.ts](src/lib/data.ts) (`getProjectsData`, `getProjectById`, `getSkillsData`, `getExperiencesData`, `getUsesData`).

Locale selection on those fields uses `createTranslator(locale)` from [src/utils/translate.ts](src/utils/translate.ts): `tr(project, "name") ?? project.nameEn`.

UI strings (labels, headings) live in `messages/*.json` instead.

### Page Structure

- `src/app/layout.tsx` - root layout (metadata only, passes through children)
- `src/app/[locale]/layout.tsx` - locale layout with `NextIntlClientProvider`, `Header`, `Footer`, `ScrollToTop`, `Analytics`, `SpeedInsights`, `Toaster`, JSON-LD
- `src/app/[locale]/page.tsx` - home page (Hero, Projects, Currently, CTA sections)
- `src/app/[locale]/about/page.tsx` - about page (profile, bio, languages, skills, experience)
- `src/app/[locale]/projects/[id]/page.tsx` - project detail page (statically generated per project)
- `src/app/[locale]/uses/page.tsx` - hardware/software list
- `src/app/[locale]/contact/page.tsx` - contact form page
- `src/app/[locale]/privacy/page.tsx` - privacy policy
- `src/app/sitemap.ts` / `src/app/robots.ts` / `src/app/manifest.ts` - SEO metadata routes

SEO helpers (canonical/alternate URLs, OG locale) are in [src/lib/seo.ts](src/lib/seo.ts).

### Contact Form

The form ([src/components/contact/contact-form](src/components/contact/contact-form/index.tsx)) uses **react-hook-form + zod** (`@hookform/resolvers`). The shared schema in [src/utils/contact-validation.ts](src/utils/contact-validation.ts) validates on both client and server, and includes a honeypot field (`website`). The API route at `src/app/api/contact/route.ts` re-validates with the same schema and forwards submissions to a **Discord webhook** via the `DISCORD_WEBHOOK_URL` environment variable.

### Components

- `src/components/sections/` - home page sections (Hero, Projects, Currently/working-on, CTA)
- `src/components/about/` - about page pieces (ProfileHero, ExperienceList)
- `src/components/cards/` - reusable cards (ProjectCard)
- `src/components/contact/` - contact form + success state
- `src/components/navigation/` - Header, Footer
- `src/components/project-detail/` - sub-components for the project detail page
- `src/components/ui/` - shadcn/ui primitives (Button, Input, etc.) — intentional exception to folder convention (flat files)
- `src/components/inputs/` - form input wrappers built on top of the UI primitives

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
- `ui/` is the only exception: it keeps shadcn's flat `.tsx` convention

### Styling

Tailwind CSS v4 with `tw-animate-css`. The linter is **Biome** (not ESLint/Prettier). Biome is configured to use space indentation and has Next.js + React recommended rules enabled.

Design tokens live in `:root` in [src/app/globals.css](src/app/globals.css) (`--navy-*`, `--text-p-*`, `--portfolio-*`) and are registered in `@theme inline`, so utility classes exist for all of them: `bg-navy-1`, `text-p-0`, `border-portfolio-line`, `text-portfolio-accent`, etc. **Prefer these classes over inline `style={{ color: "var(--...)" }}`** in new/edited code. Layouts must be responsive — no fixed multi-column `gridTemplateColumns` without a mobile breakpoint (`grid-cols-1 sm:[grid-template-columns:200px_1fr]`).

### Environment Variables

| Variable | Purpose |
|---|---|
| `DISCORD_WEBHOOK_URL` | Required - receives contact form submissions |
