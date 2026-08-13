import type { Metadata } from "next";

import { TrackedLink } from "@/components/tracked-link";
import { Card, CardBody, CardTitle, TickList } from "@/components/ui/card";
import { Container, Eyebrow, Note, Section, SectionHeading } from "@/components/ui/section";
import { aboutPage } from "@/content/about-page";
import { claims } from "@/content/claims";
import { cta } from "@/content/site";
import { analyticsEvents } from "@/lib/analytics";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: aboutPage.metaTitle,
  description: aboutPage.metaDescription,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "About", path: "/about" }])),
        }}
      />

      <div className="bg-canvas">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              <Eyebrow>{aboutPage.eyebrow}</Eyebrow>
              <h1 className="display-face text-headline text-ink">{aboutPage.headline}</h1>
              {claims.location ? <p className="text-graphite">{claims.location}</p> : null}
            </div>
            <div className="flex flex-col gap-5 self-center">
              {aboutPage.intro.map((paragraph) => (
                <p key={paragraph} className="text-lead text-graphite">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <Section tone="paper" labelledBy="beliefs-heading">
        <SectionHeading
          id="beliefs-heading"
          eyebrow={aboutPage.beliefs.label}
          title="Four positions that shape every project."
        />
        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {aboutPage.beliefs.items.map((item) => (
            <div key={item.title} data-reveal className="rule-top pt-5">
              <h3 className="text-subtitle font-medium text-ink">{item.title}</h3>
              <p className="mt-2.5 leading-relaxed text-graphite">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="canvas" labelledBy="working-heading">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              id="working-heading"
              eyebrow={aboutPage.howWeWork.label}
              title="A studio built for focus."
            />
            <TickList items={aboutPage.howWeWork.items} className="mt-8" />
          </div>
          <div className="rounded-xl border border-ink/10 bg-paper p-6 sm:p-8">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-graphite">
              {aboutPage.notDoing.label}
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {aboutPage.notDoing.items.map((item) => (
                <li
                  key={item}
                  className="grid grid-cols-[auto_1fr] gap-3 text-[0.9375rem] leading-relaxed text-graphite"
                >
                  <span aria-hidden="true" className="mt-0.5 text-alert">
                    ×
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="paper" labelledBy="communication-heading">
        <SectionHeading
          id="communication-heading"
          eyebrow={aboutPage.communication.label}
          title="How the relationship actually runs."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {aboutPage.communication.items.map((item, index) => (
            <Card key={item.title} reveal delay={index * 80} className="bg-canvas">
              <CardTitle>{item.title}</CardTitle>
              <CardBody>{item.body}</CardBody>
            </Card>
          ))}
        </div>
        <Note className="mt-8 max-w-2xl">
          Company details, team information, and location are published only once confirmed. We do
          not list credentials, awards, or client names we cannot substantiate.
        </Note>
      </Section>

      <Section tone="ink" labelledBy="about-cta-heading">
        <div className="flex max-w-3xl flex-col gap-6">
          <Eyebrow tone="ink">Work with us</Eyebrow>
          <h2 id="about-cta-heading" className="display-face text-headline text-white">
            If the problem is worth solving properly, we should talk.
          </h2>
          <TrackedLink
            href={cta.primary.href}
            event={analyticsEvents.primaryCtaClick}
            location="about"
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
