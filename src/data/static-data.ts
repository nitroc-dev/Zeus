import type {
  ExperienceData,
  Project,
  SkillCategoryData,
  UseSectionData,
} from "@/types";

// ── Projects ──────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "zeus",
    nameEn: "Zeus",
    nameFr: "Zeus",
    descriptionEn:
      "My personal portfolio — the site you're on right now. Built with Next.js, Tailwind CSS, and next-intl for bilingual support.",
    descriptionFr:
      "Mon portfolio personnel — le site sur lequel vous vous trouvez. Construit avec Next.js, Tailwind CSS et next-intl pour le support bilingue.",
    longDescriptionEn:
      "Zeus is my personal portfolio, designed to showcase my work, skills, and background. It features a dark navy design with a terminal-styled hero, a bilingual interface (EN/FR), a project showcase, and a /uses page.",
    longDescriptionFr:
      "Zeus est mon portfolio personnel, conçu pour présenter mon travail, mes compétences et mon parcours. Il propose un design sombre avec un héros en style terminal, une interface bilingue (EN/FR), une vitrine de projets, et une page /uses.",
    websiteUrl: "https://nitroc.xyz",
    repositoryUrl: "https://github.com/nitroc-dev/zeus",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    techStack: [
      {
        name: "Next.js",
        reasonEn: "App router, RSC, and static generation out of the box.",
        reasonFr: "App router, RSC et génération statique intégrés nativement.",
      },
      {
        name: "TypeScript",
        reasonEn: "Strict mode everywhere — catches issues before they ship.",
        reasonFr:
          "Mode strict partout — détecte les problèmes avant qu'ils ne partent en prod.",
      },
      {
        name: "Tailwind CSS",
        reasonEn: "Fast to iterate on, minimal CSS output.",
        reasonFr: "Itération rapide, CSS minimal en sortie.",
      },
      {
        name: "next-intl",
        reasonEn: "Simple and powerful i18n for the App Router.",
        reasonFr: "i18n simple et puissant pour l'App Router.",
      },
    ],
    highlights: [
      "Bilingual EN/FR with next-intl",
      "100 Lighthouse score across all categories",
      "Fully static — no server runtime needed",
      "Terminal-styled hero card",
    ],
    year: "2026",
    status: "live",
    role: "Solo",
    isFeatured: true,
    lighthouseScore: "100 · 100 · 100 · 100",
    timeline: "2 weeks",
    version: "v2.0",
    category: "portfolio",
  },
  {
    id: "helios",
    nameEn: "Helios",
    nameFr: "Helios",
    descriptionEn:
      "A personal desktop dashboard built with Tauri 2 and React. 28+ plugin widgets, Kanban project management, network topology graph, and system monitoring.",
    descriptionFr:
      "Un tableau de bord bureau personnel construit avec Tauri 2 et React. 28+ widgets, gestion de projets Kanban, graphe réseau interactif et surveillance système.",
    longDescriptionEn:
      "Helios is a self-hosted desktop dashboard built on Tauri 2 (Rust backend) and React 19. It features a drag-and-drop widget grid, a 28-plugin ecosystem covering system stats, Docker monitoring, RSS feeds, notes, finance, and more. It also includes a full Kanban project management system, an interactive network topology graph, and a remote agent for monitoring headless servers.",
    longDescriptionFr:
      "Helios est un tableau de bord bureau auto-hébergé construit sur Tauri 2 (backend Rust) et React 19. Il propose une grille de widgets glisser-déposer, un écosystème de 28 plugins couvrant les stats système, Docker, les flux RSS, les notes, la finance et bien plus. Il inclut également un système de gestion de projets Kanban, un graphe de topologie réseau interactif et un agent distant pour surveiller des serveurs headless.",
    repositoryUrl: "https://github.com/nitroc-dev/helios",
    tags: ["Tauri 2", "React 19", "Rust", "TypeScript"],
    techStack: [
      {
        name: "Tauri 2",
        reasonEn:
          "Native desktop shell with a Rust backend — no Electron overhead.",
        reasonFr:
          "Shell bureau natif avec backend Rust — sans la surcharge d'Electron.",
      },
      {
        name: "React 19",
        reasonEn:
          "Component model for the dashboard UI and plugin widgets.",
        reasonFr:
          "Modèle de composants pour l'interface du tableau de bord et les widgets plugins.",
      },
      {
        name: "Rust",
        reasonEn:
          "Backend commands: system metrics, Docker, SQLite, network scanning.",
        reasonFr:
          "Commandes backend : métriques système, Docker, SQLite, scan réseau.",
      },
      {
        name: "SQLite",
        reasonEn: "Embedded local database — zero config, bundled with the app.",
        reasonFr:
          "Base de données locale embarquée — zéro configuration, intégrée à l'app.",
      },
    ],
    highlights: [
      "28+ plugin widgets (system stats, Docker, RSS, notes, finance…)",
      "Drag-and-drop grid dashboard",
      "Kanban project management",
      "Interactive network topology graph",
    ],
    year: "2026",
    status: "in_progress",
    role: "Solo",
    isFeatured: true,
    timeline: "Ongoing",
    version: "v0.1",
    category: "tool",
  },
];

