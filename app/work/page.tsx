import type { Metadata } from "next";

import { TrackedLink } from "@/components/tracked-link";
import { Card, CardBody, CardTitle, IllustrativeLabel, TickList } from "@/components/ui/card";
import { Container, Eyebrow, Note, Section, SectionHeading } from "@/components/ui/section";
import { cta } from "@/content/site";
import { caseStudies, exampleEngagements, workPage } from "@/content/work";
import { analyticsEvents } from "@/lib/analytics";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Work — How We Approach Website and Automation Projects",
  description:
    "How Alizane Labs approaches website and AI automation projects, with example engagements. Client case studies are published only once a client approves them.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Work", path: "/work" }])),
        }}
      />

      <div className="bg-canvas">
        <Container className="py-16 sm:py-20">
          <div className="flex max-w-3xl flex-col gap-6">
            <Eyebrow>{workPage.label}</Eyebrow>
            <h1 className="display-face text-headline text-ink">{workPage.headline}</h1>
            <p className="text-lead text-graphite">{workPage.intro}</p>
          </div>
        </Container>
      </div>

      <Section tone="paper" labelledBy="examples-heading">
        <div className="flex flex-col gap-6">
          <SectionHeading
            id="examples-heading"
            eyebrow={workPage.examplesLabel}
            title="The problems we take on."
          />
          <IllustrativeLabel className="self-start">Example engagements</IllustrativeLabel>
        </div>

        <div className="mt-10 flex flex-col gap-5">
          {exampleEngagements.map((example, index) => (
            <Card
              key={example.title}
              as="article"
              reveal
              delay={index * 80}
              className="bg-canvas lg:grid lg:grid-cols-[1fr_1fr] lg:gap-10"
            >
              <div>
                <CardTitle className="text-title">{example.title}</CardTitle>
                <CardBody>{example.situation}</CardBody>
              </div>
              <div className="mt-6 lg:mt-0">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-graphite">
                  Approach
                </p>
                <TickList items={example.approach} className="mt-4" />
                <p className="mt-5 border-l-2 border-cobalt/40 pl-3.5 text-[0.9375rem] leading-relaxed text-ink">
                  {example.intendedOutcome}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <Note className="mt-8 max-w-2xl">{workPage.examplesNote}</Note>
      </Section>

      <Section tone="canvas" labelledBy="case-studies-heading">
        <SectionHeading
          id="case-studies-heading"
          eyebrow="Case studies"
          title="Published only with client approval."
          description={workPage.caseStudyNote}
        />
        {caseStudies.length > 0 ? (
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <Card key={study.slug} as="article">
                <CardTitle>{study.name}</CardTitle>
                <CardBody>{study.businessProblem}</CardBody>
              </Card>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-dashed border-ink/20 bg-paper p-8">
            <p className="text-lead text-ink">No published case studies yet.</p>
            <p className="mt-3 max-w-2xl leading-relaxed text-graphite">
              We do not publish client names, screenshots, or numbers without written approval, and
              we do not invent them in the meantime. When a client agrees to publication, the study
              will describe the business problem, the decision we made, what we built, the
              constraints, and the outcomes the client has confirmed.
            </p>
          </div>
        )}
      </Section>

      <Section tone="ink" labelledBy="work-cta-heading">
        <div className="flex max-w-3xl flex-col gap-6">
          <Eyebrow tone="ink">Start a conversation</Eyebrow>
          <h2 id="work-cta-heading" className="display-face text-headline text-white">
            Tell us about the problem you are trying to solve.
          </h2>
          <p className="text-lead text-graphite-light">
            We will tell you honestly whether a website, an automation, or both is the right place
            to begin.
          </p>
          <TrackedLink
            href={cta.primary.href}
            event={analyticsEvents.primaryCtaClick}
            location="work"
            variant="onInkSolid"
            size="lg"
            className="self-start"
            withArrow
          >
            {cta.primary.label}
          </TrackedLink>
        </div>
      </Section>
    </>
  );
}
