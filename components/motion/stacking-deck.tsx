"use client";

import React from "react";

interface DeckCard {
  tag: string;
  title: string;
  description: string;
  bgClass: string;
  tagColorClass: string;
  topOffsetClass: string;
}

interface StackingDeckProps {
  cards?: DeckCard[];
  tag?: string;
}

const DEFAULT_CARDS: DeckCard[] = [
  {
    tag: "STACK CARD 01",
    title: "Sub-Second Conversion Core",
    description: "Engineered with edge caching, zero heavy CMS bloat, and instantaneous mobile navigation.",
    bgClass: "bg-[#161D24]",
    tagColorClass: "text-emerald-400",
    topOffsetClass: "top-28",
  },
  {
    tag: "STACK CARD 02",
    title: "24/7 AI Receptionist Triage",
    description: "Understands service requests, answers pricing questions, and books appointments around the clock.",
    bgClass: "bg-[#064E3B]",
    tagColorClass: "text-emerald-200",
    topOffsetClass: "top-36",
  },
  {
    tag: "STACK CARD 03",
    title: "21-Day Revenue Follow-Up",
    description: "Polite multi-touch quote follow-ups win back lost proposals and generate 5-star Google reviews.",
    bgClass: "bg-[#022C22]",
    tagColorClass: "text-emerald-300",
    topOffsetClass: "top-44",
  },
];

export function StackingDeck({
  cards = DEFAULT_CARDS,
  tag = "Device 09 · Stacking Sticky Card Deck",
}: StackingDeckProps) {
  return (
    <section className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#0A0D10]">
      <div className="mx-auto max-w-3xl">
        <div className="font-mono text-xs text-emerald-400 mb-4 uppercase">{tag}</div>
        <div className="space-y-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`sticky ${card.topOffsetClass} rounded-2xl border border-white/15 ${card.bgClass} p-6 sm:p-8 shadow-2xl transition-transform`}
            >
              <div className={`font-mono text-xs font-semibold ${card.tagColorClass}`}>{card.tag}</div>
              <h3 className="font-serif text-xl sm:text-2xl text-white mt-1">{card.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-300">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
