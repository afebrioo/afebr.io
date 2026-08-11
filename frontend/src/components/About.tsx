"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

const BASE_PATH = "/afebr.io";

const philosophies = [
  {
    num: "01",
    text: "I love to turn complex data into intelligent, scalable, and actionable solutions.",
  },
  {
    num: "02",
    text: "I believe every system should be built with performance and real-world impact in mind.",
  },
  {
    num: "03",
    text: "I am passionate about bridging the gap between raw data and human insight.",
  },
];

const inView = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
});

export default function About() {
  return (
    <section id="about" className="section-dark">
      <div className="container">
        <div className={styles.grid}>
          {/* Left: Photo */}
          <motion.div className={styles.photoWrap} {...inView(0)}>
            <img
              src={`${BASE_PATH}/images/afebrio-profpic.jpg`}
              alt="Rahmanda Afebrio"
              className={styles.photo}
            />
            <div className={styles.photoMeta}>
              <span className="section-label-light">Rahmanda Afebrio</span>
              <span className={styles.metaDot} />
              <span className="section-label-light">Bandung, Indonesia</span>
            </div>
          </motion.div>

          {/* Right: Philosophy + CTA */}
          <div className={styles.right}>
            <motion.p className="section-label-light" {...inView(0)}>
              About
            </motion.p>

            <div className={styles.philosophies}>
              {philosophies.map(({ num, text }, i) => (
                <motion.div key={num} className={styles.philosophyItem} {...inView(i * 0.1 + 0.1)}>
                  <div className="dashed-line-dark" />
                  <div className={styles.philosophyRow}>
                    <span className={styles.philosophyNum}>{num}</span>
                    <p className={styles.philosophyText}>{text}</p>
                  </div>
                </motion.div>
              ))}
              <div className="dashed-line-dark" />
            </div>

            <motion.div className={styles.ctaRow} {...inView(0.5)}>
              <a href="#contact" className="cta-circle-dark" id="about-contact-cta">
                DISCOVER<br />MORE
              </a>
              <div className={styles.ctaInfo}>
                <p className={styles.ctaTitle}>Computer Engineering</p>
                <p className={styles.ctaSub}>Telkom University · Class of 2026</p>
                <p className={styles.ctaSub}>AI / ML · Data Science · Full-Stack</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
