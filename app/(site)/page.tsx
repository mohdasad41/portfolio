import { ProjectCard } from "@/components/project-card";
import { SectionLabel } from "@/components/section-label";
import { education, experience, projects, sideProjects, site } from "@/lib/site";

function hostname(url: string) {
  return new URL(url).hostname;
}

export default function Home() {
  return (
    <main
      id="main"
      className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6"
    >
      <section className="border-b border-line py-20 sm:py-28">
        <p className="font-mono text-xs tracking-[0.28em] text-accent uppercase">
          {site.role} · {site.specialty}
        </p>
        <h1 className="mt-6 font-serif text-[clamp(3rem,9vw,6rem)] leading-[0.95] tracking-tight text-foreground">
          {site.name}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
          {site.summary}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex h-12 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Get in touch
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center rounded-full border border-line px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground"
          >
            GitHub
          </a>
          <p className="font-mono text-xs tracking-wider text-muted uppercase sm:ml-2">
            {site.location}
          </p>
        </div>
      </section>

      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="border-b border-line py-20 sm:py-28"
      >
        <SectionLabel id="experience-heading" number="01" title="Experience" />
        <ol className="mt-4 divide-y divide-line">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.role}`}
              className="grid gap-4 py-10 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-10"
            >
              <div className="font-mono text-xs tracking-wider text-muted uppercase">
                <p>{job.period}</p>
                <p className="mt-1">{job.location}</p>
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-tight text-foreground">
                  {job.role}
                </h3>
                <p className="mt-1 text-base text-accent">{job.company}</p>
                {job.groups.map((group, index) => (
                  <div key={group.title ?? index} className="mt-6">
                    {group.title || group.url ? (
                      <p className="text-sm font-medium text-foreground">
                        {group.title}
                        {group.title && group.url ? " · " : null}
                        {group.url ? (
                          <a
                            href={group.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-normal text-muted underline decoration-line underline-offset-4 transition-colors hover:text-foreground"
                          >
                            {hostname(group.url)}
                          </a>
                        ) : null}
                      </p>
                    ) : null}
                    <ul className="mt-3 space-y-2.5 text-base leading-7 text-muted">
                      {group.bullets.map((bullet) => (
                        <li key={bullet} className="border-l border-line pl-4">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="work"
        aria-labelledby="work-heading"
        className="border-b border-line py-20 sm:py-28"
      >
        <SectionLabel id="work-heading" number="02" title="Case studies" />
        <ul className="mt-12 grid gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </ul>
      </section>

      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="border-b border-line py-20 sm:py-28"
      >
        <SectionLabel id="projects-heading" number="03" title="Selected projects" />
        <ul className="mt-12 grid gap-5">
          {sideProjects.map((project) => (
            <li
              key={project.name}
              className="rounded-2xl border border-line p-6 sm:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-serif text-3xl tracking-tight">
                  {project.name}
                </h3>
                <p className="font-mono text-xs tracking-wider text-muted uppercase">
                  {project.platform}
                </p>
              </div>
              <p className="mt-2 text-sm text-accent">
                {project.description}
                {"url" in project ? (
                  <>
                    {" · "}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-foreground"
                    >
                      {project.urlLabel}
                    </a>
                  </>
                ) : null}
              </p>
              <ul className="mt-5 space-y-2.5 text-base leading-7 text-muted">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="border-l border-line pl-4">
                    {bullet}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="skills"
        aria-labelledby="skills-heading"
        className="border-b border-line py-20 sm:py-28"
      >
        <SectionLabel id="skills-heading" number="04" title="Skills" />
        <dl className="mt-4 divide-y divide-line">
          {site.skills.map((group) => (
            <div
              key={group.label}
              className="grid gap-3 py-6 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-10"
            >
              <dt className="font-mono text-xs tracking-wider text-muted uppercase sm:pt-1.5">
                {group.label}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line px-3.5 py-1.5 text-sm text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        id="education"
        aria-labelledby="education-heading"
        className="border-b border-line py-20 sm:py-28"
      >
        <SectionLabel id="education-heading" number="05" title="Education" />
        <ul className="mt-4 divide-y divide-line">
          {education.map((entry) => (
            <li
              key={entry.school}
              className="grid gap-4 py-10 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-10"
            >
              <div className="font-mono text-xs tracking-wider text-muted uppercase">
                <p>{entry.date}</p>
                <p className="mt-1">{entry.location}</p>
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-tight text-foreground">
                  {entry.school}
                </h3>
                <p className="mt-1 text-base text-muted">{entry.credential}</p>
                {"detail" in entry ? (
                  <p className="mt-1 text-sm text-muted">{entry.detail}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="py-20 sm:py-28"
      >
        <SectionLabel id="contact-heading" number="06" title="Contact" />
        <p className="mt-10 max-w-2xl font-serif text-4xl leading-tight tracking-tight sm:text-6xl">
          Let&apos;s work together.
        </p>
        <p className="mt-6 max-w-md text-lg leading-8 text-muted">
          Open to software engineering roles, freelance work and
          collaborations. Based in {site.location}.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex h-12 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center rounded-full border border-line px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
