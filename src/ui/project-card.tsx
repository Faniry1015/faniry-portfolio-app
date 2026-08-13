import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Coins,
  ExternalLink,
  Leaf,
  MapPinned,
  Smartphone,
  Sprout,
} from "lucide-react";
import type { Project } from "@/data/portfolio";

function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === "registry") {
    return (
      <div className="project-visual project-visual--evidence project-visual--registry" aria-hidden="true">
        <div className="registry-grid"><span /><span /><span /><span /><span /><span /></div>
        <div className="evidence-symbol evidence-symbol--brand evidence-symbol--minae">
          <Image src="/projects/logo-minae.png" alt="" fill sizes="132px" />
        </div>
        <span className="visual-chip visual-chip--top">13 000+ producteurs</span>
        <span className="visual-chip visual-chip--bottom">7 districts</span>
      </div>
    );
  }

  if (project.visual === "research") {
    return (
      <div className="project-visual project-visual--evidence project-visual--research" aria-hidden="true">
        <div className="evidence-map" />
        <div className="evidence-symbol">
          <MapPinned size={46} strokeWidth={1.5} />
        </div>
        <span className="visual-chip visual-chip--top">RGA & EAA</span>
        <span className="visual-chip visual-chip--bottom">CAPI & qualité</span>
      </div>
    );
  }

  if (project.visual === "mel") {
    return (
      <div className="project-visual project-visual--evidence project-visual--mel" aria-hidden="true">
        <div className="evidence-bars"><span /><span /><span /><span /></div>
        <div className="evidence-symbol">
          <BarChart3 size={46} strokeWidth={1.5} />
        </div>
        <span className="visual-chip visual-chip--top">48 rapports</span>
        <span className="visual-chip visual-chip--bottom">PTAB & indicateurs</span>
      </div>
    );
  }

  if (project.visual === "report") {
    return (
      <div className="project-visual project-visual--evidence project-visual--report" aria-hidden="true">
        <div className="report-sheet"><span /><span /><span /><span /></div>
        <div className="evidence-symbol evidence-symbol--brand evidence-symbol--purpa">
          <Image src="/projects/logo-purpa.jpg" alt="" fill sizes="144px" />
        </div>
        <span className="visual-chip visual-chip--top">Rapport final</span>
        <span className="visual-chip visual-chip--bottom">Capitalisation</span>
      </div>
    );
  }

  if (project.visual === "agri") {
    return (
      <div className="project-visual project-visual--agri" aria-hidden="true">
        <div className="agri-orbit agri-orbit--one" />
        <div className="agri-orbit agri-orbit--two" />
        <div className="agri-symbol">
          <Sprout size={52} strokeWidth={1.5} />
        </div>
        <span className="visual-chip visual-chip--top">
          <MapPinned size={15} /> Acteurs
        </span>
        <span className="visual-chip visual-chip--bottom">
          <Leaf size={15} /> Connaissances
        </span>
      </div>
    );
  }

  if (project.visual === "mobile") {
    return (
      <div className="project-visual project-visual--mobile" aria-hidden="true">
        <div className="phone-frame">
          <div className="phone-speaker" />
          <div className="phone-content">
            <div className="phone-balance">
              <span>Solde du groupe</span>
              <strong>••• ••• Ar</strong>
            </div>
            <div className="phone-bars">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="phone-actions">
              <Smartphone size={19} />
              <Coins size={19} />
              <BarChart3 size={19} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const isFieldPhoto =
    project.slug === "jircas-tsukuba-recherche-terrain" ||
    project.slug === "enquetes-agricoles-rga-eaa";

  return (
    <div
      className={`project-visual project-visual--image ${isFieldPhoto ? "project-visual--photo" : ""}`}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={project.imageAlt ?? ""}
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
        />
      ) : null}
      {project.slug === "jircas-tsukuba-recherche-terrain" ? (
        <div className="project-photo-stats" aria-label="600 ménages dans 25 communes">
          <span>600 ménages</span>
          <span>25 communes</span>
        </div>
      ) : null}
      {project.slug === "enquetes-agricoles-rga-eaa" ? (
        <div className="project-photo-stats" aria-label="RGA et EAA, collecte CAPI et qualité">
          <span>RGA &amp; EAA</span>
          <span>CAPI &amp; qualité</span>
        </div>
      ) : null}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card ${project.featured ? "project-card--featured" : ""}`}>
      <Link className="project-card__visual-link" href={`/projets/${project.slug}`}>
        <ProjectVisual project={project} />
      </Link>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.eyebrow}</span>
          <span>{project.period}</span>
        </div>
        <h3>
          <Link href={`/projets/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.summary}</p>
        <ul className="tag-list" aria-label={`Technologies et thèmes de ${project.title}`}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-card__actions">
          <Link className="button button--compact button--ghost" href={`/projets/${project.slug}`}>
            Étude de cas <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          {project.externalUrl ? (
            <a
              className="button button--compact"
              href={project.externalUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Voir ${project.title} en ligne dans un nouvel onglet`}
            >
              Projet en ligne <ExternalLink size={15} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
