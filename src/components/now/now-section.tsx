import Link from "next/link";
import { Section } from "@/components/ui/section";
import { now, workStateLabel, type WorkState } from "@/data/now";

const order: WorkState[] = ["active", "planned", "completed"];

const markers: Record<WorkState, string> = {
  active: "bg-accent",
  planned: "border border-dashed border-muted",
  completed: "bg-ink",
};

export function NowSection() {
  return (
    <Section
      id="now"
      index="04"
      label="Now"
      title="Currently building"
      intro={<p>What I&apos;m working on, what&apos;s next, and what&apos;s done.</p>}
    >
      <div className="grid gap-12 md:grid-cols-3 md:gap-8">
        {order.map((state) => {
          const items = now.filter((item) => item.state === state);
          const headingId = `now-${state}`;
          return (
            <section key={state} aria-labelledby={headingId}>
              <h3 id={headingId} className="flex items-center gap-2 border-b border-rule-strong pb-3 font-mono text-xs tracking-wide uppercase">
                <span aria-hidden="true" className={`size-1.5 rounded-full ${markers[state]}`} />
                {workStateLabel[state]}
              </h3>
              <ul>
                {items.map((item) => (
                  <li key={item.title} className="border-b border-rule py-4">
                    <p className="font-medium">
                      {item.projectSlug ? (
                        <Link href={`/projects/${item.projectSlug}`} className="transition-colors hover:text-accent">
                          {item.title}
                        </Link>
                      ) : (
                        item.title
                      )}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.note}</p>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </Section>
  );
}
