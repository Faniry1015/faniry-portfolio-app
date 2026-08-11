import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Braces,
  CheckCircle2,
  Code2,
  ContactRound,
  Database,
  Mail,
  MapPin,
  Smartphone,
  Sparkles,
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
    title: "Structurer le métier et la donnée",
    description:
      "Transformer les règles, indicateurs et parcours en un modèle cohérent, testable et durable.",
  },
  {
    number: "03",
    title: "Concevoir et développer",
    description:
      "Construire une expérience simple sur une architecture full-stack adaptée au niveau de risque du produit.",
  },
  {
    number: "04",
    title: "Livrer et accompagner",
    description:
      "Tester les cas métier, documenter, déployer et préparer les utilisateurs à prendre en main la solution.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Faniriantsoa Randriaharimino",
  url: "https://faniriantsoa-portfolio.firebaseapp.com",
  image: "https://faniriantsoa-portfolio.firebaseapp.com/images/faniry.png",
  jobTitle: "Concepteur-développeur full-stack et mobile",
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
    "Analyse de données",
    "Next.js",
    "Flutter",
    "PostgreSQL",
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
              Agriculture numérique • Suivi-évaluation • Data
            </p>
            <h1>
              Je développe des outils numériques au service {" "}
              <span>du terrain et de la décision.</span>
            </h1>
            <p className="hero-lead">
              Plateformes web, applications mobiles et systèmes d’aide à la décision —
              de l’analyse du besoin métier jusqu’au déploiement et à l’accompagnement.
            </p>
            <div className="hero-actions">
              <a className="button" href="#projets">
                Découvrir mes projets <ArrowDown size={18} aria-hidden="true" />
              </a>
              <a className="button button--ghost" href="mailto:frandriaharimino@yahoo.com">
                Parler d’un besoin <ArrowRight size={18} aria-hidden="true" />
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
                  <strong>Concepteur-développeur</strong>
                  <small>Full-stack • Mobile • Data</small>
                </div>
              </div>
            </div>
            <div className="hero-signal hero-signal--top">
              <Database size={18} aria-hidden="true" />
              <span>
                <small>Données</small>
                PostgreSQL · Supabase
              </span>
            </div>
            <div className="hero-signal hero-signal--bottom">
              <Workflow size={18} aria-hidden="true" />
              <span>
                <small>Produits métier</small>
                Web · Mobile · IA
              </span>
            </div>
          </div>
        </div>

        <div className="shell proof-strip" aria-label="Principales expertises techniques">
          <span>
            <Braces size={18} aria-hidden="true" /> Next.js & TypeScript
          </span>
          <span>
            <Smartphone size={18} aria-hidden="true" /> Flutter offline-first
          </span>
          <span>
            <BarChart3 size={18} aria-hidden="true" /> Indicateurs & dashboards
          </span>
          <span>
            <Sparkles size={18} aria-hidden="true" /> Recherche & IA appliquée
          </span>
        </div>
      </section>

      <section className="section" id="expertise">
        <div className="shell">
          <SectionHeading
            eyebrow="Mes domaines d’intervention"
            title="Le métier d’abord. La technologie au service du résultat."
            description="Je travaille à l’intersection des besoins terrain, des systèmes d’information et de l’ingénierie logicielle."
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

      <section className="section section--tint" id="projets">
        <div className="shell">
          <SectionHeading
            eyebrow="Études de cas"
            title="Des produits complets, conçus pour des usages réels."
            description="Chaque projet part d’un problème métier concret et relie interface, données, règles de gestion et déploiement."
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
            title="De l’idée au produit exploitable."
            description="Une méthode simple pour réduire les incompréhensions, fiabiliser les données et livrer une solution qui peut réellement être utilisée."
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
            <h2 id="capacites-title">Une vision de produit, une pratique full-stack.</h2>
            <p>
              J’interviens sur toute la chaîne utile : compréhension du besoin,
              architecture, données, interfaces, tests, déploiement et documentation.
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
              Je conçois des outils numériques pour des environnements où la qualité des
              données, la simplicité d’usage et la compréhension du métier sont
              indissociables.
            </p>
            <p>
              Mon travail couvre aujourd’hui des plateformes agricoles bilingues, des
              systèmes de suivi-évaluation, des applications mobiles hors connexion et
              des dashboards institutionnels. Cette diversité me permet de dialoguer
              avec les utilisateurs métier comme avec les équipes techniques.
            </p>
            <div className="about-links">
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
            <h2>Construisons une solution utile et durable.</h2>
            <p>
              Agriculture, suivi-évaluation, data ou application métier : commençons
              par clarifier le problème à résoudre.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button--light" href="mailto:frandriaharimino@yahoo.com">
              <Mail size={19} aria-hidden="true" /> Écrire un message
            </a>
            <a href="tel:+261340871766">+261 34 08 717 66</a>
          </div>
        </div>
      </section>
    </main>
  );
}
