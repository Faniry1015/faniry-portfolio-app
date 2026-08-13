import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowDown, ArrowRight, BarChart3, CheckCircle2, Code2, ContactRound,
  Database, Download, Mail, MapPin, Sprout, Workflow,
} from "lucide-react";
import { ProjectCard } from "@/ui/project-card";
import { SectionHeading } from "@/ui/section-heading";
import { capabilitiesEn, expertiseEn, projectsEn } from "@/data/portfolio-en";

export const metadata: Metadata = {
  title: "Data, MEL, Digital Systems & GIS Consultant in Madagascar",
  description: "Madagascar-based consultant supporting development projects with data quality, MEL, digital systems, GIS and field research coordination.",
  alternates: { canonical: "/en", languages: { fr: "/", en: "/en" } },
  openGraph: {
    locale: "en_US",
    url: "/en",
    title: "Data, MEL, Digital Systems & GIS for development projects",
    description: "From field data to decision-making: quality, MEL, GIS, digital systems and research support in Madagascar.",
  },
};

const processSteps = [
  { number: "01", title: "Understand the field context", description: "Clarify users, decisions and operational constraints before selecting technology." },
  { number: "02", title: "Audit and structure", description: "Review indicators, sources, quality rules and data journeys before designing the response." },
  { number: "03", title: "Build the response", description: "Implement tools, procedures, dashboards or digital systems suited to the actual level of risk." },
  { number: "04", title: "Transfer and improve", description: "Test, document, train users and organise continuous improvement based on field feedback." },
];

const priorityServices = [
  { icon: Database, label: "Entry offer", title: "Data Quality Audit", description: "A focused diagnostic to identify anomalies, risks and priority corrections in your data chain.", deliverables: ["Review of tools and databases", "Consistency and quality checks", "Prioritised action plan"], subject: "Discussion - Data Quality Audit" },
  { icon: Workflow, label: "Complete system", title: "Digital M&E System", description: "A coherent system connecting indicators, data collection, databases, dashboards, procedures and team ownership.", deliverables: ["MEL and data architecture", "Collection and dashboards", "Documentation and training"], subject: "Discussion - Digital M&E System" },
  { icon: MapPin, label: "Local partner", title: "Madagascar Research & Field Partner", description: "Operational support in Madagascar to prepare and coordinate reliable studies, surveys and field assignments.", deliverables: ["Field teams and logistics", "Digital collection and GIS", "Quality assurance and reporting"], subject: "Discussion - Madagascar Research and Field Partner" },
];

