import type { Metadata } from "next";
import Link from "next/link";
import { HeroNetwork } from "@/components/hero-network";
import { FadeUp } from "@/components/motion";
import { SiteHeader } from "@/components/site-header";
import { experience, projects, skillGroups } from "@/lib/portfolio";
import { personName, socialLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "About & Project Deep Dives",
  description: `The experience, project decisions, and engineering capabilities behind ${personName}'s work.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="page-shell" id="page-top">
      <HeroNetwork mode="ambient" />
      <SiteHeader />
      <section className="container inner-page-hero">
        <FadeUp>
          <p className="eyebrow">About the work</p>
          <h1>Depth when you need it. Outcomes before technology lists.</h1>
          <p>
            I’m a full-stack and AI engineer who moves between product thinking,
            interfaces, backend workflows, integrations, and delivery. I adapt to the
            system and constraints already in front of the team, then improve what matters.
          </p>
          <div className="hero-cta">
            <Link className="button-primary" href="/#contact">Discuss a role or project</Link>
            <a className="button-secondary" href={socialLinks.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </FadeUp>
      </section>

      <section className="container section-block compact-section" id="project-deep-dives">
        <FadeUp className="section-heading">
          <p className="eyebrow">Project deep dives</p>
          <h2>What changed, what I owned, and how the systems came together.</h2>
        </FadeUp>
        <div className="deep-dive-list">
          {projects.map((project, index) => (
            <FadeUp key={project.slug} delay={index * 0.06}>
              <article className="deep-dive-card" id={project.slug}>
                <div className="deep-dive-heading">
                  <div><span className="project-index">0{index + 1}</span><p className="eyebrow">{project.tag}</p></div>
                  <h3>{project.title}</h3>
                  <p className="impact-line">{project.impact}</p>
                </div>
                <div className="deep-dive-content">
                  <div><p className="detail-label">Context</p><p>{project.context}</p></div>
                  <div><p className="detail-label">My contribution</p><ul>{project.contribution.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  <div className="project-stack-row">{project.stack.map((item) => <span className="chip" key={item}>{item}</span>)}</div>
                  {project.href.startsWith("http") && <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">Visit project ↗</a>}
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="container split-section compact-section" id="experience">
        <FadeUp className="section-heading sticky-heading">
          <p className="eyebrow">Experience</p>
          <h2>A consistent thread: understand quickly and own delivery.</h2>
          <p>Different domains and stacks, with the same focus on useful software and dependable execution.</p>
        </FadeUp>
        <div className="timeline compact-timeline">
          {experience.map((job, index) => (
            <FadeUp key={job.company} delay={index * 0.05}>
              <article className="timeline-card">
                <p className="timeline-meta">{job.meta}</p><h3>{job.role}</h3><h4>{job.company}</h4><p>{job.note}</p>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="container section-block compact-section" id="skills">
        <FadeUp className="section-heading"><p className="eyebrow">Capabilities</p><h2>A broad toolkit, applied according to the product.</h2></FadeUp>
        <div className="skills-grid compact-skills-grid">
          {skillGroups.map((group) => <article className="skill-card" key={group.title}><h3>{group.title}</h3><div className="chip-row">{group.items.map((item) => <span className="chip" key={item}>{item}</span>)}</div></article>)}
        </div>
      </section>
    </main>
  );
}
