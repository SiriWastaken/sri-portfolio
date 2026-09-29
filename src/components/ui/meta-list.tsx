type MetaListProps = {
  items: { label: string; value: React.ReactNode }[];
  className?: string;
};

/** Label/value pairs set in mono, used in the left rail of project blocks. */
export function MetaList({ items, className = "" }: MetaListProps) {
  return (
    <dl className={`grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 font-mono text-xs ${className}`}>
      {items.map((item) => (
        <div key={item.label} className="contents">
          <dt className="text-muted">{item.label}</dt>
          <dd className="text-ink">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
