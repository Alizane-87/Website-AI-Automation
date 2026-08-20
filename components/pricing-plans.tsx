"use client";

import React, { useEffect, useRef, useState } from "react";

export function PricingPlans() {
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [c3, setC3] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const targets = [1500, 3000, 4500];
            const duration = 750;
            const start = performance.now();

            const step = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setC1(Math.round(targets[0] * eased));
              setC2(Math.round(targets[1] * eased));
              setC3(Math.round(targets[2] * eased));
              if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="price" ref={sectionRef} className="border-t border-[#E7E5E4] py-24 sm:py-32 bg-[#F9F9F7]">
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
                  ${c1.toLocaleString()}
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
                <span>Up to 5 pages</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Built mobile-first</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Tap-to-call on every screen</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Contact form that reaches you straight away</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Google Business Profile connected</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Services written up properly &amp; SEO ready</span>
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
              Everything in The Site, plus what makes it bring work in.
            </p>

            <div className="my-6">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl sm:text-4xl text-white">
                  ${c2.toLocaleString()}
                </span>
                <span className="text-xs text-emerald-200/70">to build</span>
              </div>
              <p className="mt-1 text-sm text-emerald-200/70">then $99/month</p>
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
                <span>Before-and-after gallery (up to 20 jobs)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#34D399]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Live Google reviews widget</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#34D399]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Smooth motion, transitions &amp; editorial finish</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#34D399]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Interactive quote form with lead triage</span>
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
              Everything in The Works, plus an intelligent AI conversational agent.
            </p>

            <div className="my-6">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl sm:text-4xl text-[#111827]">
                  ${c3.toLocaleString()}
                </span>
                <span className="text-xs text-[#57534E]">to build</span>
              </div>
              <p className="mt-1 text-sm text-[#57534E]">then $299/month</p>
            </div>

            <ul className="mb-8 flex-1 space-y-3 text-sm text-[#44403C]">
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Answers questions people ask before calling</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Captures name, phone number &amp; problem scope</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Hands you qualified lead details instantly via SMS</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#065F46]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.2 12.4 2.3 8.5l1.6-1.6 2.3 2.3 6-6 1.6 1.6z" />
                </svg>
                <span>Works 24/7/365 while you are on the job</span>
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
