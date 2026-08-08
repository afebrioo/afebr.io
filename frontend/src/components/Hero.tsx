"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import styles from "./Hero.module.css";

const roles = [
  "AI/ML Engineer",
  "Data Scientist",
  "Full-Stack Developer",
  "Problem Solver",
];

function TypingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setBlink((v) => !v), 550);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (sub === words[index].length + 1 && !deleting) {
      const p = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(p);
    }
    if (sub === 0 && deleting) {
      setDeleting(false);
      setIndex((v) => (v + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => setSub((v) => v + (deleting ? -1 : 1)),
      deleting ? 55 : 90
    );
    return () => clearTimeout(t);
  }, [sub, index, deleting, words]);

  return (
    <span className={styles.typingWrap}>
      <span className={styles.typingText}>{words[index].substring(0, sub)}</span>
      <span className={styles.cursor} style={{ opacity: blink ? 1 : 0 }}>|</span>
    </span>
  );
}

/* ── Minimal canvas particles (60fps optimized) ────────── */
function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    /* Fewer particles, simple movement, no connection lines for perf */
    const pts = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a: Math.random() * 0.35 + 0.05,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96,165,250,${p.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className={styles.canvas} aria-hidden="true" />;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <Particles />

      {/* Radial glow blobs */}
      <div className={styles.blobLeft} aria-hidden="true" />
      <div className={styles.blobRight} aria-hidden="true" />

      <div className="container">
        <div className={styles.content}>
          {/* Eyebrow */}
          <motion.div className={styles.eyebrow} {...fadeUp(0)}>
            <span className={styles.dot} />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1 className={styles.name} {...fadeUp(0.08)}>
            Rahmanda<br />
            <span className="text-gradient">Afebrio</span>
          </motion.h1>

          {/* Role */}
          <motion.div className={styles.role} {...fadeUp(0.16)}>
            <TypingText words={roles} />
          </motion.div>

          {/* Bio */}
          <motion.p className={styles.bio} {...fadeUp(0.22)}>
            Computer Engineering graduate from Telkom University.
            Building intelligent systems at the intersection of AI,
            data, and full-stack engineering.
          </motion.p>

          {/* CTA */}
          <motion.div className={styles.actions} {...fadeUp(0.3)}>
            <a href="#projects" className="btn btn-primary" id="hero-view-projects">
              View Projects
              <ArrowRight size={15} />
            </a>
            <a
              href="#chat"
              className="btn btn-outline"
              id="hero-ai-chat"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event("open-ai-chat"));
              }}
            >
              Talk to AI Me ✦
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div className={styles.socials} {...fadeUp(0.38)}>
            <a href="https://github.com/afebrioo" target="_blank" rel="noopener noreferrer"
               className={styles.social} id="hero-github" aria-label="GitHub">
              <FaGithub size={17} />
            </a>
            <a href="https://linkedin.com/in/afebrioo" target="_blank" rel="noopener noreferrer"
               className={styles.social} id="hero-linkedin" aria-label="LinkedIn">
              <FaLinkedinIn size={17} />
            </a>
            <a href="https://instagram.com/afebrioo" target="_blank" rel="noopener noreferrer"
               className={styles.social} id="hero-instagram" aria-label="Instagram">
              <FaInstagram size={17} />
            </a>
            <span className={styles.socialBar} />
            <span className={styles.socialMeta}>Bandung, Indonesia</span>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className={styles.scrollHint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <motion.div
            className={styles.scrollLine}
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
          <span>scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
