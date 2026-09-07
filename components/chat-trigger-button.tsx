"use client";

import React from "react";

interface ChatTriggerButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export function ChatTriggerButton({
  className = "inline-flex items-center gap-2 text-sm font-medium text-[#065F46] hover:underline cursor-pointer",
  children,
}: ChatTriggerButtonProps) {
  const handleOpenChat = () => {
    if (typeof window !== "undefined") {
      // Trigger embedded chat widget if available
      const chatButton = document.querySelector<HTMLElement>(
        "[data-alizane-chat-trigger], #alizane-chat-button, button[aria-label='Open chat']"
      );
      if (chatButton) {
        chatButton.click();
      } else {
        window.dispatchEvent(new CustomEvent("alizane-open-chat"));
      }
    }
  };

  return (
    <button type="button" onClick={handleOpenChat} className={className}>
      {children || "Open live chat in corner →"}
    </button>
  );
}
