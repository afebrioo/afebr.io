"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";
import { mediaReveal } from "./motion/Reveal";


const BASE_PATH = "/afebr.io";

const philosophies = [
  {
    num: "01",
    title: "Intelligence & Scale",
    text: "I turn complex data into intelligent, scalable, and actionable solutions that create real-world impact.",
  },
  {
    num: "02",
    title: "Engineering with Clarity",
    text: "Every system I build is designed with performance, clarity, and the human in mind.",
  },
  {
    num: "03",
    title: "Bridging the Gap",
    text: "I believe great technology bridges the gap between raw numbers and human insight.",
  },
];

const inView = (i = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
});

export default function About() {
  return (
    <section id="about" className="section-light">
      <div className="container">
        <div className={styles.grid}>
          {/* Left: Photo Frame */}
          <motion.div className={styles.photoSide} {...inView(0)}>
            <motion.div className={styles.photoFrame} {...mediaReveal(0.1)}>
              <div className={styles.photoBadge}>
                <span className={styles.recDot} />
                <span>PROFILE // 01</span>
              </div>
              <img
                src={`${BASE_PATH}/images/afebrio-profpic.jpg`}
                alt="Rahmanda Afebrio"
                className={styles.photo}
              />
              <div className={styles.photoCornerTL} />
              <div className={styles.photoCornerBR} />
            </motion.div>
            <div className={styles.photoCaption}>
              <span className={styles.captionName}>Rahmanda Afebrio</span>
              <span className={styles.dot}>·</span>
              <span className={styles.captionLoc}>Bandung, ID</span>
            </div>
          </motion.div>

          {/* Right: Bio + Philosophy */}
          <div className={styles.textSide}>
            <motion.p className="sec-index" {...inView(0)} style={{ marginBottom: 20 }}>
              ( 01 ) Profile &amp; Mindset
            </motion.p>

            <motion.h2 className={styles.heading} {...inView(0.1)}>
              Data-Driven Thinker,<br />
              <span className={styles.headingAccent}>Community Builder.</span>
            </motion.h2>


            <motion.p className={styles.bio} {...inView(0.2)}>
              I'm a Computer Engineering student at Telkom University specializing in AI, machine learning, 
              and full-stack development. I've led student organizations, interned at government ministries, 
              and built production AI systems — I thrive at the intersection of technical depth and real-world impact.
            </motion.p>

            <div className={styles.philosophies}>
              {philosophies.map(({ num, title, text }, i) => (
                <motion.div key={num} className={styles.philosophyCard} {...inView(i * 0.1 + 0.3)}>
                  <div className={styles.cardHeader}>
                    <span className={styles.philosophyNum}>{num}</span>
                    <h3 className={styles.philosophyTitle}>{title}</h3>
                  </div>
                  <p className={styles.philosophyText}>{text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div className={styles.ctaRow} {...inView(0.6)}>
              <a href="#contact" className="cta-circle" id="about-contact-cta">
                GET IN<br />TOUCH
              </a>
              <div className={styles.ctaInfo}>
                <p className={styles.ctaTitle}>Computer Engineering</p>
                <p className={styles.ctaSub}>Telkom University · Class of 2026</p>
                <p className={styles.ctaHighlight}>AI · ML · Data Science · Full-Stack</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
