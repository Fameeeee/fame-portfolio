import Link from "next/link";
import { SiteNav } from "./components/site-nav";
import { SiteFooter } from "./components/site-footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteNav />

      <main
        className="flex min-h-[70vh] items-center justify-center px-6 py-24 md:px-10 md:py-32"
        id="main"
      >
        <div className="mx-auto max-w-[60ch] text-center">
          <p className="t-mono text-muted-strong">404 · Not found</p>
          <h1 className="t-display mt-6">This page doesn&apos;t exist.</h1>
          <p className="t-body-lg mt-8">
            The link may be broken, or the page may have been moved. Try heading back to the
            homepage or jumping straight to the selected work.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link className="btn-primary" href="/">
              Go home
              <span aria-hidden>→</span>
            </Link>
            <Link className="btn-secondary" href="/#work">
              Selected work
            </Link>
          </div>
        </div>
      </main>

      <div className="divider-strong" />

      <SiteFooter />
    </div>
  );
}