export default function EnglishHome() {
  return (
    <main id="contenu">
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="shell hero-layout">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" />Data • MEL • Digital Systems • GIS</p>
            <h1>I help projects move from <span>field data to decisions.</span></h1>
            <p className="hero-lead">Digital data collection, data quality, monitoring and evaluation, GIS, dashboards and business systems - in Madagascar, remotely or as a local partner.</p>
            <div className="hero-actions">
              <a className="button" href="#projects">View case studies <ArrowDown size={18} aria-hidden="true" /></a>
              <a className="button button--ghost" href="mailto:frandriaharimino@yahoo.com?subject=Discussion%20about%20an%20assignment">Discuss an assignment <ArrowRight size={18} aria-hidden="true" /></a>
            </div>
            <div className="hero-location"><MapPin size={18} aria-hidden="true" /><span>Based in Madagascar • Available locally and remotely</span></div>
          </div>
          <div className="hero-visual">
            <div className="portrait-card">
              <div className="portrait-card__accent" />
              <Image src="/images/faniry.png" alt="Faniriantsoa Randriaharimino" width={324} height={332} priority />
              <div className="portrait-card__caption"><span className="status-dot" /><div><strong>Consultant & local partner</strong><small>Data • MEL • Digital • GIS</small></div></div>
            </div>
            <div className="hero-signal hero-signal--top"><Database size={18} aria-hidden="true" /><span><small>End-to-end chain</small>Field → reporting</span></div>
            <div className="hero-signal hero-signal--bottom"><Workflow size={18} aria-hidden="true" /><span><small>Two delivery models</small>Consultant · local team</span></div>
          </div>
        </div>
        <div className="shell proof-strip" aria-label="Key experience evidence">
          <div className="proof-item"><Sprout size={18} aria-hidden="true" /><span><strong>12+ years</strong><small>rural development</small></span></div>
          <div className="proof-item"><Workflow size={18} aria-hidden="true" /><span><strong>8+ years</strong><small>monitoring & evaluation</small></span></div>
          <div className="proof-item"><BarChart3 size={18} aria-hidden="true" /><span><strong>48 reports</strong><small>produced and consolidated</small></span></div>
          <div className="proof-item"><MapPin size={18} aria-hidden="true" /><span><strong>13,000+ producers</strong><small>regional registry quality-controlled</small></span></div>
        </div>
      </section>

      <section className="section" id="services"><div className="shell">
        <SectionHeading eyebrow="Priority services" title="Three practical responses to development-project needs." description="An engagement can start with a focused diagnostic, evolve into a complete system or mobilise local research and field capacity in Madagascar." />
        <div className="services-grid">{priorityServices.map((service) => { const Icon = service.icon; return (
          <article className="service-card" key={service.title}><div className="service-card__topline"><span className="service-card__icon"><Icon size={21} aria-hidden="true" /></span><span className="service-card__label">{service.label}</span></div><h3>{service.title}</h3><p>{service.description}</p><ul>{service.deliverables.map((item) => <li key={item}><CheckCircle2 size={16} aria-hidden="true" /> {item}</li>)}</ul><a className="text-link" href={`mailto:frandriaharimino@yahoo.com?subject=${encodeURIComponent(service.subject)}`}>Discuss this need <ArrowRight size={17} aria-hidden="true" /></a></article>
        ); })}</div>
      </div></section>

      <section className="section section--tint" id="expertise"><div className="shell">
        <SectionHeading eyebrow="Areas of expertise" title="A continuous chain from fieldwork to data and decisions." description="I combine institutional experience, MEL methods, analysis, GIS and digital engineering to address the whole problem." />
        <div className="expertise-grid">{expertiseEn.map((item) => <article className="expertise-card" key={item.number}><span className="expertise-card__number">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><ul>{item.items.map((entry) => <li key={entry}><CheckCircle2 size={16} aria-hidden="true" /> {entry}</li>)}</ul></article>)}</div>
      </div></section>

      <section className="section" id="projects"><div className="shell">
        <SectionHeading eyebrow="Case studies" title="Systems, studies and deliverables grounded in real operations." description="These experiences cover the full chain: field surveys, data quality, MEL, knowledge capture and digital tools." />
        <div className="projects-grid">{projectsEn.map((project) => <ProjectCard key={project.slug} project={project} locale="en" />)}</div>
      </div></section>

      <section className="section section--dark" id="approach"><div className="shell">
        <SectionHeading eyebrow="My approach" title="From the need to a system teams can actually use." description="A practical method to clarify decisions, improve data reliability and transfer a solution that teams can operate." />
        <div className="process-grid">{processSteps.map((step) => <article className="process-step" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
      </div></section>

      <section className="section" aria-labelledby="capabilities-title-en"><div className="shell capabilities-layout">
        <div className="capabilities-intro"><p className="eyebrow">Capabilities</p><h2 id="capabilities-title-en">Hybrid expertise, from results frameworks to digital systems.</h2><p>I work across the useful chain: system design, collection, quality, analysis, mapping, reporting and support.</p></div>
        <div className="capabilities-list">{capabilitiesEn.map((group) => <article key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </div></section>

      <section className="section section--about" id="about"><div className="shell about-layout">
        <div className="about-monogram" aria-hidden="true"><span>FR</span><Sprout size={46} strokeWidth={1.4} /></div>
        <div className="about-copy"><p className="eyebrow">About</p><h2>Two complementary perspectives: the field and the system.</h2><p className="about-lead">I work with development projects where data quality, field understanding and system simplicity are inseparable.</p><p>More than twelve years in rural development and over eight years in monitoring and evaluation allow me to work with field teams, institutions, researchers and developers - and translate their needs into usable processes, data and tools.</p>
          <div className="about-links"><a href="/documents/CV_Faniriantsoa_RANDRIAHARIMINO_EN.pdf" download><Download size={19} aria-hidden="true" /> Download my CV (PDF)</a><a href="https://github.com/Faniry1015" target="_blank" rel="noreferrer"><Code2 size={19} aria-hidden="true" /> GitHub</a><a href="https://www.linkedin.com/in/faniriantsoa/" target="_blank" rel="noreferrer"><ContactRound size={19} aria-hidden="true" /> LinkedIn</a></div>
        </div>
      </div></section>

      <section className="contact-section" id="contact"><div className="shell contact-panel"><div><p className="eyebrow">A need, an idea, a project?</p><h2>Let us strengthen your data and project management.</h2><p>Data quality audit, digital MEL system or research assignment in Madagascar: let us start by clarifying the expected result.</p></div><div className="contact-actions"><a className="button button--light" href="mailto:frandriaharimino@yahoo.com"><Mail size={19} aria-hidden="true" /> Send a message</a><a href="tel:+261340871766">+261 34 08 717 66</a></div></div></section>
    </main>
  );
}
