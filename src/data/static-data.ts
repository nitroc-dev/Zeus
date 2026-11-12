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
      "My personal day dashboard for Windows, built with Tauri 2 and React. Tasks, habits and routines, a calendar day rail, finances, Strava, and a hotkey launcher, on one fixed screen.",
    descriptionFr:
      "Mon tableau de bord quotidien pour Windows, construit avec Tauri 2 et React. Tâches, habitudes et routines, calendrier du jour, finances, Strava et un lanceur au clavier, sur un seul écran fixe.",
    longDescriptionEn:
      "Helios is the app I open every morning. I rebuilt it from scratch in late 2026 after the first version outgrew its use: four platforms, a widget grid, modes, and more features than I ever opened. The new version keeps only what I use every day. It shows today's tasks, habits with streaks, morning and night routines with a reminder, and an hour-by-hour day rail fed by ICS and CalDAV feeds. Work events show as anonymous busy blocks, masked in Rust before the UI ever sees them. Next to those are the weather, the next tram and train, subscriptions and income, and runs and gym sessions from Strava. A launcher opens on the Windows key for apps, files, clipboard history, and quick task capture. A local MCP server lets Claude read my day and add tasks.",
    longDescriptionFr:
      "Helios est l'application que j'ouvre chaque matin. Je l'ai reconstruite de zéro fin 2026, après que la première version a dépassé son usage : quatre plateformes, une grille de widgets, des modes, et bien plus de fonctionnalités que je n'en ouvrais. La nouvelle version ne garde que ce que j'utilise chaque jour. Elle affiche les tâches du jour, les habitudes avec leurs séries, les routines du matin et du soir avec un rappel, et une frise horaire alimentée par des flux ICS et CalDAV. Les événements du travail s'affichent comme des créneaux « occupé » anonymes, masqués en Rust avant d'atteindre l'interface. À côté : la météo, le prochain tram et train, les abonnements et revenus, et les courses et séances de salle depuis Strava. Un lanceur s'ouvre avec la touche Windows pour les applications, les fichiers, l'historique du presse-papiers et la saisie rapide de tâches. Un serveur MCP local permet à Claude de lire ma journée et d'ajouter des tâches.",
    tags: ["Tauri 2", "React 19", "Rust", "SQLite", "MCP"],
    techStack: [
      {
        name: "Tauri 2",
        reasonEn:
          "A Windows-only daily app has no use for a bundled Chromium. Tauri ships a small binary on the system WebView, with a Rust core for the tray, the global hotkey, notifications, and the keychain.",
        reasonFr:
          "Une app quotidienne uniquement Windows n'a pas besoin d'un Chromium embarqué. Tauri livre un petit binaire sur le WebView du système, avec un cœur Rust pour la zone de notification, le raccourci global, les notifications et le trousseau.",
      },
      {
        name: "Rust",
        reasonEn:
          "Calendars, Strava OAuth, and secrets stay in Rust: work event titles and passwords never reach the webview. Recurrence expansion, streaks, and finance dates are plain Rust modules with their own tests.",
        reasonFr:
          "Calendriers, OAuth Strava et secrets restent en Rust : les titres des réunions de travail et les mots de passe n'atteignent jamais le webview. L'expansion des récurrences, les séries et les dates de finances sont de simples modules Rust, testés.",
      },
      {
        name: "SQLite",
        reasonEn:
          "No sync, no server: one file on the PC, with a daily backup. WAL mode lets the MCP server read and write beside the running app safely.",
        reasonFr:
          "Pas de synchro, pas de serveur : un seul fichier sur le PC, avec une sauvegarde quotidienne. Le mode WAL permet au serveur MCP de lire et d'écrire à côté de l'app en cours d'exécution, sans risque.",
      },
      {
        name: "MCP",
        reasonEn:
          "A small stdio binary from the same crate gives Claude my day: today, search, subscriptions, activities, and a few writes. It runs locally, has no port, and never deletes anything.",
        reasonFr:
          "Un petit binaire stdio issu du même crate donne ma journée à Claude : aujourd'hui, recherche, abonnements, activités, et quelques écritures. Il tourne en local, sans port, et ne supprime jamais rien.",
      },
    ],
    highlights: [
      "Rebuilt from scratch: one machine, one screen, only daily-use features",
      "Habits with streaks, plus routines with checklists and reminders",
      "Calendar day rail with work events masked in Rust",
      "Raycast-style launcher with clipboard history",
      "Finances and Strava sport pages",
      "Local MCP server for Claude",
    ],
    year: "2026",
    status: "live",
    role: "Solo",
    isFeatured: true,
    timeline: "2 weeks (rebuild)",
    version: "v1.0",
    category: "tool",
  },
  {
    id: "iris",
    nameEn: "Iris",
    nameFr: "Iris",
    descriptionEn:
      "A desktop hub for my personal projects (code, electronics, 3D printing, homelab). Every project is a folder of markdown files with a Kanban board, docs, and assets, and Claude can reach it over MCP.",
    descriptionFr:
      "Un hub bureau pour mes projets personnels (code, électronique, impression 3D, homelab). Chaque projet est un dossier de fichiers markdown avec un tableau Kanban, des docs et des ressources, accessible à Claude via MCP.",
    longDescriptionEn:
      "Iris tracks every personal project from idea to done. Its rule is that files are the truth. Each project is a folder of markdown and YAML frontmatter: a project card, one file per task, docs, assets, and a BOM for hardware. The SQLite index can be deleted at any time and is rebuilt from the files. Every write, from the window or from MCP, goes through one Rust validator. Writes keep the keys and text they don't own, and a file Iris can't parse is shown with the reason, never overwritten. A per-type onboarding wizard lists every folder, scaffold, and GitHub repo it will create, then runs only after a yes. Iris also keeps a homelab machine inventory, parses Excel BOMs, shows read-only GitHub status, and writes task deadlines to an ICS file that Helios shows in its calendar.",
    longDescriptionFr:
      "Iris suit chaque projet personnel de l'idée à la fin. Sa règle : les fichiers font foi. Chaque projet est un dossier de markdown avec frontmatter YAML : une fiche projet, un fichier par tâche, des docs, des ressources et une nomenclature pour le matériel. L'index SQLite peut être supprimé à tout moment et se reconstruit depuis les fichiers. Chaque écriture, depuis la fenêtre ou via MCP, passe par un seul validateur Rust. Les écritures conservent les clés et le texte qui ne leur appartiennent pas, et un fichier illisible est affiché avec la raison, jamais écrasé. Un assistant de création par type liste chaque dossier, scaffold et dépôt GitHub qu'il va créer, puis ne s'exécute qu'après confirmation. Iris tient aussi un inventaire des machines du homelab, lit les nomenclatures Excel, affiche l'état GitHub en lecture seule et écrit les échéances des tâches dans un fichier ICS que Helios affiche dans son calendrier.",
    tags: ["Tauri 2", "React 19", "Rust", "SQLite", "MCP"],
    techStack: [
      {
        name: "Markdown + YAML",
        reasonEn:
          "Projects stay readable in any editor and outlive the app. Claude and git can read them too. The app is a view and a validator on top of the files, not a database.",
        reasonFr:
          "Les projets restent lisibles dans n'importe quel éditeur et survivent à l'app. Claude et git peuvent aussi les lire. L'app est une vue et un validateur au-dessus des fichiers, pas une base de données.",
      },
      {
        name: "Rust",
        reasonEn:
          "One validator for every write, from the window or from MCP. It preserves unknown keys and the markdown body, uses a fixed key order, and refuses parent loops.",
        reasonFr:
          "Un seul validateur pour chaque écriture, depuis la fenêtre ou MCP. Il préserve les clés inconnues et le corps markdown, garde un ordre de clés fixe et refuse les boucles de parenté.",
      },
      {
        name: "SQLite FTS5",
        reasonEn:
          "A disposable index for search across projects, tasks, and docs, ignoring accents and case and matching word prefixes. It can be deleted and rebuilt from the files at any time.",
        reasonFr:
          "Un index jetable pour la recherche dans les projets, tâches et docs, sans tenir compte des accents ni de la casse, avec correspondance par préfixe. Il peut être supprimé et reconstruit depuis les fichiers à tout moment.",
      },
      {
        name: "MCP",
        reasonEn:
          "A separate stdio process that works with the app closed. Claude can ask where I left off, read boards, and add or move tasks, but never delete, rename, or touch the network.",
        reasonFr:
          "Un processus stdio séparé qui fonctionne app fermée. Claude peut demander où j'en étais, lire les tableaux, ajouter ou déplacer des tâches, mais jamais supprimer, renommer ni accéder au réseau.",
      },
    ],
    highlights: [
      "Files are the truth: markdown + YAML frontmatter, disposable index",
      "Kanban board per project with type-specific columns",
      "Onboarding wizard: scaffold, git, CLAUDE.md, and GitHub repo in one run",
      "BOM editor compatible with Belgian Excel CSVs",
      "Homelab machine inventory",
      "MCP server for Claude, plus deadlines exported to Helios",
    ],
    year: "2026",
    status: "live",
    role: "Solo",
    isFeatured: true,
    timeline: "2 days",
    version: "v1.3",
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
