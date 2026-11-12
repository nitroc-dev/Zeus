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
    god: {
      id: "zeus",
      greek: "Ζεύς",
      domainEn: "King of the gods, ruler of Olympus",
      domainFr: "Roi des dieux, maître de l'Olympe",
      whyEn:
        "The portfolio sits above every other project and presents them, so it takes the name of the god who rules over the rest.",
      whyFr:
        "Le portfolio chapeaute tous les autres projets et les présente : il prend le nom du dieu qui règne sur les autres.",
    },
    nameFr: "Zeus",
    descriptionEn:
      "My personal portfolio - the site you're on right now. Built with Next.js, Tailwind CSS, and next-intl for bilingual support.",
    descriptionFr:
      "Mon portfolio personnel - le site sur lequel vous vous trouvez. Construit avec Next.js, Tailwind CSS et next-intl pour le support bilingue.",
    longDescriptionEn:
      "Zeus is my personal portfolio: a bilingual (EN/FR) Next.js site with a project showcase, a /uses page and a ⌘K jump menu. It runs on my own design system, shared with Helios, and has no backend.",
    longDescriptionFr:
      "Zeus est mon portfolio personnel : un site Next.js bilingue (EN/FR) avec une vitrine de projets, une page /uses et un menu de navigation ⌘K. Il repose sur mon propre design system, partagé avec Helios, et n'a aucun backend.",
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
      "Lighthouse 100 in every category on desktop, 99 on mobile performance",
      "No backend: no forms, database or API routes",
      "Built on my own design system, shared with Helios",
    ],
    highlightsFr: [
      "Bilingue FR/EN avec next-intl",
      "Lighthouse 100 dans toutes les catégories sur ordinateur, 99 en performance mobile",
      "Aucun backend : ni formulaire, ni base de données, ni route API",
      "Construit sur mon propre design system, partagé avec Helios",
    ],
    year: "2026",
    status: "live",
    role: "Solo",
    isFeatured: true,
    lighthouse: {
      date: "2026-10-29",
      version: "13.5.0",
      reportUrl:
        "https://pagespeed.web.dev/analysis/https-nitroc-xyz/ami4glr0de",
      mobile: {
        performance: 99,
        accessibility: 100,
        bestPractices: 100,
        seo: 100,
        fcp: 0.9,
        lcp: 2.3,
        tbt: 0,
        cls: 0,
        si: 1.1,
      },
      desktop: {
        performance: 100,
        accessibility: 100,
        bestPractices: 100,
        seo: 100,
        fcp: 0.2,
        lcp: 0.4,
        tbt: 0,
        cls: 0.001,
        si: 0.5,
      },
    },
    timeline: "2 weeks",
    timelineFr: "2 semaines",
    version: "v2.1",
    category: "portfolio",
  },
  {
    id: "helios",
    nameEn: "Helios",
    god: {
      id: "helios",
      greek: "Ἥλιος",
      domainEn:
        "Titan of the sun, who crosses the sky every day and sees everything below",
      domainFr:
        "Titan du soleil, qui traverse le ciel chaque jour et voit tout ce qui se passe en dessous",
      whyEn:
        "Helios is the app that runs my day: tasks, habits, calendar and finances in one window. It takes the name of the god who carries the sun across the sky from morning to evening.",
      whyFr:
        "Helios est l'application qui organise ma journée : tâches, habitudes, agenda et finances dans une seule fenêtre. Elle porte le nom du dieu qui mène le soleil à travers le ciel, du matin au soir.",
    },
    nameFr: "Helios",
    descriptionEn:
      "My personal day dashboard for Windows, built with Tauri 2, Rust and React. Tasks, habits and routines, a calendar day rail, finances, Strava and a launcher on the Windows key, on one fixed screen.",
    descriptionFr:
      "Mon tableau de bord quotidien pour Windows, construit avec Tauri 2, Rust et React. Tâches, habitudes et routines, frise du jour, finances, Strava et un lanceur sur la touche Windows, sur un seul écran fixe.",
    longDescriptionEn:
      "Helios is the app I open every morning. I rebuilt it from scratch in late 2026 after the first version outgrew its use: four platforms, a widget grid, modes, and more features than I ever opened. The new version keeps only what I use every day. It shows today's tasks, habits with streaks, morning and night routines with a reminder, and an hour-by-hour day rail fed by ICS and CalDAV feeds. Work events show as anonymous busy blocks, masked in Rust before the UI ever sees them. Next to those are the weather, the next tram and train, subscriptions and income, and runs and gym sessions from Strava. A launcher opens on the Windows key for apps, files, clipboard history and quick task capture. A local MCP server lets Claude read my day and add tasks.",
    longDescriptionFr:
      "Helios est l'application que j'ouvre chaque matin. Je l'ai reconstruite de zéro fin 2026, après que la première version a dépassé son usage : quatre plateformes, une grille de widgets, des modes, et bien plus de fonctionnalités que je n'en ouvrais. La nouvelle version ne garde que ce que j'utilise chaque jour. Elle affiche les tâches du jour, les habitudes avec leurs séries, les routines du matin et du soir avec un rappel, et une frise horaire alimentée par des flux ICS et CalDAV. Les événements du travail s'affichent comme des créneaux « occupé » anonymes, masqués en Rust avant d'atteindre l'interface. À côté : la météo, le prochain tram et train, les abonnements et revenus, et les courses et séances de salle depuis Strava. Un lanceur s'ouvre avec la touche Windows pour les applications, les fichiers, l'historique du presse-papiers et la saisie rapide de tâches. Un serveur MCP local permet à Claude de lire ma journée et d'ajouter des tâches.",
    problemEn:
      "The first Helios grew faster than it was used: four platforms, a phone app, modes and a widget grid, with more surface than I ever opened.",
    problemFr:
      "Le premier Helios a grandi plus vite qu'il n'était utilisé : quatre plateformes, une app mobile, des modes et une grille de widgets, bien plus que ce que j'ouvrais.",
    goalEn:
      "One machine, one screen, only what gets opened every day, with my personal projects moved out to Iris.",
    goalFr:
      "Une machine, un écran, uniquement ce qui s'ouvre chaque jour, avec les projets personnels déplacés dans Iris.",
    tags: ["Tauri 2", "Rust", "React 19", "SQLite", "MCP"],
    techStack: [
      {
        name: "Tauri 2",
        reasonEn:
          "A Windows-only daily app has no use for a bundled Chromium. Tauri ships a small binary on the system WebView, with a Rust core for the tray, the global hotkey, notifications and the keychain.",
        reasonFr:
          "Une app quotidienne uniquement Windows n'a pas besoin d'un Chromium embarqué. Tauri livre un petit binaire sur le WebView du système, avec un cœur Rust pour la zone de notification, le raccourci global, les notifications et le trousseau.",
      },
      {
        name: "Rust",
        reasonEn:
          "Calendars, Strava OAuth and secrets stay in Rust: work event titles and passwords never reach the webview. Recurrence expansion, streaks and finance dates are plain Rust modules with their own tests.",
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
          "A small stdio binary from the same crate gives Claude my day: today, search, subscriptions, activities and a few writes. It runs locally, has no port, and never deletes anything.",
        reasonFr:
          "Un petit binaire stdio issu du même crate donne ma journée à Claude : aujourd'hui, recherche, abonnements, activités, et quelques écritures. Il tourne en local, sans port, et ne supprime jamais rien.",
      },
    ],
    highlights: [
      "Rebuilt from scratch: one machine, one screen, only daily-use features",
      "Habits with streaks, plus routines with checklists and reminders",
      "Calendar day rail with work events masked in Rust",
      "Launcher on the Windows key with clipboard history",
      "Finances and Strava sport pages",
      "Local MCP server for Claude",
    ],
    highlightsFr: [
      "Reconstruit de zéro : une machine, un écran, uniquement l'usage quotidien",
      "Habitudes avec séries, et routines avec liste et rappel",
      "Frise du jour avec les événements du travail masqués en Rust",
      "Lanceur sur la touche Windows avec historique du presse-papiers",
      "Pages Finances et Sport (Strava)",
      "Serveur MCP local pour Claude",
    ],
    year: "2026",
    status: "live",
    role: "Solo",
    isFeatured: true,
    timeline: "2 weeks (rebuild)",
    timelineFr: "2 semaines (refonte)",
    version: "v1.0",
    category: "tool",
  },
  {
    id: "iris",
    nameEn: "Iris",
    god: {
      id: "iris",
      greek: "Ἶρις",
      domainEn:
        "Goddess of the rainbow and messenger of the gods, linking Olympus to the world below",
      domainFr:
        "Déesse de l'arc-en-ciel et messagère des dieux, qui relie l'Olympe au monde d'en bas",
      whyEn:
        "Iris carries my projects between me, Claude and Helios: it serves boards to Claude over MCP and sends task deadlines to Helios's calendar. It takes the name of the messenger who links the gods.",
      whyFr:
        "Iris fait circuler mes projets entre moi, Claude et Helios : elle sert les tableaux à Claude via MCP et envoie les échéances au calendrier de Helios. Elle porte le nom de la messagère qui relie les dieux.",
    },
    nameFr: "Iris",
    descriptionEn:
      "A desktop hub for my personal projects: code, electronics, 3D printing and homelab. Every project is a folder of markdown files with a Kanban board, docs and assets, and Claude can reach it over MCP.",
    descriptionFr:
      "Un hub bureau pour mes projets personnels : code, électronique, impression 3D et homelab. Chaque projet est un dossier de fichiers markdown avec un tableau Kanban, des docs et des ressources, accessible à Claude via MCP.",
    longDescriptionEn:
      "Iris tracks every personal project from idea to done. Its rule is that files are the truth. Each project is a folder of markdown and YAML frontmatter: a project card, one file per task, docs, assets and a BOM for hardware. The SQLite index can be deleted at any time and is rebuilt from the files. Every write, from the window or from MCP, goes through one Rust validator. Writes keep the keys and text they don't own, and a file Iris can't parse is shown with the reason, never overwritten. A per-type onboarding wizard lists every folder, scaffold and GitHub repo it will create, then runs only after a yes. Iris also keeps a homelab machine inventory, parses Excel BOMs, shows read-only GitHub status, and writes task deadlines to an ICS file that Helios shows in its calendar.",
    longDescriptionFr:
      "Iris suit chaque projet personnel de l'idée à la fin. Sa règle : les fichiers font foi. Chaque projet est un dossier de markdown avec frontmatter YAML : une fiche projet, un fichier par tâche, des docs, des ressources et une nomenclature pour le matériel. L'index SQLite peut être supprimé à tout moment et se reconstruit depuis les fichiers. Chaque écriture, depuis la fenêtre ou via MCP, passe par un seul validateur Rust. Les écritures conservent les clés et le texte qui ne leur appartiennent pas, et un fichier illisible est affiché avec la raison, jamais écrasé. Un assistant de création par type liste chaque dossier, scaffold et dépôt GitHub qu'il va créer, puis ne s'exécute qu'après confirmation. Iris tient aussi un inventaire des machines du homelab, lit les nomenclatures Excel, affiche l'état GitHub en lecture seule et écrit les échéances des tâches dans un fichier ICS que Helios affiche dans son calendrier.",
    problemEn:
      "My projects were spread across repos, notes and a board inside Helios, and Claude had no way to know where I'd left off.",
    problemFr:
      "Mes projets étaient éparpillés entre des dépôts, des notes et un tableau dans Helios, et Claude n'avait aucun moyen de savoir où j'en étais.",
    goalEn:
      "One hub where every project is plain files, readable by me, by git and by Claude, and started the right way for its type.",
    goalFr:
      "Un seul hub où chaque projet est fait de simples fichiers, lisibles par moi, par git et par Claude, et démarré correctement selon son type.",
    tags: ["Tauri 2", "Rust", "React 19", "SQLite", "MCP"],
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
          "A disposable index for search across projects, tasks and docs, ignoring accents and case and matching word prefixes. It can be deleted and rebuilt from the files at any time.",
        reasonFr:
          "Un index jetable pour la recherche dans les projets, tâches et docs, sans tenir compte des accents ni de la casse, avec correspondance par préfixe. Il peut être supprimé et reconstruit depuis les fichiers à tout moment.",
      },
      {
        name: "MCP",
        reasonEn:
          "A separate stdio process that works with the app closed. Claude can ask where I left off, read boards, and add or move tasks, but never delete, rename or touch the network.",
        reasonFr:
          "Un processus stdio séparé qui fonctionne app fermée. Claude peut demander où j'en étais, lire les tableaux, ajouter ou déplacer des tâches, mais jamais supprimer, renommer ni accéder au réseau.",
      },
    ],
    highlights: [
      "Files are the truth: markdown + YAML frontmatter, disposable index",
      "Kanban board per project with type-specific columns",
      "Onboarding wizard: scaffold, git, CLAUDE.md and GitHub repo in one run",
      "BOM editor compatible with Belgian Excel CSVs",
      "Homelab machine inventory",
      "MCP server for Claude, plus deadlines exported to Helios",
    ],
    highlightsFr: [
      "Les fichiers font foi : markdown + frontmatter YAML, index jetable",
      "Un tableau Kanban par projet, avec des colonnes selon le type",
      "Assistant de création : scaffold, git, CLAUDE.md et dépôt GitHub en une fois",
      "Éditeur de nomenclature compatible avec les CSV d'Excel belge",
      "Inventaire des machines du homelab",
      "Serveur MCP pour Claude, et échéances exportées vers Helios",
    ],
    year: "2026",
    status: "live",
    role: "Solo",
    isFeatured: true,
    timeline: "2 days",
    timelineFr: "2 jours",
    version: "v1.3",
    category: "tool",
  },
  {
    id: "selene",
    nameEn: "Selene",
    god: {
      id: "selene",
      greek: "Σελήνη",
      domainEn: "Titan of the moon, sister of Helios",
      domainFr: "Titanide de la lune, sœur d'Hélios",
      whyEn:
        "Selene was split out of Helios to watch the homelab, the servers that keep running after the day is over. Helios has the day, his sister Selene has the night.",
      whyFr:
        "Selene est née d'Hélios pour surveiller le homelab, les serveurs qui tournent encore une fois la journée finie. Hélios a le jour, sa sœur Séléné a la nuit.",
    },
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
    timelineFr: "En cours",
    version: "v0.1",
    category: "tool",
  },
];

