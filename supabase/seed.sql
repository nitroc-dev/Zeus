-- ── Projects ──────────────────────────────────────────────────────────────────

INSERT INTO projects (id, name_en, name_fr, description_en, description_fr,
  long_description_en, long_description_fr, website_url, repository_url,
  tags, highlights, year, status, role, is_featured, lighthouse_score,
  timeline, version, category, seo_title, seo_description)
VALUES
  (
    'zeus',
    'Zeus', 'Zeus',
    'My personal portfolio - built with Next.js 16, TypeScript, and Tailwind CSS v4. Designed for speed, accessibility, and full bilingual support.',
    'Mon portfolio personnel - construit avec Next.js 16, TypeScript et Tailwind CSS v4. Conçu pour la performance, l''accessibilité et le support bilingue complet.',
    'Zeus is the second version of my portfolio, rebuilt from scratch to showcase my work and personality. It uses Next.js 16 App Router with server components, next-intl for i18n, and a custom dark-navy design system. The goal was to ship a fast, accessible, and polished site that I''m proud to show clients and recruiters.',
    'Zeus est la deuxième version de mon portfolio, reconstruit de zéro pour présenter mon travail. Il utilise Next.js 16 App Router avec des composants serveur, next-intl pour l''i18n, et un système de design sombre personnalisé. L''objectif était de livrer un site rapide, accessible et soigné.',
    'https://nitroc.xyz',
    'https://github.com/nitroc-dev/zeus',
    ARRAY['Next.js','TypeScript','Tailwind CSS','next-intl','Vercel'],
    ARRAY[
      'No portfolio existed that matched the v2 design direction and bilingual requirements.',
      'Ship a fast, accessible, production-grade portfolio with full EN/FR support.',
      'Architected a fully static bilingual site - no CMS, no backend, just code.',
      'Achieved 100 · 100 · 100 · 99 Lighthouse scores on the home page.',
      'Custom design system with CSS tokens, dark-navy palette, and accent colours.'
    ],
    '2026', 'live', 'Solo - design, frontend, deployment',
    true, '100 · 100 · 100 · 99', '3 weeks', 'v2.0.0', 'web',
    'Zeus - Corentin''s Portfolio',
    'Personal portfolio of Corentin, a full-stack developer based in Brussels. Built with Next.js 16.'
  ),
  (
    'helios',
    'Helios', 'Helios',
    'A self-hosted desktop dashboard - plugin-based widgets, kanban/doc views, Docker monitoring, and a remote agent for server metrics.',
    'Un tableau de bord desktop auto-hébergé - widgets en plugins, vues kanban/doc, monitoring Docker et agent distant pour les métriques serveur.',
    'Helios is a native desktop application built with Tauri v2 (Rust) and React 19. It started as a personal alternative to browser-based dashboards and grew into a full local productivity and monitoring suite.',
    'Helios est une application de bureau native construite avec Tauri v2 (Rust) et React 19. Débutée comme alternative aux tableaux de bord basés sur navigateur, elle est devenue une suite locale complète de productivité et monitoring.',
    NULL,
    NULL,
    ARRAY['Tauri v2','Rust','React 19','TypeScript','SQLite','Vite 7','Tailwind CSS'],
    ARRAY[
      'Browser-based dashboards require cloud accounts and don''t work offline - build a fully local, self-hosted alternative.',
      'Ship a production-grade native desktop app with a Rust backend and React frontend using Tauri v2.',
      '21 registered plugin-based widget system with drag-and-drop grid layout via react-grid-layout.',
      'Real-time Docker container monitoring via the bollard Rust crate.',
      'Standalone helios-agent binary deployable on remote servers for metrics collection.'
    ],
    '2026', 'in_progress', 'Solo - Rust + React + systems design',
    true, NULL, NULL, NULL, 'desktop', NULL, NULL
  ),
  (
    'iris',
    'Iris', 'Iris',
    'Coming soon.',
    'Bientôt disponible.',
    NULL, NULL, NULL, NULL,
    NULL, NULL,
    '2026', 'in_progress', NULL,
    false, NULL, NULL, NULL, NULL, NULL, NULL
  );

-- ── Tech stack ────────────────────────────────────────────────────────────────

