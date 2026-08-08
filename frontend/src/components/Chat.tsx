"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Loader2, Sparkles, X, MessageSquare } from "lucide-react";
import axios from "axios";
import styles from "./Chat.module.css";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const SUGGESTIONS = [
  "Tell me about your projects",
  "What are your strongest skills?",
  "Do you have internship experience?",
  "Are you open to job opportunities?",
];

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "0",
      role: "assistant",
      content:
        "Hi! 👋 I'm Afebrio's AI assistant, powered by LangGraph + Gemini. Ask me anything about his background, projects, skills, or experience!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);

    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-ai-chat", handleOpen);
    return () => window.removeEventListener("open-ai-chat", handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen && messages.length > 0) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8000/chat", {
        message: text.trim(),
      });

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: res.data.response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const errMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "⚠️ The AI backend isn't running live yet. Start the FastAPI server with `uvicorn main:app --reload` in the `/backend` folder.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.floatingWrap}>
      {/* Drawer Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className={styles.chatHeader}>
              <div className={styles.headerLeft}>
                <div className={styles.botAvatar}>
                  <Bot size={18} />
                </div>
                <div>
                  <p className={styles.botName}>Afebrio AI Assistant</p>
                  <p className={styles.botStatus}>
                    <span className={styles.onlineDot} />
                    LangGraph + Gemini Online
                  </p>
                </div>
              </div>

              <button
                className={styles.closeBtn}
                onClick={() => setIsOpen(false)}
                aria-label="Close AI Chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className={styles.messages} id="chat-messages">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`${styles.msg} ${msg.role === "user" ? styles.userMsg : styles.botMsg}`}
                >
                  <div className={styles.msgBubble}>
                    <p>{msg.content}</p>
                    <span className={styles.msgTime}>
                      {isMounted ? msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : ""}
                    </span>
                  </div>
                </div>
              ))}

              {loading && (
                <div className={`${styles.msg} ${styles.botMsg}`}>
                  <div className={styles.msgBubble}>
                    <div className={styles.typing}>
                      <Loader2 size={13} className={styles.spinner} />
                      <span>Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            <div className={styles.suggestions}>
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  className={styles.suggestion}
                  onClick={() => sendMessage(s)}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className={styles.inputArea}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Ask me anything..."
                className={styles.input}
                disabled={loading}
              />
              <button
                className={styles.sendBtn}
                onClick={() => sendMessage(input)}
                disabled={loading || !input.trim()}
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      {!isOpen && <span className={styles.badgeTooltip}>Ask AI Afebrio ✨</span>}
      <button
        className={styles.triggerBtn}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle AI Chat"
        id="floating-ai-chat-btn"
      >
        <span className={styles.pulseRing} />
        {isOpen ? <X size={22} /> : <MessageSquare size={22} />}
      </button>
    </div>
  );
}
