import { ProjectCard } from "@/components/project-card";
import { SectionLabel } from "@/components/section-label";
import { projects, site } from "@/lib/site";

export default function Home() {
  return (
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
        <ul className="mt-12 grid gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </ul>
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
  );
}
