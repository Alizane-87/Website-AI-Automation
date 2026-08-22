import { NextRequest, NextResponse } from "next/server";
import { getClientChatbotConfig } from "@/lib/supabase-chat";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const clientId = searchParams.get("client") || searchParams.get("id") || "alizane-agency";

  const config = await getClientChatbotConfig(clientId);

  const businessName = config?.businessName || "AI Assistant";
  const themeAccent = config?.themeAccent || "#065F46";
  const themePulse = config?.themePulse || "#34D399";
  const themeOnAccent = config?.themeOnAccent || "#FFFFFF";

  const script = `(function() {
  if (window.__ALIZANE_CHAT_INITIALIZED__) return;
  window.__ALIZANE_CHAT_INITIALIZED__ = true;

  const CLIENT_ID = ${JSON.stringify(clientId)};
  const BUSINESS_NAME = ${JSON.stringify(businessName)};
  const ACCENT_COLOR = ${JSON.stringify(themeAccent)};
  const PULSE_COLOR = ${JSON.stringify(themePulse)};
  const ON_ACCENT = ${JSON.stringify(themeOnAccent)};
  const API_ENDPOINT = "https://www.alizanelabs.site/api/chat";

  // Create Style Element
  const style = document.createElement("style");
  style.textContent = \`
    .alizane-chat-widget-root {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 999999;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    .alizane-chat-trigger {
      display: flex;
      align-items: center;
      gap: 10px;
      background: \${ACCENT_COLOR};
      color: \${ON_ACCENT};
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 9999px;
      padding: 12px 20px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .alizane-chat-trigger:hover {
      transform: scale(1.02);
      box-shadow: 0 6px 24px rgba(0,0,0,0.2);
    }
    .alizane-chat-dot {
      width: 8px;
      height: 8px;
      background-color: \${PULSE_COLOR};
      border-radius: 50%;
      display: inline-block;
      animation: alizanePulse 2s infinite;
    }
    @keyframes alizanePulse {
      0% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.85); }
      100% { opacity: 1; transform: scale(1); }
    }
    .alizane-chat-window {
      display: none;
      position: absolute;
      bottom: 60px;
      right: 0;
      width: 360px;
      height: 520px;
      background: #FFFFFF;
      border: 1px solid #E5E7EB;
      border-radius: 16px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.15);
      flex-direction: column;
      overflow: hidden;
    }
    .alizane-chat-window.open {
      display: flex;
    }
    .alizane-chat-header {
      background: \${ACCENT_COLOR};
      color: \${ON_ACCENT};
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .alizane-chat-header h4 {
      margin: 0;
      font-size: 15px;
      font-weight: 600;
    }
    .alizane-chat-header p {
      margin: 2px 0 0 0;
      font-size: 12px;
      opacity: 0.85;
    }
    .alizane-chat-close {
      background: none;
      border: none;
      color: \${ON_ACCENT};
      cursor: pointer;
      font-size: 20px;
      line-height: 1;
      padding: 4px;
    }
    .alizane-chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      background: #FAFAFA;
    }
    .alizane-msg {
      max-width: 82%;
      padding: 10px 14px;
      border-radius: 12px;
      font-size: 13px;
      line-height: 1.45;
    }
    .alizane-msg-assistant {
      background: #FFFFFF;
      color: #1F2937;
      align-self: flex-start;
      border: 1px solid #E5E7EB;
      border-bottom-left-radius: 2px;
    }
    .alizane-msg-user {
      background: \${ACCENT_COLOR};
      color: \${ON_ACCENT};
      align-self: flex-end;
      border-bottom-right-radius: 2px;
    }
    .alizane-chat-footer {
      padding: 12px;
      background: #FFFFFF;
      border-top: 1px solid #E5E7EB;
      display: flex;
      gap: 8px;
    }
    .alizane-chat-input {
      flex: 1;
      padding: 10px 14px;
      border: 1px solid #D1D5DB;
      border-radius: 8px;
      font-size: 13px;
      outline: none;
    }
    .alizane-chat-input:focus {
      border-color: \${ACCENT_COLOR};
    }
    .alizane-chat-send {
      background: \${ACCENT_COLOR};
      color: \${ON_ACCENT};
      border: none;
      border-radius: 8px;
      padding: 0 16px;
      cursor: pointer;
      font-weight: 600;
      font-size: 13px;
    }
    .alizane-chat-send:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .alizane-chat-badge {
      text-align: center;
      font-size: 10px;
      color: #9CA3AF;
      padding-bottom: 6px;
      background: #FFFFFF;
    }
    @media (max-width: 480px) {
      .alizane-chat-window {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        border-radius: 0;
      }
    }
  \`;
  document.head.appendChild(style);

  // Build Container
  const root = document.createElement("div");
  root.className = "alizane-chat-widget-root";
  root.innerHTML = \`
    <div class="alizane-chat-window" id="alizaneChatWindow">
      <div class="alizane-chat-header">
        <div>
          <h4>\${BUSINESS_NAME}</h4>
          <p>Online · Instant Speed-to-Lead</p>
        </div>
        <button class="alizane-chat-close" id="alizaneChatClose">×</button>
      </div>
      <div class="alizane-chat-messages" id="alizaneChatMessages">
        <div class="alizane-msg alizane-msg-assistant">
          Hi! Welcome to \${BUSINESS_NAME}. How can we assist you today?
        </div>
      </div>
      <div class="alizane-chat-footer">
        <input type="text" class="alizane-chat-input" id="alizaneChatInput" placeholder="Ask about services or pricing..." />
        <button class="alizane-chat-send" id="alizaneChatSend">Send</button>
      </div>
      <div class="alizane-chat-badge">⚡ Instant AI Assistant</div>
    </div>
    <button class="alizane-chat-trigger" id="alizaneChatTrigger">
      <span class="alizane-chat-dot"></span>
      <span>Chat with us</span>
    </button>
  \`;
  document.body.appendChild(root);

  const trigger = document.getElementById("alizaneChatTrigger");
  const win = document.getElementById("alizaneChatWindow");
  const closeBtn = document.getElementById("alizaneChatClose");
  const input = document.getElementById("alizaneChatInput");
  const sendBtn = document.getElementById("alizaneChatSend");
  const messagesContainer = document.getElementById("alizaneChatMessages");

  let messages = [
    { role: "assistant", content: "Hi! Welcome to " + BUSINESS_NAME + ". How can we assist you today?" }
  ];
  let isSending = false;

  function toggleChat() {
    win.classList.toggle("open");
    if (win.classList.contains("open")) {
      input.focus();
    }
  }

  trigger.addEventListener("click", toggleChat);
  closeBtn.addEventListener("click", toggleChat);

  async function sendMessage() {
    const text = input.value.trim();
    if (!text || isSending) return;

    isSending = true;
    input.value = "";
    sendBtn.disabled = true;

    // Add user message
    messages.push({ role: "user", content: text });
    const userDiv = document.createElement("div");
    userDiv.className = "alizane-msg alizane-msg-user";
    userDiv.textContent = text;
    messagesContainer.appendChild(userDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Typing indicator
    const typingDiv = document.createElement("div");
    typingDiv.className = "alizane-msg alizane-msg-assistant";
    typingDiv.textContent = "Typing...";
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientId: CLIENT_ID,
          messages: messages
        })
      });

      const data = await res.json();
      typingDiv.remove();

      if (data && data.content) {
        messages.push({ role: "assistant", content: data.content });
        const replyDiv = document.createElement("div");
        replyDiv.className = "alizane-msg alizane-msg-assistant";
        replyDiv.textContent = data.content;
        messagesContainer.appendChild(replyDiv);
      } else {
        const errDiv = document.createElement("div");
        errDiv.className = "alizane-msg alizane-msg-assistant";
        errDiv.textContent = "Sorry, I had trouble answering. Please try again.";
        messagesContainer.appendChild(errDiv);
      }
    } catch (err) {
      typingDiv.remove();
      const errDiv = document.createElement("div");
      errDiv.className = "alizane-msg alizane-msg-assistant";
      errDiv.textContent = "Unable to connect right now. Please try again.";
      messagesContainer.appendChild(errDiv);
    } finally {
      isSending = false;
      sendBtn.disabled = false;
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }

  sendBtn.addEventListener("click", sendMessage);
  input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
})();`;

  return new NextResponse(script, {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
