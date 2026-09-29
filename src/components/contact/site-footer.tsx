import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="mt-8">
      <Container>
        <div className="grid gap-y-8 border-t border-rule-strong py-12 md:grid-cols-12 md:gap-x-8">
          <p className="font-mono text-xs tracking-wide text-muted uppercase md:col-span-3">Contact</p>
          <div className="md:col-span-9">
            <h2 id="contact-heading" className="text-2xl font-semibold tracking-tight">
              Get in touch
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              The best place to see what I&apos;m working on is GitHub.
              {site.linkedinUrl ? " For anything else, reach me on LinkedIn." : null}
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
              <li>
                <TextLink href={site.githubUrl}>GitHub</TextLink>
              </li>
              {site.linkedinUrl ? (
                <li>
                  <TextLink href={site.linkedinUrl}>LinkedIn</TextLink>
                </li>
              ) : null}
            </ul>
            <p className="mt-16 font-mono text-xs text-muted">
              © {new Date().getFullYear()} {site.name}. Built with Next.js and Tailwind CSS.{" "}
              <TextLink href="https://github.com/SiriWastaken/sri-portfolio">Source</TextLink>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
