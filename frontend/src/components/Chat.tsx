"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ArrowUp } from "lucide-react";
import axios from "axios";
import styles from "./Chat.module.css";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const BASE_PATH = "/afebr.io";

const SUGGESTIONS = [
  "Tell me about your projects",
  "What are your core AI/ML skills?",
  "Internship at Kemendag RI?",
  "Are you open to work?",
];

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "0",
      role: "assistant",
      content:
        "Hi there! 👋 I'm Afebrio's AI assistant. Ask me anything about his machine learning projects, engineering background, or leadership experience!",
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
  }, [messages, isOpen, loading]);

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
          "⚠️ The local FastAPI AI backend is currently offline. You can start it with `uvicorn main:app --reload` inside the `/backend` folder.",
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
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className={styles.chatHeader}>
              <div className={styles.headerLeft}>
                <div className={styles.avatarWrap}>
                  <img
                    src={`${BASE_PATH}/images/afebrio-profpic.jpg`}
                    alt="Afebrio AI"
                    className={styles.avatarImg}
                  />
                  <span className={styles.sparkleBadge}>
                    <Sparkles size={9} />
                  </span>
                </div>
                <div>
                  <div className={styles.nameRow}>
                    <p className={styles.botName}>Afebrio AI</p>
                    <span className={styles.aiTag}>Assistant</span>
                  </div>
                  <p className={styles.botStatus}>
                    <span className={styles.onlineDot} />
                    LangGraph + Gemini · Online
                  </p>
                </div>
              </div>

              <button
                className={styles.closeBtn}
                onClick={() => setIsOpen(false)}
                aria-label="Close AI Chat"
              >
                <X size={17} />
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
                    <p className={styles.msgText}>{msg.content}</p>
                    <span className={styles.msgTime}>
                      {isMounted ? msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : ""}
                    </span>
                  </div>
                </div>
              ))}

              {loading && (
                <div className={`${styles.msg} ${styles.botMsg}`}>
                  <div className={styles.msgBubble}>
                    <div className={styles.typingIndicator}>
                      <span className={styles.typingDot} />
                      <span className={styles.typingDot} />
                      <span className={styles.typingDot} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick Prompt Pills */}
            <div className={styles.suggestions}>
              <p className={styles.suggestLabel}>Suggested Prompts</p>
              <div className={styles.suggestPills}>
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    className={styles.suggestion}
                    onClick={() => sendMessage(s)}
                  >
                    <span>{s}</span>
                    <span className={styles.suggestArrow}>↗</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Input bar */}
            <div className={styles.inputArea}>
              <div className={styles.inputWrap}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                  placeholder="Ask anything about Afebrio..."
                  className={styles.input}
                  disabled={loading}
                />
                <button
                  className={styles.sendBtn}
                  onClick={() => sendMessage(input)}
                  disabled={loading || !input.trim()}
                  aria-label="Send message"
                >
                  <ArrowUp size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      {!isOpen && (
        <motion.div
          className={styles.badgeTooltip}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className={styles.sparkleIcon}>✦</span>
          <span>Ask Afebrio AI</span>
        </motion.div>
      )}

      <button
        className={styles.triggerBtn}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle AI Chat"
        id="floating-ai-chat-btn"
      >
        <span className={styles.pulseRing} />
        {isOpen ? <X size={20} /> : <Sparkles size={20} className={styles.triggerIcon} />}
      </button>
    </div>
  );
}
