"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import styles from "./Hero.module.css";

const BASE_PATH = "/afebr.io";

const stripImages = [
  { src: `${BASE_PATH}/images/afebrio-kabinet.jpg`,     alt: "Kabinet Aksata",        pos: "center top" },
  { src: `${BASE_PATH}/images/afebrio-keynote.jpg`,     alt: "Keynote Opening",       pos: "center top" },
  { src: `${BASE_PATH}/images/afebrio-kemendag1.jpg`,   alt: "Kemendag Internship",   pos: "center top" },
  { src: `${BASE_PATH}/images/afebrio-band1.jpg`,       alt: "Band Performance",      pos: "center 25%" },
  { src: `${BASE_PATH}/images/afebrio-speech.jpg`,      alt: "Keynote Speech",        pos: "center top" },
  { src: `${BASE_PATH}/images/afebrio-wide.jpg`,        alt: "Community Event",       pos: "center top" },
  { src: `${BASE_PATH}/images/afebrio-standing.jpg`,    alt: "Stage Presence",        pos: "center top" },
  { src: `${BASE_PATH}/images/afebrio-band2.jpg`,       alt: "Live Music",            pos: "center 20%" },
  { src: `${BASE_PATH}/images/afebrio-random.jpg`,      alt: "Behind the Scenes",     pos: "center top" },
  { src: `${BASE_PATH}/images/afebrio-hublusos2.jpg`,   alt: "Hublusos Event",        pos: "center top" },
];

const verticalLabels = [
  "AI ENGINEERING",
  "DATA SCIENCE",
  "FULL-STACK",
  "RESEARCH",
  "LEADERSHIP",
];

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll image strip
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let pos = 0;
    let raf: number;

    const scroll = () => {
      if (!isHovered) {
        pos += 0.7;
        const half = el.scrollWidth / 2;
        if (pos >= half) pos = 0;
        el.style.transform = `translateX(-${pos}px)`;
      }
      raf = requestAnimationFrame(scroll);
    };
    raf = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(raf);
  }, [isHovered]);

  const doubled = [...stripImages, ...stripImages];

  return (
    <section id="hero" className={styles.hero}>
      {/* Decorative + markers */}
      <span className={`plus-marker ${styles.plusTL}`}>+</span>
      <span className={`plus-marker ${styles.plusTR}`}>+</span>
      <span className={`plus-marker ${styles.plusBL}`}>+</span>
      <span className={`plus-marker ${styles.plusBR}`}>+</span>

      {/* Vertical rotating labels (left side) */}
      <div className={styles.verticalLabels} aria-hidden="true">
        {verticalLabels.map((label) => (
          <span key={label} className={styles.vLabel}>{label}</span>
        ))}
      </div>

      {/* Vertical rotating labels (right side) */}
      <div className={styles.verticalLabelsRight} aria-hidden="true">
        {["AVAILABLE FOR HIRE", "BASED IN BANDUNG", "OPEN TO REMOTE", "CLASS OF 2026"].map((label) => (
          <span key={label} className={styles.vLabel}>{label}</span>
        ))}
      </div>

      {/* Main hero content */}
      <div className={styles.heroContent}>
        {/* Name block — top part */}
        <motion.div
          className={styles.nameBlock}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className={styles.nameTop}>RAHMANDA</h1>
        </motion.div>

        {/* Horizontal image strip — in the middle of the name */}
        <div
          className={styles.imageStrip}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div ref={scrollRef} className={styles.stripTrack}>
            {doubled.map((img, i) => (
              <div key={`${img.src}-${i}`} className={styles.stripItem}>
                <img src={img.src} alt={img.alt} className={styles.stripImg}
                  style={{ objectPosition: img.pos }} />
              </div>
            ))}
          </div>
        </div>

        {/* Name block — bottom part */}
        <motion.div
          className={styles.nameBlock}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className={styles.nameBottom}>AFEBRIO</h1>
        </motion.div>

        {/* Subtitle row */}
        <motion.div
          className={styles.subtitleRow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className={styles.subtitleLeft}>
            <p className={styles.subtitleRole}>AI / ML Engineer · Data Scientist · Full-Stack</p>
            <p className={styles.subtitleSub}>Computer Engineering · Telkom University 2026</p>
          </div>

          <div className={styles.subtitleRight}>
            <div className={styles.socials}>
              <a href="https://github.com/afebrioo" target="_blank" rel="noopener noreferrer"
                 className={styles.socialLink} id="hero-github" aria-label="GitHub">
                <FaGithub size={16} />
              </a>
              <a href="https://linkedin.com/in/afebrioo" target="_blank" rel="noopener noreferrer"
                 className={styles.socialLink} id="hero-linkedin" aria-label="LinkedIn">
                <FaLinkedinIn size={16} />
              </a>
              <a href="https://instagram.com/afebrioo" target="_blank" rel="noopener noreferrer"
                 className={styles.socialLink} id="hero-instagram" aria-label="Instagram">
                <FaInstagram size={16} />
              </a>
            </div>
            <a href="#projects" className="btn-solid" id="hero-view-work" style={{ marginLeft: 20 }}>
              View Work ↓
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
