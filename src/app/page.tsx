import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { HeroNetwork } from "@/components/hero-network";
import { FadeUp, ParallaxHero } from "@/components/motion";
import { SiteHeader } from "@/components/site-header";
import { projects, skillGroups } from "@/lib/portfolio";
import {
  personName,
  preferredLocations,
  siteDescription,
  siteName,
  siteUrl,
  socialLinks,
  targetRoles,
} from "@/lib/site";

const stats = [
  { value: "4+ years", label: "shipping production software" },
  { value: "25K+", label: "users reached through live products" },
  { value: "7 builds", label: "across product and client delivery" },
  { value: "End to end", label: "from product logic to release" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: personName,
      jobTitle: "Full-stack and AI Engineer",
      url: siteUrl,
      image: `${siteUrl}/profile.jpeg`,
      description: siteDescription,
      email: socialLinks.email.replace("mailto:", ""),
      sameAs: [socialLinks.linkedIn, socialLinks.github],
      areaServed: preferredLocations.map((name) => ({ "@type": "City", name })),
      hasOccupation: targetRoles.map((name) => ({ "@type": "Occupation", name })),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
    },
  ],
};

export default function Home() {
  return (
    <main className="page-shell" id="page-top">
      <HeroNetwork mode="ambient" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <section className="hero-shell compact-hero">
        <div className="container hero-grid compact-hero-grid">
          <FadeUp className="hero-copy" delay={0.06}>
            <div className="hero-copy-panel">
              <p className="eyebrow">Full-stack + AI engineer</p>
              <h1><span className="hero-name-single">{personName}</span></h1>
              <p className="hero-text hero-lead">
                I turn product ideas into dependable software—from customer-facing
                experiences and business workflows to backend systems, integrations,
                and practical AI features.
              </p>
              <p className="hero-summary">
                Comfortable joining the stack a team already uses, whether that is
                custom services, Firebase, Convex, managed platforms, or a mix.
              </p>
              <div className="hero-cta">
                <a className="button-primary" href="#projects">See the impact</a>
                <Link className="button-secondary" href="/about">About & deep dives</Link>
                <a className="button-secondary" href="#contact">Start a conversation</a>
              </div>
              <div className="hero-links">
                <a href={socialLinks.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={socialLinks.email}>Email</a>
              </div>
            </div>
          </FadeUp>

          <ParallaxHero className="hero-visual">
            <div className="profile-orbit-card compact-profile-card">
              <div className="profile-orbit-shell">
                <div className="profile-orbit-ring profile-orbit-ring-a" />
                <div className="profile-orbit-ring profile-orbit-ring-b" />
                <div className="profile-image-shell">
                  <Image src="/profile.jpeg" alt={`Portrait of ${personName}`} width={320} height={320} className="profile-image" priority />
                </div>
              </div>
            </div>
          </ParallaxHero>

          <div className="stats-grid hero-stats-grid">
            {stats.map((stat, index) => (
              <FadeUp key={stat.label} delay={0.1 + index * 0.05}>
                <article className="stat-card"><strong>{stat.value}</strong><span>{stat.label}</span></article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-block compact-section" id="projects">
        <FadeUp className="section-heading project-heading-row">
          <div>
            <p className="eyebrow">Selected work · impact first</p>
            <h2>Seven products, seven different problems solved.</h2>
          </div>
          <Link className="text-link" href="/about#project-deep-dives">Read the project deep dives →</Link>
        </FadeUp>

        <div className="impact-project-grid">
          {projects.map((project, index) => (
            <FadeUp key={project.title} delay={index * 0.06}>
              <article className="impact-project-card">
                <div className="project-stack-topline">
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-tag">{project.tag}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="impact-line">{project.impact}</p>
                <p className="project-summary">{project.summary}</p>
                <div className="project-stack-row">
                  {project.stack.slice(0, 4).map((item) => <span className="chip" key={item}>{item}</span>)}
                </div>
                <div className="project-card-footer">
                  <span>{project.role} · {project.year}</span>
                  <Link href={`/about#${project.slug}`}>How I built it →</Link>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="container compact-proof-band">
        <FadeUp>
          <p className="eyebrow">Where I can help</p>
          <h2>Product engineering without the stack gatekeeping.</h2>
          <p>
            I work across web products, internal tools, connected systems, and AI-enabled
            workflows. I care more about solving the right problem and shipping reliably
            than forcing every team into one architecture.
          </p>
          <div className="chip-row">
            <span className="chip">Frontend & product UI</span>
            <span className="chip">Backend & data workflows</span>
            <span className="chip">AI & retrieval</span>
            <span className="chip">Integrations & automation</span>
            <span className="chip">Existing-stack delivery</span>
          </div>
        </FadeUp>
      </section>

      <section className="container section-block compact-section" id="skills">
        <FadeUp className="section-heading">
          <p className="eyebrow">Technical arsenal</p>
          <h2>Skills & technologies across product, backend, cloud, and real-time systems.</h2>
          <p>
            Mostly hands-on with Node.js, TypeScript, data stores, integrations, AWS,
            identity, and event-driven product workflows.
          </p>
        </FadeUp>
        <div className="skills-grid compact-skills-grid">
          {skillGroups.map((group, index) => (
            <FadeUp key={group.title} delay={index * 0.04}>
              <article className="skill-card">
                <h3>{group.title}</h3>
                <div className="chip-row">
                  {group.items.map((item) => <span className="chip" key={item}>{item}</span>)}
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="container compact-contact" id="contact">
        <FadeUp className="closing-card">
          <p className="eyebrow">Let’s work together</p>
          <h2>Have a useful problem to solve?</h2>
          <p>
            I’m open to software, full-stack, product, backend, and AI engineering work
            across different domains, team sizes, and technology choices.
          </p>
          <ContactForm />
        </FadeUp>
      </section>
    </main>
  );
}
