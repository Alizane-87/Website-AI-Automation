import type { Metadata } from "next";
import Link from "next/link";

import { AutomationDemo } from "@/components/automation-demo";
import { FaqList } from "@/components/faq";
import { HeroSystem } from "@/components/hero-system";
import { TrackedLink } from "@/components/tracked-link";
import { Card, CardBody, CardTitle, IllustrativeLabel, TickList } from "@/components/ui/card";
import {
  Container,
  Eyebrow,
  Note,
  Section,
  SectionHeading,
  revealStyle,
} from "@/components/ui/section";
import { faqSection, homeFaqs } from "@/content/faqs";
import {
  capabilityStrip,
  cta,
  demo,
  differentiation,
  engagement,
  finalCta,
  hero,
  processSection,
  processSteps,
  reframe,
  services,
  servicesSection,
  site,
} from "@/content/site";
import { exampleEngagements, workPage } from "@/content/work";
import { analyticsEvents } from "@/lib/analytics";
import { pageMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: site.defaultTitle,
  description: site.defaultDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFaqs)) }}
      />

      <div className="bg-canvas">
        <Container className="pt-14 pb-16 sm:pt-20 sm:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div data-reveal className="flex flex-col gap-7">
              <Eyebrow>{hero.eyebrow}</Eyebrow>
              <h1 className="display-face text-display text-ink">{hero.headline}</h1>
              <p className="max-w-xl text-lead text-graphite">{hero.body}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <TrackedLink
                  href={cta.primary.href}
                  event={analyticsEvents.primaryCtaClick}
                  location="hero"
                  size="lg"
                  withArrow
                >
                  {cta.primary.label}
                </TrackedLink>
                <TrackedLink
                  href={cta.secondary.href}
                  event={analyticsEvents.secondaryCtaClick}
                  location="hero"
                  variant="secondary"
                  size="lg"
                >
                  {cta.secondary.label}
                </TrackedLink>
              </div>
              <p className="text-sm text-graphite">{hero.reassurance}</p>
            </div>

            <div data-reveal style={revealStyle(120)}>
              <HeroSystem />
            </div>
          </div>
        </Container>
      </div>

      <div className="border-y border-ink/10 bg-paper">
        <Container className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {capabilityStrip.items.map((item) => (
              <li
                key={item}
                className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-graphite">{capabilityStrip.supporting}</p>
        </Container>
      </div>

      <Section tone="canvas" labelledBy="reframe-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div data-reveal className="flex flex-col gap-6">
            <SectionHeading
              id="reframe-heading"
              eyebrow={reframe.label}
              title={reframe.headline}
              description={reframe.body}
            />
            <p className="text-lead text-ink">{reframe.closing}</p>
          </div>

          <div data-reveal className="grid gap-4 self-start sm:grid-cols-2">
            {[reframe.traditional, reframe.system].map((path, pathIndex) => (
              <div
                key={path.label}
                className={
                  pathIndex === 1
                    ? "rounded-xl border border-cobalt/25 bg-cobalt-soft p-5"
                    : "rounded-xl border border-ink/10 bg-paper p-5"
                }
              >
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-graphite">
                  {path.label}
                </p>
                <ol className="mt-4 flex flex-col gap-2.5">
                  {path.steps.map((step, index) => (
                    <li key={step} className="flex items-center gap-3 text-sm text-ink">
                      <span
                        aria-hidden="true"
                        className={
                          pathIndex === 1
                            ? "h-1.5 w-1.5 rounded-full bg-cobalt"
                            : "h-1.5 w-1.5 rounded-full bg-ink/25"
                        }
                      />
                      {step}
                      {pathIndex === 0 && index === path.steps.length - 1 ? (
                        <span className="text-graphite">— and nothing follows</span>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="paper" id="services" labelledBy="services-heading">
        <SectionHeading
          id="services-heading"
          eyebrow={servicesSection.label}
          title={servicesSection.headline}
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {services.map((service, index) => (
            <Card
              key={service.slug}
              as="article"
              reveal
              delay={index * 90}
              className="border-ink/12 bg-canvas"
            >
              <CardTitle className="text-title">{service.title}</CardTitle>
              <CardBody>{service.copy}</CardBody>
              <TickList items={service.features} className="mt-6" />
              <TrackedLink
                href={service.href}
                event={analyticsEvents.secondaryCtaClick}
                location={`home-service-${service.slug}`}
                variant="quiet"
                className="mt-7 self-start px-0"
                withArrow
              >
                {service.ctaLabel}
              </TrackedLink>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="canvas" labelledBy="differentiation-heading">
        <SectionHeading
          id="differentiation-heading"
          eyebrow={differentiation.label}
          title={differentiation.headline}
        />
        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {differentiation.principles.map((principle) => (
            <div key={principle.title} data-reveal className="rule-top pt-5">
              <h3 className="text-subtitle font-medium text-ink">{principle.title}</h3>
              <p className="mt-2.5 leading-relaxed text-graphite">{principle.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink" id="demo" labelledBy="demo-heading">
        <SectionHeading
          id="demo-heading"
          eyebrow={demo.label}
          title={demo.headline}
          tone="ink"
          description="Follow a configured workflow from an opening question to a person receiving the conversation with context attached."
        />
        <div className="mt-12">
          <AutomationDemo />
        </div>
      </Section>

      <Section tone="paper" labelledBy="work-heading">
        <SectionHeading
          id="work-heading"
          eyebrow={workPage.examplesLabel}
          title={workPage.headline}
          description={workPage.intro}
        />
        <div className="mt-6">
          <IllustrativeLabel>Example engagements</IllustrativeLabel>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {exampleEngagements.map((example, index) => (
            <Card
              key={example.title}
              as="article"
              reveal
              delay={index * 90}
              className="bg-canvas"
            >
              <CardTitle>{example.title}</CardTitle>
              <CardBody>{example.situation}</CardBody>
              <TickList items={example.approach} className="mt-5" />
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Note className="max-w-xl">{workPage.examplesNote}</Note>
          <TrackedLink
            href="/work"
            event={analyticsEvents.secondaryCtaClick}
            location="home-work"
            variant="secondary"
            withArrow
          >
            See how we approach work
          </TrackedLink>
        </div>
      </Section>

      <Section tone="canvas" labelledBy="process-heading">
        <SectionHeading
          id="process-heading"
          eyebrow={processSection.label}
          title={processSection.headline}
        />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li
              key={step.number}
              data-reveal
              className="rule-top pt-5"
              style={revealStyle(index * 80)}
            >
              <span className="font-mono text-[0.6875rem] tracking-[0.2em] text-cobalt">
                {step.number}
              </span>
              <h3 className="mt-3 text-subtitle font-medium text-ink">{step.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-graphite">{step.body}</p>
            </li>
          ))}
        </ol>
        <TrackedLink
          href="/process"
          event={analyticsEvents.secondaryCtaClick}
          location="home-process"
          variant="quiet"
          className="mt-10 px-0"
          withArrow
        >
          Read the full process
        </TrackedLink>
      </Section>

      <Section tone="paper" labelledBy="engagement-heading">
        <SectionHeading
          id="engagement-heading"
          eyebrow={engagement.label}
          title={engagement.headline}
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {engagement.options.map((option, index) => (
            <Card
              key={option.title}
              reveal
              delay={index * 90}
              className="bg-canvas"
            >
              <CardTitle>{option.title}</CardTitle>
              <CardBody>{option.body}</CardBody>
              <TickList items={option.includes} className="mt-5" />
            </Card>
          ))}
        </div>
        <Note className="mt-8 max-w-2xl">
          Scope, timing, and price are confirmed in writing after an assessment. Nothing here is a
          fixed package.
        </Note>
      </Section>

      <Section tone="canvas" labelledBy="faq-heading">
        <SectionHeading id="faq-heading" eyebrow={faqSection.label} title={faqSection.headline} />
        <FaqList faqs={homeFaqs} location="home" className="mt-10" />
      </Section>

      <Section tone="ink" labelledBy="final-cta-heading">
        <div className="flex max-w-3xl flex-col gap-7">
          <Eyebrow tone="ink">{finalCta.eyebrow}</Eyebrow>
          <h2 id="final-cta-heading" className="display-face text-headline text-white">
            {finalCta.headline}
          </h2>
          <p className="text-lead text-graphite-light">{finalCta.body}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href={cta.primary.href}
              event={analyticsEvents.primaryCtaClick}
              location="final-cta"
              variant="onInkSolid"
              size="lg"
              withArrow
            >
              {cta.primary.label}
            </TrackedLink>
            <TrackedLink
              href={cta.capabilities.href}
              event={analyticsEvents.secondaryCtaClick}
              location="final-cta"
              variant="onInk"
              size="lg"
            >
              {cta.capabilities.label}
            </TrackedLink>
          </div>
          <p className="text-sm text-graphite-light">{finalCta.reassurance}</p>
          <p className="text-sm text-graphite-light">
            Prefer to read first?{" "}
            <Link href="/process" className="text-white underline underline-offset-4">
              See how a project runs
            </Link>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
