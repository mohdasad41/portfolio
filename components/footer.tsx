import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}
        </p>
        <p className="font-mono text-xs tracking-wider uppercase">{site.role}</p>
      </div>
    </footer>
  );
}
