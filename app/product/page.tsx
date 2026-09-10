import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { productPage } from "@/content/product-page";

export const metadata: Metadata = {
  title: productPage.metaTitle,
  description: productPage.metaDescription,
  alternates: {
    canonical: "/product",
  },
};

export default function ProductRoute() {
  return (
    <div className="bg-[#F9F9F7] text-[#111827] font-sans antialiased selection:bg-[#A7F3D0] selection:text-[#065F46]">
      {/* 1. WHAT IT IS (HERO) */}
      <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32 border-b border-[#E7E5E4] bg-[#F9F9F7]">
        {/* Ambient Subtle Background Grid */}
        <div
          className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50"
          style={{
            maskImage: "radial-gradient(ellipse 75% 75% at 50% 30%, black 40%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 30%, black 40%, transparent 85%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-3.5 py-1 text-xs font-mono text-[#065F46] shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" />
              <span className="uppercase tracking-widest text-[11px] font-semibold">
                {productPage.hero.eyebrow}
              </span>
            </div>

            <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-[#111827]">
              {productPage.hero.title}
            </h1>

            <p className="mt-4 font-serif text-2xl sm:text-3xl text-[#065F46] font-normal leading-snug">
              {productPage.hero.subhead}
            </p>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#57534E] max-w-2xl">
              {productPage.hero.body}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={productPage.hero.ctaPrimaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-[#065F46] px-6 py-3.5 text-sm font-medium text-white shadow-xs transition-all duration-200 hover:bg-[#064E3B] hover:shadow-md active:scale-98"
              >
                <span>{productPage.hero.ctaPrimary}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center rounded-md border border-[#D6D3D1] bg-white px-5 py-3.5 text-sm font-medium text-[#111827] shadow-2xs transition-all duration-200 hover:border-[#111827] hover:bg-[#F9F9F7]"
              >
                {productPage.hero.ctaSecondary}
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs font-mono text-[#78716C]">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
                Mobile-First Standalone Route
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
                Zero Site Migration Required
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE COST OF NOT HAVING IT */}
      <section className="border-t border-[#E7E5E4] py-20 sm:py-28 bg-[#F5F5F4]/70">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-3.5 py-1 text-xs font-mono text-[#065F46] shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
              <span className="uppercase tracking-widest text-[11px] font-semibold">
                {productPage.costOfNotHavingIt.eyebrow}
              </span>
            </div>

            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-tight">
              {productPage.costOfNotHavingIt.title}
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-[#57534E]">
              {productPage.costOfNotHavingIt.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT IT DOES (10 CAPABILITIES + CLOSING CALLOUT + PRO NOTE) */}
      <section id="capabilities" className="border-t border-[#E7E5E4] py-24 sm:py-32 bg-[#F9F9F7]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-14 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
              {productPage.whatItDoes.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-tight">
              {productPage.whatItDoes.title}
            </h2>
          </div>

          {/* 10 Capabilities Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {productPage.whatItDoes.items.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl border border-[#E7E5E4] bg-white p-6 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#065F46]/40 hover:shadow-xs"
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-[#065F46]">
                    {idx < 9 ? `0${idx + 1}` : `${idx + 1}`}
                  </span>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-[#111827]">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Callout Block */}
          <div className="mt-10 rounded-xl border border-[#065F46]/30 bg-[#ECFDF5]/60 p-7 sm:p-9 shadow-xs">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
                Direct Conversion Intelligence
              </span>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#111827]">
                {productPage.whatItDoes.closingCallout}
              </p>
            </div>
          </div>

          {/* Conversion Desk Pro Callout Note */}
          <div className="mt-4 rounded-xl border border-[#E7E5E4] bg-white p-6 sm:p-7 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <span className="rounded-full bg-[#F5F5F4] border border-[#E7E5E4] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#78716C] shrink-0">
                Pro Option
              </span>
              <p className="text-sm leading-relaxed text-[#57534E]">
                {productPage.whatItDoes.proNote}
              </p>
            </div>
            <Link
              href="/pricing"
              className="text-xs font-mono font-semibold text-[#065F46] hover:underline shrink-0"
            >
              View Pro details →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHO IT'S FOR */}
      <section className="border-t border-[#E7E5E4] py-20 sm:py-28 bg-[#F5F5F4]/70">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-2xl border border-[#E7E5E4] bg-white p-8 sm:p-12 shadow-xs">
            <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
              {productPage.whoItsFor.eyebrow}
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-[#111827]">
              {productPage.whoItsFor.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#57534E] max-w-2xl">
              {productPage.whoItsFor.body}
            </p>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section id="how-it-works" className="border-t border-[#E7E5E4] py-24 sm:py-32 bg-[#F9F9F7]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-14 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
              {productPage.howItWorks.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111827]">
              {productPage.howItWorks.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productPage.howItWorks.steps.map((step) => (
              <div
                key={step.num}
                className="rounded-xl border border-[#E7E5E4] bg-white p-6 shadow-2xs transition-all hover:border-[#065F46]/40 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#065F46]">
                    {step.num}
                  </span>
                  <h3 className="mt-3 font-serif text-xl text-[#111827]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#57534E]">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION (TRY DEMO) */}
      <section className="border-t border-[#E7E5E4] py-20 sm:py-28 bg-[#F9F9F7]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-2xl border border-[#065F46]/30 bg-[#ECFDF5]/60 p-8 sm:p-12 shadow-xs text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111827]">
              {productPage.cta.line}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#57534E] max-w-xl mx-auto">
              Experience the mobile-first conversational landing flow live on our production preview.
            </p>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <a
                href={productPage.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#065F46] px-7 py-3.5 text-sm font-medium text-white shadow-xs transition-all hover:bg-[#064E3B] active:scale-98"
              >
                <span>{productPage.cta.button}</span>
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center rounded-md border border-[#D6D3D1] bg-white px-6 py-3.5 text-sm font-medium text-[#111827] shadow-2xs transition-all hover:border-[#111827] hover:bg-[#F9F9F7]"
              >
                See full pricing →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
