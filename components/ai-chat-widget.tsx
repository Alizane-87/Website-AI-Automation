"use client";

import React, { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const DEFAULT_AGENCY_SUGGESTIONS = [
  "Which plan fits my business?",
  "How does 24/7 call answering work?",
  "How does lead follow-up work?",
];

const DEFAULT_CONTRACTOR_SUGGESTIONS = [
  "How quickly can you dispatch a crew?",
  "Do you work directly with insurance?",
  "Are you licensed and IICRC certified?",
];

interface AiChatWidgetProps {
  clientId?: string;
  initialGreeting?: string;
  suggestions?: string[];
  botName?: string;
  accentColor?: string;
  pulseColor?: string;
}

export function AiChatWidget({
  clientId,
  initialGreeting,
  suggestions,
  botName,
  accentColor,
  pulseColor,
}: AiChatWidgetProps = {}) {
  const isContractor = Boolean(clientId && clientId !== "alizane-agency");
  const effectiveAccent = accentColor || (isContractor ? "#005691" : "#065F46");
  const effectivePulse = pulseColor || (isContractor ? "#38BDF8" : "#34D399");

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      role: "assistant",
      content:
        initialGreeting ||
        (isContractor
          ? "Hi there! 👋 I'm your 24/7 AI Emergency Dispatch Assistant. How can we help you with your property today?"
          : "Hi there! 👋 I'm the Alizane Labs AI assistant. Ask me anything about websites, 24/7 call answering, lead follow-up, or which plan fits your business."),
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPlannerInView, setIsPlannerInView] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeSuggestions =
    suggestions ||
    (isContractor ? DEFAULT_CONTRACTOR_SUGGESTIONS : DEFAULT_AGENCY_SUGGESTIONS);

  useEffect(() => {
    const target = document.getElementById("start");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPlannerInView(entry.isIntersecting);
      },
      { rootMargin: "0px", threshold: 0.08 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    const userMessage: Message = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    if (!textToSend) setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientId: clientId || "alizane-agency",
          messages: updatedMessages,
        }),
      });

      if (!res.ok) {
        throw new Error("Chat request failed");
      }

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: isContractor
            ? "Thank you for reaching out! Our 24/7 emergency dispatch team is on call across the Denver metro. Please call our hotline directly at (303) 232-8888 for immediate truck-mounted dispatch!"
            : "Sorry, I had a brief issue connecting. You can also reach our team directly at hello@alizanelabs.site!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <aside aria-label="AI Website Assistant" className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat Window Panel */}
      {isOpen && (
        <div className="mb-4 flex h-[500px] w-[340px] flex-col overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white shadow-2xl sm:w-[390px] transition-all animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <div
                className="relative flex h-8 w-8 items-center justify-center rounded-lg text-white shadow-xs"
                style={{ backgroundColor: effectiveAccent }}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span
                  className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-white"
                  style={{ backgroundColor: effectivePulse }}
                />
              </div>
              <div>
                <h4 className="font-sans text-sm font-bold text-[#0F172A]">
                  {botName || (isContractor ? "24/7 Emergency Dispatch" : "Alizane Assistant")}
                </h4>
                <p className="text-[11px] font-medium text-emerald-700">
                  ● Live 24/7 Dispatch · Online
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1.5 text-[#64748B] hover:bg-[#E2E8F0] hover:text-[#0F172A] transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#F8FAFC] text-xs">
            {messages.map((m, idx) => {
              const isUser = m.role === "user";
              return (
                <div
                  key={idx}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed shadow-xs ${
                      isUser
                        ? "text-white rounded-br-xs"
                        : "bg-white text-[#0F172A] border border-[#E2E8F0] rounded-bl-xs"
                    }`}
                    style={isUser ? { backgroundColor: effectiveAccent } : {}}
                  >
                    {m.content}
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-xs border border-[#E2E8F0] bg-white px-3.5 py-2.5 shadow-xs">
                  <span
                    className="h-1.5 w-1.5 animate-bounce rounded-full"
                    style={{ backgroundColor: effectiveAccent }}
                  />
                  <span
                    className="h-1.5 w-1.5 animate-bounce rounded-full [animation-delay:0.2s]"
                    style={{ backgroundColor: effectiveAccent }}
                  />
                  <span
                    className="h-1.5 w-1.5 animate-bounce rounded-full [animation-delay:0.4s]"
                    style={{ backgroundColor: effectiveAccent }}
                  />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Suggestions */}
          {messages.length <= 2 && (
            <div className="flex flex-wrap gap-1.5 border-t border-[#E2E8F0] bg-[#F8FAFC] p-2">
              {activeSuggestions.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSend(s)}
                  className="rounded-full border border-[#CBD5E1] bg-white px-2.5 py-1 text-[11px] text-[#475569] hover:border-[#0F172A] hover:text-[#0F172A] transition-colors cursor-pointer"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input Box */}
          {(() => {
            const conversationEnded = messages.length > 40;
            return (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2 border-t border-[#E2E8F0] bg-white p-2.5"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading || conversationEnded}
                  placeholder={
                    conversationEnded
                      ? "Refresh to start a new chat"
                      : isContractor
                      ? "Ask about emergency dispatch or damage..."
                      : "Ask about websites or AI..."
                  }
                  className="flex-1 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-3 py-2 text-xs text-[#0F172A] outline-none focus:border-[#0F172A] focus:bg-white disabled:opacity-50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading || conversationEnded}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white disabled:opacity-40 transition-colors shadow-xs cursor-pointer"
                  style={{ backgroundColor: effectiveAccent }}
                  aria-label="Send message"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            );
          })()}
        </div>
      )}

      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={`group flex items-center gap-2.5 rounded-full border py-3 px-5 text-xs font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 active:scale-95 cursor-pointer ${
            isPlannerInView
              ? "opacity-0 pointer-events-none translate-y-8 scale-90"
              : "opacity-100 translate-y-0 scale-100"
          }`}
          style={{
            backgroundColor: effectiveAccent,
            borderColor: effectiveAccent,
            color: "#FFFFFF",
          }}
          aria-label="Open 24/7 Dispatch AI"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 motion-reduce:animate-none"
              style={{ backgroundColor: effectivePulse }}
            />
            <span
              className="relative inline-flex h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: effectivePulse }}
            />
          </span>
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span className="font-bold tracking-tight">
            {isContractor ? "Ask 24/7 Dispatcher" : "Ask AI Assistant"}
          </span>
        </button>
      )}
    </aside>
  );
}

export const AIChatWidget = AiChatWidget;
