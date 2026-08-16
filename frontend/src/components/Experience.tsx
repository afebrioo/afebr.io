"use client";

import { motion } from "framer-motion";
import styles from "./Experience.module.css";

const BASE_PATH = "/afebr.io";

const experiences = [
  {
    num: "01",
    role: "Data Scientist Intern",
    company: "Kementerian Perdagangan RI",
    period: "Jun – Aug 2025",
    type: "Internship",
    desc: "Built commodity price forecasting models using XGBoost, Random Forest, Prophet, and LSTM. Delivered analytical dashboard for government stakeholders.",
    image: `${BASE_PATH}/images/afebrio-kemendag1.jpg`,
    total: "04",
  },
  {
    num: "02",
    role: "Chairman",
    company: "HMTK, Telkom University",
    period: "Oct 2025 – Jan 2026",
    type: "Leadership",
    desc: "Led student engineering organization (HMTK) with hundreds of members. Oversaw strategic planning, events, and inter-departmental coordination.",
    image: `${BASE_PATH}/images/afebrio-kabinet.jpg`,
    total: "04",
  },
  {
    num: "03",
    role: "Lab Assistant & Vice Coordinator",
    company: "SEA Laboratory, Telkom University",
    period: "Jun 2024 – Jun 2025",
    type: "Academic",
    desc: "Co-managed laboratory operations, mentored junior members, and contributed to research in software engineering and AI applications.",
    image: `${BASE_PATH}/images/afebrio-standing.jpg`,
    total: "04",
  },
  {
    num: "04",
    role: "Lab Assistant",
    company: "i-Smile Laboratory, Telkom University",
    period: "Jun 2025 – May 2026",
    type: "Academic",
    desc: "Assisted in AI/ML lab sessions, guided students on practical experiments, and supervised research projects in intelligent systems.",
    image: `${BASE_PATH}/images/afebrio-wide.jpg`,
    total: "04",
  },
];

const inView = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Experience() {
  return (
    <section id="experience" className="section-alt">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div>
            <p className="section-label" style={{ marginBottom: 12 }}>Career</p>
            <h2 className={styles.title}>Experience &amp;<br /><em>Leadership</em></h2>
          </div>
          <p className={styles.intro}>
            From government data labs to student org leadership —<br />
            building real-world impact across every role.
          </p>
        </div>

        {/* Experience List */}
        <div className={styles.list}>
          {experiences.map((exp, i) => (
            <motion.div key={exp.num} className={styles.item} {...inView(i * 0.06)}>
              <div className="dashed-line" />
              <div className={styles.itemInner}>
                {/* Number badge */}
                <span className={styles.numBadge}>{exp.num}</span>

                {/* Main info */}
                <div className={styles.mainInfo}>
                  <div className={styles.metaRow}>
                    <span className={styles.type}>{exp.type}</span>
                    <span className={styles.period}>{exp.period}</span>
                  </div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.company}>{exp.company}</p>
                  <p className={styles.desc}>{exp.desc}</p>
                </div>

                {/* Thumbnail */}
                <div className={styles.imgWrap}>
                  <img src={exp.image} alt={exp.company} className={styles.img} />
                </div>
              </div>
            </motion.div>
          ))}
          <div className="dashed-line" />
        </div>

        {/* Video highlight */}
        <motion.div className={styles.videoCard} {...inView(0.4)}>
          <div className={styles.videoMeta}>
            <span className="section-label">Video Highlight</span>
            <h3 className={styles.videoTitle}>Organization Speech &amp; Ceremony Leadership</h3>
            <p className={styles.videoSub}>Recorded during HMTK Telkom University formal ceremony</p>
          </div>
          <div className={styles.videoWrap}>
            <video
              src={`${BASE_PATH}/videos/pidato_leadership.mp4`}
              controls
              playsInline
              muted
              className={styles.video}
              poster={`${BASE_PATH}/images/afebrio-kabinet.jpg`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
