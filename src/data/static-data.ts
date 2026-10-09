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
      "My personal portfolio - the site you're on right now. Built with Next.js, Tailwind CSS, and next-intl for bilingual support.",
    descriptionFr:
      "Mon portfolio personnel - le site sur lequel vous vous trouvez. Construit avec Next.js, Tailwind CSS et next-intl pour le support bilingue.",
    longDescriptionEn:
      "Zeus is my personal portfolio, designed to showcase my work, skills, and background. It features a dark navy design with a terminal-styled hero, a bilingual interface (EN/FR), a project showcase, and a /uses page.",
    longDescriptionFr:
      "Zeus est mon portfolio personnel, conçu pour présenter mon travail, mes compétences et mon parcours. Il propose un design sombre avec un héros en style terminal, une interface bilingue (EN/FR), une vitrine de projets, et une page /uses.",
    websiteUrl: "https://nitroc.xyz",
    problemEn:
      "My old portfolio was a generic template that didn't show how I actually build.",
    problemFr:
      "Mon ancien portfolio était un template générique qui ne montrait pas ma façon de construire.",
    goalEn:
      "A fast, bilingual site that presents my work clearly, with no backend to maintain.",
    goalFr:
      "Un site rapide et bilingue qui présente clairement mon travail, sans backend à maintenir.",
    repositoryUrl: "https://github.com/nitroc-dev/zeus",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    techStack: [
      {
        name: "Next.js",
        reasonEn:
          "App Router and server components render almost everything on the server, and next-intl plugs straight into them for EN/FR. Deployed on Vercel with no backend to maintain.",
        reasonFr:
          "L'App Router et les server components rendent presque tout côté serveur, et next-intl s'y intègre directement pour l'EN/FR. Déployé sur Vercel, sans backend à maintenir.",
      },
      {
        name: "TypeScript",
        reasonEn:
          "Strict mode catches entire classes of bugs at compile time - especially critical when juggling bilingual content with complex type shapes across locales.",
        reasonFr:
          "Le mode strict détecte des catégories entières de bugs à la compilation - particulièrement utile quand on jongle avec du contenu bilingue et des types complexes entre locales.",
      },
      {
        name: "Tailwind CSS",
        reasonEn:
          "Utility classes live next to markup - no separate stylesheet to maintain. Tailwind v4's engine purges everything unused, landing under 10 kB of CSS in prod.",
        reasonFr:
          "Les classes utilitaires restent dans le markup - pas de feuille de style séparée. Le moteur Tailwind v4 purge tout l'inutilisé, moins de 10 kB de CSS en prod.",
      },
      {
        name: "next-intl",
        reasonEn:
          "Works natively with async RSC and the App Router. Alternatives like next-i18next required client wrappers that broke server component boundaries.",
        reasonFr:
          "Fonctionne nativement avec les RSC asynchrones et l'App Router. Les alternatives comme next-i18next nécessitaient des wrappers client incompatibles avec les server components.",
      },
    ],
    highlights: [
      "Bilingual EN/FR with next-intl",
      "100 Lighthouse score across all categories",
      "No backend: no forms, database or API routes",
      "Terminal-styled hero card",
    ],
    year: "2026",
    status: "live",
    role: "Solo",
    isFeatured: true,
    lighthouseScore: "100 · 100 · 100 · 100",
    timeline: "2 weeks",
    version: "v2.1",
    category: "portfolio",
  },
  {
    id: "helios",
    nameEn: "Helios",
    nameFr: "Helios",
    descriptionEn:
      "My personal day dashboard and Raycast replacement, built with Tauri 2, Rust and React. Today, Week and Money spaces, plus a launcher on the Windows key.",
    descriptionFr:
      "Mon tableau de bord quotidien et remplaçant de Raycast, construit avec Tauri 2, Rust et React. Espaces Today, Week et Money, plus un lanceur sur la touche Windows.",
    longDescriptionEn:
      "Helios is a native Windows app that runs my day. It's organised as spaces: Today (now/next, calendar, tasks, habits, spending, morning plan and evening review), Week (a 7-day board of events and due tasks) and Money (hand-entered transactions, budgets and subscriptions), built from 21 widgets that can go on any space. A second hidden window replaces Raycast: tap the Windows key for apps, files, a calculator, web search, clipboard history, timers and quick task or expense capture. Everything stays local: SQLite, no server, no account.",
    longDescriptionFr:
      "Helios est une application Windows native qui organise ma journée. Elle est structurée en espaces : Today (maintenant/ensuite, agenda, tâches, habitudes, dépenses, plan du matin et bilan du soir), Week (un tableau de 7 jours avec événements et tâches à échéance) et Money (transactions saisies à la main, budgets et abonnements), composés de 21 widgets placables sur n'importe quel espace. Une seconde fenêtre cachée remplace Raycast : une pression sur la touche Windows donne accès aux applications, fichiers, calculatrice, recherche web, historique du presse-papiers, minuteurs et à la saisie rapide de tâches ou de dépenses. Tout reste local : SQLite, pas de serveur, pas de compte.",
    problemEn:
      "My day was spread across a calendar, a to-do app, a budgeting sheet and Raycast, none of which talked to each other.",
    problemFr:
      "Ma journée était éparpillée entre un agenda, une app de tâches, un tableur de budget et Raycast, sans aucun lien entre eux.",
    goalEn:
      "One local app that shows the day at a glance and is one keypress away from anywhere.",
    goalFr:
      "Une seule app locale qui montre la journée d'un coup d'œil, accessible d'une seule touche depuis n'importe où.",
    repositoryUrl: "https://github.com/nitroc-dev/helios",
    tags: ["Tauri 2", "Rust", "React 19", "TypeScript", "SQLite"],
    techStack: [
      {
        name: "Tauri 2",
        reasonEn:
          "Electron ships a full Chromium and Node runtime for what is a local tool. Tauri gives a small native binary, a tray icon and two windows (dashboard and launcher) from one bundle.",
        reasonFr:
          "Electron embarque tout Chromium et Node pour ce qui reste un outil local. Tauri fournit un petit binaire natif, une icône dans la zone de notification et deux fenêtres (tableau de bord et lanceur) à partir d'un seul bundle.",
      },
      {
        name: "Rust",
        reasonEn:
          "Owns the data layer and the Windows integration: a low-level keyboard hook for the bare Windows-key hotkey, media controls and Start-menu app icons through the windows crate.",
        reasonFr:
          "Gère la couche de données et l'intégration Windows : un hook clavier bas niveau pour le raccourci sur la seule touche Windows, les contrôles média et les icônes d'applications du menu Démarrer via la crate windows.",
      },
      {
        name: "React 19",
        reasonEn:
          "Every widget is a self-contained component registered once and placeable on any space; layouts persist per space.",
        reasonFr:
          "Chaque widget est un composant autonome, enregistré une seule fois et placable sur n'importe quel espace ; les dispositions sont conservées par espace.",
      },
      {
        name: "SQLite",
        reasonEn:
          "All data lives in one local file. Money is stored as integer cents, and domain logic takes a connection so it's tested against an in-memory database.",
        reasonFr:
          "Toutes les données vivent dans un seul fichier local. Les montants sont stockés en centimes entiers, et la logique métier reçoit une connexion pour être testée sur une base en mémoire.",
      },
    ],
    highlights: [
      "Today, Week and Money spaces built from 21 widgets",
      "Launcher on the bare Windows key, replacing Raycast",
      "Recurring tasks, habits and subscriptions handled in Rust",
      "Unit-tested domain logic in Rust and TypeScript",
    ],
    year: "2026",
    status: "in_progress",
    role: "Solo",
    isFeatured: true,
    timeline: "Ongoing",
    version: "v0.1",
    category: "tool",
  },
  {
    id: "selene",
    nameEn: "Selene",
    nameFr: "Selene",
    descriptionEn:
      "A native homelab dashboard split out of Helios: servers, services, containers and network on one page. Work in progress.",
    descriptionFr:
      "Un tableau de bord homelab natif issu de Helios : serveurs, services, conteneurs et réseau sur une seule page. En cours de développement.",
    longDescriptionEn:
      "Selene is the homelab counterpart to Helios: a Tauri desktop app that pulls the status of servers, services, containers, network and certificates into a single overview. It's under active development, so details are coming later.",
    longDescriptionFr:
      "Selene est le pendant homelab de Helios : une application desktop Tauri qui rassemble l'état des serveurs, services, conteneurs, du réseau et des certificats dans une seule vue d'ensemble. Elle est en développement actif, les détails arriveront plus tard.",
    problemEn: "Homelab status was spread across a dozen separate admin UIs.",
    problemFr:
      "L'état du homelab était éparpillé dans une dizaine d'interfaces d'administration.",
    goalEn: 'One native window that answers "is everything OK?" at a glance.',
    goalFr:
      "Une seule fenêtre native qui répond à « tout va bien ? » d'un coup d'œil.",
    tags: ["Tauri 2", "Rust", "React 19", "TypeScript"],
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
      "TypeScript",
      "JavaScript",
      "C#",
      "SQL",
      "HTML",
      "CSS",
      "Java",
      "C",
    ],
  },
  {
    id: "frameworks",
    labelEn: "Frameworks & Libraries",
    labelFr: "Frameworks & Bibliothèques",
    technologies: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      ".NET",
      "EF Core",
    ],
  },
  {
    id: "tools",
    labelEn: "Tools & Databases",
    labelFr: "Outils & Bases de données",
    technologies: [
      "PostgreSQL",
      "SQL Server",
      "Azure",
      "Vercel",
      "Docker",
      "Git",
      "GitHub Actions",
    ],
  },
];