// ── Skills ────────────────────────────────────────────────────────────────────

export const skillCategories: SkillCategoryData[] = [
  {
    id: "languages",
    labelEn: "Languages",
    labelFr: "Langages",
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
    labelEn: "Frameworks and libraries",
    labelFr: "Frameworks et bibliothèques",
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
    labelEn: "Tools and databases",
    labelFr: "Outils et bases de données",
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
    nameEn: "Bachelor in Business Computing",
    nameFr: "Bachelier en Informatique de gestion",
    companyName: "Institut Paul Lambin (Haute École Léonard de Vinci)",
    descriptionEn:
      "Three-year professional bachelor (Informatique de gestion) covering programming, databases, web development and software engineering. Team projects included a Stack Overflow clone in JavaScript. Final-year internship at Eachstapp, where I was hired afterwards.",
    descriptionFr:
      "Bachelier professionnalisant en trois ans couvrant la programmation, les bases de données, le développement web et le génie logiciel. Projets en équipe, dont un clone de Stack Overflow en JavaScript. Stage de fin d'études chez Eachstapp, où j'ai été engagé ensuite.",
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
    titleEn: "Hardware",
    titleFr: "Matériel",
    items: [
      {
        name: "Custom PC",
        nameFr: "PC sur mesure",
        sub: "Windows desktop",
        subFr: "PC Windows",
        whyEn:
          "Custom-built Windows desktop - AMD Ryzen 7 3700X, RTX 2060 Super, 32 GB RAM.",
        whyFr:
          "PC Windows assemblé sur mesure - AMD Ryzen 7 3700X, RTX 2060 Super, 32 Go de RAM.",
      },
      {
        name: 'Samsung Odyssey G7 28"',
        sub: "4K monitor",
        subFr: "Écran 4K",
        whyEn:
          "LS28AG700N - 4K at 144Hz. Sharp text for code and plenty of room for side-by-side layouts.",
        whyFr:
          "LS28AG700N - 4K à 144Hz. Texte net pour le code et assez d'espace pour travailler côte à côte.",
      },
      {
        name: "Mechanical keyboard",
        nameFr: "Clavier mécanique",
        sub: "Keyboard",
        subFr: "Clavier",
        whyEn: "Solid mechanical keyboard. Reliable and no-nonsense.",
        whyFr: "Clavier mécanique solide. Fiable et sans chichis.",
      },
      {
        name: "Logitech G502 Lightspeed",
        sub: "Mouse",
        subFr: "Souris",
        whyEn:
          "Wireless, comfortable for long sessions, and the extra buttons are mapped to editor shortcuts.",
        whyFr:
          "Sans fil, confortable sur de longues sessions, et les boutons supplémentaires sont mappés sur des raccourcis d'éditeur.",
      },
    ],
  },
  {
    id: "editor",
    titleEn: "Editor and terminal",
    titleFr: "Éditeur et terminal",
    items: [
      {
        name: "VS Code",
        sub: "Editor",
        subFr: "Éditeur",
        whyEn:
          "Primary editor for web work. Copilot, Biome, GitLens extensions.",
        whyFr:
          "Éditeur principal pour le web. Extensions Copilot, Biome, GitLens.",
      },
      {
        name: "Warp",
        sub: "Terminal",
        subFr: "Terminal",
        whyEn:
          "Fast, modern terminal with blocks, command search and good defaults out of the box.",
        whyFr:
          "Terminal moderne et rapide, avec blocs, recherche de commandes et de bons réglages par défaut.",
      },
      {
        name: "Dark 2026",
        sub: "Theme",
        subFr: "Thème",
        whyEn: "VS Code's Dark 2026 theme. Easy on the eyes for long sessions.",
        whyFr:
          "Le thème Dark 2026 de VS Code. Agréable pour les longues sessions.",
      },
      {
        name: "JetBrains Mono",
        sub: "Font",
        subFr: "Police",
        whyEn: "JetBrains Mono everywhere - great ligatures, very readable.",
        whyFr: "JetBrains Mono partout - excellentes ligatures, très lisible.",
      },
    ],
  },
  {
    id: "software",
    titleEn: "Daily software",
    titleFr: "Logiciels quotidiens",
    items: [
      {
        name: "Firefox",
        sub: "Browser",
        subFr: "Navigateur",
        whyEn: "Fast, privacy-friendly, and great DevTools. My daily driver.",
        whyFr:
          "Rapide, respectueux de la vie privée et excellents DevTools. Mon navigateur quotidien.",
      },
      {
        name: "Helios",
        sub: "Launcher",
        subFr: "Lanceur",
        whyEn: "My own app and file launcher, built in Rust as part of Helios.",
        whyFr:
          "Mon propre lanceur d'applications et de fichiers, écrit en Rust dans le cadre de Helios.",
      },
      {
        name: "Obsidian",
        sub: "Notes",
        subFr: "Notes",
        whyEn:
          "Local-first markdown notes. Fast, extensible, and my files stay on my machine.",
        whyFr:
          "Notes markdown local-first. Rapide, extensible et mes fichiers restent sur ma machine.",
      },
    ],
  },
  {
    id: "devstack",
    titleEn: "Dev stack",
    titleFr: "Stack de développement",
    items: [
      {
        name: "Next.js",
        sub: "Framework",
        subFr: "Framework",
        whyEn: "Go-to React framework. App router, server components, RSC.",
        whyFr:
          "Framework React de référence. App router, server components, RSC.",
      },
      {
        name: "React",
        sub: "UI library",
        subFr: "Bibliothèque d'interface",
        whyEn:
          "Component model for all frontends. Combined with Next.js or standalone.",
        whyFr:
          "Modèle de composants pour tous les frontends. Combiné avec Next.js ou seul.",
      },
      {
        name: ".NET",
        sub: "Backend",
        subFr: "Backend",
        whyEn: "Backend APIs and services. Clean architecture, EF Core.",
        whyFr: "APIs et services backend. Architecture propre, EF Core.",
      },
      {
        name: "TypeScript",
        sub: "Language",
        subFr: "Langage",
        whyEn: "Strict mode everywhere. Catches issues early.",
        whyFr: "Mode strict partout. Détecte les problèmes tôt.",
      },
      {
        name: "PostgreSQL",
        sub: "Database",
        subFr: "Base de données",
        whyEn: "Default relational database. Reliable and well-supported.",
        whyFr:
          "Base de données relationnelle par défaut. Fiable et bien supportée.",
      },
      {
        name: "Docker",
        sub: "Containers",
        subFr: "Conteneurs",
        whyEn: "Containerised dev environments and deployments.",
        whyFr: "Environnements de développement et déploiements conteneurisés.",
      },
    ],
  },
  {
    id: "homelab",
    titleEn: "Homelab",
    titleFr: "Homelab",
    items: [
      {
        name: "NITROC-SERVER",
        sub: "TrueNAS SCALE",
        subFr: "TrueNAS SCALE",
        whyEn:
          "Main home server on TrueNAS SCALE with a ZFS pool for storage and containerised services.",
        whyFr:
          "Serveur principal sous TrueNAS SCALE avec un pool ZFS pour le stockage et les services conteneurisés.",
      },
      {
        name: "Traefik + Cloudflare",
        sub: "Reverse proxy",
        subFr: "Reverse proxy",
        whyEn:
          "Traefik managed in Portainer, with a Cloudflare DNS-01 wildcard certificate for *.nitroc.xyz.",
        whyFr:
          "Traefik géré via Portainer, avec un certificat wildcard Cloudflare DNS-01 pour *.nitroc.xyz.",
      },
      {
        name: "Raspberry Pi 5 & 4B",
        sub: "Network services",
        subFr: "Services réseau",
        whyEn: "Small always-on boxes for network services like AdGuard.",
        whyFr:
          "Petites machines toujours allumées pour les services réseau comme AdGuard.",
      },
      {
        name: 'Lab Rax 10"',
        sub: "Rack",
        subFr: "Rack",
        whyEn: "3D-printed 5U 10-inch rack holding the network core.",
        whyFr:
          "Rack 10 pouces 5U imprimé en 3D qui accueille le cœur du réseau.",
      },
      {
        name: "2.5GbE PoE+ switch",
        nameFr: "Switch 2,5GbE PoE+",
        sub: "Network",
        subFr: "Réseau",
        whyEn: "Unmanaged 5-port 2.5Gb switch with PoE+ for the Pis.",
        whyFr: "Switch non managé 5 ports 2,5 Gb avec PoE+ pour les Pi.",
      },
    ],
  },
];