// ── Skills ────────────────────────────────────────────────────────────────────

export const skillCategories: SkillCategoryData[] = [
  {
    id: "languages",
    labelEn: "Programming Languages",
    labelFr: "Langages de Programmation",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "C",
      "C#",
      "Java",
    ],
  },
  {
    id: "frameworks",
    labelEn: "Frameworks & Libraries",
    labelFr: "Frameworks & Bibliothèques",
    technologies: ["React", "Next.js", "NestJS", ".NET", "Express", "Spring"],
  },
  {
    id: "tools",
    labelEn: "Tools & Databases",
    labelFr: "Outils & Bases de données",
    technologies: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Git",
      "GitHub",
      "GitHub Actions",
    ],
  },
];

// ── Experiences ───────────────────────────────────────────────────────────────

export const experiences: ExperienceData[] = [
  {
    id: "eachstapp-fullstack",
    nameEn: "Full Stack Developer",
    nameFr: "Développeur Full Stack",
    companyName: "Eachstapp",
    descriptionEn:
      "Leading the development and maintenance of enterprise web applications using React, Next.js, and .NET technologies. Collaborating with cross-functional teams to architect scalable solutions, implement RESTful APIs, and optimize application performance.",
    descriptionFr:
      "Direction du développement et de la maintenance d'applications web d'entreprise utilisant React, Next.js et les technologies .NET. Collaboration avec des équipes interfonctionnelles pour concevoir des solutions évolutives, implémenter des API RESTful et optimiser les performances.",
    startDate: "2024-09-01",
    locationEn: "Brussels, Belgium",
    locationFr: "Bruxelles, Belgique",
    experienceType: "work",
    websiteUrl: "https://eachstapp.com",
  },
  {
    id: "eachstapp-internship",
    nameEn: "Fullstack Developer (Internship)",
    nameFr: "Développeur Fullstack (Stage)",
    companyName: "Eachstapp",
    descriptionEn:
      "Contributed to the development of modern web applications by implementing responsive frontend components and backend API integrations. Gained practical experience with React, TypeScript, and .NET while working in an agile environment.",
    descriptionFr:
      "Contribution au développement d'applications web modernes en implémentant des composants frontend réactifs et des intégrations d'API backend. Acquisition d'une expérience pratique avec React, TypeScript et .NET dans un environnement agile.",
    startDate: "2024-02-01",
    endDate: "2024-06-30",
    locationEn: "Brussels, Belgium",
    locationFr: "Bruxelles, Belgique",
    experienceType: "internship",
    websiteUrl: "https://eachstapp.com",
  },
  {
    id: "vinci-education",
    nameEn: "Computer Science Student",
    nameFr: "Étudiant en Informatique",
    companyName: "Haute École Léonard de Vinci",
    descriptionEn:
      "Completed comprehensive studies in computer science covering programming fundamentals, data structures, algorithms, database management, and software engineering principles. Built a solid foundation in object-oriented programming, web development, and system design.",
    descriptionFr:
      "Études complètes en informatique couvrant les fondamentaux de la programmation, les structures de données, les algorithmes, la gestion des bases de données et les principes de génie logiciel. Construction d'une base solide en POO, développement web et conception de systèmes.",
    startDate: "2021-09-01",
    endDate: "2024-06-30",
    locationEn: "Brussels, Belgium",
    locationFr: "Bruxelles, Belgique",
    experienceType: "education",
    websiteUrl: "https://www.vinci.be",
  },
];

// ── Uses ──────────────────────────────────────────────────────────────────────

