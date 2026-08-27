export function SectionLabel({
  id,
  number,
  title,
  total = "03",
}: {
  id: string;
  number: string;
  title: string;
  total?: string;
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
        {number} / {total}
      </span>
    </div>
  );
}