// ── Experiences ───────────────────────────────────────────────────────────────

export const experiences: ExperienceData[] = [
  {
    id: "eachstapp-fullstack",
    nameEn: "Software Engineer",
    nameFr: "Software Engineer",
    companyName: "Eachstapp",
    descriptionEn:
      "Build and run a B2B SaaS for mediation services, now used by 7 services. Ship React Native apps (bare and Expo) in sports and travel, owning App Store and Google Play releases. Make architecture and data-model decisions on new features, deploy and maintain production systems, and work directly with clients on requirements, demos and support.",
    descriptionFr:
      "Développement et exploitation d'un SaaS B2B pour services de médiation, utilisé par 7 services. Livraison d'applications React Native (bare et Expo) dans le sport et le voyage, avec gestion des publications App Store et Google Play. Décisions d'architecture et de modèle de données sur les nouvelles fonctionnalités, déploiement et maintenance en production, et travail direct avec les clients sur les besoins, démos et support.",
    startDate: "2024-10-01",
    locationEn: "Brussels, Belgium",
    locationFr: "Bruxelles, Belgique",
    experienceType: "work",
    websiteUrl: "https://eachstapp.com",
  },
  {
    id: "eachstapp-internship",
    nameEn: "Software Engineer Intern",
    nameFr: "Software Engineer (Stage)",
    companyName: "Eachstapp",
    descriptionEn:
      "Delivered features on client web and mobile projects in TypeScript, React and React Native.",
    descriptionFr:
      "Développement de fonctionnalités sur des projets web et mobiles clients en TypeScript, React et React Native.",
    startDate: "2024-01-01",
    endDate: "2024-05-31",
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
        name: 'Samsung Odyssey G7 28"',
        sub: "4K Monitor",
        whyEn:
          "LS28AG700N - 4K at 144Hz. Sharp text for code and plenty of room for side-by-side layouts.",
        whyFr:
          "LS28AG700N - 4K à 144Hz. Texte net pour le code et assez d'espace pour travailler côte à côte.",
      },
      {
        name: "Mechanical keyboard",
        sub: "Keyboard",
        whyEn: "Solid mechanical keyboard. Reliable and no-nonsense.",
        whyFr: "Clavier mécanique solide. Fiable et sans chichis.",
      },
      {
        name: "Logitech G502 Lightspeed",
        sub: "Mouse",
        whyEn:
          "Wireless, comfortable for long sessions, and the extra buttons are mapped to editor shortcuts.",
        whyFr:
          "Sans fil, confortable sur de longues sessions, et les boutons supplémentaires sont mappés sur des raccourcis d'éditeur.",
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
        name: "Warp",
        sub: "Terminal",
        whyEn:
          "Fast, modern terminal with blocks, command search and good defaults out of the box.",
        whyFr:
          "Terminal moderne et rapide, avec blocs, recherche de commandes et de bons réglages par défaut.",
      },
      {
        name: "Dark 2026",
        sub: "Theme",
        whyEn: "VS Code's Dark 2026 theme. Easy on the eyes for long sessions.",
        whyFr:
          "Le thème Dark 2026 de VS Code. Agréable pour les longues sessions.",
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
        name: "Helios",
        sub: "Launcher",
        whyEn: "My own app and file launcher, built in Rust as part of Helios.",
        whyFr:
          "Mon propre lanceur d'applications et de fichiers, écrit en Rust dans le cadre de Helios.",
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
  {
    id: "homelab",
    icon: "🗄️",
    titleEn: "Homelab",
    titleFr: "Homelab",
    items: [
      {
        name: "NITROC-SERVER",
        sub: "TrueNAS SCALE",
        whyEn:
          "Main home server on TrueNAS SCALE with a ZFS pool for storage and containerised services.",
        whyFr:
          "Serveur principal sous TrueNAS SCALE avec un pool ZFS pour le stockage et les services conteneurisés.",
      },
      {
        name: "Traefik + Cloudflare",
        sub: "Reverse proxy",
        whyEn:
          "Traefik managed in Portainer, with a Cloudflare DNS-01 wildcard certificate for *.nitroc.xyz.",
        whyFr:
          "Traefik géré via Portainer, avec un certificat wildcard Cloudflare DNS-01 pour *.nitroc.xyz.",
      },
      {
        name: "Raspberry Pi 5 & 4B",
        sub: "Network services",
        whyEn: "Small always-on boxes for network services like AdGuard.",
        whyFr:
          "Petites machines toujours allumées pour les services réseau comme AdGuard.",
      },
      {
        name: 'Lab Rax 10"',
        sub: "Rack",
        whyEn: "3D-printed 5U 10-inch rack holding the network core.",
        whyFr:
          "Rack 10 pouces 5U imprimé en 3D qui accueille le cœur du réseau.",
      },
      {
        name: "2.5GbE PoE+ switch",
        sub: "Network",
        whyEn: "Unmanaged 5-port 2.5Gb switch with PoE+ for the Pis.",
        whyFr: "Switch non managé 5 ports 2,5 Gb avec PoE+ pour les Pi.",
      },
    ],
  },
];
