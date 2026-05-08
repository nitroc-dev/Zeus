/**
 * Seed data for the portfolio backend.
 * Paste these objects into your database seeder or use via the admin dashboard.
 *
 * Shapes match:
 *   ProjectDto      → projects table
 *   SkillCategoryDto + SkillDto  → skill_categories + skills tables
 *   Experience      → hardcoded-data.tsx (no backend table yet)
 */

// ─── Projects ────────────────────────────────────────────────────────────────

export const seedProjects = [
  {
    nameEn: "Zeus",
    nameFr: "Zeus",
    descriptionEn:
      "A fast, multilingual portfolio — built with Next.js 16 and zero client JS on the marketing pages. The site you're reading right now.",
    descriptionFr:
      "Un portfolio rapide et multilingue — construit avec Next.js 16 et zéro JS client sur les pages marketing. Le site que vous lisez en ce moment.",
    longDescriptionEn: `I needed a portfolio that did three things well: load instantly on a flaky Brussels train wifi, read in both English and French for local clients, and be easy for me to update from a markdown file at midnight without breaking anything. The boilerplate templates I tried all failed at least one of these.

The site is a static-first Next.js app: marketing pages are pure server components that ship as static HTML with zero client JavaScript. The only "use client" boundary is the contact form. Switching between /en and /fr preserves the full URL path — next-intl handles locale-prefixed routing with type-safe message keys checked at build time.

The contact form posts to an edge function that forwards directly to a Discord webhook. No SMTP, no SaaS, no monthly bill. The message arrives on my watch within seconds of submission.

Performance was a constraint from day one: the entire page weight (gzipped) is under 20 kB, and Lighthouse scores 100/100/100/99 on mobile. Tailwind v4's CSS-variable theming keeps the accent system to a single \`--accent\` token, swappable without touching a component.`,
    longDescriptionFr: `J'avais besoin d'un portfolio qui fasse trois choses bien : se charger instantanément sur le wifi du train bruxellois, être lisible en anglais et en français pour les clients locaux, et être facile à mettre à jour depuis un fichier JSON sans rien casser.

Le site est une application Next.js statique : les pages marketing sont de purs server components qui s'exportent en HTML statique, sans JavaScript côté client. La seule frontière "use client" est le formulaire de contact. La navigation entre /en et /fr préserve le chemin URL complet — next-intl gère le routage avec préfixe de locale et des clés de messages type-safe vérifiées au build.

Le formulaire de contact envoie les données à une edge function qui les relaie directement vers un webhook Discord. Pas de SMTP, pas de SaaS. Le message arrive sur ma montre en quelques secondes.

Les performances étaient une contrainte dès le départ : le poids total de la page (gzippée) est inférieur à 20 kB, et Lighthouse affiche 100/100/100/99 sur mobile.`,
    repositoryUrl: "https://github.com/nitroc-dev/portfolio",
    websiteUrl: "https://nitroc.xyz",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl", "NestJS", "PostgreSQL", "Vercel"],
    highlights: [
      "Full EN/FR parity — every string in messages.json, type-safe keys, build fails if a translation is missing",
      "Zero client JS on marketing routes — server components by default, only the contact form hydrates",
      "Discord webhook contact — no SMTP, no SaaS, form submissions land in a private Discord channel",
      "Admin dashboard — protected route to manage projects and skills via a NestJS REST API + PostgreSQL",
      "100 Lighthouse score on Performance, Accessibility, and Best Practices",
      "Sub-second load on 4G mobile — total page weight under 20 kB gzipped",
    ],
    year: "2026",
    role: "Solo — Design + Dev + Content",
    status: "live",
    isFeatured: true,
  },
];

// ─── Skill categories + skills ────────────────────────────────────────────────

