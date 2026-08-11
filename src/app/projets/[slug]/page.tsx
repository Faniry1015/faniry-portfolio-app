import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Coins,
  ExternalLink,
  Smartphone,
  Sprout,
} from "lucide-react";
import { getProject, projects, type Project } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projets/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/projets/${project.slug}`,
      type: "article",
    },
  };
}

function CaseVisual({ project }: { project: Project }) {
  if (project.visual === "image" && project.image) {
    return (
      <div className="case-visual case-visual--image">
        <Image
          src={project.image}
          alt={project.imageAlt ?? ""}
          fill
          priority
          sizes="(max-width: 800px) 100vw, 45vw"
        />
      </div>
    );
  }

  if (project.visual === "mobile") {
    return (
      <div className="case-visual case-visual--mobile" aria-hidden="true">
        <div className="case-phone">
          <span className="case-phone__speaker" />
          <div className="case-phone__screen">
            <Smartphone size={40} strokeWidth={1.4} />
            <strong>Gestion hors connexion</strong>
            <span>Cotisations · Prêts · Clôture</span>
            <Coins size={28} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="case-visual case-visual--agri" aria-hidden="true">
      <div className="case-agri__sun" />
      <div className="case-agri__field case-agri__field--one" />
      <div className="case-agri__field case-agri__field--two" />
      <Sprout size={92} strokeWidth={1.2} />
      <span>Connaissance • Acteurs • Échanges</span>
    </div>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main id="contenu" className="case-study">
      <section className="case-study-hero">
        <div className="shell">
          <Link className="back-link" href="/#projets">
            <ArrowLeft size={17} aria-hidden="true" /> Retour aux projets
          </Link>
          <div className="case-study-hero__grid">
            <div className="case-study-hero__copy">
              <p className="eyebrow">{project.eyebrow}</p>
              <h1>{project.title}</h1>
              <p className="case-study-hero__lead">{project.description}</p>
              <div className="case-study-hero__actions">
                <span className="status-pill">
                  <span className="status-dot" /> {project.status}
                </span>
                {project.externalUrl ? (
                  <a
                    className="text-link"
                    href={project.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visiter le projet <ExternalLink size={16} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </div>
            <CaseVisual project={project} />
          </div>
        </div>
      </section>

      <section className="section case-study-content">
        <div className="shell case-study-layout">
          <aside className="case-facts" aria-label="Informations sur le projet">
            <div>
              <span>Période</span>
              <strong>{project.period}</strong>
            </div>
            <div>
              <span>Statut</span>
              <strong>{project.status}</strong>
            </div>
            <div>
              <span>Domaine</span>
              <strong>{project.eyebrow}</strong>
            </div>
          </aside>

          <article className="case-narrative">
            <section>
              <p className="case-label">Le défi</p>
              <h2>Partir du problème métier.</h2>
              <p>{project.challenge}</p>
            </section>
            <section>
              <p className="case-label">La réponse</p>
              <h2>Construire un système cohérent.</h2>
              <p>{project.solution}</p>
            </section>
            <section>
              <p className="case-label">Mon rôle</p>
              <h2>Intervenir sur toute la chaîne utile.</h2>
              <p>{project.role}</p>
            </section>
            <section className="case-impact">
              <p className="case-label">Résultat</p>
              <p>{project.impact}</p>
            </section>
          </article>
        </div>
      </section>

      <section className="section section--tint">
        <div className="shell">
          <SectionTitle
            eyebrow="Fonctionnalités"
            title="Les briques principales de la solution."
          />
          <div className="feature-grid">
            {project.features.map((feature) => (
              <div key={feature}>
                <Check size={18} aria-hidden="true" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <div className="case-stack">
            <p className="case-label">Socle technique</p>
            <ul className="tag-list tag-list--large">
              {project.stack.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="next-project">
        <div className="shell next-project__inner">
          <div>
            <p className="eyebrow">Étude de cas suivante</p>
            <h2>{nextProject.title}</h2>
          </div>
          <Link className="button button--ghost" href={`/projets/${nextProject.slug}`}>
            Découvrir <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="contact-section contact-section--compact">
        <div className="shell contact-panel">
          <div>
            <p className="eyebrow">Votre projet</p>
            <h2>Vous avez un besoin métier à transformer ?</h2>
          </div>
          <a className="button button--light" href="mailto:frandriaharimino@yahoo.com">
            Échangeons <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}