INSERT INTO tech_stack (project_id, name, reason_en, reason_fr, sort_order) VALUES
  ('zeus','Next.js','App Router and server components handle routing and data fetching at build time - no client-side overhead on page load.','App Router et composants serveur gèrent le routage et le chargement des données au build - aucun overhead côté client au chargement.',0),
  ('zeus','TypeScript','Strict mode everywhere. Catches type errors before they reach production.','Mode strict partout. Détecte les erreurs de type avant qu''elles n''atteignent la production.',1),
  ('zeus','Tailwind CSS','v4 with CSS variables for the design system tokens. Fast to iterate on layouts without leaving markup.','v4 avec des variables CSS pour les tokens du système de design. Rapide pour itérer sur les mises en page sans quitter le markup.',2),
  ('zeus','next-intl','Handles EN/FR routing, message loading, and locale detection with minimal config. Works seamlessly with the App Router.','Gère le routage EN/FR, le chargement des messages et la détection de locale avec une configuration minimale. S''intègre parfaitement avec l''App Router.',3),
  ('zeus','Vercel','Zero-config deployment, edge CDN, and preview URLs per branch. The obvious choice for a Next.js project.','Déploiement zéro configuration, CDN edge et URLs de prévisualisation par branche. Le choix évident pour un projet Next.js.',4),
  ('helios','Tauri v2','Native window shell that bundles the Rust backend and React frontend into a single binary - no Electron memory overhead.','Shell de fenêtre native qui regroupe le backend Rust et le frontend React en un seul binaire - sans le surcoût mémoire d''Electron.',0),
  ('helios','Rust','Backend runtime for everything performance-sensitive: system metrics via sysinfo, Docker via bollard, HTTP via reqwest, persistence via rusqlite.','Runtime backend pour tout ce qui est sensible aux performances : métriques système via sysinfo, Docker via bollard, HTTP via reqwest, persistance via rusqlite.',1),
  ('helios','React 19','Component model for the entire frontend - widget grid, kanban, document view, and real-time network graph via React Flow.','Modèle de composants pour tout le frontend - grille de widgets, kanban, vue document et graphe réseau temps réel via React Flow.',2),
  ('helios','TypeScript','Strict types across all React components and the Tauri command bindings. Catches mismatches between the Rust and JS boundaries early.','Types stricts sur tous les composants React et les liaisons de commandes Tauri. Détecte les incompatibilités entre les frontières Rust et JS tôt.',3),
  ('helios','SQLite','Local embedded database via rusqlite. All widget state, kanban data, and settings stay on disk - no network dependency, no accounts.','Base de données embarquée locale via rusqlite. Tout l''état des widgets, les données kanban et les paramètres restent sur le disque - aucune dépendance réseau, aucun compte.',4),
  ('helios','Vite 7','Fast HMR during development. Bundles the React frontend that Tauri wraps - hot reload survives across Rust and JS changes.','HMR rapide en développement. Regroupe le frontend React encapsulé par Tauri - le rechargement à chaud survit aux changements Rust et JS.',5),
  ('helios','Tailwind CSS','v4 for rapid UI iteration on the dashboard layout, widget panels, and kanban board. Keeps the design consistent across 21 widget plugins.','v4 pour une itération rapide de l''UI sur le layout du tableau de bord, les panneaux de widgets et le kanban. Maintient un design cohérent entre 21 plugins de widgets.',6);

-- ── Skills ────────────────────────────────────────────────────────────────────

INSERT INTO skills (id, label_en, label_fr, technologies, sort_order) VALUES
  ('1', 'Programming Languages', 'Langages de Programmation', ARRAY['HTML5','CSS3','JavaScript','TypeScript','C','C#','Java'], 0),
  ('2', 'Frameworks & Libraries', 'Frameworks & Bibliothèques', ARRAY['React','Next.js','NestJS','.NET','Express.js','Spring Boot'], 1),
  ('3', 'Tools & Databases', 'Outils & Bases de données', ARRAY['MySQL','PostgreSQL','MongoDB','Docker','Git','GitHub','GitHub Actions'], 2);

-- ── Experiences ───────────────────────────────────────────────────────────────

-- ── Uses ──────────────────────────────────────────────────────────────────────

INSERT INTO uses_sections (id, icon, title_en, title_fr, sort_order) VALUES
  ('hardware', '⌨',  'Hardware',        'Matériel',               0),
  ('editor',   '{ }','Editor & Terminal','Éditeur & Terminal',     1),
  ('software', '⚙',  'Daily Software',  'Logiciels quotidiens',   2),
  ('devstack', '⚛',  'Dev Stack',       'Stack de développement', 3);

