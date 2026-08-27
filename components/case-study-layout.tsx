import Link from "next/link";

export function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <main
      id="main"
      className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-16 sm:py-20"
    >
      <p>
        <Link
          href="/#work"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          ← All work
        </Link>
      </p>
      {children}
    </main>
  );
}
