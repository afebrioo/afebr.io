"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Cpu, Brain } from "lucide-react";
import styles from "./About.module.css";

const highlights = [
  { icon: GraduationCap, label: "Education", value: "Telkom University", sub: "Computer Engineering '26" },
  { icon: MapPin, label: "Location", value: "Bandung, Indonesia", sub: "Open to Remote" },
  { icon: Brain, label: "Focus", value: "AI / ML", sub: "Data Science & Systems" },
  { icon: Cpu, label: "Stack", value: "Python · React", sub: "FastAPI · TensorFlow" },
];

const BASE_PATH = "/afebr.io";

const photos = [
  {
    src: `${BASE_PATH}/images/afebrio-presentation.jpg`,
    tag: "Keynote & Leadership",
    title: "Student Organization Chairman",
    desc: "Keynote presentation at HMTK Telkom University, leading student initiatives and strategic direction.",
    objectPosition: "center 20%",
  },
  {
    src: `${BASE_PATH}/images/afebrio-guitar.jpg`,
    tag: "Beyond Code",
    title: "Creative & Live Music Performance",
    desc: "Performing electric guitar live on stage, expressing creativity through music alongside engineering.",
    objectPosition: "center center",
  },
];

/* Shared scroll reveal variant */
const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
});

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.grid}>
          {/* Left column */}
          <motion.div className={styles.left} {...fadeUp(0)}>
            {/* Avatar */}
            <div className={styles.avatarWrap}>
              <div className={styles.avatar}>
                <img
                  src={`${BASE_PATH}/images/afebrio-avatar-cropped.jpg`}
                  alt="Afebrio"
                  className={styles.avatarImg}
                />
              </div>
              <div className={styles.avatarRing} />
              <div className={styles.statusBadge}>
                <span className={styles.statusDot} />
                Fresh Graduate
              </div>
            </div>

            {/* Highlights */}
            <div className={styles.highlights}>
              {highlights.map(({ icon: Icon, label, value, sub }, i) => (
                <motion.div key={label} className={`card ${styles.highlight}`} {...fadeUp(i * 0.05 + 0.1)}>
                  <div className={styles.hlIcon}>
                    <Icon size={15} />
                  </div>
                  <div>
                    <p className={styles.hlLabel}>{label}</p>
                    <p className={styles.hlValue}>{value}</p>
                    <p className={styles.hlSub}>{sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <div className={styles.right}>
            <motion.p className="eyebrow" {...fadeUp(0.05)}>whoami</motion.p>
            <motion.h2 className={`section-title ${styles.title}`} {...fadeUp(0.1)}>
              About Me
            </motion.h2>

            {[
              <>I&apos;m a <strong>Computer Engineering</strong> fresh graduate from Telkom University (Class of 2026), with a deep passion for building intelligent systems that bridge the gap between raw data and real-world impact.</>,
              <>My journey evolved from tinkering with algorithms into building production AI — from dental X-ray CNNs achieving <strong>91.18% accuracy</strong> with EfficientNetB0, to commodity forecasting with XGBoost + Prophet, to real-time traffic detection using YOLOv8.</>,
              <>Beyond code, I led student organizations, spearheaded community service programs with <strong>GOJEK</strong> sponsorship, and served as Lab Assistant shaping junior engineers — combining technical depth with leadership.</>,
              <>Currently deep-diving into <strong>LangGraph</strong> and agentic AI, building this portfolio as proof of work.</>,
            ].map((para, i) => (
              <motion.p key={i} className={styles.para} {...fadeUp(0.15 + i * 0.05)}>
                {para}
              </motion.p>
            ))}

            <motion.div className={styles.ctas} {...fadeUp(0.35)}>
              <a href="#contact" className="btn btn-primary" id="about-contact-cta">Let&apos;s Connect</a>
              <a href="#projects" className="btn btn-outline" id="about-projects-cta">See My Work</a>
            </motion.div>
          </div>
        </div>

        {/* Showcase Section */}
        <motion.div className={styles.galleryWrap} {...fadeUp(0.2)}>
          <div className={styles.galleryHeader}>
            <p className="eyebrow">life & leadership</p>
            <h3 className={styles.galleryTitle}>Leadership & Creative Expression</h3>
            <p className={styles.gallerySub}>Combining engineering precision with student organization leadership and creative drive.</p>
          </div>

          <div className={styles.galleryGrid}>
            {photos.map((item, i) => (
              <motion.div
                key={item.src}
                className={styles.galleryCard}
                {...fadeUp(i * 0.12 + 0.1)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className={styles.galleryCardImg}
                  style={{ objectPosition: item.objectPosition }}
                />
                <div className={styles.galleryOverlay}>
                  <span className={styles.galleryTag}>{item.tag}</span>
                  <p className={styles.galleryCaption}>{item.title}</p>
                  <p className={styles.galleryDesc}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
