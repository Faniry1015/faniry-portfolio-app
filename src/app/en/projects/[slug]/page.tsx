import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, BarChart3, Check, Coins, ExternalLink, MapPinned, Smartphone, Sprout } from "lucide-react";
import { getProjectEn, projectsEn } from "@/data/portfolio-en";
import type { Project } from "@/data/portfolio";

type ProjectPageProps = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return projectsEn.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectEn(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/en/projects/${slug}`, languages: { fr: `/projets/${slug}`, en: `/en/projects/${slug}` } },
    openGraph: { title: project.title, description: project.summary, url: `/en/projects/${slug}`, type: "article", locale: "en_US" },
  };
}

function CaseVisual({ project }: { project: Project }) {
  if (project.visual === "registry") return <div className="case-visual case-visual--evidence case-visual--registry" aria-hidden="true"><div className="case-evidence-brand case-evidence-brand--minae"><Image src="/projects/logo-minae.png" alt="" fill sizes="190px" /></div><strong>13,041 unique producer IDs</strong><span>7 districts • 67 municipalities • quality control • validation</span></div>;
  if (project.visual === "research") return <div className="case-visual case-visual--evidence case-visual--research" aria-hidden="true"><MapPinned size={92} strokeWidth={1.2} /><strong>Enumeration • surveys • crop cutting</strong><span>Itineraries • CAPI collection • field coordination • quality control</span></div>;
  if (project.visual === "mel") return <div className="case-visual case-visual--evidence case-visual--mel" aria-hidden="true"><BarChart3 size={92} strokeWidth={1.2} /><strong>48 periodic reports</strong><span>Annual work plans • indicators • physical and financial monitoring</span></div>;
  if (project.visual === "report") return <div className="case-visual case-visual--evidence case-visual--report" aria-hidden="true"><div className="case-evidence-brand case-evidence-brand--purpa"><Image src="/projects/logo-purpa.jpg" alt="" fill sizes="210px" /></div><strong>Final report & knowledge capture</strong><span>Consolidation • final workshop • learning</span></div>;
  if (project.visual === "image" && project.image) {
    const isFieldPhoto = project.slug === "jircas-tsukuba-recherche-terrain" || project.slug === "enquetes-agricoles-rga-eaa";
    return <div className={`case-visual case-visual--image ${isFieldPhoto ? "case-visual--photo" : ""}`}><Image src={project.image} alt={project.imageAlt ?? ""} fill priority sizes="(max-width: 800px) 100vw, 45vw" />{project.slug === "jircas-tsukuba-recherche-terrain" ? <div className="case-photo-stats" aria-label="JIRCAS survey figures"><span><strong>600</strong> households</span><span><strong>25</strong> municipalities</span></div> : null}{project.slug === "enquetes-agricoles-rga-eaa" ? <div className="case-photo-stats case-photo-stats--rga" aria-label="RGA and EAA survey activities"><span>Enumeration • surveys • crop cutting</span><span>CAPI • itineraries • coordination • quality</span></div> : null}</div>;
  }
  if (project.visual === "mobile") return <div className="case-visual case-visual--mobile" aria-hidden="true"><div className="case-phone"><span className="case-phone__speaker" /><div className="case-phone__screen"><Smartphone size={40} strokeWidth={1.4} /><strong>Offline management</strong><span>Contributions · Loans · Closing</span><Coins size={28} strokeWidth={1.5} /></div></div></div>;
  return <div className="case-visual case-visual--agri" aria-hidden="true"><div className="case-agri__sun" /><div className="case-agri__field case-agri__field--one" /><div className="case-agri__field case-agri__field--two" /><Sprout size={92} strokeWidth={1.2} /><span>Knowledge • Stakeholders • Exchanges</span></div>;
}

export default async function EnglishProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectEn(slug);
  if (!project) notFound();
  const currentIndex = projectsEn.findIndex((item) => item.slug === project.slug);
  const nextProject = projectsEn[(currentIndex + 1) % projectsEn.length];
  return <main id="contenu" className="case-study">
    <section className="case-study-hero"><div className="shell"><Link className="back-link" href="/en/#projects"><ArrowLeft size={17} aria-hidden="true" /> Back to projects</Link><div className="case-study-hero__grid"><div className="case-study-hero__copy"><p className="eyebrow">{project.eyebrow}</p><h1>{project.title}</h1><p className="case-study-hero__lead">{project.description}</p><div className="case-study-hero__actions"><span className="status-pill"><span className="status-dot" /> {project.status}</span>{project.externalUrl ? <a className="button button--compact" href={project.externalUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} in a new tab`}>View live project <ExternalLink size={16} aria-hidden="true" /></a> : null}</div></div><CaseVisual project={project} /></div></div></section>
    <section className="section case-study-content"><div className="shell case-study-layout"><aside className="case-facts" aria-label="Project information"><div><span>Period</span><strong>{project.period}</strong></div><div><span>Status</span><strong>{project.status}</strong></div><div><span>Area</span><strong>{project.eyebrow}</strong></div></aside><article className="case-narrative"><section><p className="case-label">The challenge</p><h2>Start with the operational problem.</h2><p>{project.challenge}</p></section><section><p className="case-label">The response</p><h2>Build a coherent system.</h2><p>{project.solution}</p></section><section><p className="case-label">My role</p><h2>Work across the useful chain.</h2><p>{project.role}</p></section><section className="case-impact"><p className="case-label">Result</p><p>{project.impact}</p></section></article></div></section>
    <section className="section section--tint"><div className="shell"><SectionTitle eyebrow="Key components" title="The main dimensions of the assignment." /><div className="feature-grid">{project.features.map((feature) => <div key={feature}><Check size={18} aria-hidden="true" /><span>{feature}</span></div>)}</div><div className="case-stack"><p className="case-label">Tools and methods</p><ul className="tag-list tag-list--large">{project.stack.map((technology) => <li key={technology}>{technology}</li>)}</ul></div></div></section>
    <section className="next-project"><div className="shell next-project__inner"><div><p className="eyebrow">Next case study</p><h2>{nextProject.title}</h2></div><Link className="button button--ghost" href={`/en/projects/${nextProject.slug}`}>Discover <ArrowRight size={18} aria-hidden="true" /></Link></div></section>
    <section className="contact-section contact-section--compact"><div className="shell contact-panel"><div><p className="eyebrow">Your project</p><h2>Do you have an operational need to transform?</h2></div><a className="button button--light" href="mailto:frandriaharimino@yahoo.com">Let us talk <ArrowUpRight size={18} aria-hidden="true" /></a></div></section>
  </main>;
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) { return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>; }
