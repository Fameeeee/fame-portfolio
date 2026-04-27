import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "../../components/brand-icons";
import { SiteNav } from "../../components/site-nav";
import { SiteFooter } from "../../components/site-footer";
import { getProject, projects } from "../../data/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found — Teetat Teerawaropas" };
  return {
    title: `${project.title} — Teetat Teerawaropas`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteNav />

      <main className="px-6 pt-16 pb-24 md:px-10 md:pt-24 md:pb-32" id="main">
        <div className="mx-auto max-w-[1200px]">
          <Link
            className="t-link inline-flex items-center gap-1 text-muted-strong link-hover"
            href="/#work"
          >
            <ArrowLeft aria-hidden size={14} />
            Selected work
          </Link>

          <div className="mt-10 max-w-[60ch]">
            <p className="t-mono text-muted-strong">{project.type}</p>
            <h1 className="t-display mt-6">{project.title}</h1>
            <p className="t-body-lg mt-8">{project.summary}</p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              className="btn-primary"
              href={project.github}
              rel="noreferrer"
              target="_blank"
            >
              <GithubIcon size={16} />
              View on GitHub
              <ArrowUpRight aria-hidden size={14} />
            </a>
            {project.live && (
              <a
                className="btn-secondary"
                href={`https://${project.live}`}
                rel="noreferrer"
                target="_blank"
              >
                <ExternalLink aria-hidden size={14} />
                Open live site
              </a>
            )}
          </div>

          {(project.role || project.team || project.timeline) && (
            <div className="mt-16 grid max-w-[840px] gap-8 sm:grid-cols-3">
              {project.role && (
                <div>
                  <p className="t-mono text-muted">Role</p>
                  <p className="mt-2 text-[16px] font-medium text-ink">{project.role}</p>
                </div>
              )}
              {project.team && (
                <div>
                  <p className="t-mono text-muted">Team</p>
                  <p className="mt-2 text-[16px] font-medium text-ink">{project.team}</p>
                </div>
              )}
              {project.timeline && (
                <div>
                  <p className="t-mono text-muted">Timeline</p>
                  <p className="mt-2 text-[16px] font-medium text-ink">{project.timeline}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <div className="divider-soft" />

      {project.contributions && project.contributions.length > 0 && (
        <>
          <section className="px-6 py-24 md:px-10 md:py-28">
            <div className="mx-auto max-w-[1200px]">
              <p className="t-mono text-muted-strong">02 · What I shipped</p>
              <h2 className="t-h2 mt-4 max-w-[20ch]">Contributions</h2>
              <ul className="mt-10 grid gap-4 max-w-[80ch]">
                {project.contributions.map((c, i) => (
                  <li
                    className="card-shadow flex gap-4 rounded-lg bg-paper p-6"
                    key={i}
                  >
                    <span className="t-mono text-muted-strong">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="t-body">{c}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <div className="divider-soft" />
        </>
      )}

      {project.highlights && project.highlights.length > 0 && (
        <>
          <section className="px-6 py-24 md:px-10 md:py-28">
            <div className="mx-auto max-w-[1200px]">
              <p className="t-mono text-muted-strong">03 · Tech decisions</p>
              <h2 className="t-h2 mt-4 max-w-[20ch]">Highlights</h2>
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {project.highlights.map((h) => (
                  <div
                    className="card-shadow flex flex-col gap-3 rounded-lg bg-paper p-6"
                    key={h.label}
                  >
                    <p className="t-mono text-muted-strong">{h.label}</p>
                    <p className="t-body">{h.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className="divider-soft" />
        </>
      )}

      <section className="px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <p className="t-mono text-muted-strong">04 · Stack</p>
          <h2 className="t-h2 mt-4 max-w-[20ch]">Tools used</h2>
          <div className="mt-10 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span className="pill pill-neutral" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-strong" />

      <SiteFooter />
    </div>
  );
}
