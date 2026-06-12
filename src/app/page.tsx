import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { HeroNetwork } from "@/components/hero-network";
import { FadeUp, ParallaxHero } from "@/components/motion";
import { ProjectScene, type SceneVariant } from "@/components/project-scene";
import { ThemeSwitcher } from "@/components/theme-switcher";

const stats = [
  { value: "4+ Years", label: "building full-stack software" },
  { value: "Python + Node.js", label: "backend-strong engineering" },
  { value: "NPM Published", label: "@irisidea/kalrav-ai shipped" },
  { value: "5+ Clients", label: "freelance work with impact" },
];

const featuredProjects: Array<{
  scene: SceneVariant;
  tag: string;
  title: string;
  href: string;
  summary: string;
  details: string;
  stack: string[];
}> = [
  {
    scene: "routeeye",
    tag: "Tracking Platform",
    title: "RouteEye",
    href: "https://routeeye.io/",
    summary:
      "Real-time vehicle tracking and fleet operations platform built for route intelligence, ETA visibility, and operational control.",
    details:
      "Built full-stack modules with Node.js, React.js, MySQL, and Prisma ORM. Integrated Google Maps API for route visualization, one-way and two-way routing logic, geospatial decisions, and real-time tracking powered by AWS Lambda, Redis, and SSE.",
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
    scene: "kalrav",
    tag: "AI Agent Platform",
    title: "Kalrav AI",
    href: "https://kalrav.ai/",
    summary:
      "AI agent product focused on conversational UX, business automation, lead workflows, and connected knowledge sources.",
    details:
      "Worked on embeddable widgets, agent management, file and audio workflows, and third-party integrations including Google Drive, Confluence, Notion, Zoho CRM, and connected business systems for training and automation. Also published the reusable NPM package @irisidea/kalrav-ai for React, Next.js, Vue, Angular, and vanilla JavaScript/TypeScript applications.",
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
    scene: "ecai",
    tag: "AI SaaS",
    title: "ECAI",
    href: "#experience",
    summary:
      "Secure AI SaaS experience designed for collaboration, model interaction, file connectivity, and real-time workflows.",
    details:
      "Led frontend delivery with React.js, Tailwind CSS, Redux Toolkit, and MUI. Added Microsoft Entra ID authentication, OneDrive connectivity, Microsoft Graph API integrations, and SSE-driven interactions for AI workflows.",
    stack: [
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "MUI",
      "Microsoft Entra ID",
      "OneDrive",
      "Microsoft Graph API",
      "SSE",
    ],
  },
];

const experience = [
  {
    company: "Irisidea",
    role: "Software Engineer",
    meta: "Dec 2024 - Present · Bengaluru · On-site",
    points: [
      "Building full-stack products across tracking, AI SaaS, and agent platforms with a strong focus on performance and maintainability.",
      "Used Google Maps API for route rendering, path intelligence, and live geospatial decision flows in a vehicle tracking platform.",
      "Worked on Google Drive, OneDrive, Microsoft Entra ID, and Microsoft Graph API integrations for connected AI product workflows.",
      "Improved scalability through query reduction, real-time alerts, telemetry pipelines, and cost-aware backend optimization.",
      "Published and evolved a reusable Kalrav AI widget package for multi-framework integrations.",
    ],
  },
  {
    company: "Yellow Owl",
    role: "SDE",
    meta: "May 2024 - Nov 2024 · Coimbatore · Hybrid",
    points: [
      "Built scalable educational product features using React.js, TypeScript, Material UI, Node.js, Express.js, GraphQL, and Strapi.",
      "Implemented secure authentication patterns including RBAC, MFA, JWT-based access, and role-aware reporting workflows.",
      "Worked on reporting systems, scheduled PDFs, and product flows designed around teachers, student progress, and analytics.",
      "Contributed to solutions aligned with school workflows, employee management use cases, and operational reporting.",
    ],
  },
  {
    company: "Ethereal Covenant",
    role: "Full-stack Developer",
    meta: "Jan 2023 - Sep 2023 · Bengaluru · Hybrid",
    points: [
      "Built custom React interfaces and backend services for SpeakupNow with emphasis on responsive UX and clean component architecture.",
      "Implemented OAuth and JWT-based authentication, email systems, and third-party API integrations for connected workflows.",
      "Strengthened product reliability through secure access control, cross-device responsiveness, and backend performance awareness.",
    ],
  },
  {
    company: "Dbaux Technologies",
    role: "Full-stack Developer",
    meta: "Nov 2021 - Nov 2022 · Bengaluru · Hybrid",
    points: [
      "Developed reusable React components, REST integrations, testing workflows, and collaboration-heavy task features in Agile teams.",
      "Worked across frontend performance, UI reliability, manual QA support, and problem solving with system-level awareness.",
      "Contributed to workflow-centric product modules for action items, discussions, and team coordination.",
    ],
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Material UI", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Node.js", "Express.js", "GraphQL", "REST APIs", "Prisma ORM", "MySQL", "MongoDB"],
  },
  {
    title: "Core Engineering",
    items: ["Data Structures & Algorithms", "System Design Thinking", "Scalable API Design", "Performance Optimization", "Event-driven Architecture", "Problem Solving"],
  },
  {
    title: "Integrations",
    items: ["Google Maps API", "OAuth", "Google Drive", "OneDrive", "Microsoft Entra ID", "Microsoft Graph API", "Shopify", "WooCommerce", "Stripe", "Razorpay"],
  },
  {
    title: "Cloud & Real-time",
    items: ["AWS IoT Core", "AWS Lambda", "Redis", "Server-Sent Events", "Firebase", "Docker", "Telemetry Pipelines"],
  },
  {
    title: "Domains",
    items: ["Educational Platforms", "Vehicle Tracking", "Fleet Operations", "Employee Management Systems", "E-commerce Web Apps", "AI SaaS", "AI Agents", "Third-party Business Integrations"],
  },
];

