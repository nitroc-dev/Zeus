# Zeus — project memory

Personal portfolio site for Corentin, a full-stack developer, deployed at
`nitroc.xyz`. Solo project, in production. Bilingual (en/fr).

## Non-negotiables

- **All user-facing strings must have entries in both `messages/en.json`
  and `messages/fr.json`.** No hardcoded copy in components.
- **Internal links use `Link` from `@/i18n/navigation`** — never
  `next/link` with a manual `/${locale}/...` prefix. External links use
  plain `<a>`.
- **Every page (and layout) calls `setRequestLocale(locale)`** at the top
  of the component — this is what keeps the site statically rendered.
  `generateMetadata` uses `getTranslations({ locale, namespace })`.

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (Turbopack), React 19 |
| i18n | next-intl 4 — locales `en` (default, unprefixed) / `fr` (`/fr/...`) |
| Styling | Tailwind CSS v4 + `tw-animate-css`, shadcn/ui (`radix-ui`) |
| Forms | react-hook-form + zod (`@hookform/resolvers`) |
| Lint/format | Biome (not ESLint/Prettier) |
| Analytics | `@vercel/analytics`, `@vercel/speed-insights` |
| Deploy | Vercel |

No test suite in this project.

## Structure

```
src/
  app/
    layout.tsx          # root layout — metadata only, passes through children
    [locale]/
      layout.tsx         # NextIntlClientProvider, Header, Footer, ScrollToTop, Analytics, Toaster, JSON-LD
      page.tsx            # home (Hero, Projects, Currently, CTA)
      about/page.tsx
      projects/[id]/page.tsx  # statically generated per project
      uses/page.tsx       # hardware/software list
      contact/page.tsx
      privacy/page.tsx
    api/contact/route.ts  # re-validates contact form, forwards to Discord
    sitemap.ts / robots.ts / manifest.ts
  components/
    sections/       # home page sections
    about/           # ProfileHero, ExperienceList
    cards/           # ProjectCard
    contact/         # form + success state
    navigation/      # Header, Footer
    project-detail/  # project detail page sub-components
    inputs/          # form input wrappers over ui/ primitives
    ui/              # shadcn/ui primitives — flat files, exception to folder convention
  data/static-data.ts   # bilingual content: projects, skills, experiences, /uses items
  lib/data.ts            # async wrappers: getProjectsData, getProjectById, getSkillsData, getExperiencesData, getUsesData
  lib/seo.ts             # canonical/alternate URLs, OG locale
  i18n/routing.ts
  utils/translate.ts     # createTranslator(locale) → tr(item, "field")
  utils/contact-validation.ts  # shared zod schema, client + server
  proxy.ts               # locale detection/routing middleware
```

## Conventions

- **Component folders**: every component in its own named folder,
  **named export** (never `export default`).
  ```
  component-name/
    index.tsx   # export function ComponentName(...)
    props.ts    # export interface ComponentNameProps — only if it takes props
  ```
  Zero-prop components (server components fetching their own data, layout
  wrappers) omit `props.ts`. `ui/` is the sole exception — keeps shadcn's
  flat convention.
- **Bilingual data fields**: `nameEn`/`nameFr`, `descriptionEn`/`descriptionFr`,
  etc. in `static-data.ts`; select via `tr(item, "name") ?? item.nameEn`.
  UI chrome strings (labels, headings) go in `messages/*.json` instead, not
  in `static-data.ts`.
- **`NextIntlClientProvider`** in the locale layout only ships namespaces
  client components actually use (`nav`, `contact`). Adding a new client
  component that needs another namespace means adding it to
  `clientMessages` there.
- **Design tokens** live in `:root` in `src/app/globals.css`
  (`--navy-*`, `--text-p-*`, `--portfolio-*`), registered in `@theme
  inline` so utility classes exist for all of them (`bg-navy-1`,
  `text-p-0`, `border-portfolio-line`, `text-portfolio-accent`). Prefer
  these over inline `style={{ color: "var(--...)" }}`.
- **Responsive layouts required** — no fixed multi-column
  `gridTemplateColumns` without a mobile breakpoint (e.g.
  `grid-cols-1 sm:[grid-template-columns:200px_1fr]`).
- **Contact form**: `src/components/contact/contact-form` validates with
  the shared `contact-validation.ts` schema (includes a `website` honeypot
  field), re-validated server-side in `app/api/contact/route.ts`, forwarded
  to Discord via `DISCORD_WEBHOOK_URL`.

## Commands

```bash
npm run dev        # dev server, Turbopack
npm run build       # production build
npm run lint        # check with Biome
npm run lint:fix     # auto-fix
npm run format       # format with Biome
```

Husky + lint-staged run `biome check --write` on staged files pre-commit.
CI (`.github/workflows/ci.yml`) runs lint + build on every push.

## Environment variables

| Variable | Purpose |
|---|---|
| `DISCORD_WEBHOOK_URL` | Required — receives contact form submissions |
