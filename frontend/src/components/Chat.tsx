"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Loader2, Sparkles } from "lucide-react";
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

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "0",
      role: "assistant",
      content:
        "Hi! 👋 I'm Rahmanda's AI assistant, powered by LangGraph + Gemini. Ask me anything about his background, projects, skills, or experience!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
          "⚠️ The AI backend isn't running yet. Start the FastAPI server with `uvicorn main:app --reload` in the `/backend` folder.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="chat" className="section">
      <div className="container">
        <motion.p className="eyebrow" {...fadeUp(0)}>AI assistant</motion.p>
        <motion.h2 className="section-title" style={{ marginBottom: "16px" }} {...fadeUp(0.05)}>
          Talk to AI Me
        </motion.h2>
        <motion.p className={styles.subtitle} {...fadeUp(0.08)}>
          Ask anything about Rahmanda — his experience, projects, or skills. Powered by LangGraph + Gemini.
        </motion.p>

        <motion.div
          className={`card ${styles.chatBox}`}
          {...fadeUp(0.12)}
        >
          {/* Header */}
          <div className={styles.chatHeader}>
            <div className={styles.chatAvatar}>
              <Bot size={16} />
            </div>
            <div>
              <p className={styles.chatName}>Rahmanda AI</p>
              <p className={styles.chatStatus}>
                <span className={styles.onlineDot} />
                Agent Online
              </p>
            </div>
            <Sparkles size={14} className={styles.sparkle} />
          </div>

          <div className={styles.divider} />

          {/* Messages */}
          <div className={styles.messages} id="chat-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`${styles.message} ${msg.role === "user" ? styles.userMsg : styles.botMsg}`}
              >
                <div className={styles.msgAvatar}>
                  {msg.role === "user" ? <User size={13} /> : <Bot size={13} />}
                </div>
                <div className={styles.msgBubble}>
                  <p>{msg.content}</p>
                  <span className={styles.msgTime}>
                    {isMounted ? msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : ""}
                  </span>
                </div>
              </div>
            ))}

            <AnimatePresence>
              {loading && (
                <motion.div
                  className={`${styles.message} ${styles.botMsg}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className={styles.msgAvatar}>
                    <Bot size={13} />
                  </div>
                  <div className={styles.msgBubble}>
                    <div className={styles.typing}>
                      <Loader2 size={13} className={styles.spinner} />
                      <span>Thinking...</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          <div className={styles.suggestions}>
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                className={styles.suggestion}
                onClick={() => sendMessage(s)}
                id={`chat-suggestion-${s.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className={styles.inputArea}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Ask me anything..."
              className={styles.input}
              id="chat-input"
              disabled={loading}
            />
            <button
              className={styles.sendBtn}
              onClick={() => sendMessage(input)}
              disabled={loading || !input.trim()}
              id="chat-send-btn"
              aria-label="Send message"
            >
              <Send size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
