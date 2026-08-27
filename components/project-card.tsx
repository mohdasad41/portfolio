import Image from "next/image";
import Link from "next/link";

const accentText = {
  immigrateos: "text-immigrateos",
  patientq: "text-patientq",
} as const;

type ProjectCardProps = {
  name: string;
  role: string;
  href: string;
  blurb: string;
  stack: readonly string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  accent: keyof typeof accentText;
};

export function ProjectCard({
  name,
  role,
  href,
  blurb,
  stack,
  image,
  accent,
}: ProjectCardProps) {
  return (
    <li>
      <Link
        href={href}
        className="group grid gap-6 rounded-2xl border border-line p-6 transition-colors hover:border-foreground/40 sm:grid-cols-[auto_minmax(0,1fr)] sm:p-8"
      >
        <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-line bg-logo-well">
          <Image
            src={image.src}
            alt=""
            width={image.width}
            height={image.height}
            className="h-full w-full object-contain p-1"
            sizes="64px"
          />
        </div>
        <div>
          <p
            className={`font-mono text-xs tracking-[0.22em] uppercase ${accentText[accent]}`}
          >
            {role}
          </p>
          <h3 className="mt-2 font-serif text-3xl tracking-tight">{name}</h3>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{blurb}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {stack.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line px-3 py-1 text-xs text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-foreground transition-colors group-hover:text-accent">
            Read the case study
          </p>
        </div>
      </Link>
    </li>
  );
}
