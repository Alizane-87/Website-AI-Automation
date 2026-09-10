"use client";

import React from "react";

export function PricingPlans() {
  const handleOpenChat = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("alizane:open-chat"));
  };

  return (
    <section id="price" className="border-t border-[#E7E5E4] py-24 sm:py-32 bg-[#F9F9F7]">
      <div className="mx-auto max-w-5xl px-6" data-reveal>
        <div className="rounded-2xl border border-[#E7E5E4] bg-white p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
              Pricing
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-tight">
              Built around what you actually need
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#57534E]">
              Call volume, number of locations, and how many systems it needs to plug into all change the number — there&apos;s no single price that fits everyone, so there&apos;s nothing to publish here. Ask the chat assistant in the corner, email{" "}
              <a
                href="mailto:hello@alizanelabs.site"
                className="text-[#065F46] underline underline-offset-4 hover:text-[#064E3B] font-medium"
              >
                hello@alizanelabs.site
              </a>
              , or send your setup through the requirements form below, and you&apos;ll get real pricing back — not a placeholder.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/pricing#start"
                className="group inline-flex items-center gap-2 rounded-md bg-[#065F46] px-6 py-3.5 text-sm font-medium text-white shadow-xs transition-all hover:bg-[#064E3B] active:scale-98"
              >
                <span>Ask about pricing</span>
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
              <button
                type="button"
                onClick={handleOpenChat}
                className="inline-flex items-center gap-2 rounded-md border border-[#D6D3D1] bg-[#F9F9F7] px-5 py-3.5 text-sm font-medium text-[#111827] shadow-2xs transition-all hover:border-[#111827] hover:bg-white cursor-pointer"
              >
                <span className="h-2 w-2 rounded-full bg-[#059669] animate-pulse" />
                <span>Ask the AI Assistant</span>
              </button>
            </div>
          </div>

          {/* Three Simple Principles */}
          <div className="mt-12 grid grid-cols-1 gap-6 border-t border-[#E7E5E4] pt-8 sm:grid-cols-3 font-mono text-xs">
            <div className="flex items-start gap-3">
              <span className="text-[#065F46] font-bold">01</span>
              <div>
                <div className="font-semibold text-[#111827]">Month to Month</div>
                <p className="mt-1 text-[#78716C] font-sans text-xs">No lock-in contracts. Cancel anytime if it doesn&apos;t pay for itself.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#065F46] font-bold">02</span>
              <div>
                <div className="font-semibold text-[#111827]">Installed on Existing Systems</div>
                <p className="mt-1 text-[#78716C] font-sans text-xs">Plugs into the phone number and website you already run.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#065F46] font-bold">03</span>
              <div>
                <div className="font-semibold text-[#111827]">Tuned by a Person</div>
                <p className="mt-1 text-[#78716C] font-sans text-xs">Real engineering support whenever your business rules or scripts change.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
