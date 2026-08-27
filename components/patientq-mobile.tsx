import Image from "next/image";
import Link from "next/link";
import { patientqMobile } from "@/lib/site";

export function PatientQMobile() {
  return (
    <article className="mt-10">
      <div className="flex items-center gap-5 rounded-2xl border border-line bg-black px-6 py-8 sm:px-8">
        <Image
          src={patientqMobile.logo.src}
          alt={patientqMobile.logo.alt}
          width={80}
          height={80}
          className="h-16 w-16 rounded-2xl object-contain sm:h-20 sm:w-20"
          sizes="80px"
        />
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-patientq uppercase">
            Mobile app
          </p>
          <p className="mt-1 text-sm text-muted">{patientqMobile.kicker}</p>
        </div>
      </div>

      <header className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-patientq uppercase">
            {patientqMobile.roleLine}
          </p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            {patientqMobile.name}
          </h1>
        </div>
        <a
          href={patientqMobile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 shrink-0 items-center rounded-full border border-line px-5 text-sm text-foreground transition-colors hover:border-patientq hover:text-patientq"
        >
          {patientqMobile.urlLabel}
        </a>
      </header>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        {patientqMobile.oneLiner}
      </p>

      <blockquote className="mt-10 max-w-2xl border-l-2 border-patientq pl-5 text-lg leading-8 text-foreground">
        {patientqMobile.story}
      </blockquote>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-patientq uppercase">
            Problem
          </p>
          <p className="mt-3 text-base leading-7 text-muted">
            {patientqMobile.problem}
          </p>
        </div>
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-patientq uppercase">
            Product
          </p>
          <p className="mt-3 text-base leading-7 text-muted">
            {patientqMobile.outcome}
          </p>
        </div>
      </div>
      <p className="mt-6 max-w-2xl text-sm leading-6 text-muted">
        {patientqMobile.audience}
      </p>

      <h2 className="mt-16 font-mono text-xs tracking-[0.22em] text-patientq uppercase">
        Product map
      </h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-3">
        {patientqMobile.surfaces.map((surface) => (
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
        <span className="text-foreground">{patientqMobile.backend.name}.</span>{" "}
        {patientqMobile.backend.tagline} — {patientqMobile.backend.body}
      </p>

      <h2 className="mt-16 font-mono text-xs tracking-[0.22em] text-patientq uppercase">
        Recording flow
      </h2>
      <ol className="mt-5 flex flex-wrap items-center gap-2">
        {patientqMobile.pipeline.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span className="rounded-full border border-patientq/40 px-3.5 py-1.5 text-sm text-foreground">
              {step}
            </span>
            {index < patientqMobile.pipeline.length - 1 ? (
              <span aria-hidden="true" className="text-muted">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>

      <h2 className="mt-16 font-mono text-xs tracking-[0.22em] text-patientq uppercase">
        Deep dives
      </h2>
      <ul className="mt-5 divide-y divide-line border-y border-line">
        {patientqMobile.dives.map((dive, index) => (
          <li
            key={dive.title}
            className="grid gap-3 py-8 sm:grid-cols-[6rem_1fr]"
          >
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
        {patientqMobile.features.map((group) => (
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
        {patientqMobile.architecture.map((layer, index) => (
          <li key={layer.title} className="rounded-2xl border border-line p-5">
            <span className="font-mono text-xs tracking-widest text-patientq">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 font-serif text-2xl tracking-tight">
              {layer.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">{layer.body}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-16 font-mono text-xs tracking-[0.22em] text-patientq uppercase">
        Role
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
        {patientqMobile.roleIntro}
      </p>
      <ul className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-muted">
        {patientqMobile.roleBullets.map((item) => (
          <li key={item} className="border-l border-line pl-4">
            {item}
          </li>
        ))}
      </ul>

      <ul className="mt-10 flex flex-wrap gap-2">
        {patientqMobile.stack.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-line px-3.5 py-1.5 text-sm text-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-2xl text-sm leading-6 text-muted">
        {patientqMobile.scope}
      </p>
      <p className="mt-4 text-sm">
        <Link
          href={patientqMobile.related.href}
          className="text-foreground underline decoration-line underline-offset-4 transition-colors hover:decoration-patientq"
        >
          {patientqMobile.related.label}
        </Link>
      </p>
    </article>
  );
}
