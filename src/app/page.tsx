import Image from "next/image";
import type { IconType } from "react-icons";
import { LuBotMessageSquare, LuDatabaseZap } from "react-icons/lu";
import { PiNetwork } from "react-icons/pi";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import { TbTextScanAi } from "react-icons/tb";
import { ContactForm } from "@/components/contact-form";
import { HeroNetwork } from "@/components/hero-network";
import { FadeUp, ParallaxHero } from "@/components/motion";
import { SiteHeader } from "@/components/site-header";
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
  { value: "4+ Years", label: "shipping full-stack software" },
  { value: "4 Products", label: "built with end-to-end ownership" },
  { value: "3 Service Projects", label: "delivered for real client needs" },
  { value: "25K+ Users", label: "supported through live product usage" },
];

const featuredProjects: Array<{
  tag: string;
  format: string;
  title: string;
  href: string;
  role: string;
  year: string;
  summary: string;
  details: string;
  outcome: string;
  highlights: string[];
  stack: string[];
}> = [
  {
    tag: "Tracking Platform",
    format: "B2B Operations",
    title: "RouteEye",
    href: "https://routeeye.io/",
    role: "Full-stack developer",
    year: "2025",
    summary:
      "Real-time vehicle tracking and fleet operations platform built for route intelligence, ETA visibility, geospatial coordination, and operational control.",
    details:
      "Worked as a full-stack developer across backend services, route-aware business logic, map interfaces, and operations-facing workflows. The product required data consistency, event updates, and practical UX for teams monitoring live movement.",
    outcome:
      "Helped shape a product surface where dispatch teams can track vehicles, understand route state, and react faster to operational changes without losing backend reliability.",
    highlights: [
      "Implemented backend-heavy route and trip logic for one-way and round-trip scenarios tied to real operational constraints.",
      "Designed route rendering and one-way or round-trip flow logic with Google Maps APIs.",
      "Connected SSE, Redis, and AWS Lambda for real-time movement and alert-driven updates.",
      "Built full-stack features with Node.js, React.js, MySQL, and Prisma ORM.",
    ],
    stack: [
      "Node.js",
      "React.js",
      "MySQL",
      "Prisma ORM",
      "Redis",
      "SSE",
      "AWS Lambda",
      "Google Maps API",
    ],
  },
  {
    tag: "AI Agent Platform",
    format: "Connected SaaS",
    title: "Kalrav AI",
    href: "https://kalrav.ai/",
    role: "Full-stack developer",
    year: "2025",
    summary:
      "AI agent product focused on conversational UX, business automation, lead workflows, and connected knowledge sources for real teams.",
    details:
      "Worked as a full-stack developer on embeddable widgets, agent setup flows, training sources, API-connected automations, and multi-framework delivery. The work was not only UI level; it involved integration behavior, data handling, and reusable product surfaces.",
    outcome:
      "Turned the platform into something easier to embed, connect, and scale across real customer environments while keeping the integration layer practical.",
    highlights: [
      "Built connected product flows that linked UI behavior with backend data, file access, and third-party business systems.",
      "Built reusable widget and integration flows across React, Next.js, Vue, Angular, and vanilla apps.",
      "Supported file, audio, and business-system connectivity including Google Drive, Notion, Confluence, and Zoho CRM.",
      "Published the reusable NPM package @irisidea/kalrav-ai for faster product adoption.",
    ],
    stack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "NPM Package",
      "MongoDB",
      "Google Drive",
      "Zoho CRM",
      "Third-party APIs",
    ],
  },
  {
    tag: "AI SaaS",
    format: "Enterprise Workflow",
    title: "ECAI",
    href: "#experience",
    role: "Full-stack developer",
    year: "2024",
    summary:
      "Secure AI SaaS experience designed for collaboration, model interaction, file connectivity, and real-time workflows in enterprise settings.",
    details:
      "Worked across the full-stack delivery of a connected AI product with authentication, document access, streaming responses, and collaboration-focused workflows. The frontend was visible, but the product thinking was strongly tied to access control, integrations, and backend-driven interaction loops.",
    outcome:
      "Delivered a cleaner enterprise AI workflow where access control, connected files, and response flows felt like one product instead of separate utilities.",
    highlights: [
      "Handled full-stack product delivery with strong ownership over frontend architecture and connected workflow behavior.",
      "Shipped frontend architecture with React.js, Tailwind CSS, Redux Toolkit, and component-system driven UI.",
      "Integrated Microsoft Entra ID, OneDrive, and Microsoft Graph API flows.",
      "Built SSE-based interaction loops for responsive AI workflows and collaboration.",
    ],
    stack: [
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "shadcn/ui patterns",
      "Microsoft Entra ID",
      "OneDrive",
      "Microsoft Graph API",
      "SSE",
    ],
  },
];

