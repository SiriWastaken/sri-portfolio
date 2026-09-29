import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <div className="md:grid md:grid-cols-12 md:gap-x-8">
        <p className="font-mono text-xs text-muted md:col-span-3">404</p>
        <div className="mt-4 md:col-span-9 md:mt-0">
          <h1 className="text-4xl font-semibold tracking-tight">Nothing here.</h1>
          <p className="mt-4 text-muted">That page doesn&apos;t exist, or it moved.</p>
          <div className="mt-8">
            <ButtonLink href="/" variant="primary">
              Back to the homepage
            </ButtonLink>
          </div>
        </div>
      </div>
    </Container>
  );
}
