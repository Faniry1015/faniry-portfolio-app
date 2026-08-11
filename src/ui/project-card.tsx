import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Coins,
  Leaf,
  MapPinned,
  Smartphone,
  Sprout,
} from "lucide-react";
import type { Project } from "@/data/portfolio";

function ProjectVisual({ project }: { project: Project }) {
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

  return (
    <div className="project-visual project-visual--image">
      {project.image ? (
        <Image
          src={project.image}
          alt={project.imageAlt ?? ""}
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
        />
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
        <Link className="text-link" href={`/projets/${project.slug}`}>
          Voir l’étude de cas <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
