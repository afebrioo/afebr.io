"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Intro.module.css";

const BASE_PATH = "/afebr.io";
const EASE = [0.76, 0, 0.24, 1] as const;

type Shape = "circle" | "ring" | "square" | "stripes" | "triangle" | "grid" | "photo";

interface Cut {
  word: string;
  bg: string;
  fg: string;
  type: "kinetic" | "bold" | "outline";
  shape: Shape;
  shapeColor: string;
  photo?: string;
  tag: string;
}

/* 
  Showreel Flash-Cuts:
  - Generous 680ms timing per slide so every word is clearly legible
  - Clean high-contrast palette: Pure White, Deep Studio Black, Electric Cyan, Cobalt
  - Bold geometric Poppins & Syne typography (no serif!)
*/
const CUTS: Cut[] = [
  { word: "DATA",    bg: "var(--ink)",     fg: "#FFFFFF",       type: "kinetic", shape: "circle",   shapeColor: "var(--cyan)",      tag: "01 // ANALYSE" },
  { word: "VISION",  bg: "#FFFFFF",        fg: "var(--ink)",    type: "bold",    shape: "ring",     shapeColor: "var(--cyan-dark)", tag: "02 // PERCEIVE" },
  { word: "MODELS",  bg: "var(--cyan)",    fg: "var(--ink)",    type: "outline", shape: "square",   shapeColor: "#FFFFFF",          tag: "03 // TRAIN" },
  { word: "LEAD",    bg: "var(--ink)",     fg: "var(--cyan)",   type: "bold",    shape: "photo",    shapeColor: "var(--cyan)",      tag: "04 // INSPIRE", photo: `${BASE_PATH}/images/afebrio-keynote.jpg` },
  { word: "SYSTEMS", bg: "var(--bg-surface)", fg: "var(--ink)", type: "kinetic", shape: "stripes",  shapeColor: "var(--blue)",      tag: "05 // ARCHITECT" },
  { word: "BUILD",   bg: "var(--blue)",    fg: "#FFFFFF",       type: "bold",    shape: "triangle", shapeColor: "var(--cyan)",     tag: "06 // ENGINEER" },
  { word: "IMPACT",  bg: "var(--ink)",     fg: "#FFFFFF",       type: "kinetic", shape: "photo",    shapeColor: "var(--cyan)",      tag: "07 // DELIVER", photo: `${BASE_PATH}/images/afebrio-presentation.jpg` },
  { word: "SHIP.",   bg: "#FFFFFF",        fg: "var(--ink)",    type: "outline", shape: "grid",     shapeColor: "var(--cyan)",      tag: "08 // LAUNCH" },
];

const CUT_MS = 680;      // 680ms gives generous, comfortable reading time per word
const LOCKUP_MS = 1600;


function fmtTimecode(ms: number) {
  const f = Math.floor((ms % 1000) / (1000 / 24));
  const s = Math.floor(ms / 1000);
  return `00:00:${String(s).padStart(2, "0")}:${String(f).padStart(2, "0")}`;
}

function ShapeLayer({ cut }: { cut: Cut }) {
  const common = { initial: { scale: 0.4, rotate: -30, opacity: 0 }, animate: { scale: 1, rotate: 0, opacity: 1 }, transition: { duration: 0.5, ease: EASE } };
  switch (cut.shape) {
    case "circle":
      return <motion.div className={styles.shCircle} style={{ background: cut.shapeColor }} {...common} />;
    case "ring":
      return <motion.div className={styles.shRing} style={{ borderColor: cut.shapeColor }} {...common} />;
    case "square":
      return <motion.div className={styles.shSquare} style={{ background: cut.shapeColor }} initial={{ rotate: 0, scale: 0.3 }} animate={{ rotate: 45, scale: 1 }} transition={{ duration: 0.55, ease: EASE }} />;
    case "stripes":
      return (
        <div className={styles.shStripes}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.span key={i} style={{ background: cut.shapeColor }} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.4, delay: i * 0.03, ease: EASE }} />
          ))}
        </div>
      );
    case "triangle":
      return <motion.div className={styles.shTriangle} style={{ background: cut.shapeColor }} initial={{ y: "40%", rotate: 15, opacity: 0 }} animate={{ y: "0%", rotate: 0, opacity: 1 }} transition={{ duration: 0.5, ease: EASE }} />;
    case "grid":
      return (
        <div className={styles.shGrid}>
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.span key={i} style={{ background: i % 5 === 0 ? cut.shapeColor : "transparent", borderColor: cut.shapeColor }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: (i % 4) * 0.03 + Math.floor(i / 4) * 0.03, ease: EASE }} />
          ))}
        </div>
      );
    case "photo":
      return (
        <motion.div className={styles.shPhoto} style={{ outlineColor: cut.shapeColor }} initial={{ clipPath: "circle(0% at 50% 50%)" }} animate={{ clipPath: "circle(50% at 50% 50%)" }} transition={{ duration: 0.55, ease: EASE }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img src={cut.photo} alt="" initial={{ scale: 1.35 }} animate={{ scale: 1.05 }} transition={{ duration: 0.9, ease: EASE }} />
        </motion.div>
      );
  }
}

