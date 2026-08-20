import { Container, Eyebrow, Note, Section } from "@/components/ui/section";
import { legalIdentity, pendingValueLabel, type LegalSection } from "@/content/legal";

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
  showContact = true,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  showContact?: boolean;
}) {
  return (
    <>
      <div className="bg-abyss text-white">
        <Container className="py-16 sm:py-20">
          <div className="flex max-w-3xl flex-col gap-5">
            <Eyebrow tone="ink">{eyebrow}</Eyebrow>
            <h1 className="display-face text-headline text-white">{title}</h1>
            <p className="text-lead text-graphite-light">{intro}</p>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-graphite-light">
              Last updated: {legalIdentity.lastUpdated}
            </p>
          </div>
        </Container>
      </div>

      <Section tone="canvas">
        <div className="flex max-w-3xl flex-col gap-10">
          <Note>
            This is a draft prepared for review. It is not legal advice and must be confirmed
            before launch.
          </Note>

          {sections.map((section) => (
            <section key={section.heading} className="flex flex-col gap-3">
              <h2 className="text-title font-medium text-ink">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-graphite">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-1 flex flex-col gap-2.5">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="grid grid-cols-[auto_1fr] gap-3 leading-relaxed text-graphite"
                    >
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 rounded-full bg-cobalt" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          {showContact ? (
            <section className="flex flex-col gap-4 border-t border-ink/10 pt-8">
              <h2 className="text-title font-medium text-ink">Contact</h2>
              <dl className="grid gap-5 sm:grid-cols-2">
                {[
                  { label: "Legal entity", value: legalIdentity.entityName },
                  { label: "Registered address", value: legalIdentity.address },
                  { label: "Privacy contact", value: legalIdentity.privacyEmail },
                  { label: "Governing law", value: legalIdentity.governingLaw },
                ].map((item) => (
                  <div key={item.label}>
                    <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-graphite">
                      {item.label}
                    </dt>
                    <dd className="mt-1.5 text-ink">{item.value ?? pendingValueLabel}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}
        </div>
      </Section>
    </>
  );
}