export const seedSkillCategories = [
  {
    label: "Frontend",
    icon: "SiReact",
    skills: [
      { nameEn: "React", nameFr: "React", icon: "devicon-plain:react" },
      { nameEn: "Next.js", nameFr: "Next.js", icon: "devicon-plain:nextjs" },
      { nameEn: "TypeScript", nameFr: "TypeScript", icon: "devicon-plain:typescript" },
      { nameEn: "Tailwind CSS", nameFr: "Tailwind CSS", icon: "devicon-plain:tailwindcss" },
      { nameEn: "React Native", nameFr: "React Native", icon: "devicon-plain:react" },
    ],
  },
  {
    label: "Backend",
    icon: "SiNodedotjs",
    skills: [
      { nameEn: "NestJS", nameFr: "NestJS", icon: "devicon-plain:nestjs" },
      { nameEn: ".NET / C#", nameFr: ".NET / C#", icon: "devicon-plain:csharp" },
      { nameEn: "Node.js", nameFr: "Node.js", icon: "devicon-plain:nodejs" },
      { nameEn: "PostgreSQL", nameFr: "PostgreSQL", icon: "devicon-plain:postgresql" },
      { nameEn: "REST APIs", nameFr: "APIs REST", icon: "SiOpenapiinitiative" },
    ],
  },
  {
    label: "DevOps & Tools",
    icon: "SiDocker",
    skills: [
      { nameEn: "Docker", nameFr: "Docker", icon: "devicon-plain:docker" },
      { nameEn: "GitHub Actions", nameFr: "GitHub Actions", icon: "devicon-plain:githubactions" },
      { nameEn: "Vercel", nameFr: "Vercel", icon: "devicon-plain:vercel" },
      { nameEn: "Git", nameFr: "Git", icon: "devicon-plain:git" },
      { nameEn: "Linux", nameFr: "Linux", icon: "devicon-plain:linux" },
    ],
  },
  {
    label: "Design",
    icon: "SiFigma",
    skills: [
      { nameEn: "Figma", nameFr: "Figma", icon: "devicon-plain:figma" },
      { nameEn: "VS Code", nameFr: "VS Code", icon: "devicon-plain:vscode" },
    ],
  },
];

// ─── Experiences (matches hardcoded-data.tsx Experience shape) ────────────────
// These are already defined in src/data/hardcoded-data.tsx and messages/*.json.
// Keeping them here as a reference for future backend migration.

export const seedExperiences = [
  {
    name: "Full Stack Developer",
    companyName: "Eachstapp",
    websiteUrl: "https://eachstapp.com",
    location: "Brussels, Belgium",
    startDate: "2024-10-01",
    endDate: null,
    type: "work",
    descriptionEn:
      "Building merchant-facing tools — orders, inventory, analytics — used by hundreds of small businesses. React + .NET API + PostgreSQL. Closely involved in the design system and feature scoping.",
    descriptionFr:
      "Construction d'outils à destination des commerçants — commandes, inventaire, analytics — utilisés par des centaines de petites entreprises. React + API .NET + PostgreSQL. Fortement impliqué dans le design system et le cadrage des fonctionnalités.",
  },
  {
    name: "Fullstack Developer (Internship)",
    companyName: "Eachstapp",
    websiteUrl: "https://eachstapp.com",
    location: "Brussels, Belgium",
    startDate: "2024-01-01",
    endDate: "2024-05-31",
    type: "internship",
    descriptionEn:
      "Contributed to the development of modern web applications. Helped ship session middleware refactor, audit log UI, and a small data export feature that's still in production.",
    descriptionFr:
      "Contribution au développement d'applications web modernes. Participation au refactoring du middleware de session, à l'UI du journal d'audit et à une fonctionnalité d'export de données toujours en production.",
  },
  {
    name: "Computer Science Student",
    companyName: "Haute École Léonard de Vinci",
    websiteUrl: "https://www.vinci.be",
    location: "Brussels, Belgium",
    startDate: "2021-09-01",
    endDate: "2024-06-30",
    type: "education",
    descriptionEn:
      "Bachelor in CS. Algorithms, databases, networks, distributed systems. Capstone project: Atlas, a campus-routing webapp with offline tile support.",
    descriptionFr:
      "Bachelier en informatique. Algorithmes, bases de données, réseaux, systèmes distribués. Projet de fin d'études : Atlas, une webapp de routage campus avec support hors-ligne.",
  },
];
