import { Section } from "@/components/ui/section";
import { TextLink } from "@/components/ui/text-link";

export function AboutSection() {
  return (
    <Section id="about" index="05" label="About" title="A bit about me">
      <div className="md:grid md:grid-cols-12 md:gap-x-8">
        <div className="max-w-2xl space-y-5 leading-relaxed md:col-span-9 md:col-start-4">
          <p>
            I&apos;m a high-school student who builds software, mostly for FRC Team 610 and partly for my own curiosity. I
            taught myself Java through a{" "}
            <TextLink href="https://github.com/SiriWastaken/Java-Projects">pile of small programs</TextLink>, took it
            further with a Swing game for my Grade 11 CS final, and now write mostly TypeScript: React Native for the team&apos;s
            tablets and Next.js for the web.
          </p>
          <p className="text-muted">
            The problems I like best are where software meets something messy: a competition with bad Wi-Fi, scouts who need
            to enter data faster, a Balance Board that only speaks raw HID. I&apos;m also working toward my first
            open-source contributions, starting with The Blue Alliance.
          </p>
        </div>
      </div>
    </Section>
  );
}
