import Link from "next/link";
import type { Project } from "@/data/types";
import { MetaList } from "@/components/ui/meta-list";
import { ProjectLinks } from "@/components/projects/project-links";
import { StatusLabel } from "@/components/projects/status-label";

export function ProjectHeader({ project }: { project: Project }) {
  return (
    <header className="grid gap-y-8 pt-12 pb-10 sm:pt-16 md:grid-cols-12 md:gap-x-8">
      <div className="md:col-span-3">
        <Link href="/#work" className="group inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-ink">
          <span aria-hidden="true" className="inline-block transition-transform group-hover:-translate-x-1">
            ←
          </span>
          All work
        </Link>
      </div>
      <div className="md:col-span-9">
        <p className="font-mono text-xs text-muted">{project.category}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{project.title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{project.summary}</p>
        <MetaList
          className="mt-8 max-w-xl"
          items={[
            { label: "When", value: project.year },
            {
              label: "Status",
              value: (
                <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <StatusLabel status={project.status} />
                  {project.statusNote ? <span className="text-muted">{project.statusNote}</span> : null}
                </span>
              ),
            },
            { label: "Role", value: project.role },
          ]}
        />
        <ProjectLinks project={project} showDetails={false} className="mt-8" />
      </div>
    </header>
  );
}