export const usesSections: UseSectionData[] = [
  {
    id: "hardware",
    icon: "🖥️",
    titleEn: "Hardware",
    titleFr: "Matériel",
    items: [
      {
        name: "Custom PC",
        sub: "Windows Desktop",
        whyEn:
          "Custom-built Windows desktop - AMD Ryzen 7 3700X, RTX 2060 Super, 32 GB RAM.",
        whyFr:
          "PC Windows assemblé sur mesure - AMD Ryzen 7 3700X, RTX 2060 Super, 32 Go de RAM.",
      },
      {
        name: "LG 27GP950-B",
        sub: "4K Monitor",
        whyEn:
          "4K at 144Hz. Excellent for both gaming and side-by-side development layouts.",
        whyFr:
          "4K à 144Hz. Excellent pour le gaming et les mises en page côte à côte en développement.",
      },
      {
        name: "Mechanical keyboard",
        sub: "Keyboard",
        whyEn: "Solid mechanical keyboard. Reliable and no-nonsense.",
        whyFr: "Clavier mécanique solide. Fiable et sans chichis.",
      },
      {
        name: "Logitech G Pro X Superlight 2",
        sub: "Mouse",
        whyEn:
          "Wireless, precise, and heavy enough to feel planted. Hard pad, low DPI.",
        whyFr:
          "Sans fil, précise et assez lourde pour rester en place. Tapis dur, faible DPI.",
      },
    ],
  },
  {
    id: "editor",
    icon: "⌨️",
    titleEn: "Editor & Terminal",
    titleFr: "Éditeur & Terminal",
    items: [
      {
        name: "VS Code",
        sub: "Editor",
        whyEn:
          "Primary editor for web work. Copilot, Biome, GitLens extensions.",
        whyFr:
          "Éditeur principal pour le web. Extensions Copilot, Biome, GitLens.",
      },
      {
        name: "JetBrains Rider",
        sub: "IDE",
        whyEn: "JetBrains IDE for all .NET / C# projects.",
        whyFr: "IDE JetBrains pour tous les projets .NET / C#.",
      },
      {
        name: "Windows Terminal",
        sub: "Terminal",
        whyEn:
          "Clean, fast, and supports multiple shell tabs. Does the job without getting in the way.",
        whyFr:
          "Propre, rapide et supporte plusieurs onglets de shell. Fait le travail sans se mettre en travers.",
      },
      {
        name: "One Dark Pro",
        sub: "Theme",
        whyEn:
          "One Dark Pro in both editors. Easy on the eyes for long sessions.",
        whyFr:
          "One Dark Pro dans les deux éditeurs. Agréable pour les longues sessions.",
      },
      {
        name: "JetBrains Mono",
        sub: "Font",
        whyEn: "JetBrains Mono everywhere - great ligatures, very readable.",
        whyFr: "JetBrains Mono partout - excellentes ligatures, très lisible.",
      },
    ],
  },
  {
    id: "software",
    icon: "🛠️",
    titleEn: "Daily Software",
    titleFr: "Logiciels quotidiens",
    items: [
      {
        name: "Firefox",
        sub: "Browser",
        whyEn: "Fast, privacy-friendly, and great DevTools. My daily driver.",
        whyFr:
          "Rapide, respectueux de la vie privée et excellents DevTools. Mon navigateur quotidien.",
      },
      {
        name: "PowerToys",
        sub: "Launcher",
        whyEn: "Fast app and file launcher on Windows. Alt+Space, type, done.",
        whyFr:
          "Lanceur rapide d'applications et fichiers sur Windows. Alt+Espace, on tape, c'est fait.",
      },
      {
        name: "Obsidian",
        sub: "Notes",
        whyEn:
          "Local-first markdown notes. Fast, extensible, and my files stay on my machine.",
        whyFr:
          "Notes markdown local-first. Rapide, extensible et mes fichiers restent sur ma machine.",
      },
    ],
  },
  {
    id: "devstack",
    icon: "⚡",
    titleEn: "Dev Stack",
    titleFr: "Stack de développement",
    items: [
      {
        name: "Next.js",
        sub: "Framework",
        whyEn: "Go-to React framework. App router, server components, RSC.",
        whyFr:
          "Framework React de référence. App router, server components, RSC.",
      },
      {
        name: "React",
        sub: "UI Library",
        whyEn:
          "Component model for all frontends. Combined with Next.js or standalone.",
        whyFr:
          "Modèle de composants pour tous les frontends. Combiné avec Next.js ou seul.",
      },
      {
        name: ".NET",
        sub: "Backend",
        whyEn: "Backend APIs and services. Clean architecture, EF Core.",
        whyFr: "APIs et services backend. Architecture propre, EF Core.",
      },
      {
        name: "TypeScript",
        sub: "Language",
        whyEn: "Strict mode everywhere. Catches issues early.",
        whyFr: "Mode strict partout. Détecte les problèmes tôt.",
      },
      {
        name: "PostgreSQL",
        sub: "Database",
        whyEn: "Default relational database. Reliable and well-supported.",
        whyFr:
          "Base de données relationnelle par défaut. Fiable et bien supportée.",
      },
      {
        name: "Docker",
        sub: "Containers",
        whyEn: "Containerised dev environments and deployments.",
        whyFr: "Environnements de développement et déploiements conteneurisés.",
      },
    ],
  },
];
