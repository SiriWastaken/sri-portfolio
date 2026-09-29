import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pt-16 pb-8 sm:pt-24">
      <Container>
        <div className="grid gap-y-6 md:grid-cols-12 md:gap-x-8">
          <p className="font-mono text-xs leading-relaxed text-muted md:col-span-3 md:pt-4">
            Student developer
            <br />
            FRC Team 610
          </p>

          <div className="md:col-span-9">
            <h1 id="hero-heading" className="text-5xl font-semibold tracking-tight sm:text-6xl">
              Hi, I&apos;m {site.shortName}.
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-snug text-balance sm:text-2xl">
              I&apos;m a student developer building full-stack software, robotics tools, and systems that solve real
              problems.
            </p>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted">
              Most of my work is for FRC Team 610: a scouting app our scouts ran on tablets through the 2026 season, and the
              web dashboard I&apos;m building for 2027. Outside the team I&apos;m working on an iPad app for the Swift
              Student Challenge and trying to turn a Wii Balance Board into a scale. I write mostly TypeScript and Java.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/#work" variant="primary">
                View projects
              </ButtonLink>
              <ButtonLink href={site.githubUrl}>GitHub</ButtonLink>
              {site.linkedinUrl ? <ButtonLink href={site.linkedinUrl}>LinkedIn</ButtonLink> : null}
              <ButtonLink href={site.dmojUrl}>DMOJ</ButtonLink>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
