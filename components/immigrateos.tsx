import Image from "next/image";
import { immigrateos } from "@/lib/site";

export function ImmigrateOS() {
  return (
    <article className="mt-10">
      <div className="flex items-center gap-5 rounded-2xl border border-line bg-immigrateos-well px-6 py-8 sm:px-8">
        <Image
          src={immigrateos.logo.src}
          alt={immigrateos.logo.alt}
          width={80}
          height={80}
          className="h-16 w-16 rounded-2xl sm:h-20 sm:w-20"
          sizes="80px"
        />
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-immigrateos-bright uppercase">
            Vertical SaaS
          </p>
          <p className="mt-1 text-sm text-well-muted">
            Immigration practice OS · live product
          </p>
        </div>
      </div>

      <header className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-immigrateos uppercase">
            {immigrateos.roleLine}
          </p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            {immigrateos.name}
          </h1>
        </div>
        <a
          href={immigrateos.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 shrink-0 items-center rounded-full border border-line px-5 text-sm text-foreground transition-colors hover:border-immigrateos hover:text-immigrateos"
        >
          {immigrateos.urlLabel}
        </a>
      </header>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        {immigrateos.oneLiner}
      </p>

      <blockquote className="mt-10 max-w-2xl border-l-2 border-immigrateos pl-5 text-lg leading-8 text-foreground">
        {immigrateos.story}
      </blockquote>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-immigrateos uppercase">
            Problem
          </p>
          <p className="mt-3 text-base leading-7 text-muted">
            {immigrateos.problem}
          </p>
        </div>
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-immigrateos uppercase">
            Insight
          </p>
          <p className="mt-3 text-base leading-7 text-muted">
            {immigrateos.insight}
          </p>
        </div>
      </div>

      <h2 className="mt-16 font-mono text-xs tracking-[0.22em] text-immigrateos uppercase">
        Product map
      </h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-3">
        {immigrateos.surfaces.map((surface) => (
          <li key={surface.name} className="rounded-2xl border border-line p-5">
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
        <span className="text-foreground">{immigrateos.backend.name}.</span>{" "}
        {immigrateos.backend.tagline} — {immigrateos.backend.body}
      </p>

      <h2 className="mt-16 font-mono text-xs tracking-[0.22em] text-immigrateos uppercase">
        Deep dives
      </h2>
      <ul className="mt-5 divide-y divide-line border-y border-line">
        {immigrateos.dives.map((dive, index) => (
          <li key={dive.title} className="grid gap-3 py-8 sm:grid-cols-[6rem_1fr]">
            <span className="font-mono text-xs tracking-widest text-immigrateos">
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

      <h2 className="mt-16 font-mono text-xs tracking-[0.22em] text-immigrateos uppercase">
        What shipped
      </h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {immigrateos.features.map((feature) => (
          <li key={feature.title} className="rounded-2xl border border-line p-5">
            <p className="text-sm font-medium text-foreground">{feature.title}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{feature.body}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-16 font-mono text-xs tracking-[0.22em] text-immigrateos uppercase">
        Architecture
      </h2>
      <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {immigrateos.architecture.map((layer, index) => (
          <li key={layer.title} className="rounded-2xl border border-line p-5">
            <span className="font-mono text-xs tracking-widest text-immigrateos">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 font-serif text-2xl tracking-tight">{layer.title}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{layer.body}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-16 font-mono text-xs tracking-[0.22em] text-immigrateos uppercase">
        What I did
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
        Founder: category, product, and the full stack — marketing site, firm
        app, client portal, and API.
      </p>
      <ul className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-muted">
        {immigrateos.roleBullets.map((item) => (
          <li key={item} className="border-l border-line pl-4">
            {item}
          </li>
        ))}
      </ul>

      <ul className="mt-10 flex flex-wrap gap-2">
        {immigrateos.stack.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-line px-3.5 py-1.5 text-sm text-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-2xl text-sm leading-6 text-muted">
        {immigrateos.business}
      </p>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
        {immigrateos.honesty}
      </p>

      <ul className="mt-8 flex flex-wrap gap-4 text-sm">
        {immigrateos.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-line underline-offset-4 transition-colors hover:decoration-immigrateos"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
