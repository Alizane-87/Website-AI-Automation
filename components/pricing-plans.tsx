"use client";

import React from "react";

export function PricingPlans() {
  return (
    <section id="price" className="border-t border-[#E7E5E4] py-24 sm:py-32 bg-[#F9F9F7]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 flex flex-wrap items-baseline gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
            Plans
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#111827]">
            One build cost, then a flat monthly
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
          {/* Plan 1: The Site */}
          <article className="flex flex-col rounded-xl border border-[#E7E5E4] bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-md">
            <h3 className="font-serif text-2xl text-[#111827]">The Site</h3>
            <p className="mt-1 text-sm text-[#57534E]">A proper website, done properly.</p>

            <div className="my-6">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl sm:text-4xl text-[#111827]">
                  $1,500
                </span>
                <span className="text-xs text-[#57534E]">to build</span>
              </div>
              <p className="mt-1 text-sm text-[#57534E]">then $99/month</p>
            </div>

            <ul className="mb-8 flex-1 space-y-3 text-sm text-[#44403C]">
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Up to 5 pages (Home, About, Services, Contact)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Built mobile-first &amp; sub-second loading</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Tap-to-call buttons on every screen</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Contact form with instant email alerts</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Google Business Profile &amp; Maps linked</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Hosting, SSL &amp; 2 content changes/month included</span>
              </li>
            </ul>

            <a
              href="#start"
              className="mt-auto block w-full rounded-md border border-[#E7E5E4] bg-[#F9F9F7] py-3 text-center text-sm font-medium text-[#111827] transition-colors hover:border-[#065F46] hover:text-[#065F46]"
            >
              Ask about this plan
            </a>
          </article>

          {/* Plan 2: The Works (Deep Sovereign Forest Card with Emerald Badge) */}
          <article className="relative flex flex-col rounded-xl border border-[#064E3B] bg-[#064E3B] p-8 text-white shadow-xl md:-translate-y-2 transition-all hover:shadow-2xl">
            <span className="absolute -top-3 left-8 rounded-full bg-[#059669] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white font-semibold shadow-xs">
              Most owners pick this
            </span>
            <h3 className="mt-2 font-serif text-2xl text-white">The Works</h3>
            <p className="mt-1 text-sm text-emerald-200/70">
              Everything in The Site, plus regional search &amp; instant speed-to-lead SMS.
            </p>

            <div className="my-6">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl sm:text-4xl text-white">
                  $2,800
                </span>
                <span className="text-xs text-emerald-200/70">to build</span>
              </div>
              <p className="mt-1 text-sm text-emerald-200/70">then $149/month</p>
            </div>

            <ul className="mb-8 flex-1 space-y-3 text-sm text-emerald-100">
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#34D399]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>A page for each service you offer (up to 10)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#34D399]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>A page for each town/area you cover (up to 10)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#34D399]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span><strong>Instant Lead SMS Alerts</strong> straight to your phone</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#34D399]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span><strong>Instant Customer Auto-Text</strong> (stops them calling competitors)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#34D399]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span><strong>Interactive Multi-Step Quote Funnel</strong></span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#34D399]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Before-and-after photo gallery</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#34D399]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Live Google reviews feed &amp; Local Schema SEO</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#34D399]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Hosting, SSL &amp; priority content updates included</span>
              </li>
            </ul>

            <a
              href="#start"
              className="mt-auto block w-full rounded-md bg-[#059669] py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#047857]"
            >
              Ask about this plan
            </a>
          </article>

          {/* Plan 3: The Site That Answers */}
          <article className="flex flex-col rounded-xl border border-[#E7E5E4] bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-md">
            <h3 className="font-serif text-2xl text-[#111827]">The Site That Answers</h3>
            <p className="mt-1 text-sm text-[#57534E]">
              Everything in The Works, plus 24/7 AI Phone Receptionist &amp; automated quote follow-up.
            </p>

            <div className="my-6">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl sm:text-4xl text-[#111827]">
                  $4,500
                </span>
                <span className="text-xs text-[#57534E]">to build</span>
              </div>
              <p className="mt-1 text-sm text-[#57534E]">then $299/month + call charges</p>
            </div>

            <ul className="mb-8 flex-1 space-y-3 text-sm text-[#44403C]">
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span><strong>24/7 AI Phone Receptionist:</strong> Answers calls &amp; books appointments</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span><strong>Website AI Chat Employee:</strong> Qualifies visitors &amp; captures contact info</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span><strong>21-Day Quote Follow-Up:</strong> Automated SMS nudges to win back quotes</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span><strong>Direct Calendar Sync:</strong> Injects bookings directly into your calendar</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Continuous AI tuning, prompt updates &amp; telephone line management</span>
              </li>
            </ul>

            <a
              href="#start"
              className="mt-auto block w-full rounded-md border border-[#E7E5E4] bg-[#F9F9F7] py-3 text-center text-sm font-medium text-[#111827] transition-colors hover:border-[#065F46] hover:text-[#065F46]"
            >
              Ask about this plan
            </a>
          </article>
        </div>

        <p className="mt-8 text-center text-sm text-[#57534E]">
          Every plan is month to month. Your domain stays in your name, whatever happens.
        </p>
      </div>
    </section>
  );
}
