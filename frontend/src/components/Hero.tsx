"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { ArrowDown } from "lucide-react";
import styles from "./Hero.module.css";

const BASE_PATH = "/afebr.io";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Full bleed background photo */}
      <div className={styles.bgWrap}>
        <img
          src={`${BASE_PATH}/images/afebrio-profpic.jpg`}
          alt="Rahmanda Afebrio"
          className={styles.bgImg}
        />
        {/* Gradient overlay — left dark, right fade */}
        <div className={styles.bgOverlay} />
        {/* Extra bottom gradient for text readability */}
        <div className={styles.bgBottomGrad} />
      </div>

      {/* Content layer */}
      <div className={styles.content}>
        {/* Top: status badge */}
        <motion.div
          className={styles.topRow}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.availBadge}>
            <span className={styles.availDot} />
            Open to opportunities · Aug 2026+
          </span>
          <span className={styles.location}>Bandung, Indonesia</span>
        </motion.div>

        {/* Center: name + role */}
        <div className={styles.centerBlock}>
          <motion.p
            className={styles.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            AI / ML Engineer · Data Scientist · Full-Stack
          </motion.p>

          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            Rahmanda<br />
            <span className={styles.nameAccent}>Afebrio</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Computer Engineering · Telkom University · Class of 2026
          </motion.p>

          {/* CTAs */}
          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#projects" className={styles.ctaMain} id="hero-view-work">
              View Work
              <ArrowDown size={14} />
            </a>
            <a
              href="https://drive.google.com/file/d/17yf85y8BujmJ6rIy5vezLZzZrrvOAozk/view"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaGhost}
              id="hero-resume"
            >
              Resume ↗
            </a>
          </motion.div>
        </div>

        {/* Bottom: socials */}
        <motion.div
          className={styles.bottomRow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <div className={styles.socials}>
            <a href="https://github.com/afebrioo" target="_blank" rel="noopener noreferrer"
               className={styles.socialLink} id="hero-github" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
            <a href="https://linkedin.com/in/afebrioo" target="_blank" rel="noopener noreferrer"
               className={styles.socialLink} id="hero-linkedin" aria-label="LinkedIn">
              <FaLinkedinIn size={18} />
            </a>
            <a href="https://instagram.com/afebrioo" target="_blank" rel="noopener noreferrer"
               className={styles.socialLink} id="hero-instagram" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
          </div>
          <span className={styles.scrollHint}>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
