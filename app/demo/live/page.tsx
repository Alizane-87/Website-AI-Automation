"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AIChatWidget } from "@/components/ai-chat-widget";

const CLIENT_URL_MAP: Record<string, { url: string; name: string; trade: string }> = {
  "spartanfitnessmma": {
    url: "https://spartanfitnessmma.com",
    name: "Spartan Fitness (SBG Alabama)",
    trade: "BJJ & Martial Arts Academy",
  },
  "spartan-fitness": {
    url: "https://spartanfitnessmma.com",
    name: "Spartan Fitness (SBG Alabama)",
    trade: "BJJ & Martial Arts Academy",
  },
  "8weeksout": {
    url: "https://8weeksout.com",
    name: "8 Weeks Out",
    trade: "Conditioning & Performance Science",
  },
  "8-weeks-out": {
    url: "https://8weeksout.com",
    name: "8 Weeks Out",
    trade: "Conditioning & Performance Science",
  },
  "6packmacros": {
    url: "https://6packmacros.com",
    name: "6 Pack Macros",
    trade: "1-on-1 Nutrition Coaching",
  },
  "6-pack-macros": {
    url: "https://6packmacros.com",
    name: "6 Pack Macros",
    trade: "1-on-1 Nutrition Coaching",
  },
  "gravl": {
    url: "https://gravl.ai",
    name: "Gravl AI",
    trade: "AI Sales & Workflow Automation",
  },
  "water-extraction-team": {
    url: "https://waterextractionteam.com",
    name: "Water Extraction Team",
    trade: "24/7 Water Damage Restoration",
  },
};

function LiveDemoContent() {
  const searchParams = useSearchParams();
  const rawClient = searchParams.get("client") || searchParams.get("id") || "spartanfitnessmma";
  const customUrl = searchParams.get("url");

  const clientInfo = CLIENT_URL_MAP[rawClient] || {
    url: customUrl || "https://spartanfitnessmma.com",
    name: rawClient,
    trade: "Business Website",
  };

  const targetSiteUrl = customUrl || clientInfo.url;
  const [copied, setCopied] = useState(false);

  const embedScriptCode = `<script src="https://chat.alizanelabs.site/widget.js" data-client="${rawClient}"></script>`;

  const copyEmbedCode = () => {
    navigator.clipboard.writeText(embedScriptCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-[#0F172A] overflow-hidden">
      {/* ─── TOP DEMO HUD TOOLBAR ───────────────────────────────────────────── */}
      <header className="h-14 bg-[#090D16] border-b border-white/10 px-4 sm:px-6 flex items-center justify-between z-30 flex-shrink-0">
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xs hover:scale-105 transition-transform"
            title="Alizane Labs"
          >
            AL
          </a>

          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold text-white tracking-wide">
                Live Chatbot Overlay: {clientInfo.name}
              </span>
              <span className="hidden sm:inline text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-slate-300 font-mono">
                {targetSiteUrl}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={targetSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-[11px] font-medium text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          >
            ↗ Open Original
          </a>

          <a
            href={`/demo?client=${rawClient}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold text-slate-200 hover:text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
          >
            <span>✨</span> Redesign Showcase
          </a>

          <button
            onClick={copyEmbedCode}
            className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded shadow-md transition-all active:scale-95"
          >
            {copied ? "✓ Copied Embed Script!" : "Get 1-Line Script"}
          </button>
        </div>
      </header>

      {/* ─── LIVE SITE IFRAME CONTAINER ─────────────────────────────────────── */}
      <div className="relative flex-1 w-full h-[calc(100vh-56px)] bg-[#090D16] overflow-hidden">
        <iframe
          src={`/api/proxy-site?url=${encodeURIComponent(targetSiteUrl)}`}
          title={`${clientInfo.name} Live Website`}
          className="w-full h-full border-0 bg-white"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />

        {/* ─── DEDICATED CLIENT AI CHAT WIDGET ──────────────────────────────── */}
        <AIChatWidget clientId={rawClient} />
      </div>
    </div>
  );
}

export default function LiveDemoPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen w-screen bg-[#090D16] text-white font-mono text-sm">
          Loading Live Website Overlay...
        </div>
      }
    >
      <LiveDemoContent />
    </Suspense>
  );
}
