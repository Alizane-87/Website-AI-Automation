import React from "react";
import Link from "next/link";
import { legalIdentity, type LegalSection } from "@/content/legal";

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
  bannerNotice,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  bannerNotice?: { title: string; body: string };
}) {
  return (
    <article className="min-h-screen bg-[#F9F9F7] text-[#111827]">
      {/* Header Banner */}
      <header className="border-b border-[#E7E5E4] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex max-w-2xl flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
              {eyebrow}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#111827]">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
              {intro}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#78716C]">
              Effective Date: {legalIdentity.lastUpdated}
            </p>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-12">
          {/* Optional Prominent Banner Notice (e.g. SMS Compliance Notice) */}
          {bannerNotice ? (
            <div className="rounded-xl border border-[#A7F3D0] bg-[#ECFDF5] p-6 sm:p-8 shadow-xs">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#065F46]">
                {bannerNotice.title}
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#111827] font-medium">
                {bannerNotice.body}
              </p>
            </div>
          ) : null}

          {sections.map((section) => (
            <section key={section.heading} className="flex flex-col gap-4">
              <h2 className="font-serif text-2xl text-[#111827] font-medium tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-base leading-relaxed text-[#57534E]">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-2 flex flex-col gap-3">
                  {section.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="grid grid-cols-[auto_1fr] gap-3 text-base leading-relaxed text-[#57534E]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#065F46]"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <div className="mt-8 border-t border-[#E7E5E4] pt-8 flex items-center justify-between text-xs font-mono text-[#78716C]">
            <Link
              href="/"
              className="text-[#065F46] font-medium hover:underline inline-flex items-center gap-1"
            >
              ← Return to Alizane Labs Homepage
            </Link>
            <span>© {new Date().getFullYear()} Alizane Labs</span>
          </div>
        </div>
      </main>
    </article>
  );
}
