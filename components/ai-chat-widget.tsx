"use client";

import React, { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const INITIAL_MESSAGES: Message[] = [
  {
    role: "assistant",
    content:
      "Hi there! 👋 I'm the Alizane Labs AI assistant. Ask me anything about websites, 24/7 call answering, lead follow-up, or which plan fits your business.",
  },
];

const SUGGESTIONS = [
  "Which plan fits my business?",
  "How does 24/7 call answering work?",
  "How does lead follow-up work?",
];

export function AiChatWidget() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPlannerInView, setIsPlannerInView] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
        body: JSON.stringify({ messages: updatedMessages }),
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
          content: "Sorry, I had a brief issue connecting. You can also reach our team directly at hello@alizanelabs.site!",
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
        <div className="mb-4 flex h-[480px] w-[340px] flex-col overflow-hidden rounded-2xl border border-[#E7E5E4] bg-white shadow-2xl sm:w-[380px] transition-all animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#E7E5E4] bg-[#F9F9F7] px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-[#065F46] text-white">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[#34D399] ring-2 ring-white" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-medium text-[#111827]">
                  Alizane Assistant
                </h4>
                <p className="text-[11px] font-mono text-[#065F46]">
                  ● Live Assistant · Online
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1.5 text-[#78716C] hover:bg-[#E7E5E4] hover:text-[#111827] transition-colors"
              aria-label="Close chat"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#F9F9F7]/40 text-xs">
            {messages.map((m, idx) => {
              const isUser = m.role === "user";
              return (
                <div
                  key={idx}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                      isUser
                        ? "bg-[#065F46] text-white rounded-br-xs shadow-xs"
                        : "bg-white text-[#111827] border border-[#E7E5E4] rounded-bl-xs shadow-xs"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-xs border border-[#E7E5E4] bg-white px-3.5 py-2.5 shadow-xs">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#065F46]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#065F46] [animation-delay:0.2s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#065F46] [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Suggestions (Only if few messages) */}
          {messages.length <= 2 && (
            <div className="flex flex-wrap gap-1.5 border-t border-[#E7E5E4]/60 bg-[#F9F9F7] p-2">
              {SUGGESTIONS.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSend(s)}
                  className="rounded-full border border-[#D6D3D1] bg-white px-2.5 py-1 text-[11px] text-[#57534E] hover:border-[#065F46] hover:text-[#065F46] transition-colors"
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
                className="flex items-center gap-2 border-t border-[#E7E5E4] bg-white p-2.5"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading || conversationEnded}
                  placeholder={
                    conversationEnded
                      ? "Refresh to start a new chat"
                      : "Ask about websites or AI..."
                  }
                  className="flex-1 rounded-lg border border-[#D6D3D1] bg-[#F9F9F7] px-3 py-2 text-xs text-[#111827] outline-none focus:border-[#065F46] focus:bg-white disabled:opacity-50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading || conversationEnded}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#065F46] text-white hover:bg-[#064E3B] disabled:opacity-40 transition-colors shadow-xs"
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

      {/* Floating Trigger Pill (Hides gracefully when user is completing the project planner) */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={`group flex items-center gap-2.5 rounded-full border py-2.5 px-4 text-xs font-medium shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 ${
            isPlannerInView
              ? "opacity-0 pointer-events-none translate-y-8 scale-90"
              : "opacity-100 translate-y-0 scale-100"
          }`}
          style={{
            backgroundColor: "var(--chat-accent)",
            borderColor: "var(--chat-accent-border)",
            color: "var(--chat-on-accent)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--chat-accent-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--chat-accent)")}
          aria-label="Open AI Assistant"
        >
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 motion-reduce:animate-none"
              style={{ backgroundColor: "var(--chat-pulse)" }}
            />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ backgroundColor: "var(--chat-pulse)" }}
            />
          </span>
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span className="font-medium tracking-tight">Ask AI Assistant</span>
        </button>
      )}
    </aside>
  );
}
