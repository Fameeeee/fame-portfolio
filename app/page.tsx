import { ThemeToggle } from "./theme-toggle";

const featuredProjects = [
  {
    title: "WTFP Car Quotation",
    type: "Mobile-first SaaS",
    summary:
      "Web app for car dealerships to create, manage, and export purchase quotations with car details, payment options, and accessories. Shipped with a 4-person team across 239+ commits.",
    stack: ["Nuxt", "NestJS", "MySQL"],
    href: "https://github.com/Fameeeee/wtfp-car-quotation",
    live: "wtfp-car-quotation.vercel.app",
  },
  {
    title: "Secure Snack Order System",
    type: "Microservices · DevSecOps",
    summary:
      "Snack ordering system on a local Kubernetes cluster (kind) with Podman-built images and security-minded defaults. One script builds, loads, and deploys every service.",
    stack: ["Next.js", "NestJS", "Postgres", "K8s"],
    href: "https://github.com/Fameeeee/secure-snack-order-system",
    live: null,
  },
  {
    title: "Selfhosted Dashboard",
    type: "Polyglot full-stack",
    summary:
      "Self-hosted dashboard combining a TypeScript frontend with a Go backend. Includes infrastructure-as-code, migrations, and modular services.",
    stack: ["TypeScript", "Go", "Docker"],
    href: "https://github.com/Fameeeee/selfhosted-dashboard",
    live: null,
  },
];

