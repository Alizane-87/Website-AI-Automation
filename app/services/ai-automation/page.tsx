import type { Metadata } from "next";

import { AutomationDemo } from "@/components/automation-demo";
import { ServiceViewTracker } from "@/components/service-view-tracker";
import { TrackedLink } from "@/components/tracked-link";
import { Card, CardBody, CardTitle, TickList } from "@/components/ui/card";
import { Container, Eyebrow, Note, Section, SectionHeading } from "@/components/ui/section";
import { aiAutomationPage } from "@/content/service-pages";
import { cta, demo } from "@/content/site";
import { analyticsEvents } from "@/lib/analytics";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: aiAutomationPage.metaTitle,
  description: aiAutomationPage.metaDescription,
  path: aiAutomationPage.path,
});

export default function AiAutomationPage() {
  return (
    <>
      <ServiceViewTracker service={aiAutomationPage.slug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            serviceSchema({
              name: "AI automation for inquiry handling and routing",
              description: aiAutomationPage.metaDescription,
              path: aiAutomationPage.path,
              serviceType: "Business process automation",
            }),
            breadcrumbSchema([
              { name: "Services", path: aiAutomationPage.path },
              { name: "AI automation", path: aiAutomationPage.path },
            ]),
          ]),
        }}
      />

      <div className="bg-canvas">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="flex flex-col gap-6">
              <Eyebrow>{aiAutomationPage.eyebrow}</Eyebrow>
              <h1 className="display-face text-headline text-ink">{aiAutomationPage.headline}</h1>
              <p className="text-lead text-graphite">{aiAutomationPage.body}</p>
              <TrackedLink
                href={cta.primary.href}
                event={analyticsEvents.primaryCtaClick}
                location="automation-hero"
                size="lg"
                className="self-start"
                withArrow
              >
                {aiAutomationPage.ctaLabel}
              </TrackedLink>
            </div>

            <div className="rounded-xl border border-ink/10 bg-paper p-6">
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-graphite">
                {aiAutomationPage.useCasesLabel}
              </p>
              <TickList items={aiAutomationPage.useCases} className="mt-5" />
            </div>
          </div>
        </Container>
      </div>

      <Section tone="ink" labelledBy="automation-demo-heading">
        <SectionHeading
          id="automation-demo-heading"
          eyebrow={demo.label}
          title={demo.headline}
          tone="ink"
        />
        <div className="mt-12">
          <AutomationDemo />
        </div>
      </Section>

      <Section tone="paper" labelledBy="automation-capabilities-heading">
        <SectionHeading
          id="automation-capabilities-heading"
          eyebrow={aiAutomationPage.capabilitiesLabel}
          title={aiAutomationPage.capabilitiesHeadline}
        />
        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {aiAutomationPage.capabilities.map((capability) => (
            <div key={capability.title} data-reveal className="rule-top pt-5">
              <h3 className="text-subtitle font-medium text-ink">{capability.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-graphite">
                {capability.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="canvas" labelledBy="boundaries-heading">
        <SectionHeading
          id="boundaries-heading"
          eyebrow={aiAutomationPage.boundariesLabel}
          title={aiAutomationPage.boundariesHeadline}
          description={aiAutomationPage.principle}
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {aiAutomationPage.boundaries.map((boundary, index) => (
            <Card key={boundary.title} reveal delay={index * 80} className="bg-paper">
              <CardTitle>{boundary.title}</CardTitle>
              <CardBody>{boundary.body}</CardBody>
            </Card>
          ))}
        </div>
        <Note className="mt-8 max-w-2xl">
          Integration compatibility, data handling, and retention are confirmed per project before
          anything is connected to live systems.
        </Note>
      </Section>

      <Section tone="ink" labelledBy="automation-cta-heading">
        <div className="flex max-w-3xl flex-col gap-6">
          <Eyebrow tone="ink">Next step</Eyebrow>
          <h2 id="automation-cta-heading" className="display-face text-headline text-white">
            {aiAutomationPage.closingHeadline}
          </h2>
          <p className="text-lead text-graphite-light">{aiAutomationPage.closingBody}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href={cta.primary.href}
              event={analyticsEvents.primaryCtaClick}
              location="automation-footer"
              variant="onInkSolid"
              size="lg"
              withArrow
            >
              {aiAutomationPage.ctaLabel}
            </TrackedLink>
            <TrackedLink
              href="/services/websites"
              event={analyticsEvents.secondaryCtaClick}
              location="automation-footer"
              variant="onInk"
              size="lg"
            >
              See custom websites
            </TrackedLink>
          </div>
        </div>
      </Section>
    </>
  );
}
