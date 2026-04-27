import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";

type NavLink = { href: string; label: string };

const links: NavLink[] = [
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#stack", label: "Stack" },
  { href: "/#about", label: "About" },
];

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 ring-border-bottom bg-paper/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-10">
        <Link className="flex items-center gap-2" href="/#top">
          <span className="t-mono text-ink">ttw</span>
          <span className="t-link">Teetat Teerawaropas</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link className="t-link text-ink link-hover" href={l.href} key={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link className="btn-primary hidden sm:inline-flex" href="/#contact">
            Get in touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