const aboutBlocks = [
  {
    title: "What I bring",
    copy:
      "End-to-end product engineering across frontend systems, APIs, backend workflows, integrations, and production delivery.",
  },
  {
    title: "Why I fit different domains",
    copy:
      "I adapt quickly to new industries by understanding product logic, business workflows, and user needs, then turning them into clean technical systems.",
  },
  {
    title: "How I build",
    copy:
      "I prefer clear APIs, maintainable code, practical UI, and delivery decisions that keep products stable as they grow.",
  },
];

const currentFocus = [
  "Frontend, backend, and full-stack roles",
  "Product, delivery, and founding-team opportunities",
  "Backend-heavy product engineering",
  "Bengaluru, Mysuru, Vizag, and remote-friendly teams",
];

const skillSpotlight: Array<{
  name: string;
  tone: string;
  icon: IconType;
  description: string;
}> = [
  {
    name: "GenAI",
    tone: "emerald",
    icon: LuBotMessageSquare,
    description: "Generative AI product flows for practical user workflows.",
  },
  {
    name: "RAG",
    tone: "sky",
    icon: TbTextScanAi,
    description: "Retrieval pipelines for grounded answers and context-aware UX.",
  },
  {
    name: "Pinecone",
    tone: "green",
    icon: PiNetwork,
    description: "Vector database workflows for semantic retrieval and memory.",
  },
  {
    name: "Vector Embeddings",
    tone: "blue",
    icon: LuDatabaseZap,
    description: "Embedding-driven search, ranking, and retrieval systems.",
  },
  {
    name: "Node.js",
    tone: "green",
    icon: SiNodedotjs,
    description: "Backend services and event-driven product logic.",
  },
  {
    name: "Next.js",
    tone: "neutral",
    icon: SiNextdotjs,
    description: "App-router based full-stack web application delivery.",
  },
  {
    name: "React.js",
    tone: "sky",
    icon: SiReact,
    description: "Fast frontend delivery for production product interfaces.",
  },
];

const experience: Array<{
  company: string;
  role: string;
  meta: string;
  projects: Array<{
    name: string;
    href?: string;
  }>;
  points: string[];
}> = [
  {
    company: "Irisidea",
    role: "Software Engineer",
    meta: "Dec 2024 - Present · Bengaluru · On-site",
    projects: [
      { name: "RouteEye", href: "https://routeeye.io/" },
      { name: "Kalrav AI", href: "https://kalrav.ai/" },
      { name: "ECAI", href: "#projects" },
    ],
    points: [
      "Delivered end-to-end product work across tracking, AI SaaS, and agent experiences with strong ownership over maintainability and product quality.",
      "Built backend-heavy logic, real-time workflows, and integration layers using Google Maps, Redis, AWS Lambda, Drive systems, Entra ID, and Graph APIs.",
      "Improved scalability through query reduction, telemetry, and reusable widget or package delivery.",
    ],
  },
  {
    company: "Yellow Owl",
    role: "SDE",
    meta: "May 2024 - Nov 2024 · Coimbatore · Hybrid",
    projects: [
      { name: "theyellowowl.com", href: "https://theyellowowl.com/" },
    ],
    points: [
      "Built product features using React.js, TypeScript, Node.js, Express.js, GraphQL, and Strapi for production-facing education workflows.",
      "Implemented secure authentication, reporting flows, scheduled PDFs, and role-aware product behavior.",
      "Contributed across school-facing workflows, analytics use cases, and operational reporting.",
    ],
  },
  {
    company: "Ethereal Covenant",
    role: "Full-stack Developer",
    meta: "Jan 2023 - Sep 2023 · Bengaluru · Hybrid",
    projects: [
      { name: "SpeakupNow" },
      { name: "IoT-based alarm system" },
    ],
    points: [
      "Built React interfaces and backend services with emphasis on responsive UX, product clarity, and clean component architecture.",
      "Implemented OAuth, JWT authentication, email systems, and third-party API integrations for connected workflows.",
      "Improved reliability through access control, performance awareness, and cross-device stability.",
    ],
  },
  {
    company: "Dbaux Technologies",
    role: "Full-stack Developer",
    meta: "Nov 2021 - Nov 2022 · Bengaluru · Hybrid",
    projects: [
      { name: "Retrospective" },
    ],
    points: [
      "Built reusable React components, REST integrations, and collaboration-oriented workflow features in Agile teams.",
      "Worked across frontend reliability, manual QA support, and system-level problem solving.",
      "Contributed to product modules for action items, discussions, and team coordination.",
    ],
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "MySQL", "MongoDB"],
  },
  {
    title: "AI & Retrieval",
    items: ["GenAI", "RAG", "Pinecone", "Vector Embeddings", "LangChain"],
  },
  {
    title: "Core Engineering",
    items: ["System Design", "Scalable API Design", "Performance Optimization"],
  },
  {
    title: "Integrations",
    items: ["Google Maps API", "OAuth", "Google Drive", "Microsoft Graph API"],
  },
  {
    title: "Cloud & Real-time",
    items: ["AWS Lambda", "Redis", "Docker"],
  },
];

