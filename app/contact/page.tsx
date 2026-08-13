import type { Metadata } from "next";

import { ProjectForm } from "@/components/project-form";
import { TrackedLink } from "@/components/tracked-link";
import { TickList } from "@/components/ui/card";
import { Container, Eyebrow, Note, Section } from "@/components/ui/section";
import { claims } from "@/content/claims";
import { analyticsEvents } from "@/lib/analytics";
import { env, hasLeadDestination, hasScheduling } from "@/lib/env";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Start a Project — Tell Us What Is Not Working",
  description:
    "Tell Alizane Labs about your website or automation project: what is not working today, the outcome you want, and the tools involved. We reply with a recommended starting point.",
  path: "/contact",
});

const expectations = [
  "A short reply with our read on the problem",
  "A recommended starting point and what it would cover",
  "Any questions that would change the recommendation",
  "No generic proposal and no follow-up sequence you did not ask for",
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Start a project", path: "/contact" }])),
        }}
      />

      <div className="bg-canvas">
        <Container className="py-16 sm:py-20">
          <div className="flex max-w-3xl flex-col gap-6">
            <Eyebrow>Start a project</Eyebrow>
            <h1 className="display-face text-headline text-ink">
              Tell us what is not working, and what should be different.
            </h1>
            <p className="text-lead text-graphite">
              Three short steps. The middle one matters most — it decides what we recommend.
            </p>
          </div>
        </Container>
      </div>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="rounded-xl border border-ink/10 bg-canvas p-6 sm:p-8">
            <ProjectForm />
          </div>

          <aside className="flex flex-col gap-8">
            <div>
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-graphite">
                What happens next
              </p>
              <TickList items={expectations} className="mt-5" />
            </div>

            {claims.responseTime ? (
              <p className="text-graphite">Typical reply time: {claims.responseTime}</p>
            ) : null}

            {claims.contactEmail ? (
              <div>
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-graphite">
                  Prefer email
                </p>
                <a
                  href={`mailto:${claims.contactEmail}`}
                  className="mt-2 inline-block text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
                >
                  {claims.contactEmail}
                </a>
              </div>
            ) : null}

            {hasScheduling ? (
              <div>
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-graphite">
                  Rather book a time
                </p>
                <TrackedLink
                  href={env.NEXT_PUBLIC_SCHEDULING_URL as string}
                  event={analyticsEvents.bookingStart}
                  location="contact"
                  variant="secondary"
                  className="mt-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a consultation
                </TrackedLink>
              </div>
            ) : null}

            <Note>
              We use your details only to reply to this inquiry. Nothing is added to a marketing
              list, and analytics events never carry your name or email address.
            </Note>

            {/* Development-only notice: production submissions surface a
                visitor-facing error from the API instead. */}
            {!hasLeadDestination && env.NODE_ENV !== "production" ? (
              <div
                role="status"
                className="rounded-lg border border-alert/40 bg-alert/5 px-4 py-3 text-sm text-alert"
              >
                Form delivery is not configured in this environment. Submissions are validated and
                logged server-side but will not reach an inbox until{" "}
                <code className="font-mono">LEAD_WEBHOOK_URL</code> is set. See{" "}
                <code className="font-mono">README.md</code>.
              </div>
            ) : null}
          </aside>
        </div>
      </Section>
    </>
  );
}
