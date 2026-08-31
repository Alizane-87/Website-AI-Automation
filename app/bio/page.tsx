"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Preset profiles for instant interactive preview
const PROFILES = {
  clinic: {
    id: "clinic",
    name: "Dr. Elena Vance, MD",
    handle: "@drelenavance",
    title: "Aesthetic Medicine & Longevity Studio",
    location: "Beverly Hills, CA",
    avatar: "https://images.unsplash.com/photo-1594824813515-78e8264e1eb8?w=300&auto=format&fit=crop&q=80",
    badge: "Board Certified · Medical Director",
    status: "AI Concierge Answering 24/7",
    aiGreeting: "Hello! I am Dr. Vance's AI Clinic Concierge. Are you interested in injectables, laser resurfacing, or booking a private consultation?",
    links: [
      {
        id: "call",
        type: "voice",
        title: "Talk to AI Clinic Concierge",
        subtitle: "Instant voice triage & consultation booking",
        icon: "phone",
        highlight: true,
        tag: "Live Voice",
      },
      {
        id: "chat",
        type: "chat",
        title: "Ask Treatment Questions & Pricing",
        subtitle: "Instant answers on downtime, packages, & prep",
        icon: "message-square",
        highlight: false,
        tag: "Instant AI",
      },
      {
        id: "book",
        type: "calendar",
        title: "Book VIP In-Person Consultation",
        subtitle: "Direct calendar reservation (Deposit required)",
        icon: "calendar",
        highlight: false,
        tag: "Schedule",
      },
      {
        id: "guide",
        type: "pdf",
        title: "Download 2026 Treatment & Pricing Guide",
        subtitle: "Complete menu of non-surgical therapies",
        icon: "file-text",
        highlight: false,
        tag: "Free PDF",
      },
      {
        id: "whatsapp",
        type: "whatsapp",
        title: "Direct VIP Care Coordinator",
        subtitle: "WhatsApp concierge for existing patients",
        icon: "message-circle",
        highlight: false,
        tag: "WhatsApp",
      },
    ],
  },
  advisor: {
    id: "advisor",
    name: "Marcus Vance",
    handle: "@marcusgrowth",
    title: "Fractional CMO & Enterprise Growth Advisory",
    location: "New York & Austin",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    badge: "Ex-Scale AI · $40M+ Pipeline Built",
    status: "Taking Q3 Strategy Clients",
    aiGreeting: "Hi! I am Marcus's AI Chief of Staff. I qualify growth engagements, share case studies, or book an introductory diagnostic call.",
    links: [
      {
        id: "call",
        type: "voice",
        title: "Screen Your Business with AI Voice",
        subtitle: "2-minute evaluation on growth bottlenecks",
        icon: "phone",
        highlight: true,
        tag: "2-Min AI Call",
      },
      {
        id: "chat",
        type: "chat",
        title: "Ask About Retainers & Scope",
        subtitle: "Get immediate answers on pricing & sprint deliverables",
        icon: "message-square",
        highlight: false,
        tag: "Instant AI",
      },
      {
        id: "book",
        type: "calendar",
        title: "Reserve 30-Min Executive Diagnostic",
        subtitle: "Qualified 7-figure founder slots only",
        icon: "calendar",
        highlight: false,
        tag: "Calendar Sync",
      },
      {
        id: "case-study",
        type: "link",
        title: "The $12M Enterprise Pipeline Playbook",
        subtitle: "Case study tear-down & architecture diagrams",
        icon: "trending-up",
        highlight: false,
        tag: "Case Study",
      },
    ],
  },
  contractor: {
    id: "contractor",
    name: "Apex Emergency Restoration",
    handle: "@apexrestoration247",
    title: "24/7 Water & Fire Emergency Response",
    location: "Denver Metro & Boulder",
    avatar: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&auto=format&fit=crop&q=80",
    badge: "Licensed & IICRC Certified #84920",
    status: "Dispatched in <45 Mins",
    aiGreeting: "Emergency Dispatch AI active. Tell me what happened, your address, and our closest technician will be notified immediately.",
    links: [
      {
        id: "call",
        type: "voice",
        title: "Call Emergency Dispatch AI (Instant Pickup)",
        subtitle: "No hold time · 24/7/365 immediate response",
        icon: "phone",
        highlight: true,
        tag: "Emergency Voice",
      },
      {
        id: "chat",
        type: "chat",
        title: "Text Our Emergency Triage Bot",
        subtitle: "Submit photos of damage for instant quote",
        icon: "message-square",
        highlight: false,
        tag: "Photo Triage",
      },
      {
        id: "book",
        type: "calendar",
        title: "Schedule Free On-Site Damage Inspection",
        subtitle: "Direct calendar booking for non-emergency review",
        icon: "calendar",
        highlight: false,
        tag: "Free Inspection",
      },
      {
        id: "insurance",
        type: "link",
        title: "Direct Insurance Claim Billing Portal",
        subtitle: "We bill State Farm, Allstate, Travelers directly",
        icon: "shield-check",
        highlight: false,
        tag: "Insurance",
      },
    ],
  },
};

