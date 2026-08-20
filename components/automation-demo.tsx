"use client";

import { useState } from "react";

import { cn } from "@/components/ui/cn";
import { IllustrativeLabel } from "@/components/ui/card";
import { demo } from "@/content/site";
import { analyticsEvents, trackEvent } from "@/lib/analytics";

/**
 * Illustrative walkthrough of a configured workflow. It is deliberately not a
 * live chat: nothing is sent anywhere, no input is collected, and the panel
 * states that plainly.
 */
export function AutomationDemo() {
  const [active, setActive] = useState(0);

  function select(index: number) {
    setActive(index);
    trackEvent(analyticsEvents.automationDemoInteract, { step: index + 1 });
  }

  const step = demo.steps[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
      <div className="flex flex-col gap-4">
        <div className="rounded-xl border border-white/12 bg-abyss-600/50 p-5">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-graphite-light">
            Visitor
          </p>
          <p className="mt-3 text-lead text-white">“{demo.visitorMessage}”</p>
        </div>

        <ol className="flex flex-col gap-2">
          {demo.steps.map((item, index) => {
            const isActive = index === active;
            return (
              <li key={item.title}>
                <button
                  type="button"
                  onClick={() => select(index)}
                  aria-current={isActive ? "step" : undefined}
                  className={cn(
                    "flex w-full items-start gap-4 rounded-lg border px-4 py-3.5 text-left transition-colors",
                    isActive
                      ? "border-signal/45 bg-white/[0.07]"
                      : "border-white/10 hover:border-white/25 hover:bg-white/[0.04]",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "mt-0.5 font-mono text-[0.625rem] tracking-[0.16em]",
                      isActive ? "text-signal" : "text-graphite-light",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex flex-col gap-1">
                    <span
                      className={cn(
                        "text-[0.9375rem] font-medium",
                        isActive ? "text-white" : "text-graphite-light",
                      )}
                    >
                      {item.title}
                    </span>
                    <span className="text-sm leading-relaxed text-graphite-light">
                      {item.detail}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 rounded-xl border border-white/12 bg-abyss-700 p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-graphite-light">
              System
            </p>
            <IllustrativeLabel tone="ink">Configured workflow</IllustrativeLabel>
          </div>

          <div aria-live="polite" className="flex flex-col gap-4">
            <p className="display-face text-title text-white">{step.title}</p>
            <p className="rounded-lg border border-white/10 bg-abyss-600/60 p-4 font-mono text-sm leading-relaxed text-graphite-light">
              {step.systemLine}
            </p>
          </div>

          <div className="flex items-center gap-1.5" aria-hidden="true">
            {demo.steps.map((item, index) => (
              <span
                key={item.title}
                className={cn(
                  "h-0.5 flex-1 rounded-full transition-colors",
                  index <= active ? "bg-signal" : "bg-white/15",
                )}
              />
            ))}
          </div>
        </div>

        <p className="text-sm leading-relaxed text-graphite-light">{demo.disclaimer}</p>
      </div>
    </div>
  );
}
