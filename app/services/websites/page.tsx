import type { Metadata } from "next";

import { ServiceViewTracker } from "@/components/service-view-tracker";
import { TrackedLink } from "@/components/tracked-link";
import { Card, CardBody, CardTitle } from "@/components/ui/card";
import { Container, Eyebrow, Note, Section, SectionHeading } from "@/components/ui/section";
import { websitesPage } from "@/content/service-pages";
import { cta } from "@/content/site";
import { analyticsEvents } from "@/lib/analytics";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: websitesPage.metaTitle,
  description: websitesPage.metaDescription,
  path: websitesPage.path,
});

export default function WebsitesPage() {
  return (
    <>
      <ServiceViewTracker service={websitesPage.slug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            serviceSchema({
              name: "Custom website design and development",
              description: websitesPage.metaDescription,
              path: websitesPage.path,
              serviceType: "Website design and development",
            }),
            breadcrumbSchema([
              { name: "Services", path: websitesPage.path },
              { name: "Custom websites", path: websitesPage.path },
            ]),
          ]),
        }}
      />

      <div className="bg-canvas">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="flex flex-col gap-6">
              <Eyebrow>{websitesPage.eyebrow}</Eyebrow>
              <h1 className="display-face text-headline text-ink">{websitesPage.headline}</h1>
              <p className="text-lead text-graphite">{websitesPage.body}</p>
              <TrackedLink
                href={cta.primary.href}
                event={analyticsEvents.primaryCtaClick}
                location="websites-hero"
                size="lg"
                className="self-start"
                withArrow
              >
                {websitesPage.ctaLabel}
              </TrackedLink>
            </div>

            <div className="rounded-xl border border-ink/10 bg-paper p-6">
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-graphite">
                {websitesPage.transformationLabel}
              </p>
              <ul className="mt-5 flex flex-col gap-4">
                {websitesPage.transformations.map((item) => (
                  <li key={item.to} className="flex flex-col gap-1">
                    <span className="text-sm text-graphite line-through decoration-ink/25">
                      {item.from}
                    </span>
                    <span className="flex items-center gap-2 text-ink">
                      <span aria-hidden="true" className="text-cobalt">
                        →
                      </span>
                      {item.to}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <Section tone="paper" labelledBy="capabilities-heading">
        <SectionHeading
          id="capabilities-heading"
          eyebrow={websitesPage.capabilitiesLabel}
          title={websitesPage.capabilitiesHeadline}
        />
        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {websitesPage.capabilities.map((capability) => (
            <div key={capability.title} data-reveal className="rule-top pt-5">
              <h3 className="text-subtitle font-medium text-ink">{capability.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-graphite">
                {capability.body}
              </p>
            </div>
          ))}
        </div>
        <Note className="mt-10 max-w-2xl">
          Scope is confirmed per project. We do not publish fixed packages, delivery timelines, or
          performance guarantees before an assessment.
        </Note>
      </Section>

      <Section tone="canvas" labelledBy="pairing-heading">
        <SectionHeading
          id="pairing-heading"
          eyebrow="Better together"
          title="A site that converts needs a system behind it."
          description="Most of the value appears after someone becomes interested. Pairing the build with automation means the reply, the qualification, and the booking are part of the same design."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Card className="bg-paper">
            <CardTitle>Website only</CardTitle>
            <CardBody>
              Right when the priority is positioning, presence, and a clear conversion path, and
              your team already handles inquiries well.
            </CardBody>
          </Card>
          <Card className="bg-paper">
            <CardTitle>Website plus automation</CardTitle>
            <CardBody>
              Right when inquiries arrive outside working hours, repeat the same questions, or wait
              for someone to pick them up.
            </CardBody>
            <TrackedLink
              href="/services/ai-automation"
              event={analyticsEvents.secondaryCtaClick}
              location="websites-pairing"
              variant="quiet"
              className="mt-5 self-start px-0"
              withArrow
            >
              See AI automation
            </TrackedLink>
          </Card>
        </div>
      </Section>

      <Section tone="ink" labelledBy="websites-cta-heading">
        <div className="flex max-w-3xl flex-col gap-6">
          <Eyebrow tone="ink">Next step</Eyebrow>
          <h2 id="websites-cta-heading" className="display-face text-headline text-white">
            {websitesPage.closingHeadline}
          </h2>
          <p className="text-lead text-graphite-light">{websitesPage.closingBody}</p>
          <TrackedLink
            href={cta.primary.href}
            event={analyticsEvents.primaryCtaClick}
            location="websites-footer"
            variant="onInkSolid"
            size="lg"
            className="self-start"
            withArrow
          >
            {websitesPage.ctaLabel}
          </TrackedLink>
        </div>
      </Section>
    </>
  );
}