export default function LinkInBioShowcasePage() {
  const [activeProfileId, setActiveProfileId] = useState<"clinic" | "advisor" | "contractor">("clinic");
  const [activeModal, setActiveModal] = useState<"voice" | "chat" | "calendar" | null>(null);
  const [isCalling, setIsCalling] = useState(false);
  const [callTimer, setCallTimer] = useState(0);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "ai" | "user"; text: string }>>([]);
  const [inputMessage, setInputMessage] = useState("");

  const profile = PROFILES[activeProfileId];

  useEffect(() => {
    setChatMessages([{ sender: "ai", text: profile.aiGreeting }]);
  }, [activeProfileId, profile.aiGreeting]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCalling) {
      interval = setInterval(() => {
        setCallTimer((prev) => prev + 1);
      }, 1000);
    } else {
      setCallTimer(0);
    }
    return () => clearInterval(interval);
  }, [isCalling]);

  const handleLinkClick = (type: string) => {
    if (type === "voice") {
      setActiveModal("voice");
      setIsCalling(true);
    } else if (type === "chat") {
      setActiveModal("chat");
    } else if (type === "calendar") {
      setActiveModal("calendar");
    } else {
      alert("Opening external destination...");
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    setChatMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInputMessage("");

    // Simulate instant AI qualification response
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: `Thanks for asking about "${userText}". Based on your inquiry, our next available opening is tomorrow at 10:30 AM. Would you like me to reserve that time for you?`,
        },
      ]);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#111827] font-sans antialiased selection:bg-[#A7F3D0] selection:text-[#065F46] py-10 px-4 sm:px-6">
      {/* Top Banner Navigation */}
      <div className="mx-auto max-w-5xl mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#E7E5E4] pb-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 font-serif text-lg font-medium text-[#111827] hover:text-[#065F46] transition-colors">
            <span>← Back to Alizane Labs</span>
          </Link>
          <span className="text-[#D6D3D1]">|</span>
          <span className="font-mono text-xs text-[#78716C]">Product Prototype: Managed AI Link-in-Bio</span>
        </div>

        {/* Profile Switcher Tabs */}
        <div className="flex items-center gap-1.5 rounded-lg border border-[#E7E5E4] bg-white p-1 shadow-2xs font-mono text-xs">
          <span className="px-2 py-1 text-[#78716C] font-semibold hidden sm:inline">Industry Preset:</span>
          <button
            type="button"
            onClick={() => { setActiveProfileId("clinic"); setActiveModal(null); setIsCalling(false); }}
            className={`rounded-md px-3 py-1.5 transition-all cursor-pointer ${
              activeProfileId === "clinic"
                ? "bg-[#065F46] text-white font-medium shadow-xs"
                : "text-[#57534E] hover:text-[#111827]"
            }`}
          >
            Medical Clinic
          </button>
          <button
            type="button"
            onClick={() => { setActiveProfileId("advisor"); setActiveModal(null); setIsCalling(false); }}
            className={`rounded-md px-3 py-1.5 transition-all cursor-pointer ${
              activeProfileId === "advisor"
                ? "bg-[#065F46] text-white font-medium shadow-xs"
                : "text-[#57534E] hover:text-[#111827]"
            }`}
          >
            B2B Advisor
          </button>
          <button
            type="button"
            onClick={() => { setActiveProfileId("contractor"); setActiveModal(null); setIsCalling(false); }}
            className={`rounded-md px-3 py-1.5 transition-all cursor-pointer ${
              activeProfileId === "contractor"
                ? "bg-[#065F46] text-white font-medium shadow-xs"
                : "text-[#57534E] hover:text-[#111827]"
            }`}
          >
            Emergency Contractor
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive Mobile Device Preview + Comparison Spec */}
      <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Interactive Mobile Mockup Viewport */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-[400px] rounded-[40px] border-[8px] border-[#1C1917] bg-[#FAFAF9] p-6 shadow-2xl relative overflow-hidden ring-1 ring-black/5">
            {/* Phone Speaker & Camera Notch */}
            <div className="mx-auto h-4 w-28 rounded-full bg-[#1C1917] mb-6 flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-[#292524] mr-2" />
              <div className="h-1.5 w-8 rounded-full bg-[#292524]" />
            </div>

            {/* Profile Header */}
            <div className="text-center space-y-2">
              <div className="relative inline-block">
                <div className="h-20 w-20 rounded-full border-2 border-[#065F46] p-0.5 mx-auto overflow-hidden shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full bg-[#059669] border-2 border-white flex items-center justify-center text-white text-[10px]">
                  ✓
                </span>
              </div>

              <div>
                <h1 className="font-serif text-xl font-bold text-[#111827]">
                  {profile.name}
                </h1>
                <p className="font-mono text-xs text-[#065F46] font-medium">
                  {profile.handle}
                </p>
                <p className="mt-1 text-xs text-[#57534E] leading-tight">
                  {profile.title}
                </p>
              </div>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-3 py-1 text-[11px] font-mono text-[#065F46]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" />
                <span>{profile.status}</span>
              </div>
            </div>

            {/* Micro-Portal Link Stack */}
            <div className="mt-6 space-y-3">
              {profile.links.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleLinkClick(item.type)}
                  className={`w-full text-left rounded-2xl p-4 transition-all duration-200 cursor-pointer ${
                    item.highlight
                      ? "bg-[#065F46] text-white shadow-md hover:bg-[#064E3B] active:scale-98"
                      : "bg-white border border-[#E7E5E4] text-[#111827] hover:border-[#065F46]/40 hover:shadow-xs active:scale-98"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-[10px] uppercase tracking-wider font-semibold ${
                      item.highlight ? "text-[#A7F3D0]" : "text-[#065F46]"
                    }`}>
                      {item.tag}
                    </span>
                    <span className={`font-mono text-xs ${item.highlight ? "text-[#A7F3D0]" : "text-[#78716C]"}`}>
                      →
                    </span>
                  </div>

                  <div className="mt-1.5">
                    <h3 className={`text-sm font-semibold ${item.highlight ? "text-white" : "text-[#111827]"}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs mt-0.5 leading-snug ${item.highlight ? "text-white/80" : "text-[#57534E]"}`}>
                      {item.subtitle}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Domain Footer Branding */}
            <div className="mt-6 pt-4 border-t border-[#E7E5E4] text-center font-mono text-[10px] text-[#78716C]">
              <span>Powered by </span>
              <strong className="text-[#065F46]">Alizane Engine</strong>
              <span> · Load speed: 220ms</span>
            </div>

            {/* OVERLAY MODAL: Voice Call Simulator */}
            {activeModal === "voice" && (
              <div className="absolute inset-0 bg-[#064E3B] text-white p-6 flex flex-col justify-between z-30 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="font-mono text-xs text-[#A7F3D0]">LIVE AI CALL</span>
                  <button
                    type="button"
                    onClick={() => { setActiveModal(null); setIsCalling(false); }}
                    className="text-white/70 hover:text-white font-mono text-sm cursor-pointer"
                  >
                    ✕ Close
                  </button>
                </div>

                <div className="text-center space-y-3">
                  <div className="h-16 w-16 rounded-full border-2 border-[#34D399] mx-auto overflow-hidden animate-pulse">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={profile.avatar} alt="Profile" className="h-full w-full object-cover" />
                  </div>
                  <h3 className="font-serif text-lg font-bold">{profile.name} AI Concierge</h3>
                  <p className="font-mono text-xs text-[#A7F3D0]">
                    {isCalling ? `Connected · 00:${callTimer < 10 ? `0${callTimer}` : callTimer}` : "Calling..."}
                  </p>

                  {/* Equalizer */}
                  <div className="flex justify-center items-center gap-1.5 h-8">
                    <span className="h-3 w-1 bg-[#34D399] rounded-full animate-pulse" />
                    <span className="h-6 w-1 bg-[#34D399] rounded-full animate-pulse delay-75" />
                    <span className="h-8 w-1 bg-[#34D399] rounded-full animate-pulse delay-150" />
                    <span className="h-5 w-1 bg-[#34D399] rounded-full animate-pulse delay-100" />
                    <span className="h-7 w-1 bg-[#34D399] rounded-full animate-pulse delay-200" />
                    <span className="h-3 w-1 bg-[#34D399] rounded-full animate-pulse delay-300" />
                  </div>

                  <p className="text-xs text-white/90 bg-white/10 p-3 rounded-xl border border-white/10 text-left leading-relaxed">
                    &quot;{profile.aiGreeting}&quot;
                  </p>
                </div>

                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => { setActiveModal(null); setIsCalling(false); }}
                    className="w-full rounded-xl bg-red-600 py-3 text-xs font-mono font-bold uppercase tracking-wider text-white hover:bg-red-700 transition-colors cursor-pointer"
                  >
                    End AI Call
                  </button>
                </div>
              </div>
            )}

            {/* OVERLAY MODAL: AI Chat Drawer */}
            {activeModal === "chat" && (
              <div className="absolute inset-0 bg-white text-[#111827] p-5 flex flex-col justify-between z-30 animate-in fade-in slide-in-from-bottom duration-200">
                <div className="flex justify-between items-center border-b border-[#E7E5E4] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#059669] animate-pulse" />
                    <span className="font-mono text-xs font-semibold text-[#111827]">24/7 AI Chat Concierge</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="text-[#78716C] hover:text-[#111827] font-mono text-sm cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto py-3 space-y-3 font-sans text-xs">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl max-w-[85%] ${
                        msg.sender === "ai"
                          ? "bg-[#ECFDF5] border border-[#A7F3D0] text-[#064E3B] mr-auto"
                          : "bg-[#111827] text-white ml-auto"
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="border-t border-[#E7E5E4] pt-2 flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask a question or request a time..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    className="flex-1 rounded-lg border border-[#D6D3D1] bg-[#F9F9F7] px-3 py-2 text-xs outline-none focus:border-[#065F46]"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-[#065F46] px-3 py-2 text-xs text-white font-medium hover:bg-[#064E3B] cursor-pointer"
                  >
                    Send
                  </button>
                </form>
              </div>
            )}

            {/* OVERLAY MODAL: Direct Calendar Slot Picker */}
            {activeModal === "calendar" && (
              <div className="absolute inset-0 bg-white text-[#111827] p-5 flex flex-col justify-between z-30 animate-in fade-in slide-in-from-bottom duration-200">
                <div className="flex justify-between items-center border-b border-[#E7E5E4] pb-3">
                  <span className="font-mono text-xs font-semibold text-[#111827]">Select Consultation Slot</span>
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="text-[#78716C] hover:text-[#111827] font-mono text-sm cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div className="py-4 space-y-3 font-mono text-xs">
                  <p className="text-xs font-sans text-[#57534E]">
                    Synced with Cal.com / Google Calendar in real time:
                  </p>

                  <div className="space-y-2">
                    <div className="rounded-lg border border-[#A7F3D0] bg-[#ECFDF5] p-3 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-[#065F46]">Tomorrow · 10:00 AM EST</div>
                        <div className="text-[11px] text-[#57534E]">30 Min VIP Video Diagnostic</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => { alert("Slot reserved! Instant confirmation SMS sent."); setActiveModal(null); }}
                        className="rounded bg-[#065F46] text-white px-3 py-1 text-xs font-medium cursor-pointer"
                      >
                        Reserve
                      </button>
                    </div>

                    <div className="rounded-lg border border-[#E7E5E4] bg-[#F9F9F7] p-3 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-[#111827]">Tomorrow · 02:30 PM EST</div>
                        <div className="text-[11px] text-[#57534E]">30 Min VIP Video Diagnostic</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => { alert("Slot reserved! Instant confirmation SMS sent."); setActiveModal(null); }}
                        className="rounded border border-[#D6D3D1] bg-white text-[#111827] px-3 py-1 text-xs font-medium cursor-pointer"
                      >
                        Reserve
                      </button>
                    </div>

                    <div className="rounded-lg border border-[#E7E5E4] bg-[#F9F9F7] p-3 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-[#111827]">Thursday · 11:15 AM EST</div>
                        <div className="text-[11px] text-[#57534E]">30 Min VIP Video Diagnostic</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => { alert("Slot reserved! Instant confirmation SMS sent."); setActiveModal(null); }}
                        className="rounded border border-[#D6D3D1] bg-white text-[#111827] px-3 py-1 text-xs font-medium cursor-pointer"
                      >
                        Reserve
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#E7E5E4] pt-3 text-center">
                  <span className="font-mono text-[10px] text-[#78716C]">
                    Instant SMS reminder sent to client upon booking
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Strategic Breakdown & Comparison Matrix */}
        <div className="lg:col-span-6 space-y-6">
          <div className="rounded-2xl border border-[#E7E5E4] bg-white p-7 shadow-sm space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
              The Product Concept
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#111827] leading-tight">
              Why High-Ticket Businesses Pay $89–$199/mo to Replace Linktree
            </h2>
            <p className="text-sm leading-relaxed text-[#57534E]">
              Standard Linktree links bleed high-intent social traffic. They take 3–5 seconds to load, show generic pastel button pills, have zero lead qualification, and don&apos;t connect to a real CRM.
            </p>
            <p className="text-sm leading-relaxed text-[#57534E]">
              Alizane Labs builds and manages custom **Edge-Rendered Micro-Portals** hosted directly on the client&apos;s custom domain (<code className="font-mono text-xs bg-[#F9F9F7] px-1.5 py-0.5 border border-[#E7E5E4] rounded">links.client.com</code>) equipped with 24/7 AI Voice &amp; Chat qualification.
            </p>
          </div>

          {/* Comparison Matrix */}
          <div className="rounded-2xl border border-[#E7E5E4] bg-white p-7 shadow-sm">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#111827] font-semibold mb-4">
              Feature-by-Feature Comparison
            </h3>

            <div className="space-y-3 font-mono text-xs">
              <div className="grid grid-cols-12 gap-2 border-b border-[#E7E5E4] pb-2 text-[#78716C]">
                <div className="col-span-5 font-sans font-medium">Metric / Feature</div>
                <div className="col-span-3 text-center">Linktree Standard</div>
                <div className="col-span-4 text-center text-[#065F46] font-bold">Alizane AI Portal</div>
              </div>

              <div className="grid grid-cols-12 gap-2 items-center py-1.5 border-b border-[#E7E5E4]/60">
                <div className="col-span-5 font-sans text-[#111827]">Page Load Speed</div>
                <div className="col-span-3 text-center text-red-600">3.2s – 4.5s</div>
                <div className="col-span-4 text-center font-bold text-[#065F46]">&lt; 240ms (Edge)</div>
              </div>

              <div className="grid grid-cols-12 gap-2 items-center py-1.5 border-b border-[#E7E5E4]/60">
                <div className="col-span-5 font-sans text-[#111827]">24/7 Voice AI Call</div>
                <div className="col-span-3 text-center text-[#78716C]">❌ None</div>
                <div className="col-span-4 text-center font-bold text-[#065F46]">✓ Built-in Retell AI</div>
              </div>

              <div className="grid grid-cols-12 gap-2 items-center py-1.5 border-b border-[#E7E5E4]/60">
                <div className="col-span-5 font-sans text-[#111827]">AI Lead Qualifier</div>
                <div className="col-span-3 text-center text-[#78716C]">❌ None</div>
                <div className="col-span-4 text-center font-bold text-[#065F46]">✓ 24/7 Gemini Flash</div>
              </div>

              <div className="grid grid-cols-12 gap-2 items-center py-1.5 border-b border-[#E7E5E4]/60">
                <div className="col-span-5 font-sans text-[#111827]">Custom Domain</div>
                <div className="col-span-3 text-center text-[#78716C]">$24/mo add-on</div>
                <div className="col-span-4 text-center font-bold text-[#065F46]">✓ Included</div>
              </div>

              <div className="grid grid-cols-12 gap-2 items-center py-1.5">
                <div className="col-span-5 font-sans text-[#111827]">Instant SMS Dispatch</div>
                <div className="col-span-3 text-center text-[#78716C]">❌ Email digest only</div>
                <div className="col-span-4 text-center font-bold text-[#065F46]">✓ Instant &lt;3s SMS</div>
              </div>
            </div>
          </div>

          {/* Pricing Tiers to Sell this as an Agency Retainer */}
          <div className="rounded-2xl border border-[#A7F3D0] bg-[#ECFDF5]/60 p-7 shadow-xs">
            <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
              Agency Subscription Packaging
            </span>
            <div className="mt-3 grid grid-cols-3 gap-3 text-center font-mono text-xs">
              <div className="rounded-xl border border-[#A7F3D0] bg-white p-3.5">
                <div className="text-[11px] text-[#78716C]">Basic</div>
                <div className="text-base font-bold text-[#111827] mt-1">$39/mo</div>
                <p className="text-[10px] font-sans text-[#57534E] mt-1">Sub-second Edge micro-portal + 5 link edits/mo</p>
              </div>
              <div className="rounded-xl border border-[#065F46] bg-[#065F46] text-white p-3.5 shadow-sm">
                <div className="text-[11px] text-[#A7F3D0]">Standard</div>
                <div className="text-base font-bold text-white mt-1">$89/mo</div>
                <p className="text-[10px] font-sans text-white/80 mt-1">Bio Portal + 24/7 AI Chat Lead Qualifier</p>
              </div>
              <div className="rounded-xl border border-[#A7F3D0] bg-white p-3.5">
                <div className="text-[11px] text-[#78716C]">VIP Concierge</div>
                <div className="text-base font-bold text-[#111827] mt-1">$199/mo</div>
                <p className="text-[10px] font-sans text-[#57534E] mt-1">Voice AI Call Button + Cal.com direct sync</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
