export type ProjectVisual = "agri" | "image" | "mobile";

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  status: string;
  period: string;
  summary: string;
  description: string;
  role: string;
  challenge: string;
  solution: string;
  impact: string;
  features: string[];
  stack: string[];
  tags: string[];
  visual: ProjectVisual;
  image?: string;
  imageAlt?: string;
  externalUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "agri-vulgarisation-madagascar",
    title: "Agri-Vulgarisation Madagascar",
    eyebrow: "Agriculture numérique",
    status: "Plateforme pilote déployée",
    period: "2025 — 2026",
    summary:
      "Une plateforme bilingue pour rendre les connaissances, les acteurs et les services agricoles plus accessibles.",
    description:
      "Agri-Vulgarisation réunit dans une même expérience les ressources techniques, les formations, les actualités, l’annuaire des acteurs, la cartographie et les échanges communautaires.",
    role:
      "Conception produit, architecture full-stack, modélisation des données, développement, sécurisation, recherche intelligente, tests et déploiement.",
    challenge:
      "Les connaissances utiles à la vulgarisation sont dispersées entre documents, organismes et canaux informels. Les utilisateurs ont besoin d’un point d’accès simple, bilingue et adapté aux réalités du secteur.",
    solution:
      "Une plateforme éditoriale et communautaire structurée autour des parcours visiteurs, d’un annuaire cartographié, d’un forum et d’un moteur de recherche hybride combinant mots-clés et similarité sémantique.",
    impact:
      "Un socle institutionnel capable d’indexer 260 contenus publics, de servir des réponses en français et en malgache et de relier connaissance, acteurs et échanges dans une même plateforme.",
    features: [
      "Ressources, formations et bonnes pratiques",
      "Annuaire et cartographie des acteurs",
      "Forum et capitalisation des échanges",
      "Administration éditoriale et gouvernance",
      "Recherche hybride avec pgvector et Gemini",
      "Interface bilingue français / malgache",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "Edge Functions",
      "pgvector",
      "Gemini",
    ],
    tags: ["Next.js", "IA", "Cartographie", "Bilingue"],
    visual: "agri",
    featured: true,
  },
  {
    slug: "manjohy",
    title: "Manjohy",
    eyebrow: "Suivi-évaluation & data",
    status: "Produit en développement avancé",
    period: "2026",
    summary:
      "Un système intégré pour structurer, suivre et piloter les projets de développement avec des données fiables.",
    description:
      "Manjohy accompagne toute la chaîne du suivi-évaluation : cadre logique, indicateurs, plans pluriannuels, PTA/PTBA, réalisations, budgets, désagrégations et tableaux de bord configurables.",
    role:
      "Conception fonctionnelle, modélisation métier, architecture full-stack, moteur de calcul, gestion des droits, tableaux de bord et stratégie de tests.",
    challenge:
      "Les dispositifs de suivi-évaluation doivent consolider des indicateurs hétérogènes sans confondre absence de donnée et valeur nulle, tout en restant configurables pour différents projets et organisations.",
    solution:
      "Une plateforme multi-entités avec un moteur de synthèse dédié, des contrôles de cohérence métier et des dashboards adaptables par projet, période, zone et public.",
    impact:
      "Une base produit qui transforme le cadre logique et la planification en données de pilotage, avec des calculs vérifiables et des alertes sur les incohérences de désagrégation.",
    features: [
      "Cadres logiques et indicateurs hiérarchiques",
      "Plans pluriannuels et PTA/PTBA",
      "Objectifs, réalisations et budgets",
      "Désagrégations genre, zone et temporalité",
      "Dashboards projet et entité configurables",
      "Contrôles de cohérence et tests métier",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript strict",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "NextAuth",
      "Tailwind CSS",
    ],
    tags: ["Next.js", "PostgreSQL", "Indicateurs", "Dashboards"],
    visual: "image",
    image: "/projects/manjohy.jpg",
    imageAlt: "Identité visuelle du projet Manjohy",
    featured: true,
  },
  {
    slug: "gec-epargne-communautaire",
    title: "GEC",
    eyebrow: "Mission freelance • Mobile",
    status: "Application Android livrée",
    period: "2025",
    summary:
      "Une application Flutter offline-first pour fiabiliser la gestion quotidienne des groupes d’épargne communautaire.",
    description:
      "GEC gère les membres, exercices, cotisations, prêts, remboursements, intérêts, amendes, dépenses collectives et clôtures, avec stockage local et synchronisation cloud.",
    role:
      "Cadrage fonctionnel, architecture mobile, développement Flutter, règles financières, tests, livraison APK et documentation utilisateur.",
    challenge:
      "Digitaliser des opérations financières collectives sans dépendre d’une connexion permanente, tout en conservant la traçabilité et des règles de calcul compréhensibles.",
    solution:
      "Une application centrée sur les périodes de réunion, avec contrôles des opérations autorisées, calculs automatiques et consultation transparente de l’historique.",
    impact:
      "Une mission client menée du cahier des charges à la livraison, avec une application exploitable sur le terrain, un guide d’utilisation et des scénarios de recette.",
    features: [
      "Gestion des groupes, membres et rôles",
      "Cotisations et achat de parts",
      "Prêts, intérêts et remboursements",
      "Amendes et dépenses collectives",
      "Clôture et répartition automatiques",
      "Mode hors connexion et synchronisation",
    ],
    stack: ["Flutter", "Dart", "Stockage local", "Synchronisation cloud", "PDF"],
    tags: ["Flutter", "Offline-first", "Finance", "Freelance"],
    visual: "mobile",
  },
  {
    slug: "ecosysteme-drae-vakinankaratra",
    title: "Écosystème DRAE Vakinankaratra",
    eyebrow: "Données agricoles institutionnelles",
    status: "Projet professionnel",
    period: "2023 — 2024",
    summary:
      "Un site public, une cartographie des acteurs et un dashboard pour diffuser et piloter les données agricoles régionales.",
    description:
      "Le dispositif combine information institutionnelle, annuaire de services, cartographie interactive et administration des données statistiques.",
    role:
      "Analyse des besoins, conception des interfaces, développement web, cartographie, structuration des données et mise en ligne.",
    challenge:
      "Rendre visibles les acteurs, services et informations sectorielles d’une direction régionale tout en donnant à l’équipe un espace de gestion et de visualisation.",
    solution:
      "Un écosystème composé d’un portail public et d’un dashboard administratif, relié à une base de données et à des vues cartographiques interactives.",
    impact:
      "Une référence professionnelle directement liée à l’administration agricole, à la diffusion d’information et à la visualisation de données territoriales.",
    features: [
      "Portail institutionnel",
      "Annuaire des prestataires",
      "Cartographie interactive",
      "Documentation sectorielle",
      "Dashboard statistique",
      "Administration des contenus",
    ],
    stack: ["React", "Material UI", "Leaflet", "Firebase", "Vite"],
    tags: ["Cartographie", "Dashboard", "Firebase", "Agriculture"],
    visual: "image",
    image: "/projects/drae-site.png",
    imageAlt: "Cartographie des acteurs sur le site de la DRAE Vakinankaratra",
    externalUrl: "https://drae-vakinankaratra.web.app/",
  },
  {
    slug: "p-dipping-app",
    title: "P-Dipping App",
    eyebrow: "Collecte de données agricoles",
    status: "Projet professionnel",
    period: "Application terrain",
    summary:
      "Une application mobile pour enregistrer et transmettre les données de vente et accompagner la diffusion de la technique P-Dipping.",
    description:
      "L’application combine saisie opérationnelle, synchronisation des données et fiches techniques destinées à la formation des utilisateurs.",
    role:
      "Conception de l’expérience mobile, développement Flutter, intégration des données et préparation des contenus techniques.",
    challenge:
      "Faciliter une collecte structurée sur mobile tout en gardant les informations techniques directement disponibles pour les agents et utilisateurs.",
    solution:
      "Un parcours mobile simple pour créer, modifier, supprimer et synchroniser les enregistrements, complété par une interface d’administration.",
    impact:
      "Une expérience concrète de collecte agricole sur le terrain et de liaison entre application mobile, données centralisées et vulgarisation technique.",
    features: [
      "Saisie des ventes",
      "Modification et suppression",
      "Synchronisation des données",
      "Administration centralisée",
      "Fiches techniques",
      "Interface adaptée au mobile",
    ],
    stack: ["Flutter", "Dart", "Firebase", "Mobile"],
    tags: ["Flutter", "Collecte", "Firebase", "Agriculture"],
    visual: "image",
    image: "/projects/pdip-app.png",
    imageAlt: "Interface mobile de l’application P-Dipping",
  },
];

