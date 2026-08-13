export type ProjectVisual = "agri" | "image" | "mobile" | "research" | "mel" | "report" | "registry";

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
    eyebrow: "Système numérique institutionnel",
    status: "V1 en phase de livraison",
    period: "2025 — 2026",
    summary:
      "Une plateforme bilingue qui structure les connaissances, les acteurs, les services et les échanges de la vulgarisation agricole.",
    description:
      "Agri-Vulgarisation réunit un site public bilingue, une administration structurée, les ressources et formations, l’annuaire cartographié des acteurs ainsi que des espaces d’échange communautaire.",
    role:
      "Conception produit, architecture full-stack, modélisation des données, développement, sécurisation, tests, documentation et préparation de la livraison.",
    challenge:
      "Les connaissances, ressources et informations sur les acteurs sont dispersées entre documents, organismes et canaux informels. Leur diffusion exige un point d’accès simple, bilingue et administrable.",
    solution:
      "Une plateforme éditoriale et communautaire avec CMS, actualités, ressources, formations, pratiques, annuaire cartographié, forum modéré, messagerie privée et assistant documentaire relié aux contenus publiés.",
    impact:
      "Une V1 fonctionnelle et documentée, en phase de livraison, qui relie contenus, acteurs, cartographie et communauté dans un même système bilingue.",
    features: [
      "Ressources, formations et bonnes pratiques",
      "Annuaire et cartographie des acteurs",
      "Forum et capitalisation des échanges",
      "Administration éditoriale et gouvernance",
      "Assistant documentaire et indexation des PDF",
      "Interface bilingue français / malgache",
      "Audit, sauvegardes et modération",
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
    tags: ["Institutionnel", "Bilingue", "Données", "Communauté"],
    visual: "image",
    image: "/projects/hero-agri-vulg-dvfar.png",
    imageAlt: "Identité visuelle du projet Agri-Vulgarisation Madagascar",
    featured: true,
  },
  {
    slug: "jircas-tsukuba-recherche-terrain",
    title: "Recherche terrain JIRCAS / Université de Tsukuba",
    eyebrow: "Recherche & données terrain",
    status: "Mission achevée",
    period: "2021 — 2025",
    summary:
      "Plusieurs vagues d’enquête auprès de 600 ménages dans 25 communes, avec collecte numérique et contrôle qualité quotidien.",
    description:
      "Une mission de recherche sur l’adoption et les effets économiques de la technique P-Dipping, menée avec un dispositif terrain exigeant et un reporting technique en anglais.",
    role:
      "Coordination terrain, préparation des questionnaires numériques, formation et supervision de douze enquêteurs, contrôle quotidien de la qualité et contribution aux rapports techniques en anglais.",
    challenge:
      "Produire des données comparables et complètes sur plusieurs vagues d’enquête, auprès de ménages dispersés dans 25 communes, tout en maîtrisant les erreurs de saisie et les délais terrain.",
    solution:
      "Un protocole combinant collecte numérique, formation des enquêteurs, supervision rapprochée, contrôles journaliers, correction rapide des anomalies et documentation régulière de l’avancement.",
    impact:
      "Lors de l’enquête finale, 593 questionnaires complets sur 600 ont été obtenus, soit un taux de complétude de 99 %, avec des livrables techniques produits en anglais.",
    features: [
      "Enquête auprès de 600 ménages",
      "Couverture de 25 communes",
      "Formation et supervision de 12 enquêteurs",
      "Questionnaires et collecte numériques",
      "Contrôle qualité quotidien",
      "Rapports techniques en anglais",
    ],
    stack: [
      "Conception d’enquête",
      "Collecte numérique",
      "Contrôle qualité",
      "Analyse de données",
      "Reporting en anglais",
    ],
    tags: ["600 ménages", "25 communes", "Data Quality", "Recherche"],
    visual: "image",
    image: "/projects/equipe-jircas-p-dipping-retouchee.png",
    imageAlt:
      "Équipe d’enquête JIRCAS sur le terrain dans les rizières du Vakinankaratra",
    featured: true,
  },
  {
    slug: "enquetes-agricoles-rga-eaa",
    title: "Enquêtes agricoles RGA & EAA",
    eyebrow: "Statistiques agricoles & terrain",
    status: "Missions récurrentes • RGA-3 en cours",
    period: "2024 — 2026",
    summary:
      "Chef d’équipe sur des opérations de dénombrement, d’enquête ménage et de sondage de rendement agricole.",
    description:
      "Des missions de statistiques agricoles menées dans le Vakinankaratra, de la préparation des itinéraires au suivi de la collecte numérique, au contrôle de cohérence et à la résolution des difficultés terrain.",
    role:
      "Chef d’équipe terrain : repérage des zones de dénombrement, organisation des itinéraires, encadrement des agents, suivi des tablettes et synchronisations, contrôles de cohérence et remontée des anomalies.",
    challenge:
      "Atteindre des ménages dispersés dans des zones parfois enclavées, maintenir le rythme de collecte malgré les contraintes de réseau, de GPS et d’autonomie, et sécuriser la qualité des données transmises.",
    solution:
      "Une coordination quotidienne combinant itinéraires détaillés, briefings, contrôles en ligne et sur le terrain, correction rapide des anomalies et adaptation logistique aux réalités de chaque zone.",
    impact:
      "Pour l’EAA 2024, l’équipe a réalisé 150 enquêtes ménage dans 10 zones de dénombrement. Le sondage de rendement 2025 a couvert 80 ménages répartis dans 16 zones, 12 communes et deux districts. En 2026, la mission se poursuit comme chef de l’équipe 366 du RGA-3.",
    features: [
      "Dénombrement et enquêtes ménages",
      "Sondages de rendement agricole",
      "Planification des itinéraires",
      "Encadrement des équipes terrain",
      "Collecte CAPI sur tablettes",
      "Contrôle qualité et synchronisation",
    ],
    stack: [
      "CAPI",
      "Tablettes",
      "GPS",
      "Zones de dénombrement",
      "Contrôle de cohérence",
      "Encadrement terrain",
    ],
    tags: ["RGA-3", "EAA", "Chef d’équipe", "Data Quality"],
    visual: "image",
    image: "/projects/equipe-rga3-betafo-retouchee.png",
    imageAlt:
      "Équipe RGA-3 devant la Circonscription de l’Agriculture de Betafo",
  },
  {
    slug: "manjohy",
    title: "Manjohy",
    eyebrow: "Suivi-évaluation & data",
    status: "Version web accessible • développement avancé",
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
      "Une version web opérationnelle qui transforme le cadre logique, la planification et les réalisations en données de pilotage, avec des calculs vérifiables et des alertes sur les incohérences de désagrégation.",
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
    externalUrl: "https://manjohy.vercel.app/",
  },
  {
    slug: "systeme-regional-suivi-evaluation",
    title: "Système régional de suivi-évaluation",
    eyebrow: "MEL institutionnel",
    status: "Expérience institutionnelle",
    period: "2017 — 2025",
    summary:
      "Pilotage des PTAB, indicateurs, réalisations et dépenses d’une direction régionale, avec reporting périodique consolidé.",
    description:
      "Un dispositif de suivi-évaluation reliant planification, collecte des réalisations, suivi financier, consolidation des données et restitution aux responsables institutionnels.",
    role:
      "Responsable du service suivi-évaluation : coordination du PTAB, consolidation des indicateurs, suivi physique et financier, contrôle des données et production des rapports.",
    challenge:
      "Consolider des informations produites par plusieurs services et projets, selon des calendriers et formats différents, afin de donner une lecture fiable de l’avancement régional.",
    solution:
      "Des outils harmonisés, un calendrier de remontée, des contrôles de cohérence et une routine mensuelle et trimestrielle de consolidation et de reporting.",
    impact:
      "Production de 48 rapports périodiques et suivi régulier de deux à trois projets d’investissement public par an, en complément du PTAB régional.",
    features: [
      "Planification PTAB",
      "Suivi des indicateurs",
      "Suivi physique et financier",
      "Contrôle de cohérence",
      "Consolidation multi-services",
      "Reporting mensuel et trimestriel",
    ],
    stack: ["PTAB", "Cadre de résultats", "Excel", "Qualité des données", "Reporting"],
    tags: ["8+ ans MEL", "48 rapports", "PTAB", "Institutionnel"],
    visual: "mel",
  },
  {
    slug: "purpa-reporting-capitalisation",
    title: "PURPA — reporting & capitalisation",
    eyebrow: "MEL projet & reporting bailleur",
    status: "Mission achevée",
    period: "2022 — 2026",
    summary:
      "Un mandat régional de suivi-évaluation dans le Vakinankaratra, complété par une sollicitation distincte pour le rapport final et la capitalisation nationale.",
    description:
      "Deux responsabilités complémentaires mais distinctes : le suivi régional du PURPA dans le Vakinankaratra comme chef SRSISESA, puis une mission spécifique de rapportage final et de capitalisation à l’échelle nationale.",
    role:
      "Mandat régional — comme chef SRSISESA : gestion du suivi-évaluation et de la base du Vakinankaratra, contrôle des données des sept districts et reporting régional. Mission nationale distincte — sollicité spécifiquement à la clôture pour consolider les résultats, assurer la rédaction principale du rapport final et du document de capitalisation, et contribuer à la restitution.",
    challenge:
      "Consolider plusieurs campagnes, districts, filières et catégories d’intrants sans confondre bénéficiaires uniques et appuis cumulés, puis transformer les données en une lecture fiable des réalisations.",
    solution:
      "Au niveau régional, un suivi structuré par campagne et territoire avec contrôles de cohérence et consolidation des sept districts. Au niveau national, un travail séparé de synthèse, de rédaction orientée résultats et de capitalisation pour la clôture du projet.",
    impact:
      "Sur quatre campagnes, le suivi régional a couvert 13 643 appuis EAF cumulés dans les sept districts, 233 828 kg de semences, 195 020 kg de NPK et 7 351 450 kg d’engrais biologiques.",
    features: [
      "Régional — suivi de quatre campagnes",
      "Régional — base et qualité des données",
      "Régional — consolidation des sept districts",
      "Régional — reporting du Vakinankaratra",
      "National — rédaction principale du rapport final",
      "National — document et restitution de capitalisation",
    ],
    stack: ["Suivi-évaluation", "Excel", "Base de données", "Reporting", "Capitalisation", "Restitution"],
    tags: ["13 643 appuis EAF", "7 districts", "BAD", "Reporting"],
    visual: "report",
  },
  {
    slug: "registre-producteurs-vakinankaratra",
    title: "Registre régional des producteurs",
    eyebrow: "Carte producteur & données institutionnelles",
    status: "Dispositif régional coordonné",
    period: "2022 — 2024",
    summary:
      "Coordination des enquêtes, du contrôle qualité et de la validation de plus de 13 000 producteurs dans les sept districts du Vakinankaratra.",
    description:
      "Une opération régionale d’identification des producteurs destinée à alimenter la plateforme de digitalisation du MINAE et à préparer l’attribution des cartes de producteur numériques.",
    role:
      "Comme chef SRSISESA et superviseur de la plateforme : coordination des équipes dans les sept districts, suivi de la collecte, vérification des doublons et incohérences, validation avant publication et gestion de la base régionale.",
    challenge:
      "Constituer un registre régional fiable à partir de collectes décentralisées, avec des identités, localisations et pièces administratives hétérogènes, tout en limitant doublons et erreurs avant validation ministérielle.",
    solution:
      "Un circuit de supervision combinant collecte numérique, accès superviseur à la plateforme, consolidation des fichiers, contrôles d’identité et de couverture territoriale, retour aux équipes et validation progressive.",
    impact:
      "Au 4 juillet 2024, le registre régional comptait 13 141 enregistrements et 13 041 matricules producteurs uniques après contrôle des doublons, dans les sept districts et 67 communes.",
    features: [
      "Coordination de la collecte dans 7 districts",
      "Contrôle de 13 141 enregistrements",
      "13 041 matricules uniques identifiés",
      "Couverture de 67 communes",
      "Contrôle des doublons et incohérences",
      "Validation sur la plateforme du MINAE",
    ],
    stack: [
      "KoboToolbox",
      "Plateforme MINAE",
      "Excel",
      "Contrôle qualité",
      "Gestion de base",
      "Coordination terrain",
    ],
    tags: ["13 000+ producteurs", "7 districts", "67 communes", "Data Quality"],
    visual: "registry",
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
    visual: "image",
    image: "/projects/gec-app-android.png",
    imageAlt:
      "Tableau de bord de l’application GEC présenté dans un cadre Android",
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
    title: "MEL & qualité des données",
    description:
      "Cadres de résultats, collecte, contrôles et reporting pour transformer les données en décisions fiables.",
    items: ["Indicateurs", "Data Quality Audit", "PTA / PTAB", "Reporting bailleur"],
  },
  {
    number: "02",
    title: "Systèmes numériques",
    description:
      "Outils web et mobiles qui structurent les workflows, les données et les tableaux de bord des projets.",
    items: ["Collecte mobile", "Bases de données", "Dashboards", "Applications métier"],
  },
  {
    number: "03",
    title: "SIG & preuves terrain",
    description:
      "Enquêtes, cartographie et coordination locale pour documenter les réalités territoriales avec rigueur.",
    items: ["QGIS / QField", "Enquêtes numériques", "Supervision", "Cartographie"],
  },
];

export const capabilities = [
  {
    title: "MEL & reporting",
    items: ["PTAB", "Cadres de résultats", "Indicateurs", "Data Quality Audit", "Capitalisation"],
  },
  {
    title: "Data & systèmes",
    items: ["Kobo", "SQL", "PostgreSQL", "Python", "Dashboards", "Next.js", "Supabase"],
  },
  {
    title: "SIG & terrain",
    items: ["QGIS", "QField", "GPS", "Mobile offline", "Enquêtes", "Contrôle qualité"],
  },
  {
    title: "Secteur & coordination",
    items: ["Développement rural", "Institutions publiques", "Bailleurs", "Recherche", "Français / malgache / anglais"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
