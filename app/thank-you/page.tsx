import { TrackedLink } from "@/components/tracked-link";
import { Card, CardBody, CardTitle } from "@/components/ui/card";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/section";
import { claims } from "@/content/claims";
import { analyticsEvents } from "@/lib/analytics";
import { pageMetadata } from "@/lib/metadata";

export const metadata = {
  ...pageMetadata({
    title: "Project details received",
    description: "Your project details have reached Alizane Labs.",
    path: "/thank-you",
  }),
  robots: { index: false, follow: true },
};

const nextSteps = [
  {
    title: "We read what you sent",
    body: "Before replying, we read the problem, the outcome you described, and the tools already in play.",
  },
  {
    title: "We reply with a read on it",
    body: "You receive our view of the problem, a recommended starting point, and anything we still need to know.",
  },
  {
    title: "We talk if it fits",
    body: "If the work is a fit, we agree a time to go deeper. If it is not, we say so plainly.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <div className="bg-abyss text-white">
        <Container className="py-16 sm:py-20">
          <div className="flex max-w-3xl flex-col gap-6">
            <Eyebrow tone="ink">Received</Eyebrow>
            <h1 className="display-face text-headline text-white">
              Thank you — your project details are in.
            </h1>
            <p className="text-lead text-graphite-light">
              {claims.responseTime
                ? `We reply within ${claims.responseTime}. Here is what happens next.`
                : "A person reads every inquiry. Here is what happens next."}
            </p>
          </div>
        </Container>
      </div>

      <Section tone="canvas" labelledBy="next-heading">
        <SectionHeading id="next-heading" eyebrow="What happens next" title="Three steps, no chase." />
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {nextSteps.map((step, index) => (
            <Card key={step.title} as="li" reveal delay={index * 80}>
              <span className="font-mono text-[0.6875rem] tracking-[0.2em] text-cobalt">
                {String(index + 1).padStart(2, "0")}
              </span>
              <CardTitle className="mt-3">{step.title}</CardTitle>
              <CardBody>{step.body}</CardBody>
            </Card>
          ))}
        </ol>
      </Section>

      <Section tone="paper" labelledBy="wait-heading">
        <SectionHeading
          id="wait-heading"
          eyebrow="While you wait"
          title="See how a project actually runs."
        />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <TrackedLink
            href="/process"
            event={analyticsEvents.secondaryCtaClick}
            location="thank-you"
            size="lg"
          >
            Read the process
          </TrackedLink>
          <TrackedLink
            href="/work"
            event={analyticsEvents.secondaryCtaClick}
            location="thank-you-secondary"
            variant="secondary"
            size="lg"
          >
            See how we approach work
          </TrackedLink>
        </div>
      </Section>
    </>
  );
}
