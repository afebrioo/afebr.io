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
    image: `${BASE_PATH}/images/afebrio-kemendag2.jpg`,
    hasImage: true,
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
    hasImage: true,
    total: "04",
  },
  {
    num: "03",
    role: "Lab Assistant & Vice Coordinator",
    company: "SEA Laboratory, Telkom University",
    period: "Jun 2024 – Jun 2025",
    type: "Academic",
    desc: "Co-managed laboratory operations, mentored junior members, and contributed to research in software engineering and AI applications.",
    image: null,
    hasImage: false,
    total: "04",
  },
  {
    num: "04",
    role: "Lab Assistant",
    company: "i-Smile Laboratory, Telkom University",
    period: "Jun 2025 – May 2026",
    type: "Academic",
    desc: "Assisted in AI/ML lab sessions, guided students on practical experiments, and supervised research projects in intelligent systems.",
    image: null,
    hasImage: false,
    total: "04",
  },
];

const videos = [
  {
    title: "Keynote Speech & Public Relations Closing",
    sub: "Recorded during CONNECTION HMTK annual event",
    src: `${BASE_PATH}/videos/pidato_leadership.mp4`,
  },
  {
    title: "Organization Speech & Ceremony Leadership",
    sub: "Video recorded during Overclock 2025",
    src: `${BASE_PATH}/videos/keynote_speech.mp4`,
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
      <div className={styles.expContainer}>
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
              <div className={exp.hasImage ? styles.itemInner : styles.itemInnerNoImg}>
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

                {/* Thumbnail — only if hasImage */}
                {exp.hasImage && exp.image && (
                  <div className={styles.imgWrap}>
                    <img src={exp.image} alt={exp.company} className={styles.img} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          <div className="dashed-line" />
        </div>
      </div>

      {/* Full-Bleed 100vw Edge-to-Edge Hero Video Stack */}
      <div className={styles.heroVideoStack}>
        {videos.map((v, i) => (
          <motion.div key={i} className={styles.heroVideoCard} {...inView(0.3 + i * 0.1)}>
            <video
              src={v.src}
              autoPlay
              loop
              muted
              playsInline
              className={styles.heroVideoBg}
            />
            <div className={styles.heroVideoOverlay} />
            <div className={styles.heroVideoContent}>
              <span className={styles.heroVideoBadge}>Video Highlight</span>
              <h3 className={styles.heroVideoTitle}>{v.title}</h3>
              <p className={styles.heroVideoSub}>{v.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
