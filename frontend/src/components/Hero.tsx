"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { ArrowDown } from "lucide-react";
import styles from "./Hero.module.css";
import { useIntroDone } from "./motion/ScrollFX";

const BASE_PATH = "/afebr.io";
const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const ROLES = [
  "AI / ML Engineer",
  "Data Scientist",
  "Computer Vision & Deep Learning",
  "Full-Stack Developer",
];

export default function Hero() {
  const ready = useIntroDone();
  const ref = useRef<HTMLElement>(null);
  const [roleIdx, setRoleIdx] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-16%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  useEffect(() => {
    if (!ready) return;
    const id = window.setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, [ready]);

  const enter = (d: number, y = 20) => ({
    initial: { opacity: 0, y },
    animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y },
    transition: { duration: 0.85, delay: d, ease: EASE_OUT },
  });

  return (
    <section id="hero" className={styles.hero} ref={ref}>
      {/* Background photo with clean cinematic side-blend */}
      <motion.div className={styles.bgWrap} style={{ y: bgY }}>
        <motion.div
          className={styles.bgZoom}
          initial={{ scale: 1.14 }}
          animate={ready ? { scale: 1.04 } : { scale: 1.14 }}
          transition={{ duration: 2, ease: EASE_OUT }}
        >
          <img
            src={`${BASE_PATH}/images/afebrio-hero-bg.jpg`}
            alt="Rahmanda Afebrio"
            className={styles.bgImg}
          />
        </motion.div>
        {/* Soft cinematic gradient: clear text on left, illuminated photo on right */}
        <div className={styles.bgOverlay} />
        <div className={styles.bgBottomGrad} />
        <div className={styles.ambientGlow} />
      </motion.div>

      {/* Main Hero Content */}
      <motion.div className={styles.content} style={{ y: contentY, opacity: contentOpacity }}>
        <div className={styles.heroInner}>
          {/* Status pill badge */}
          <motion.div className={styles.statusPill} {...enter(0.15)}>
            <span className={styles.statusDot} />
            <span className={styles.statusLabel}>Currently</span>
            <span className={styles.statusSep}>—</span>
            <span className={styles.roleMask}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIdx}
                  className={styles.roleWord}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  {ROLES[roleIdx]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 className={styles.title} {...enter(0.25, 24)}>
            Rahmanda<br />
            <span className={styles.titleAccent}>Afebrio<span className={styles.dotAccent}>.</span></span>
          </motion.h1>

          {/* Tagline / Subtitle */}
          <motion.p className={styles.tagline} {...enter(0.38)}>
            Computer Engineering graduate from <strong>Telkom University</strong> specializing in machine learning, 
            deep learning models, and full-stack AI applications with proven real-world impact.
          </motion.p>

          {/* Action Buttons: Pure Poppins, sleek rounded pills */}
          <motion.div className={styles.ctaRow} {...enter(0.5, 16)}>
            <a href="#projects" className={styles.btnPrimary} id="hero-view-work">
              <span>View Selected Works</span>
              <ArrowDown size={15} className={styles.btnIcon} />
            </a>
            <a
              href="https://drive.google.com/file/d/17yf85y8BujmJ6rIy5vezLZzZrrvOAozk/view"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
              id="hero-resume"
            >
              <span>Download CV</span>
              <span className={styles.arrowIcon}>↗</span>
            </a>
          </motion.div>

          {/* Clean focus domains text */}
          <motion.div className={styles.focusLine} {...enter(0.62)}>
            <span className={styles.focusLabel}>Core Domains</span>
            <span className={styles.focusSep}>—</span>
            <span className={styles.focusItem}>Artificial Intelligence</span>
            <span className={styles.focusDot}>·</span>
            <span className={styles.focusItem}>Data Science</span>
            <span className={styles.focusDot}>·</span>
            <span className={styles.focusItem}>Full-Stack Systems</span>
          </motion.div>
        </div>


        {/* Bottom bar: Socials + scroll hint */}
        <motion.div className={styles.bottomBar} {...enter(0.72)}>
          <div className={styles.socials}>
            <a href="https://github.com/afebrioo" target="_blank" rel="noopener noreferrer"
               className={styles.socialBtn} id="hero-github" aria-label="GitHub">
              <FaGithub size={17} />
            </a>
            <a href="https://linkedin.com/in/afebrioo" target="_blank" rel="noopener noreferrer"
               className={styles.socialBtn} id="hero-linkedin" aria-label="LinkedIn">
              <FaLinkedinIn size={17} />
            </a>
            <a href="https://instagram.com/afebrioo" target="_blank" rel="noopener noreferrer"
               className={styles.socialBtn} id="hero-instagram" aria-label="Instagram">
              <FaInstagram size={17} />
            </a>
          </div>

          <a href="#about" className={styles.scrollLink} id="hero-scroll-btn">
            <span className={styles.scrollDot} />
            <span>Scroll to explore</span>
            <ArrowDown size={12} className={styles.scrollArrow} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
