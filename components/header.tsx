import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono text-sm tracking-widest text-foreground uppercase"
        >
          {site.shortName}
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-7">
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
      </div>
    </header>
  );
}