const stack = {
  Frontend: ["TypeScript", "Next.js", "Nuxt / Vue", "React", "Tailwind"],
  Backend: ["NestJS", "Go", "Node.js", "REST", "TypeORM"],
  Data: ["PostgreSQL", "MySQL", "pgvector"],
  Infra: ["Docker", "Podman", "Kubernetes", "GitHub Actions", "Vercel"],
  Exploring: ["Claude API", "RAG", "Embeddings", "Tool use"],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      {/* NAV */}
      <nav className="sticky top-0 z-50 ring-border-bottom bg-paper/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-10">
          <a className="flex items-center gap-2" href="#top">
            <span className="t-mono text-ink">ttw</span>
            <span className="t-link">Teetat Teerawaropas</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a className="t-link text-ink link-hover" href="#work">
              Work
            </a>
            <a className="t-link text-ink link-hover" href="#process">
              Process
            </a>
            <a className="t-link text-ink link-hover" href="#stack">
              Stack
            </a>
            <a className="t-link text-ink link-hover" href="#about">
              About
            </a>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a className="btn-primary hidden sm:inline-flex" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 pt-24 pb-32 md:px-10 md:pt-32 md:pb-40" id="top">
        <div className="mx-auto max-w-[1200px]">
          <span className="pill">
            <span className="live-dot" />
            <span>Available for work · April 2026</span>
          </span>

          <h1 className="t-display mt-8 max-w-[18ch]">
            Software engineer building{" "}
            <span style={{ fontWeight: 400 }}>full-stack products</span> from{" "}
            <span style={{ fontWeight: 400 }}>db</span> to{" "}
            <span style={{ fontWeight: 400 }}>deploy</span>.
          </h1>

          <p className="t-body-lg mt-8 max-w-[60ch]">
            I&apos;m Teetat &ldquo;Fame&rdquo; Teerawaropas — I design schemas, ship APIs,
            polish interfaces, and own the path from local development to production.
            Currently exploring AI / LLM applications and RAG systems.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a className="btn-primary" href="#work">
              View selected work
              <span aria-hidden>→</span>
            </a>
            <a className="btn-secondary" href="#contact">
              Get in touch
            </a>
          </div>

          <div className="mt-20 grid max-w-[840px] gap-8 sm:grid-cols-3">
            <div>
              <p className="t-mono text-muted">Location</p>
              <p className="mt-2 text-[16px] font-medium text-ink">Chiang Rai, TH</p>
            </div>
            <div>
              <p className="t-mono text-muted">Focus</p>
              <p className="mt-2 text-[16px] font-medium text-ink">Full-stack · Cloud-native</p>
            </div>
            <div>
              <p className="t-mono text-muted">Now</p>
              <p className="mt-2 text-[16px] font-medium text-ink">Learning RAG &amp; agents</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-strong" />

      {/* WORK */}
      <section className="px-6 py-28 md:px-10 md:py-32" id="work">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="t-mono text-muted-strong">01 · Selected work</p>
              <h2 className="t-h2 mt-4 max-w-[20ch]">
                Things I&apos;ve shipped — production apps, infrastructure, and full-stack systems.
              </h2>
            </div>
            <a
              className="t-link text-ink link-hover"
              href="https://github.com/Fameeeee?tab=repositories"
              rel="noreferrer"
              target="_blank"
            >
              All repositories →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <a
                className="card-shadow card-shadow-hover group flex flex-col gap-5 rounded-lg bg-paper p-7"
                href={p.href}
                key={p.title}
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-center justify-between">
                  <span className="t-mono text-muted-strong">
                    {String(i + 1).padStart(2, "0")} / {p.type}
                  </span>
                  {p.live && (
                    <span className="pill">
                      <span className="live-dot" />
                      Live
                    </span>
                  )}
                </div>

                <h3 className="t-h4 text-ink">{p.title}</h3>

                <p className="t-body">{p.summary}</p>

                {p.live && (
                  <p className="t-mono-13 text-badge-fg">{p.live}</p>
                )}

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span className="pill pill-neutral" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="t-link text-muted-strong group-hover:text-ink">
                    View →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-soft" />

      {/* PROCESS */}
      <section className="px-6 py-28 md:px-10 md:py-32" id="process">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 max-w-[60ch]">
            <p className="t-mono text-muted-strong">02 · How I work</p>
            <h2 className="t-h2 mt-4">
              From idea to production, one disciplined pipeline.
            </h2>
            <p className="t-body-lg mt-6">
              I treat every project like a deploy pipeline: develop with rigor, preview before
              committing, ship with confidence.
            </p>
          </div>

          <div className="workflow-line mb-10" />

          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col gap-3">
              <p className="t-mono workflow-develop">Develop</p>
              <h3 className="t-h4 text-ink">Design schemas, model the domain.</h3>
              <p className="t-body">
                Start from the data — clear schemas, typed contracts, an API surface that survives
                contact with reality.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="t-mono workflow-preview">Preview</p>
              <h3 className="t-h4 text-ink">Build, polish, run it like prod.</h3>
              <p className="t-body">
                Containerized previews, CI on every PR, performance and accessibility checked
                before sign-off.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="t-mono workflow-ship">Ship</p>
              <h3 className="t-h4 text-ink">Deploy, observe, iterate.</h3>
              <p className="t-body">
                Reproducible deploys with Docker / Kubernetes, monitor what matters, then keep
                the feedback loop short.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-soft" />

      {/* STACK */}
      <section className="px-6 py-28 md:px-10 md:py-32" id="stack">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 max-w-[60ch]">
            <p className="t-mono text-muted-strong">03 · Stack</p>
            <h2 className="t-h2 mt-4">Tools I reach for, grouped by where they live.</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {Object.entries(stack).map(([category, items]) => (
              <div
                className="card-shadow flex flex-col gap-4 rounded-lg bg-paper p-6"
                key={category}
              >
                <p className="t-mono text-muted-strong">{category}</p>
                <ul className="flex flex-col gap-2">
                  {items.map((item) => (
                    <li className="t-mono-13 text-ink" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-soft" />

      {/* ABOUT */}
      <section className="px-6 py-28 md:px-10 md:py-32" id="about">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="t-mono text-muted-strong">04 · About</p>
              <h2 className="t-h2 mt-4">
                I like building things that feel calm on the surface and dependable underneath.
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <p className="t-body-lg">
                I work across the full stack — designing schemas, shaping APIs, polishing
                interfaces, and owning the path from local dev to production. I&apos;ve shipped a
                SaaS product to real users with a 4-person team and built Kubernetes-native
                microservices with security-minded defaults.
              </p>
              <p className="t-body-lg">
                Lately I&apos;m investing in AI / LLM application engineering — RAG, tool use,
                evals, and the production concerns that separate a demo from a real product.
              </p>

              <div className="card-shadow mt-4 grid gap-4 rounded-lg bg-paper p-6 sm:grid-cols-3">
                <div>
                  <p className="t-mono text-muted-strong">Currently</p>
                  <p className="mt-2 text-[16px] font-medium text-ink">Open to work</p>
                </div>
                <div>
                  <p className="t-mono text-muted-strong">Building</p>
                  <p className="mt-2 text-[16px] font-medium text-ink">Thai RAG assistant</p>
                </div>
                <div>
                  <p className="t-mono text-muted-strong">Reading</p>
                  <p className="mt-2 text-[16px] font-medium text-ink">LLM eval patterns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-strong" />

      {/* CONTACT */}
      <section className="px-6 py-28 md:px-10 md:py-32" id="contact">
        <div className="mx-auto max-w-[1200px]">
          <p className="t-mono text-muted-strong">05 · Contact</p>
          <h2 className="t-h2 mt-4 max-w-[18ch]">
            Let&apos;s build something good.
          </h2>
          <p className="t-body-lg mt-6 max-w-[60ch]">
            Open to full-time roles, freelance projects, and interesting collaborations —
            especially anything touching full-stack web, cloud-native systems, or AI products.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <a
              className="card-shadow card-shadow-hover flex flex-col gap-3 rounded-lg bg-paper p-6"
              href="mailto:fame.tee@gmail.com"
            >
              <p className="t-mono text-muted-strong">Email</p>
              <p className="text-[18px] font-medium text-ink">fame.tee@gmail.com</p>
              <span className="t-link mt-auto text-muted-strong">Send mail →</span>
            </a>
            <a
              className="card-shadow card-shadow-hover flex flex-col gap-3 rounded-lg bg-paper p-6"
              href="tel:+66838588695"
            >
              <p className="t-mono text-muted-strong">Phone</p>
              <p className="text-[18px] font-medium text-ink">083-858-8695</p>
              <span className="t-link mt-auto text-muted-strong">Call →</span>
            </a>
            <a
              className="card-shadow card-shadow-hover flex flex-col gap-3 rounded-lg bg-paper p-6"
              href="https://github.com/Fameeeee"
              rel="noreferrer"
              target="_blank"
            >
              <p className="t-mono text-muted-strong">GitHub</p>
              <p className="text-[18px] font-medium text-ink">@Fameeeee</p>
              <span className="t-link mt-auto text-muted-strong">Open profile →</span>
            </a>
            <a
              className="card-shadow card-shadow-hover flex flex-col gap-3 rounded-lg bg-paper p-6"
              href="https://www.linkedin.com/in/teetat-teerawaropas-450280348/"
              rel="noreferrer"
              target="_blank"
            >
              <p className="t-mono text-muted-strong">LinkedIn</p>
              <p className="text-[18px] font-medium text-ink">teetat-teerawaropas</p>
              <span className="t-link mt-auto text-muted-strong">Connect →</span>
            </a>
          </div>
        </div>
      </section>

      <div className="divider-strong" />

      {/* FOOTER */}
      <footer className="px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4">
          <span className="t-mono text-muted-strong">© 2026 Teetat Teerawaropas</span>
          <span className="t-mono text-muted-strong">Built with Next.js · Hosted on Vercel</span>
          <a className="t-mono text-ink link-hover" href="#top">
            ↑ Back to top
          </a>
        </div>
      </footer>
    </main>
  );
}
