import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4">
        <span className="t-mono text-muted-strong">© 2026 Teetat Teerawaropas</span>
        <span className="t-mono text-muted-strong">Built with Next.js · Hosted on Vercel</span>
        <Link className="t-mono text-ink link-hover" href="/#top">
          ↑ Back to top
        </Link>
      </div>
    </footer>
  );
}
