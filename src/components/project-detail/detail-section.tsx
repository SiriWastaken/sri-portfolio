type DetailSectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

/** One titled block of a project page, using the same rail as the home page. */
export function DetailSection({ id, title, children }: DetailSectionProps) {
  return (
    <section aria-labelledby={id} className="grid gap-y-4 border-t border-rule py-10 md:grid-cols-12 md:gap-x-8">
      <h2 id={id} className="font-mono text-xs tracking-wide text-muted uppercase md:col-span-3 md:pt-1">
        {title}
      </h2>
      <div className="min-w-0 md:col-span-9">{children}</div>
    </section>
  );
}

export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="max-w-2xl space-y-4 leading-relaxed">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}