const principles = [
  "Write product code with long-term maintainability in mind",
  "Use system-level thinking to reduce cost and improve scale",
  "Design integrations that feel reliable, secure, and observable",
  "Balance UX polish with backend clarity and performance",
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "S. Naveed",
  jobTitle: "Python, FastAPI and Node.js Full-stack Developer",
  url: siteUrl,
  sameAs: [
    "https://www.linkedin.com/in/sh-naveed/",
    "https://github.com/naveed-devz",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "JNTU Anantapur",
  },
  knowsAbout: [
    "Python",
    "FastAPI",
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
};

export default function Home() {
  return (
    <main className="page-shell">
      <HeroNetwork mode="ambient" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero-shell">
        <div className="container">
          <FadeUp>
            <header className="topbar">
              <a className="brand-mark" href="#top">
                SN
              </a>
              <div className="nav-group">
                <nav className="nav-links" aria-label="Primary navigation">
                  <a href="#projects">Projects</a>
                  <a href="#experience">Experience</a>
                  <a href="#skills">Skills</a>
                  <a href="#contact">Contact</a>
                </nav>
                <ThemeSwitcher />
              </div>
            </header>
          </FadeUp>

          <div className="hero-grid" id="top">
            <FadeUp className="hero-copy" delay={0.08}>
              <div className="hero-copy-panel">
                <div className="hero-introline">
                  <span className="hero-introline-mark" />
                  <p className="eyebrow">Hello I am</p>
                </div>
                <h1>
                  <span className="hero-name-main">Naveed</span>
                  <span className="hero-name-accent">Shaik</span>
                </h1>
                <div className="hero-roles">
                  <p className="hero-role">Full Stack Developer</p>
                  <p className="hero-role">Node.js Developer</p>
                  <p className="hero-role">Frontend Developer</p>
                </div>
                <p className="hero-text">
                  I help companies and clients build fast, scalable web
                  applications across tracking, education, AI products, internal
                  tools, and integration-heavy business systems.
                </p>
                <p className="hero-summary">
                  Open to full-time opportunities and freelance projects where I
                  can contribute across frontend, backend, integrations, and
                  product delivery with a strong focus on reliability,
                  performance, and clean execution.
                </p>

                <div className="hero-points">
                  <span>Builds production-ready web apps</span>
                  <span>Works across Python, FastAPI, Node.js, React, and Next.js</span>
                  <span>Delivers tracking, school, AI, and business tools</span>
                </div>
              </div>

              <div className="hero-cta">
                <a className="button-primary" href="#projects">
                  View Projects
                </a>
                <a
                  className="button-secondary"
                  href="https://github.com/naveed-devz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
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
                  <div className="profile-card-copy">
                    <span className="profile-card-tag">Naveed Shaik</span>
                    <p>Full-stack engineer focused on product delivery, integrations, and scalable web apps.</p>
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

      <section className="container section-block" id="projects">
        <FadeUp className="section-heading">
          <p className="eyebrow">About Me</p>
          <h2>What I do and what I have done so far.</h2>
          <p>
            I build full-stack web applications for companies and freelance
            clients, with hands-on work across real-time tracking platforms,
            school and employee systems, AI products, internal tools, and
            integration-heavy business applications.
          </p>
        </FadeUp>

        <div className="project-showcase-list">
          {featuredProjects.map((project, index) => (
            <FadeUp key={project.title} delay={index * 0.08}>
              <article
                className={`project-showcase ${index % 2 === 1 ? "project-showcase-reverse" : ""}`}
              >
                <div className="project-showcase-copy">
                  <span className="project-tag">{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <p className="project-details">{project.details}</p>
                  <div className="project-stack-row">
                    {project.stack.slice(0, 6).map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                  {project.href.startsWith("http") ? (
                    <a
                      className="project-link"
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explore project
                    </a>
                  ) : (
                    <a className="project-link" href={project.href}>
                      Explore project
                    </a>
                  )}
                </div>

                <div className="project-showcase-visual">
                  <div className="project-showcase-frame">
                    <div className="project-showcase-glow" />
                    <ProjectScene variant={project.scene} />
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
          <h2>Built across real-time logistics, educational software, and connected SaaS systems.</h2>
          <p>
            I enjoy solving product problems end to end, especially when they
            involve integrations, routing logic, secure access flows, or
            backend systems that need to scale without becoming messy. I have
            also delivered freelance solutions for schools, employee
            management, business websites, and e-commerce applications.
          </p>
        </FadeUp>

        <div className="timeline">
          {experience.map((job, index) => (
            <FadeUp key={`${job.company}-${job.role}`} delay={index * 0.07}>
              <article className="timeline-card">
                <p className="timeline-meta">{job.meta}</p>
                <h3>{job.role}</h3>
                <h4>{job.company}</h4>
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
          <h2>Skills and technologies organized in one place.</h2>
          <p>
            This is the main technical snapshot of how I work across frontend,
            backend, integrations, real-time systems, and product domains.
          </p>
        </FadeUp>

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
            <h2>Open to full-stack roles and freelance leads through the website directly.</h2>
            <p>
              Especially interested in backend-strong full-stack work involving
              Python, FastAPI, Node.js, real-time systems, educational
              products, tracking platforms, connected SaaS experiences, payment
              integrations, and integration-heavy business applications.
            </p>
            <ContactForm />
          </article>
        </FadeUp>
      </section>
    </main>
  );
}
