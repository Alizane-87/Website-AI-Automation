import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { conversionChatPage } from "@/content/conversion-chat-page";
import { ChatTriggerButton } from "@/components/chat-trigger-button";

export const metadata: Metadata = {
  title: conversionChatPage.metaTitle,
  description: conversionChatPage.metaDescription,
  alternates: {
    canonical: "/conversion-chat",
  },
};

export default function ConversionChatRoute() {
  const { hero, afterHoursGap, whatItDoes, monthlyReport, whoItsFor, howItWorks, cta } =
    conversionChatPage;

  return (
    <div className="bg-[#F9F9F7] text-[#111827] font-sans antialiased selection:bg-[#A7F3D0] selection:text-[#065F46]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32 border-b border-[#E7E5E4] bg-[#F9F9F7]">
        {/* Subtle Architectural Grid Mask */}
        <div
          className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40"
          style={{
            maskImage: "radial-gradient(ellipse 75% 75% at 50% 30%, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 30%, black 30%, transparent 80%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="max-w-3xl">
            {/* Status Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-3.5 py-1 text-xs font-mono text-[#065F46] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]" />
              </span>
              <span className="uppercase tracking-widest text-[11px] font-semibold">
                {hero.eyebrow}
              </span>
            </div>

            <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-[#111827]">
              {hero.title}
            </h1>

            <p className="mt-4 font-serif text-2xl sm:text-3xl text-[#065F46] font-normal leading-snug">
              {hero.subhead}
            </p>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#57534E] max-w-2xl">
              {hero.body}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={hero.ctaPrimaryHref}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-[#065F46] px-6 py-3.5 text-sm font-medium text-white shadow-xs transition-all duration-200 hover:bg-[#064E3B] hover:shadow-md active:scale-98"
              >
                <span>{hero.ctaPrimary}</span>
              </Link>
              <Link
                href={hero.ctaSecondaryHref}
                className="inline-flex items-center rounded-md border border-[#D6D3D1] bg-white px-5 py-3.5 text-sm font-medium text-[#111827] shadow-2xs transition-all duration-200 hover:border-[#111827] hover:bg-[#F9F9F7]"
              >
                {hero.ctaSecondary}
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs font-mono text-[#78716C]">
              {hero.badges.map((badge, idx) => (
                <span key={idx} className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Interactive Live Assistant Trigger */}
            <div className="mt-8 rounded-lg border border-[#A7F3D0]/60 bg-[#ECFDF5]/50 p-3.5 text-xs font-mono text-[#065F46] flex items-center justify-between gap-4 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#059669] animate-pulse" />
                <span>Live demo running in bottom-right corner</span>
              </div>
              <ChatTriggerButton className="font-semibold underline hover:text-[#064E3B] cursor-pointer">
                Try it now →
              </ChatTriggerButton>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE AFTER-HOURS GAP */}
      <section className="border-t border-[#E7E5E4] py-20 sm:py-28 bg-[#F5F5F4]/70">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-3.5 py-1 text-xs font-mono text-[#065F46] shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
              <span className="uppercase tracking-widest text-[11px] font-semibold">
                {afterHoursGap.eyebrow}
              </span>
            </div>

            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-tight">
              {afterHoursGap.title}
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#57534E]">
              {afterHoursGap.body}
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT IT DOES (9 CAPABILITIES) */}
      <section id="capabilities" className="border-t border-[#E7E5E4] py-24 sm:py-32 bg-[#F9F9F7]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-14 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
              {whatItDoes.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-tight">
              {whatItDoes.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whatItDoes.items.map((item) => (
              <div
                key={item.num}
                className="flex flex-col justify-between rounded-xl border border-[#E7E5E4] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#065F46]/40 hover:shadow-md"
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-[#065F46]">
                    {item.num} · {item.title}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE MONTHLY REPORT SPECIMEN */}
      <section className="border-t border-[#E7E5E4] py-24 sm:py-32 bg-[#F5F5F4]/70">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
              {monthlyReport.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-tight">
              {monthlyReport.title}
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#57534E]">
              {monthlyReport.body}
            </p>
          </div>

          {/* Monthly Report Specimen Card */}
          <div className="rounded-xl border border-[#E7E5E4] bg-white p-6 sm:p-9 shadow-sm">
            <div className="flex flex-wrap items-center justify-between border-b border-[#E7E5E4] pb-4 gap-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#059669]" />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#111827]">
                  {monthlyReport.specimen.reportPeriod}
                </span>
              </div>
              <span className="font-mono text-xs text-[#78716C]">
                Delivery: Direct to Your Email
              </span>
            </div>

            {/* Specimen Metrics Grid */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-[#E7E5E4] bg-[#F9F9F7] p-4">
                <div className="font-mono text-xs text-[#78716C]">After-Hours Volume</div>
                <div className="mt-1 font-serif text-3xl text-[#065F46] font-semibold">
                  {monthlyReport.specimen.afterHoursPercent}
                </div>
                <div className="mt-1 text-xs text-[#57534E]">
                  {monthlyReport.specimen.afterHoursSubtext}
                </div>
              </div>

              <div className="rounded-lg border border-[#E7E5E4] bg-[#F9F9F7] p-4">
                <div className="font-mono text-xs text-[#78716C]">Leads Captured</div>
                <div className="mt-1 font-serif text-3xl text-[#111827] font-semibold">
                  {monthlyReport.specimen.leadsCaptured}
                </div>
                <div className="mt-1 text-xs text-[#57534E]">
                  {monthlyReport.specimen.leadsSubtext}
                </div>
              </div>

              <div className="rounded-lg border border-[#E7E5E4] bg-[#F9F9F7] p-4">
                <div className="font-mono text-xs text-[#78716C]">Unsubmitted Inquiries</div>
                <div className="mt-1 font-serif text-3xl text-[#111827] font-semibold">
                  {monthlyReport.specimen.unsubmittedInquiries}
                </div>
                <div className="mt-1 text-xs text-[#57534E]">
                  {monthlyReport.specimen.unsubmittedSubtext}
                </div>
              </div>
            </div>

            {/* Specimen Intent Log */}
            <div className="mt-6 rounded-lg border border-[#E7E5E4] bg-[#F9F9F7] p-5">
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[#111827]">
                Sample Service Queries Answered While Closed
              </div>
              <ul className="mt-3 space-y-2 text-xs font-mono text-[#57534E]">
                {monthlyReport.specimen.topQuestions.map((q, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#059669]">↳</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHO IT'S FOR */}
      <section className="border-t border-[#E7E5E4] py-20 sm:py-28 bg-[#F9F9F7]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-2xl border border-[#E7E5E4] bg-white p-8 sm:p-12 shadow-xs">
            <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
              {whoItsFor.eyebrow}
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-[#111827]">
              {whoItsFor.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#57534E] max-w-2xl">
              {whoItsFor.body}
            </p>

            <div className="mt-8 border-t border-[#E7E5E4] pt-6 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-[#78716C]">
                Running paid ad campaigns right now?
              </span>
              <Link
                href={whoItsFor.deskHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#065F46] hover:underline"
              >
                <span>{whoItsFor.deskCta}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section id="how-it-works" className="border-t border-[#E7E5E4] py-24 sm:py-32 bg-[#F5F5F4]/70">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-14 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
              {howItWorks.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111827]">
              {howItWorks.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {howItWorks.steps.map((step) => (
              <div
                key={step.num}
                className="rounded-xl border border-[#E7E5E4] bg-white p-8 shadow-xs"
              >
                <span className="font-mono text-xs font-semibold text-[#065F46]">
                  {step.num}
                </span>
                <h3 className="mt-3 font-serif text-2xl text-[#111827]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION (CTA BANNER) */}
      <section className="border-t border-[#E7E5E4] py-16 sm:py-20 bg-[#F9F9F7]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-xl border border-[#065F46]/30 bg-[#ECFDF5]/60 p-7 sm:p-9 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
                  14-Day Free Trial
                </span>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-[#111827]">
                  {cta.line}
                </h3>
                <p className="mt-2 text-sm text-[#57534E]">
                  No build fee. Start with 14 days free — if it doesn&apos;t catch after-hours leads, you pay nothing.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href={cta.pricingHref}
                  className="inline-flex items-center justify-center rounded-md border border-[#D6D3D1] bg-white px-5 py-3 text-sm font-medium text-[#111827] shadow-2xs hover:bg-[#F9F9F7]"
                >
                  {cta.pricingLinkText}
                </Link>
                <Link
                  href={cta.buttonHref}
                  className="inline-flex items-center justify-center rounded-md bg-[#065F46] px-5 py-3 text-sm font-medium text-white shadow-xs hover:bg-[#064E3B]"
                >
                  {cta.button}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
