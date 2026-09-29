type TechListProps = {
  technologies: string[];
  className?: string;
};

export function TechList({ technologies, className = "" }: TechListProps) {
  return (
    <ul aria-label="Technologies" className={`flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-muted ${className}`}>
      {technologies.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  );
}
