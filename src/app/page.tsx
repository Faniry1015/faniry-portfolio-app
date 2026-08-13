import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  ContactRound,
  Database,
  Download,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sprout,
  Workflow,
} from "lucide-react";
import { ProjectCard } from "@/ui/project-card";
import { SectionHeading } from "@/ui/section-heading";
import { capabilities, expertise, projects } from "@/data/portfolio";

const processSteps = [
  {
    number: "01",
    title: "Comprendre le terrain",
    description:
      "Clarifier les utilisateurs, les décisions à soutenir et les contraintes réelles avant de choisir la technologie.",
  },
  {
    number: "02",
    title: "Auditer et structurer",
    description:
      "Vérifier les indicateurs, les sources, les règles de qualité et les parcours de données avant de bâtir la réponse.",
  },
  {
    number: "03",
    title: "Construire la réponse",
    description:
      "Mettre en place les outils, procédures, tableaux de bord ou systèmes numériques adaptés au niveau de risque.",
  },
  {
    number: "04",
    title: "Transférer et améliorer",
    description:
      "Tester, documenter, former les utilisateurs et organiser une amélioration continue fondée sur les retours du terrain.",
  },
];

const priorityServices = [
  {
    icon: Database,
    label: "Offre d’entrée",
    title: "Data Quality Audit",
    description:
      "Un diagnostic court pour identifier les anomalies, les risques et les corrections prioritaires dans votre chaîne de données.",
    deliverables: ["Revue des outils et bases", "Contrôles de cohérence", "Plan d’action priorisé"],
    subject: "Échange — Data Quality Audit",
  },
  {
    icon: Workflow,
    label: "Système complet",
    title: "Digital M&E System",
    description:
      "Un dispositif cohérent qui relie indicateurs, collecte, base de données, dashboard, procédures et appropriation par l’équipe.",
    deliverables: ["Architecture MEL & data", "Collecte et tableaux de bord", "Documentation et formation"],
    subject: "Échange — Digital M&E System",
  },
  {
    icon: MapPin,
    label: "Partenaire local",
    title: "Madagascar Research & Field Partner",
    description:
      "Un relais opérationnel à Madagascar pour préparer et coordonner des études, enquêtes et missions de terrain fiables.",
    deliverables: ["Équipes et logistique terrain", "Collecte numérique et SIG", "Qualité et reporting"],
    subject: "Échange — Madagascar Research & Field Partner",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Faniriantsoa Randriaharimino",
  url: "https://faniriantsoa-portfolio.firebaseapp.com",
  image: "https://faniriantsoa-portfolio.firebaseapp.com/images/faniry.png",
  jobTitle: "Consultant Data, MEL, Digital Systems et GIS",
  address: {
    "@type": "PostalAddress",
    addressCountry: "MG",
  },
  sameAs: [
    "https://github.com/Faniry1015",
    "https://www.linkedin.com/in/faniriantsoa/",
  ],
  knowsAbout: [
    "Agriculture numérique",
    "Suivi-évaluation",
    "Qualité des données",
    "Systèmes d’information",
    "Systèmes d’information géographique",
    "Recherche terrain",
    "Analyse de données",
  ],
};

export default function Home() {
  return (
    <main id="contenu">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="shell hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Data • MEL • Digital Systems • GIS
            </p>
            <h1>
              J’aide les projets à passer de la {" "}
              <span>donnée terrain à la décision.</span>
            </h1>
            <p className="hero-lead">
              Collecte numérique, qualité des données, suivi-évaluation, SIG,
              dashboards et systèmes métier — à Madagascar, à distance ou comme
              partenaire local.
            </p>
            <div className="hero-actions">
              <a className="button" href="#projets">
                Voir les études de cas <ArrowDown size={18} aria-hidden="true" />
              </a>
              <a className="button button--ghost" href="mailto:frandriaharimino@yahoo.com?subject=Échange%20sur%20une%20mission">
                Parler d’une mission <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-location">
              <MapPin size={18} aria-hidden="true" />
              <span>Basé à Madagascar • Collaboration locale et à distance</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-card">
              <div className="portrait-card__accent" />
              <Image
                src="/images/faniry.png"
                alt="Faniriantsoa Randriaharimino"
                width={324}
                height={332}
                priority
              />
              <div className="portrait-card__caption">
                <span className="status-dot" />
                <div>
                  <strong>Consultant & partenaire local</strong>
                  <small>Data • MEL • Digital • GIS</small>
                </div>
              </div>
            </div>
            <div className="hero-signal hero-signal--top">
              <Database size={18} aria-hidden="true" />
              <span>
                <small>Chaîne complète</small>
                Terrain → reporting
              </span>
            </div>
            <div className="hero-signal hero-signal--bottom">
              <Workflow size={18} aria-hidden="true" />
              <span>
                <small>Deux formats</small>
                Consultant · équipe locale
              </span>
            </div>
          </div>
        </div>

        <div className="shell proof-strip" aria-label="Principales preuves d’expérience">
          <div className="proof-item">
            <Sprout size={18} aria-hidden="true" />
            <span><strong>12+ ans</strong><small>développement rural</small></span>
          </div>
          <div className="proof-item">
            <Workflow size={18} aria-hidden="true" />
            <span><strong>8+ ans</strong><small>suivi-évaluation</small></span>
          </div>
          <div className="proof-item">
            <BarChart3 size={18} aria-hidden="true" />
            <span><strong>48 rapports</strong><small>produits et consolidés</small></span>
          </div>
          <div className="proof-item">
            <MapPin size={18} aria-hidden="true" />
            <span><strong>13 000+ producteurs</strong><small>registre régional contrôlé</small></span>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="shell">
          <SectionHeading
            eyebrow="Services prioritaires"
            title="Trois réponses concrètes aux besoins des projets de développement."
            description="Une intervention peut commencer par un diagnostic ciblé, évoluer vers un système complet ou mobiliser une capacité locale de recherche et de coordination à Madagascar."
          />
          <div className="services-grid">
            {priorityServices.map((service) => {
              const Icon = service.icon;

              return (
                <article className="service-card" key={service.title}>
                  <div className="service-card__topline">
                    <span className="service-card__icon"><Icon size={21} aria-hidden="true" /></span>
                    <span className="service-card__label">{service.label}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable}>
                        <CheckCircle2 size={16} aria-hidden="true" /> {deliverable}
                      </li>
                    ))}
                  </ul>
                  <a
                    className="text-link"
                    href={`mailto:frandriaharimino@yahoo.com?subject=${encodeURIComponent(service.subject)}`}
                  >
                    Discuter de ce besoin <ArrowRight size={17} aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--tint" id="expertise">
        <div className="shell">
          <SectionHeading
            eyebrow="Mes domaines d’intervention"
            title="Une chaîne continue entre terrain, données et décision."
            description="Je combine expérience institutionnelle, méthodes MEL, analyse, SIG et ingénierie numérique pour traiter le problème dans son ensemble."
          />
          <div className="expertise-grid">
            {expertise.map((item) => (
              <article className="expertise-card" key={item.number}>
                <span className="expertise-card__number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul>
                  {item.items.map((entry) => (
                    <li key={entry}>
                      <CheckCircle2 size={16} aria-hidden="true" /> {entry}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projets">
        <div className="shell">
          <SectionHeading
            eyebrow="Études de cas"
            title="Des systèmes, études et livrables ancrés dans le réel."
            description="Ces expériences illustrent la chaîne complète : enquête terrain, qualité des données, suivi-évaluation, capitalisation et outils numériques."
          />
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark" id="approche">
        <div className="shell">
          <SectionHeading
            eyebrow="Mon approche"
            title="Du besoin à un dispositif réellement exploitable."
            description="Une méthode simple pour clarifier les décisions à soutenir, fiabiliser les données et transférer une solution que les équipes peuvent utiliser."
          />
          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-step" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="capacites-title">
        <div className="shell capabilities-layout">
          <div className="capabilities-intro">
            <p className="eyebrow">Capacités</p>
            <h2 id="capacites-title">Une expertise hybride, du cadre de résultats au système numérique.</h2>
            <p>
              J’interviens sur toute la chaîne utile : conception du dispositif,
              collecte, qualité, analyse, cartographie, restitution et accompagnement.
            </p>
          </div>
          <div className="capabilities-list">
            {capabilities.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--about" id="a-propos">
        <div className="shell about-layout">
          <div className="about-monogram" aria-hidden="true">
            <span>FR</span>
            <Sprout size={46} strokeWidth={1.4} />
          </div>
          <div className="about-copy">
            <p className="eyebrow">À propos</p>
            <h2>Une double lecture : le terrain et le système.</h2>
            <p className="about-lead">
              Je travaille avec les projets de développement dans des environnements où
              la qualité des données, la compréhension du terrain et la simplicité des
              systèmes sont indissociables.
            </p>
            <p>
              Plus de douze années dans le développement rural et plus de huit années en
              suivi-évaluation me permettent de dialoguer avec les équipes terrain, les
              institutions, les chercheurs et les développeurs — puis de traduire leurs
              besoins en processus, données et outils utilisables.
            </p>
            <div className="about-links">
              <a
                href="/documents/CV_Faniriantsoa_RANDRIAHARIMINO.pdf"
                download
              >
                <Download size={19} aria-hidden="true" /> Télécharger mon CV (PDF)
              </a>
              <a
                href="https://github.com/Faniry1015"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={19} aria-hidden="true" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/faniriantsoa/"
                target="_blank"
                rel="noreferrer"
              >
                <ContactRound size={19} aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-panel">
          <div>
            <p className="eyebrow">Un besoin, une idée, un projet ?</p>
            <h2>Fiabilisons vos données et votre pilotage.</h2>
            <p>
              Audit qualité, système MEL numérique ou mission de recherche à Madagascar :
              commençons par clarifier le résultat attendu.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button--light" href="mailto:frandriaharimino@yahoo.com">
              <Mail size={19} aria-hidden="true" /> Écrire un message
            </a>
            <div className="contact-details">
              <span><Mail size={17} aria-hidden="true" /> frandriaharimino@yahoo.com</span>
              <a href="tel:+261340871766"><Phone size={17} aria-hidden="true" /> +261 34 08 717 66</a>
              <a
                href="https://wa.me/261340581360?text=Bonjour%20Faniriantsoa%2C%20je%20vous%20contacte%20depuis%20votre%20portfolio."
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} aria-hidden="true" /> WhatsApp&nbsp;: +261 34 05 813 60
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
