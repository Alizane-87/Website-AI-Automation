import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <div className="flex max-w-xl flex-col gap-5">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-graphite">404</p>
        <h1 className="display-face text-headline text-ink">That page is not part of the site.</h1>
        <p className="text-lead text-graphite">
          The link may be out of date. The work, the services, and a way to start a project are all
          one click away.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            Back to the homepage
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" size="lg">
            Start a project
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
}
