import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm tracking-widest text-foreground uppercase"
        >
          {site.shortName}
        </Link>
        <div className="flex items-center gap-5 sm:gap-7">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-5 sm:gap-7">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