INSERT INTO uses_items (section_id, name, sub, why_en, why_fr, sort_order) VALUES
  ('hardware','Custom PC',                'Ryzen 7 3700X · RTX 2060 Super · 32GB',        'Custom-built Windows desktop - AMD Ryzen 7 3700X, RTX 2060 Super, 32 GB RAM.','PC Windows assemblé sur mesure - AMD Ryzen 7 3700X, RTX 2060 Super, 32 Go de RAM.',0),
  ('hardware','Samsung Odyssey G7 28"',  '4K · 144Hz',                                   '4K at 144Hz. Excellent for both gaming and side-by-side development layouts.','4K à 144Hz. Excellent pour le gaming et les mises en page côte à côte en développement.',1),
  ('hardware','Ducky ONE',               'Mechanical keyboard',                           'Solid mechanical keyboard. Reliable and no-nonsense.','Clavier mécanique solide. Fiable et sans chichis.',2),
  ('hardware','Logitech G502 Lightspeed','Wireless',                                      'Wireless, precise, and heavy enough to feel planted. Hard pad, low DPI.','Sans fil, précise et assez lourde pour rester en place. Tapis dur, faible DPI.',3),
  ('editor','VS Code',         'Primary editor',      'Primary editor for web work. Copilot, Biome, GitLens extensions.','Éditeur principal pour le web. Extensions Copilot, Biome, GitLens.',0),
  ('editor','JetBrains Rider', 'For .NET / C#',       'JetBrains IDE for all .NET / C# projects.','IDE JetBrains pour tous les projets .NET / C#.',1),
  ('editor','Windows Terminal','Terminal',             'Clean, fast, and supports multiple shell tabs. Does the job without getting in the way.','Propre, rapide et supporte plusieurs onglets de shell. Fait le travail sans se mettre en travers.',2),
  ('editor','One Dark Pro',    'Theme',                'One Dark Pro in both editors. Easy on the eyes for long sessions.','One Dark Pro dans les deux éditeurs. Agréable pour les longues sessions.',3),
  ('editor','JetBrains Mono',  'Editor font',          'JetBrains Mono everywhere - great ligatures, very readable.','JetBrains Mono partout - excellentes ligatures, très lisible.',4),
  ('software','Firefox',      'Browser', 'Fast, privacy-friendly, and great DevTools. My daily driver.','Rapide, respectueux de la vie privée et excellents DevTools. Mon navigateur quotidien.',0),
  ('software','PowerToys Run', 'Launcher','Fast app and file launcher on Windows. Alt+Space, type, done.','Lanceur rapide d''applications et fichiers sur Windows. Alt+Espace, on tape, c''est fait.',1),
  ('software','Obsidian',      'Notes',   'Local-first markdown notes. Fast, extensible, and my files stay on my machine.','Notes markdown local-first. Rapide, extensible et mes fichiers restent sur ma machine.',2),
  ('devstack','Next.js',      'App Router · RSC',  'Go-to React framework. App router, server components, RSC.','Framework React de référence. App router, server components, RSC.',0),
  ('devstack','TypeScript',   'strict mode',        'Strict mode everywhere. Catches issues early.','Mode strict partout. Détecte les problèmes tôt.',1),
  ('devstack','.NET 8 / C#',  'For work',           'Backend APIs and services. Clean architecture, EF Core.','APIs et services backend. Architecture propre, EF Core.',2),
  ('devstack','PostgreSQL',   'via Docker',         'Default relational database. Reliable and well-supported.','Base de données relationnelle par défaut. Fiable et bien supportée.',3),
  ('devstack','Docker',       'Containers',         'Containerised dev environments and deployments.','Environnements de développement et déploiements conteneurisés.',4);

-- ── Experiences ───────────────────────────────────────────────────────────────

INSERT INTO experiences (id, name_en, name_fr, company_name, description_en, description_fr,
  start_date, end_date, location_en, location_fr, experience_type, website_url)
VALUES
  (
    '1',
    'Full Stack Developer', 'Développeur Full Stack',
    'Eachstapp',
    'Leading the development and maintenance of enterprise web applications using React, Next.js, and .NET technologies. Collaborating with cross-functional teams to architect scalable solutions, implement RESTful APIs, and optimize application performance.',
    'Direction du développement et de la maintenance d''applications web d''entreprise utilisant React, Next.js et les technologies .NET. Collaboration avec des équipes interfonctionnelles pour concevoir des solutions évolutives, implémenter des API RESTful et optimiser les performances des applications.',
    '2024-10-01', NULL,
    'Brussels, Belgium', 'Bruxelles, Belgique',
    'work', 'https://eachstapp.com'
  ),
  (
    '2',
    'Fullstack Developer (Internship)', 'Développeur Fullstack (Stage)',
    'Eachstapp',
    'Contributed to the development of modern web applications by implementing responsive frontend components and backend API integrations. Gained practical experience with React, TypeScript, and .NET while working in an agile development environment.',
    'Contribution au développement d''applications web modernes en implémentant des composants frontend réactifs et des intégrations d''API backend. Acquisition d''une expérience pratique avec React, TypeScript et .NET tout en travaillant dans un environnement de développement agile.',
    '2024-01-01', '2024-05-01',
    'Brussels, Belgium', 'Bruxelles, Belgique',
    'internship', 'https://eachstapp.com'
  ),
  (
    '3',
    'Computer Science Student', 'Étudiant en Informatique',
    'Haute École Léonard de Vinci',
    'Completed comprehensive studies in computer science covering programming fundamentals, data structures, algorithms, database management, and software engineering principles.',
    'Études complètes en informatique couvrant les fondamentaux de la programmation, les structures de données, les algorithmes, la gestion des bases de données et les principes de génie logiciel.',
    '2021-09-01', '2024-06-30',
    'Brussels, Belgium', 'Bruxelles, Belgique',
    'education', 'https://www.vinci.be'
  );
