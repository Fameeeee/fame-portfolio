import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Languages as LanguagesIcon,
  Layout,
  Mail,
  Phone,
  Server,
  Shield,
  Sparkles,
  Wrench,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./components/brand-icons";
import { SiteNav } from "./components/site-nav";
import { SiteFooter } from "./components/site-footer";
import { projects } from "./data/projects";

const stackIcons: Record<string, typeof Code2> = {
  Languages: LanguagesIcon,
  Frontend: Layout,
  Backend: Server,
  Data: Database,
  Infra: Wrench,
  Security: Shield,
  Exploring: Sparkles,
};

const stack = {
  Languages: ["TypeScript", "JavaScript", "Go", "Python", "SQL"],
  Frontend: ["Next.js", "Nuxt / Vue", "React", "Tailwind"],
  Backend: ["NestJS", "Node.js", "Go", "REST", "TypeORM"],
  Data: ["PostgreSQL", "MySQL", "pgvector"],
  Infra: ["Docker", "Podman", "Kubernetes", "Linux", "Bash", "Git", "GitHub Actions", "Vercel"],
  Security: ["Trivy", "Hardened containers", "Secrets management"],
  Exploring: ["Claude API", "RAG", "Embeddings", "Tool use"],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteNav />

      <main id="main">
        {/* HERO */}
        <section className="px-6 pt-24 pb-32 md:px-10 md:pt-32 md:pb-40" id="top">
          <div className="mx-auto max-w-[1200px]">
            <span className="pill">
              <span className="live-dot" />
              <span>Available for work</span>
            </span>

            <h1 className="t-display mt-8 max-w-[20ch]">
              Engineering full-stack products,{" "}
              <span style={{ fontWeight: 400 }}>from schema to deployment.</span>
            </h1>

            <p className="t-body-lg mt-8 max-w-[60ch]">
              I build scalable web applications with a focus on clean APIs, responsive UIs,
              and automated, containerized deployments.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link className="btn-primary" href="#work">
                View projects
                <ArrowRight aria-hidden size={16} />
              </Link>
              <a
                className="btn-secondary"
                href="https://github.com/Fameeeee"
                rel="noreferrer"
                target="_blank"
              >
                <GithubIcon size={16} />
                View GitHub
                <ArrowUpRight aria-hidden size={14} />
              </a>
            </div>

            <div className="mt-20 grid max-w-[840px] gap-8 sm:grid-cols-3">
              <div>
                <p className="t-mono text-muted">Location</p>
                <p className="mt-2 text-[16px] font-medium text-ink">Bangkok, TH</p>
              </div>
              <div>
                <p className="t-mono text-muted">Focus</p>
                <p className="mt-2 text-[16px] font-medium text-ink">Full-stack · DevOps</p>
              </div>
              <div>
                <p className="t-mono text-muted">Now</p>
                <p className="mt-2 text-[16px] font-medium text-ink">Job-hunting · learning</p>
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
              {projects.map((p, i) => (
                <Link
                  className="card-shadow card-shadow-hover group flex flex-col gap-5 rounded-lg bg-paper p-7"
                  href={`/work/${p.slug}`}
                  key={p.slug}
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

                  {p.live && <p className="t-mono-13 text-badge-fg">{p.live}</p>}

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span className="pill pill-neutral" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                    <span className="t-link inline-flex items-center gap-1 text-muted-strong group-hover:text-ink">
                      Read case study
                      <ArrowRight aria-hidden size={14} />
                    </span>
                  </div>
                </Link>
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

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(stack).map(([category, items]) => {
                const Icon = stackIcons[category] ?? Code2;
                return (
                  <div
                    className="card-shadow flex flex-col gap-4 rounded-lg bg-paper p-6"
                    key={category}
                  >
                    <div className="flex items-center gap-2 text-muted-strong">
                      <Icon aria-hidden size={14} />
                      <p className="t-mono">{category}</p>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {items.map((item) => (
                        <li className="t-mono-13 text-ink" key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
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
                  I build web apps that feel calm on the surface and dependable underneath.
                </h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="t-body-lg">
                  I am a Full-Stack Software Engineer graduating from Mae Fah Luang University
                  in May 2026, currently seeking my first full-time role. I handle the complete
                  software development lifecycle, ensuring security and scalability at every step.
                </p>

                <ul className="flex flex-col gap-5">
                  <li>
                    <p className="t-mono workflow-develop">Full-Stack Development</p>
                    <p className="t-body-lg mt-2">
                      Designing relational databases, building scalable APIs (Nest.js), and
                      crafting modern UIs.
                    </p>
                  </li>
                  <li>
                    <p className="t-mono workflow-preview">DevOps &amp; Infrastructure</p>
                    <p className="t-body-lg mt-2">
                      Containerizing applications (Docker / Podman) and setting up CI/CD
                      pipelines for automated, secure deployments.
                    </p>
                  </li>
                  <li>
                    <p className="t-mono workflow-ship">Continuous Learning</p>
                    <p className="t-body-lg mt-2">
                      Actively integrating AI/LLM capabilities into web applications and
                      deepening my knowledge of secure infrastructure.
                    </p>
                  </li>
                </ul>

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
                <div className="flex items-center gap-2 text-muted-strong">
                  <Mail aria-hidden size={14} />
                  <p className="t-mono">Email</p>
                </div>
                <p className="text-[18px] font-medium text-ink">fame.tee@gmail.com</p>
                <span className="t-link mt-auto inline-flex items-center gap-1 text-muted-strong">
                  Send mail
                  <ArrowRight aria-hidden size={14} />
                </span>
              </a>
              <a
                className="card-shadow card-shadow-hover flex flex-col gap-3 rounded-lg bg-paper p-6"
                href="tel:+66838588695"
              >
                <div className="flex items-center gap-2 text-muted-strong">
                  <Phone aria-hidden size={14} />
                  <p className="t-mono">Phone</p>
                </div>
                <p className="text-[18px] font-medium text-ink">083-858-8695</p>
                <span className="t-link mt-auto inline-flex items-center gap-1 text-muted-strong">
                  Call
                  <ArrowRight aria-hidden size={14} />
                </span>
              </a>
              <a
                className="card-shadow card-shadow-hover flex flex-col gap-3 rounded-lg bg-paper p-6"
                href="https://github.com/Fameeeee"
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-center gap-2 text-muted-strong">
                  <GithubIcon size={14} />
                  <p className="t-mono">GitHub</p>
                </div>
                <p className="text-[18px] font-medium text-ink">@Fameeeee</p>
                <span className="t-link mt-auto inline-flex items-center gap-1 text-muted-strong">
                  Open profile
                  <ArrowUpRight aria-hidden size={14} />
                </span>
              </a>
              <a
                className="card-shadow card-shadow-hover flex flex-col gap-3 rounded-lg bg-paper p-6"
                href="https://www.linkedin.com/in/teetat-teerawaropas-450280348/"
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-center gap-2 text-muted-strong">
                  <LinkedinIcon size={14} />
                  <p className="t-mono">LinkedIn</p>
                </div>
                <p className="text-[18px] font-medium text-ink">teetat-teerawaropas</p>
                <span className="t-link mt-auto inline-flex items-center gap-1 text-muted-strong">
                  Connect
                  <ArrowUpRight aria-hidden size={14} />
                </span>
              </a>
            </div>
          </div>
        </section>

        <div className="divider-strong" />
      </main>

      <SiteFooter />
    </div>
  );
}
