import React from "react";
import { HeroSection } from "@/components/hero-section";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { BentoCapabilities } from "@/components/bento-capabilities";
import { PricingPlans } from "@/components/pricing-plans";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactSection } from "@/components/contact-section";

export default function HomePage() {
  return (
    <div className="bg-[#F9F9F7] text-[#111827] font-sans antialiased selection:bg-[#A7F3D0] selection:text-[#065F46]">
      {/* 1. HERO SECTION WITH CONCEPT A SOVEREIGN EMERALD VECTOR SIGNAL FLOW */}
      <HeroSection />

      {/* 2. BEFORE / AFTER TRANSFORMATION SECTION */}
      <section className="border-t border-[#E7E5E4] py-20 sm:py-28 bg-[#F5F5F4]/70">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
              The Transformation
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-[#111827]">
              Before &amp; After: Modernizing your digital storefront.
            </h2>
            <p className="mt-4 text-base text-[#57534E]">
              Drag the slider to see the difference between a dated, slow business site and an editorial, sub-second conversion engine.
            </p>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* 3. WHY US SECTION */}
      <section id="why" className="border-t border-[#E7E5E4] py-24 sm:py-32 bg-[#F9F9F7]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 flex flex-wrap items-baseline gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
              Why us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111827]">
              Not a freelancer. Not a big agency.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <article className="rounded-xl border border-[#E7E5E4] bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-serif text-2xl text-[#111827] mb-3">
                Changes get made, not queued
              </h3>
              <p className="text-sm leading-relaxed text-[#57534E]">
                Routine content changes every month — two, five or more depending on your plan — with hosting, security and urgent fixes handled continuously. Done by a person who answers, not a login and a manual.
              </p>
            </article>

            <article className="rounded-xl border border-[#E7E5E4] bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-serif text-2xl text-[#111827] mb-3">
                You own your domain
              </h3>
              <p className="text-sm leading-relaxed text-[#57534E]">
                It stays in your name from day one. Leave whenever you like and it goes with you.
              </p>
            </article>

            <article className="rounded-xl border border-[#E7E5E4] bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-serif text-2xl text-[#111827] mb-3">
                Nothing to manage
              </h3>
              <p className="text-sm leading-relaxed text-[#57534E]">
                No dashboard, no plugin updates, no hosting bill, no renewal you forgot about. It just stays online.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 4. STUDIO CAPABILITIES & AI AUTOMATIONS */}
      <BentoCapabilities />

      {/* 5. PROCESS SECTION */}
      <section id="process" className="border-t border-[#E7E5E4] py-24 sm:py-32 bg-[#F9F9F7]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 flex flex-wrap items-baseline gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
              Process
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111827]">
              What happens after you sign up
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <article className="rounded-xl border border-[#E7E5E4] bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-md">
              <span className="font-mono text-xs text-[#78716C]">01</span>
              <h3 className="mt-4 font-serif text-xl text-[#111827] leading-snug">
                A conversation. Twenty minutes on what your business does and who calls you.
              </h3>
            </article>

            <article className="rounded-xl border border-[#E7E5E4] bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-md">
              <span className="font-mono text-xs text-[#78716C]">02</span>
              <h3 className="mt-4 font-serif text-xl text-[#111827] leading-snug">
                We build it. You see it before it goes anywhere near the public.
              </h3>
            </article>

            <article className="rounded-xl border border-[#E7E5E4] bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-md">
              <span className="font-mono text-xs text-[#78716C]">03</span>
              <h3 className="mt-4 font-serif text-xl text-[#111827] leading-snug">
                You approve, we launch. Your domain moves across and stays in your name.
              </h3>
            </article>

            <article className="rounded-xl border border-[#E7E5E4] bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-md">
              <span className="font-mono text-xs text-[#78716C]">04</span>
              <h3 className="mt-4 font-serif text-xl text-[#111827] leading-snug">
                We look after it. Changes get made when you ask, and you never think about hosting again.
              </h3>
            </article>
          </div>
        </div>
      </section>

      {/* 6. PRICING PLANS */}
      <PricingPlans />

      {/* 7. FAQ SECTION */}
      <FaqAccordion />

      {/* 8. CONTACT SECTION */}
      <ContactSection />
    </div>
  );
}
