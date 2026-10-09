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
    repositoryUrl: "https://github.com/nitroc-dev/zeus",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    techStack: [
      {
        name: "Next.js",
        reasonEn:
          "Chosen over Astro for its built-in image optimisation and ISR. Static generation means zero server runtime - the whole site serves from Vercel's CDN at no cost.",
        reasonFr:
          "Préféré à Astro pour son pipeline d'optimisation d'images et l'ISR. La génération statique élimine tout runtime serveur - le site est servi depuis le CDN de Vercel sans coût.",
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
      "Fully static - no server runtime needed",
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
          "Electron was ruled out - a 150 MB Node.js runtime for a local dashboard is overkill. Tauri's Rust core produces a ~5 MB binary with direct access to system APIs at near-native speed.",
        reasonFr:
          "Electron a été écarté - un runtime Node.js de 150 Mo pour un tableau de bord local, c'est excessif. Le core Rust de Tauri produit un binaire de ~5 Mo avec un accès direct aux APIs système.",
      },
      {
        name: "React 19",
        reasonEn:
          "Each plugin widget is an isolated React component - adding a new plugin means dropping a single file. React 19's concurrent rendering keeps the grid responsive during heavy data fetches.",
        reasonFr:
          "Chaque widget est un composant React isolé - ajouter un plugin revient à déposer un seul fichier. Le rendu concurrent de React 19 maintient la réactivité du dashboard lors des fetchs lourds.",
      },
      {
        name: "Rust",
        reasonEn:
          "System metrics and Docker socket calls require a compiled backend. Rust's ownership model prevents the memory bugs that would crash a long-running dashboard daemon.",
        reasonFr:
          "Les métriques système et les appels au socket Docker nécessitent un backend compilé. Le modèle d'ownership de Rust empêche les bugs mémoire qui crasheraient un daemon de longue durée.",
      },
      {
        name: "SQLite",
        reasonEn:
          "No database server to install or manage - the app bundles its own persistence layer. Users install once and run, with no setup wizard or connection string.",
        reasonFr:
          "Pas de serveur de base de données à installer - l'app embarque sa propre couche de persistance. Installation unique, zéro wizard de configuration ni chaîne de connexion.",
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