export const expertise = [
  {
    number: "01",
    title: "Agriculture numérique",
    description:
      "Plateformes de connaissances, collecte terrain, cartographie et services adaptés aux acteurs agricoles.",
    items: ["Vulgarisation", "Collecte mobile", "Cartographie", "Outils institutionnels"],
  },
  {
    number: "02",
    title: "Suivi-évaluation",
    description:
      "Systèmes métier pour structurer les cadres logiques, les indicateurs, les plans et les réalisations.",
    items: ["Cadre logique", "PTA / PTBA", "Indicateurs", "Contrôle de cohérence"],
  },
  {
    number: "03",
    title: "Data & aide à la décision",
    description:
      "Modélisation, consolidation et restitution de données fiables dans des tableaux de bord utiles.",
    items: ["PostgreSQL", "SQL", "Dashboards", "Qualité des données"],
  },
];

export const capabilities = [
  {
    title: "Produit & architecture",
    items: ["Analyse métier", "Architecture fonctionnelle", "UX métier", "Déploiement"],
  },
  {
    title: "Full-stack",
    items: ["Next.js", "TypeScript", "React", "Prisma", "Supabase", "PostgreSQL"],
  },
  {
    title: "Mobile & terrain",
    items: ["Flutter", "Dart", "Offline-first", "Synchronisation", "Firebase"],
  },
  {
    title: "Data & intelligence",
    items: ["SQL", "Python", "Leaflet", "pgvector", "Recherche hybride", "Gemini"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