const principles = [
  "Build scalable APIs first.",
  "Prefer reusable architecture over quick patchwork.",
  "Measure before optimizing.",
  "Design for maintainability and clean handoff.",
];

const aiExpertise = [
  "LLMs and prompt-driven product experiences",
  "RAG pipelines with embeddings and vector retrieval",
  "Pinecone-backed semantic search workflows",
  "Streaming responses and interactive AI UX",
  "Tool calling, connected knowledge, and agent workflows",
  "Document-grounded AI features for business software",
];

const openSourceHighlights = [
  "Published @irisidea/kalrav-ai for reusable multi-framework widget integrations.",
  "Package reusable engineering work when it genuinely reduces repeated implementation across products.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: personName,
      jobTitle: "Full-stack Engineer",
      url: siteUrl,
      image: `${siteUrl}/profile.jpeg`,
      description: siteDescription,
      email: socialLinks.email.replace("mailto:", ""),
      sameAs: [socialLinks.linkedIn, socialLinks.github, socialLinks.instagram],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "JNTU Anantapur",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      homeLocation: {
        "@type": "City",
        name: "Bengaluru",
      },
      areaServed: preferredLocations.map((location) => ({
        "@type": "City",
        name: location,
      })),
      hasOccupation: targetRoles.map((role) => ({
        "@type": "Occupation",
        name: role,
      })),
      knowsAbout: [
        "GenAI",
        "RAG",
        "Pinecone",
        "Vector embeddings",
        "Node.js",
        "React.js",
        "Data structures and algorithms",
        "System design",
        "Google Maps API",
        "OAuth",
        "Google Drive integrations",
        "OneDrive integrations",
        "Microsoft Entra ID",
        "Educational platforms",
        "Vehicle tracking systems",
        "Shopify integrations",
        "WooCommerce integrations",
        "Stripe payments",
        "Razorpay payments",
        "Firebase",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: `${personName} Portfolio`,
      description: siteDescription,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/profile.jpeg`,
      },
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

      <section className="hero-shell">
        <div className="container">
          <div className="hero-grid">
            <FadeUp className="hero-copy" delay={0.08}>
              <div className="hero-copy-panel">
                <div className="hero-introline">
                  <span className="hero-introline-mark" />
                  <p className="eyebrow">Hello I am</p>
                </div>
                <p className="hero-kicker">Full-stack engineer building web products, backend systems, and integration-heavy applications.</p>
                <h1>
                  <span className="hero-name-single">{personName}</span>
                </h1>
                <div className="hero-roles">
                  <p className="hero-role">Full-stack Engineer</p>
                  <p className="hero-role">Product Engineer</p>
                  <p className="hero-role">Delivery Engineer</p>
                </div>
                <p className="hero-text">
                  I work end to end across frontend, backend, APIs,
                  integrations, and delivery so teams can ship products that
                  feel clean, stable, and ready for real users.
                </p>
                <p className="hero-summary">
                  I have delivered 4 product builds and 3 service projects with
                  end-to-end ownership, and I am open to frontend, backend,
                  full-stack, product engineer, delivery engineer, and
                  founding-team roles, with strongest preference for Bengaluru
                  (Bangalore), Mysuru, and Vizag.
                </p>

                <div className="hero-points">
                  <span>Handles delivery from UI to backend and release</span>
                  <span>Works across React, Node.js, TypeScript, MongoDB, AWS, and AI workflows</span>
                  <span>Open to new domains, fast-moving teams, and ownership-heavy problem spaces</span>
                </div>
              </div>

              <div className="hero-cta">
                <a className="button-primary" href="#projects">
                  View Projects
                </a>
                <a
                  className="button-secondary"
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a className="button-secondary" href="#contact">
                  Contact Me
                </a>
              </div>

              <div className="hero-links">
                <a
                  href={socialLinks.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a href={socialLinks.email}>
                  Email
                </a>
                <a href="#contact">
                  Contact
                </a>
              </div>
            </FadeUp>

            <ParallaxHero className="hero-visual">
              <div className="hero-visual-stack">
                <div className="profile-orbit-card">
                  <div className="profile-orbit-shell">
                    <div className="profile-orbit-ring profile-orbit-ring-a" />
                    <div className="profile-orbit-ring profile-orbit-ring-b" />
                    <div className="profile-image-shell">
                      <Image
                        src="/profile.jpeg"
                        alt="Portrait of Naveed Shaik"
                        width={320}
                        height={320}
                        className="profile-image"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxHero>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <FadeUp key={stat.label} delay={0.12 + index * 0.07}>
                <article className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-block" id="about">
        <FadeUp className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Full-stack engineering with end-to-end ownership and a strong fit for new domains.</h2>
          <p>
            I work best where teams need someone who can understand a product
            quickly, move across the stack, and turn messy requirements into
            stable delivery.
          </p>
        </FadeUp>

        <div className="about-grid">
          {aboutBlocks.map((block, index) => (
            <FadeUp key={block.title} delay={index * 0.06}>
              <article className="about-card">
                <h3>{block.title}</h3>
                <p>{block.copy}</p>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="current-focus-card" delay={0.16}>
          <p className="eyebrow">Currently Interested In</p>
          <div className="chip-row">
            {currentFocus.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </FadeUp>
      </section>

      <section className="container section-block" id="projects">
        <FadeUp className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Products and service projects where I owned real delivery across the stack.</h2>
          <p>
            These examples show how I work through product context, backend
            logic, integrations, and user-facing delivery instead of only
            listing technologies.
          </p>
        </FadeUp>

        <div className="project-stack-list">
          {featuredProjects.map((project, index) => (
            <FadeUp key={project.title} delay={index * 0.08}>
              <article
                className="project-stack-card"
              >
                <div className="project-stack-copy">
                  <div className="project-stack-topline">
                    <span className="project-index">0{index + 1}</span>
                    <span className="project-tag">{project.tag}</span>
                    <span className="project-format">{project.format}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <p className="project-details">{project.details}</p>
                  <p className="project-outcome">{project.outcome}</p>
                  <div className="project-stack-row">
                    {project.stack.slice(0, 6).map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="project-actions">
                    {project.href.startsWith("http") ? (
                      <a
                        className="button-primary project-button"
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Explore project
                      </a>
                    ) : (
                      <a className="button-primary project-button" href={project.href}>
                        Explore project
                      </a>
                    )}
                    <a className="button-secondary project-button" href="#experience">
                      Read more
                    </a>
                  </div>
                </div>

                <div className="project-stack-panel">
                  <div className="project-panel-grid">
                    <div className="project-panel-block">
                      <span className="project-panel-label">Role</span>
                      <p>{project.role}</p>
                    </div>
                    <div className="project-panel-block">
                      <span className="project-panel-label">Year</span>
                      <p>{project.year}</p>
                    </div>
                  </div>

                  <div className="project-panel-block">
                    <span className="project-panel-label">Architecture summary</span>
                    <p>{project.stack.join(" • ")}</p>
                  </div>

                  <div className="project-panel-block">
                    <span className="project-panel-label">What I handled</span>
                    <ul className="project-highlight-list">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="container split-section" id="experience">
        <FadeUp className="section-heading sticky-heading">
          <p className="eyebrow">Experience</p>
          <h2>Experience across product builds, service work, and end-to-end engineering delivery.</h2>
          <p>
            My experience spans product companies and service projects, but the
            common thread is the same: understand the use case fast, own the
            delivery cleanly, and adapt well to whatever domain the product
            lives in.
          </p>
        </FadeUp>

        <div className="timeline">
          {experience.map((job, index) => (
            <FadeUp key={`${job.company}-${job.role}`} delay={index * 0.07}>
              <article className="timeline-card">
                <p className="timeline-meta">{job.meta}</p>
                <h3>{job.role}</h3>
                <h4>{job.company}</h4>
                <p className="timeline-projects-label">Projects</p>
                <div className="chip-row timeline-projects">
                  {job.projects.map((project) =>
                    project.href ? (
                      <a
                        key={project.name}
                        className="chip timeline-project-chip"
                        href={project.href}
                        target={project.href.startsWith("http") ? "_blank" : undefined}
                        rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {project.name}
                      </a>
                    ) : (
                      <span className="chip timeline-project-chip" key={project.name}>
                        {project.name}
                      </span>
                    ),
                  )}
                </div>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="container section-block" id="skills">
        <FadeUp className="section-heading">
          <p className="eyebrow">Technical Focus</p>
          <h2>Core stack, AI expertise, and the technical areas I use most in product delivery.</h2>
          <p>
            The spotlight below shows the tools and engineering areas I rely on
            most often, followed by the broader stack I use across product and
            service work.
          </p>
        </FadeUp>

        <div className="skill-spotlight-grid">
          {skillSpotlight.map((skill, index) => (
            <FadeUp key={skill.name} delay={index * 0.05}>
              <article className={`skill-logo-card skill-tone-${skill.tone}`}>
                <div className="skill-logo-mark" aria-hidden="true">
                  <skill.icon className="skill-logo-icon" />
                </div>
                <div className="skill-logo-copy">
                  <strong>{skill.name}</strong>
                  <p>{skill.description}</p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <FadeUp key={group.title} delay={index * 0.06}>
              <article className="skill-card">
                <h3>{group.title}</h3>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="container section-block">
        <FadeUp className="section-heading">
          <p className="eyebrow">AI Engineering</p>
          <h2>AI product work focused on retrieval quality, usable UX, and production practicality.</h2>
          <p>
            When I work on AI systems, I focus on whether the output is useful
            in a real product: grounded answers, connected data, response
            speed, and a workflow that users can actually trust.
          </p>
        </FadeUp>

        <div className="expertise-grid">
          {aiExpertise.map((item, index) => (
            <FadeUp key={item} delay={index * 0.05}>
              <article className="expertise-card">
                <span className="principle-index">0{index + 1}</span>
                <p>{item}</p>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="container principles-section">
        <FadeUp className="section-heading">
          <p className="eyebrow">How I Think</p>
          <h2>The engineering habits I keep coming back to.</h2>
        </FadeUp>

        <div className="principles-grid">
          {principles.map((principle, index) => (
            <FadeUp key={principle} delay={index * 0.07}>
              <article className="principle-card">
                <span className="principle-index">0{index + 1}</span>
                <p>{principle}</p>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="container section-block">
        <FadeUp className="section-heading">
          <p className="eyebrow">Open Source</p>
          <h2>Reusable packages, practical engineering, and a public work trail.</h2>
        </FadeUp>

        <div className="open-source-grid">
          {openSourceHighlights.map((item, index) => (
            <FadeUp key={item} delay={index * 0.08}>
              <article className="closing-card open-source-card">
                <p>{item}</p>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="container closing-grid">
        <FadeUp>
          <article className="closing-card education-card">
            <p className="eyebrow">Education</p>
            <h2>JNTU Anantapur</h2>
            <p>B.Tech in Electronics and Communications Engineering · 2017 - 2021</p>
            <p>
              Strong technical foundation in structured problem solving,
              analytical thinking, and the systems mindset I bring into software
              engineering.
            </p>
          </article>
        </FadeUp>

        <FadeUp delay={0.1}>
          <article className="closing-card" id="contact">
            <p className="eyebrow">Connect</p>
            <h2>Open to frontend, backend, full-stack, product, delivery, and founding-team roles.</h2>
            <p>
              Based in Bengaluru (Bangalore) and most interested in Bengaluru,
              Mysuru, and Vizag opportunities, while still open to remote or
              hybrid teams that value strong product engineering, dependable
              delivery, and ownership across the stack.
            </p>
            <div className="contact-links">
              <a
                className="button-secondary"
                href={socialLinks.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="button-secondary"
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <ContactForm />
          </article>
        </FadeUp>
      </section>
    </main>
  );
}