export default function Intro() {
  const [phase, setPhase] = useState<"cuts" | "lockup" | "exit" | "done">("cuts");
  const [cutIdx, setCutIdx] = useState(0);
  const [count, setCount] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const timers = useRef<number[]>([]);
  const startRef = useRef<number>(0);

  const finish = () => {
    timers.current.forEach(clearTimeout);
    document.documentElement.classList.remove("intro-lock");
    setPhase("done");
    (window as unknown as { __introDone?: boolean }).__introDone = true;
    window.dispatchEvent(new Event("intro-done"));
  };

  const skip = () => {
    timers.current.forEach(clearTimeout);
    setCount(100);
    setPhase("exit");
    timers.current.push(window.setTimeout(finish, 1000));
  };

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { finish(); return; }

    document.documentElement.classList.add("intro-lock");
    window.scrollTo(0, 0);

    CUTS.forEach((c) => { if (c.photo) { const im = new Image(); im.src = c.photo; } });

    CUTS.forEach((_, i) => {
      timers.current.push(window.setTimeout(() => setCutIdx(i), i * CUT_MS));
    });
    const cutsEnd = CUTS.length * CUT_MS;
    timers.current.push(window.setTimeout(() => setPhase("lockup"), cutsEnd));
    timers.current.push(window.setTimeout(() => setPhase("exit"), cutsEnd + LOCKUP_MS));
    timers.current.push(window.setTimeout(finish, cutsEnd + LOCKUP_MS + 1000));

    const total = cutsEnd + LOCKUP_MS * 0.7;
    let raf = 0;
    startRef.current = performance.now();
    const tick = (t: number) => {
      const e = t - startRef.current;
      setElapsed(e);
      const p = Math.min(1, e / total);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (e < total + 1200) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const t = timers.current;
    return () => {
      t.forEach(clearTimeout);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("intro-lock");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === "done") return null;

  const cut = CUTS[cutIdx];
  const exiting = phase === "exit";

  return (
    <motion.div
      className={styles.root}
      aria-hidden="true"
      initial={{ opacity: 1 }}
      animate={exiting ? { opacity: 0, scale: 1.05, filter: "blur(6px)" } : { opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Stage */}
      <div className={styles.stage}>

        <AnimatePresence mode="popLayout">
          {phase === "cuts" && (
            <motion.div
              key={cutIdx}
              className={styles.cut}
              style={{ background: cut.bg, color: cut.fg }}
              initial={{ clipPath: cutIdx % 2 ? "inset(0 0 0 100%)" : "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0 0 0 0%)" }}
              exit={{ opacity: 0.95 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <ShapeLayer cut={cut} />
              <motion.span
                className={`${styles.word} ${styles[cut.type]}`}
                initial={{ scale: 1.25, letterSpacing: "0.15em", opacity: 0 }}
                animate={{ scale: 1, letterSpacing: "-0.04em", opacity: 1 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                {cut.word}
              </motion.span>
              <span className={styles.cutTag}>{cut.tag}</span>
            </motion.div>
          )}

          {(phase === "lockup" || phase === "exit") && (
            <motion.div key="lockup" className={styles.lockup} initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
              <motion.div
                className={styles.lockOrb}
                initial={{ scale: 0, opacity: 0.9 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.1, ease: EASE }}
              />
              <div className={styles.lockWord}>
                {"afebrio".split("").map((c, i) => (
                  <span key={i} className={styles.lockCharMask}>
                    <motion.span
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.8, delay: 0.05 + i * 0.04, ease: EASE }}
                    >
                      {c}
                    </motion.span>
                  </span>
                ))}
                <span className={styles.lockCharMask}>
                  <motion.span
                    className={styles.lockDot}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
                  >
                    .
                  </motion.span>
                </span>
              </div>
              <motion.div
                className={styles.lockLine}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
              />
              <motion.p
                className={styles.lockSub}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
              >
                AI / ML ENGINEER · DATA SCIENTIST
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Minimal Progress Counter */}
        <div className={styles.hud}>
          <span className={styles.counter}>{String(count).padStart(3, "0")}<sup>%</sup></span>
        </div>
      </div>

      {!exiting && (
        <button className={styles.skip} onClick={skip} id="intro-skip" aria-label="Skip intro">
          Skip intro →
        </button>
      )}
    </motion.div>
  );
}

