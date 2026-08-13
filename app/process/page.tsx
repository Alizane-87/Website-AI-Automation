import type { Metadata } from "next";

import { TrackedLink } from "@/components/tracked-link";
import { Card, CardBody, CardTitle, TickList } from "@/components/ui/card";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/section";
import { processPage } from "@/content/process-page";
import { cta } from "@/content/site";
import { analyticsEvents } from "@/lib/analytics";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: processPage.metaTitle,
  description: processPage.metaDescription,
  path: "/process",
});

const checklists = [processPage.testing, processPage.preLaunch, processPage.handoff];

export default function ProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Process", path: "/process" }])),
        }}
      />

      <div className="bg-canvas">
        <Container className="py-16 sm:py-20">
          <div className="flex max-w-3xl flex-col gap-6">
            <Eyebrow>{processPage.eyebrow}</Eyebrow>
            <h1 className="display-face text-headline text-ink">{processPage.headline}</h1>
            <p className="text-lead text-graphite">{processPage.body}</p>
          </div>
        </Container>
      </div>

      <Section tone="paper" labelledBy="stages-heading">
        <SectionHeading id="stages-heading" eyebrow="The four stages" title="Input, output, one decision." />
        <ol className="mt-12 flex flex-col gap-5">
          {processPage.stages.map((stage) => (
            <li key={stage.number}>
              <article data-reveal className="rounded-xl border border-ink/10 bg-canvas p-6 sm:p-8">
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <span className="font-mono text-[0.6875rem] tracking-[0.2em] text-cobalt">
                      {stage.number}
                    </span>
                    <h3 className="display-face mt-3 text-title text-ink">{stage.title}</h3>
                    <p className="mt-3 leading-relaxed text-graphite">{stage.summary}</p>
                  </div>
                  <div className="grid gap-7 sm:grid-cols-3">
                    <div>
                      <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-graphite">
                        What happens
                      </p>
                      <TickList items={stage.activities} className="mt-3.5" />
                    </div>
                    <div>
                      <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-graphite">
                        You provide
                      </p>
                      <TickList items={stage.clientProvides} className="mt-3.5" />
                    </div>
                    <div>
                      <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-graphite">
                        You receive
                      </p>
                      <TickList items={stage.deliverables} className="mt-3.5" />
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="canvas" labelledBy="decisions-heading">
        <SectionHeading
          id="decisions-heading"
          eyebrow={processPage.decisions.label}
          title="Momentum comes from clear decisions."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {processPage.decisions.items.map((item, index) => (
            <Card key={item.title} reveal delay={index * 70}>
              <CardTitle>{item.title}</CardTitle>
              <CardBody>{item.body}</CardBody>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="paper" labelledBy="verification-heading">
        <SectionHeading
          id="verification-heading"
          eyebrow="Verification"
          title="Nothing goes live untested."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          {checklists.map((checklist) => (
            <div key={checklist.label} data-reveal className="rule-top pt-5">
              <h3 className="text-subtitle font-medium text-ink">{checklist.label}</h3>
              <TickList items={checklist.items} className="mt-4" />
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink" labelledBy="process-cta-heading">
        <div className="flex max-w-3xl flex-col gap-6">
          <Eyebrow tone="ink">Next step</Eyebrow>
          <h2 id="process-cta-heading" className="display-face text-headline text-white">
            Start with a diagnosis, not a proposal.
          </h2>
          <p className="text-lead text-graphite-light">
            Tell us how work reaches you today and where it stalls. The first conversation is about
            the problem, not a pitch.
          </p>
          <TrackedLink
            href={cta.primary.href}
            event={analyticsEvents.primaryCtaClick}
            location="process"
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
