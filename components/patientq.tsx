import Image from "next/image";
import { patientq } from "@/lib/site";

export function PatientQ() {
  return (
    <article className="mt-10">
      <div className="relative h-40 overflow-hidden rounded-2xl border border-line bg-logo-well sm:h-48">
        <Image
          src={patientq.logo.src}
          alt={patientq.logo.alt}
          fill
          className="object-contain p-6 sm:p-8"
          sizes="(max-width: 1024px) 100vw, 64rem"
        />
      </div>

      <header className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-patientq uppercase">
            {patientq.roleLine}
          </p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            {patientq.name}
          </h1>
        </div>
        <a
          href={patientq.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 shrink-0 items-center rounded-full border border-line px-5 text-sm text-foreground transition-colors hover:border-patientq hover:text-patientq"
        >
          {patientq.urlLabel}
        </a>
      </header>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        {patientq.oneLiner}
      </p>

      <blockquote className="mt-10 max-w-2xl border-l-2 border-patientq pl-5 text-lg leading-8 text-foreground">
        {patientq.story}
      </blockquote>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-patientq uppercase">
            Problem
          </p>
          <p className="mt-3 text-base leading-7 text-muted">{patientq.problem}</p>
        </div>
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-patientq uppercase">
            Product
          </p>
          <p className="mt-3 text-base leading-7 text-muted">{patientq.outcome}</p>
        </div>
      </div>

      <h2 className="mt-16 font-mono text-xs tracking-[0.22em] text-patientq uppercase">
        Product map
      </h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-3">
        {patientq.surfaces.map((surface) => (
          <li
            key={surface.name}
            className="rounded-2xl border border-line p-5"
          >
            <p className="font-mono text-xs tracking-widest text-muted uppercase">
              {surface.name}
            </p>
            <p className="mt-3 font-serif text-2xl tracking-tight">
              {surface.tagline}
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">{surface.body}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm leading-6 text-muted">
        <span className="text-foreground">{patientq.backend.name}.</span>{" "}
        {patientq.backend.tagline} — {patientq.backend.body}
      </p>

      <h2 className="mt-16 font-mono text-xs tracking-[0.22em] text-patientq uppercase">
        Deep dives
      </h2>
      <ul className="mt-5 divide-y divide-line border-y border-line">
        {patientq.dives.map((dive, index) => (
          <li key={dive.title} className="grid gap-3 py-8 sm:grid-cols-[6rem_1fr]">
            <span className="font-mono text-xs tracking-widest text-patientq">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-serif text-2xl tracking-tight">{dive.title}</h3>
              <p className="mt-3 max-w-xl text-base leading-7 text-muted">
                {dive.body}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="mt-16 font-mono text-xs tracking-[0.22em] text-patientq uppercase">
        What shipped
      </h2>
      <ul className="mt-5 grid gap-8 sm:grid-cols-2">
        {patientq.features.map((group) => (
          <li key={group.title}>
            <p className="text-sm font-medium text-foreground">{group.title}</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h2 className="mt-16 font-mono text-xs tracking-[0.22em] text-patientq uppercase">
        Architecture
      </h2>
      <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {patientq.architecture.map((layer, index) => (
          <li
            key={layer.title}
            className="rounded-2xl border border-line p-5"
          >
            <span className="font-mono text-xs tracking-widest text-patientq">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 font-serif text-2xl tracking-tight">{layer.title}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{layer.body}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-16 font-mono text-xs tracking-[0.22em] text-patientq uppercase">
        Role
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
        Co-lead: product direction, architecture, and delivery — not sole
        authorship of the monorepo.
      </p>
      <ul className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-muted">
        {patientq.roleBullets.map((item) => (
          <li key={item} className="pl-4 border-l border-line">
            {item}
          </li>
        ))}
      </ul>

      <ul className="mt-10 flex flex-wrap gap-2">
        {patientq.stack.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-line px-3.5 py-1.5 text-sm text-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm leading-6 text-muted">{patientq.scope}</p>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
        {patientq.origin}
      </p>
    </article>
  );
}
