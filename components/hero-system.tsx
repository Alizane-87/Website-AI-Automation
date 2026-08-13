import type { CSSProperties } from "react";

/**
 * Decorative hero visual: an interface frame on the left, the system that runs
 * behind it on the right. Purely presentational and hidden from assistive
 * technology; motion is limited to a signal pulse that stops under
 * `prefers-reduced-motion`.
 */
export function HeroSystem() {
  const nodes = [
    { label: "Inquiry", delay: "0ms" },
    { label: "Qualify", delay: "160ms" },
    { label: "Route", delay: "320ms" },
    { label: "Book", delay: "480ms" },
  ];

  return (
    <div aria-hidden="true" className="relative select-none">
      <div className="grid gap-4 sm:grid-cols-[1.1fr_1fr] sm:gap-5">
        <div className="overflow-hidden rounded-xl border border-ink/12 bg-paper shadow-[0_18px_60px_-40px_rgba(10,13,20,0.55)]">
          <div className="flex items-center gap-1.5 border-b border-ink/8 px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-ink/15" />
            <span className="h-2 w-2 rounded-full bg-ink/15" />
            <span className="h-2 w-2 rounded-full bg-ink/15" />
            <span className="ml-3 h-2 w-24 rounded-full bg-ink/8" />
          </div>
          <div className="flex flex-col gap-3 p-5">
            <span className="h-2 w-16 rounded-full bg-cobalt/50" />
            <span className="display-face text-2xl leading-tight text-ink">
              A site that earns
              <br />
              the next step.
            </span>
            <span className="h-1.5 w-full rounded-full bg-ink/8" />
            <span className="h-1.5 w-4/5 rounded-full bg-ink/8" />
            <span className="mt-1 inline-flex w-fit rounded-full bg-cobalt px-3.5 py-1.5 text-[0.625rem] font-medium text-white">
              Start a project
            </span>
            <div className="mt-2 grid grid-cols-3 gap-2">
              <span className="h-10 rounded-md bg-canvas" />
              <span className="h-10 rounded-md bg-canvas" />
              <span className="h-10 rounded-md bg-canvas" />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-between gap-2.5 rounded-xl border border-white/10 bg-abyss p-5">
          <span className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-graphite-light">
            System
          </span>
          {nodes.map((node) => (
            <div
              key={node.label}
              className="relative overflow-hidden rounded-lg border border-white/10 bg-abyss-600/70 px-3.5 py-2.5"
            >
              <span className="relative z-10 flex items-center justify-between text-[0.6875rem] text-white">
                {node.label}
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              </span>
              <span
                className="animate-signal-slide absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-signal/12 to-transparent"
                style={
                  { animationDelay: node.delay, "--signal-distance": "300%" } as CSSProperties
                }
              />
            </div>
          ))}
          <span className="mt-1 font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-graphite-light">
            Handoff with context
          </span>
        </div>
      </div>
    </div>
  );
}
