import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { pricingPage } from "@/content/pricing-page";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: pricingPage.metaTitle,
  description: pricingPage.metaDescription,
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingRoute() {
  const { hero, tiers, faqSection, closingCta } = pricingPage;

  return (
    <div className="bg-[#F9F9F7] text-[#111827] font-sans antialiased selection:bg-[#A7F3D0] selection:text-[#065F46]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-[#E7E5E4] bg-[#F9F9F7]">
        {/* Subtle Ambient Pattern */}
        <div
          className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40"
          style={{
            maskImage: "radial-gradient(ellipse 75% 75% at 50% 30%, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 30%, black 30%, transparent 80%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-3.5 py-1 text-xs font-mono text-[#065F46] shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
              <span className="uppercase tracking-widest text-[11px] font-semibold">
                {hero.eyebrow}
              </span>
            </div>

            <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-[#111827]">
              {hero.title}
            </h1>

            <p className="mt-4 text-lg sm:text-xl leading-relaxed text-[#57534E]">
              {hero.subhead}
            </p>

            {/* Launch Status Banner */}
            <div className="mt-8 rounded-lg border border-[#A7F3D0]/70 bg-[#ECFDF5]/70 p-4 text-xs font-mono text-[#065F46] leading-relaxed">
              <span className="font-bold">Status:</span> {hero.bannerNotice}
            </div>
          </div>
        </div>
      </section>

      {/* 2. 3-TIER PRICING MATRIX */}
      <section className="border-t border-[#E7E5E4] py-20 sm:py-28 bg-[#F5F5F4]/50">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {tiers.map((tier) => {
              const isLive = tier.status === "Available now";

              return (
                <div
                  key={tier.id}
                  className={`flex flex-col justify-between rounded-xl border bg-white p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                    tier.popular
                      ? "border-[#065F46] ring-1 ring-[#065F46]"
                      : "border-[#E7E5E4]"
                  }`}
                >
                  <div>
                    {/* Header: Name & Status Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#78716C]">
                        {tier.name}
                      </span>
                      <span
                        className={`rounded px-2.5 py-0.5 font-mono text-[11px] font-semibold ${
                          isLive
                            ? "bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46]"
                            : "bg-[#F5F5F4] border border-[#E7E5E4] text-[#78716C]"
                        }`}
                      >
                        {tier.status}
                      </span>
                    </div>

                    {/* Pricing Display */}
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="font-mono text-lg text-[#78716C] line-through">
                        {tier.originalPrice}
                      </span>
                      <span className="font-serif text-4xl sm:text-5xl font-normal text-[#111827]">
                        {tier.price}
                      </span>
                      <span className="font-mono text-sm text-[#78716C]">
                        {tier.period}
                      </span>
                    </div>

                    {/* Setup & Trial Terms */}
                    <div className="mt-3 flex flex-col gap-1 border-y border-[#E7E5E4] py-3 text-xs font-mono text-[#57534E]">
                      <div className="flex items-center justify-between">
                        <span>Setup:</span>
                        <span className="font-medium text-[#111827]">{tier.buildFee}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Trial:</span>
                        <span className="font-medium text-[#065F46]">{tier.trial}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-xs leading-relaxed text-[#57534E]">
                      {tier.description}
                    </p>

                    {/* Feature List */}
                    <div className="mt-6 border-t border-[#E7E5E4] pt-5">
                      <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-[#111827]">
                        What&apos;s included
                      </span>
                      <ul className="mt-3 space-y-2 text-xs leading-relaxed text-[#57534E]">
                        {tier.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#059669] font-bold">↳</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions & Product Link */}
                  <div className="mt-8 border-t border-[#E7E5E4] pt-6 flex flex-col gap-3">
                    <a
                      href={tier.ctaHref}
                      className={`inline-flex items-center justify-center rounded-md px-4 py-3 text-center text-sm font-medium transition-all duration-200 ${
                        isLive
                          ? "bg-[#065F46] text-white hover:bg-[#064E3B] shadow-xs active:scale-98"
                          : "border border-[#D6D3D1] bg-[#F9F9F7] text-[#111827] hover:border-[#111827]"
                      }`}
                    >
                      {tier.ctaText}
                    </a>
                    <Link
                      href={tier.productHref}
                      className="text-center font-mono text-xs text-[#065F46] hover:underline"
                    >
                      {tier.productLinkText}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PLAIN ENGLISH PRICING FAQ */}
      <section className="border-t border-[#E7E5E4] py-24 sm:py-32 bg-[#F9F9F7]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
              {faqSection.eyebrow}
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-[#111827]">
              {faqSection.title}
            </h2>
          </div>

          <div className="max-w-3xl space-y-6">
            {faqSection.questions.map((q, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#E7E5E4] bg-white p-6 shadow-2xs"
              >
                <h3 className="font-serif text-xl text-[#111827]">
                  {q.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                  {q.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA */}
      <section className="border-t border-[#E7E5E4] py-16 sm:py-20 bg-[#F5F5F4]/70">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-xl border border-[#065F46]/30 bg-[#ECFDF5]/60 p-7 sm:p-9 shadow-xs">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-xl">
                <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
                  Get Started
                </span>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-[#111827]">
                  {closingCta.line}
                </h3>
                <p className="mt-2 text-sm text-[#57534E]">
                  Select your tier below to begin your 14-day free trial on Conversion Chat, or get started with Conversion Desk or Desk Pro.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <Link
                  href={closingCta.deskHref}
                  className="inline-flex items-center justify-center rounded-md border border-[#D6D3D1] bg-white px-5 py-3 text-sm font-medium text-[#111827] shadow-2xs hover:border-[#111827] hover:bg-[#F9F9F7] text-center"
                >
                  {closingCta.deskButton}
                </Link>
                <Link
                  href={closingCta.chatHref}
                  className="inline-flex items-center justify-center rounded-md bg-[#065F46] px-5 py-3 text-sm font-medium text-white shadow-xs hover:bg-[#064E3B] text-center"
                >
                  {closingCta.chatButton}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTAKE FORM */}
      <ContactSection
        eyebrow="Get Started"
        title="Start your automation plan"
        subtitle="Tell us about your business and select which tier you need — 14-day free trial on Conversion Chat, or get started with Conversion Desk or Desk Pro."
      />
    </div>
  );
}
