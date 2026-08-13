"use client";

import { cn } from "@/components/ui/cn";
import type { Faq } from "@/content/faqs";
import { analyticsEvents, trackEvent } from "@/lib/analytics";

export function FaqList({
  faqs,
  location,
  className,
}: {
  faqs: Faq[];
  location: string;
  className?: string;
}) {
  return (
    <div className={cn("divide-y divide-ink/10 border-y border-ink/10", className)}>
      {faqs.map((faq, index) => (
        <details
          key={faq.question}
          className="group"
          onToggle={(event) => {
            if (event.currentTarget.open) {
              trackEvent(analyticsEvents.faqOpen, { location, position: index + 1 });
            }
          }}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-medium text-ink marker:content-none sm:text-lg">
            {faq.question}
            <span
              aria-hidden="true"
              className="shrink-0 font-mono text-xl leading-none text-graphite transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-6 text-[0.9375rem] leading-relaxed text-graphite">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
