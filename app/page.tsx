import { Header } from "@/components/header";
import { site } from "@/lib/site";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div id="top" className="flex min-h-full flex-1 flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <Header />

      <main
        id="main"
        className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6"
      >
        <section className="flex min-h-[calc(100svh-4rem)] flex-col justify-end border-b border-line py-16 sm:py-24">
          <p className="font-mono text-xs tracking-[0.28em] text-accent uppercase">
            {site.role}
          </p>
          <h1 className="mt-6 font-serif text-[clamp(3.25rem,12vw,8rem)] leading-[0.92] tracking-tight text-foreground">
            Asadullah
            <br />
            Mohammed
          </h1>
          <div className="mt-10 flex max-w-xl flex-col gap-8 sm:mt-14 sm:flex-row sm:items-end sm:justify-between sm:gap-12">
            <p className="text-lg leading-8 text-muted">{site.summary}</p>
            <p className="shrink-0 font-mono text-xs tracking-wider text-muted uppercase">
              {site.location}
            </p>
          </div>
        </section>

        <section
          id="work"
          aria-labelledby="work-heading"
          className="border-b border-line py-20 sm:py-28"
        >
          <SectionLabel id="work-heading" number="01" title="Work" />
          <ul className="mt-12 divide-y divide-line border-y border-line">
            {site.focus.map((item) => (
              <li
                key={item.number}
                className="grid gap-3 py-8 sm:grid-cols-[6rem_minmax(0,1fr)_minmax(0,2fr)] sm:items-baseline sm:gap-8 sm:py-10"
              >
                <span className="font-mono text-xs tracking-widest text-accent">
                  {item.number}
                </span>
                <h3 className="font-serif text-3xl tracking-tight sm:text-4xl">
                  {item.title}
                </h3>
                <p className="max-w-md text-base leading-7 text-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-muted">
            Selected code lives on{" "}
            <a
              href={site.github}
              className="text-foreground underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="border-b border-line py-20 sm:py-28"
        >
          <SectionLabel id="about-heading" number="02" title="About" />
          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-20">
            <div className="space-y-5 text-lg leading-8 text-muted">
              {site.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div>
              <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">
                Tools I use
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {site.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-line px-3.5 py-1.5 text-sm text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="py-20 sm:py-28"
        >
          <SectionLabel id="contact-heading" number="03" title="Contact" />
          <p className="mt-10 max-w-2xl font-serif text-4xl leading-tight tracking-tight sm:text-6xl">
            Let&apos;s build something careful.
          </p>
          <p className="mt-6 max-w-md text-lg leading-8 text-muted">
            Open to interesting software work, collaborations, and conversations.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              GitHub
            </a>
            {site.email ? (
              <a
                href={`mailto:${site.email}`}
                className="inline-flex h-12 items-center rounded-full border border-line px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground"
              >
                Email
              </a>
            ) : null}
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <p className="font-mono text-xs tracking-wider uppercase">
            {site.role}
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({
  id,
  number,
  title,
}: {
  id: string;
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
      <h2
        id={id}
        className="font-mono text-xs tracking-[0.28em] text-foreground uppercase"
      >
        {title}
      </h2>
      <span className="font-mono text-xs tracking-widest text-muted">
        {number} / 03
      </span>
    </div>
  );
}
