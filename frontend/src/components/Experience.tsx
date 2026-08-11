"use client";

import { motion } from "framer-motion";
import styles from "./Experience.module.css";

const BASE_PATH = "/afebr.io";

const experiences = [
  {
    num: "01",
    role: "Data Scientist Intern",
    company: "Kementerian Perdagangan RI",
    period: "Jun 2025 – Aug 2025",
    type: "Internship",
    desc: "Built commodity price forecasting models using XGBoost, Random Forest, Prophet, and LSTM. Delivered analytical dashboard for government stakeholders.",
    image: `${BASE_PATH}/images/afebrio-kemendag1.jpg`,
    total: "05",
  },
  {
    num: "02",
    role: "Data Management & Operations Intern",
    company: "PT Telekomunikasi Indonesia (Persero) Tbk.",
    period: "Jun 2024 – Aug 2024",
    type: "Internship",
    desc: "Spearheaded critical data synchronization for the myDigiLearn platform and orchestrated high-level corporate visits as an Interactor at the Innovation Center.",
    image: `${BASE_PATH}/images/afebrio-hublusos2.jpg`,
    total: "05",
  },
  {
    num: "03",
    role: "Chairman",
    company: "HMTK, Telkom University",
    period: "Oct 2025 – Jan 2026",
    type: "Leadership",
    desc: "Led student engineering organization (HMTK) with hundreds of members. Oversaw strategic planning, events, and inter-departmental coordination.",
    image: `${BASE_PATH}/images/afebrio-kabinet.jpg`,
    total: "05",
  },
  {
    num: "04",
    role: "Lab Assistant & Vice Coordinator",
    company: "SEA Laboratory, Telkom University",
    period: "Jun 2024 – Jun 2025",
    type: "Academic",
    desc: "Co-managed laboratory operations, mentored junior members, and contributed to research in software engineering and AI applications.",
    image: `${BASE_PATH}/images/afebrio-standing.jpg`,
    total: "05",
  },
  {
    num: "05",
    role: "Lab Assistant",
    company: "i-Smile Laboratory, Telkom University",
    period: "Jun 2025 – May 2026",
    type: "Academic",
    desc: "Assisted in AI/ML lab sessions, guided students on practical experiments, and supervised research projects in intelligent systems.",
    image: `${BASE_PATH}/images/afebrio-wide.jpg`,
    total: "05",
  },
];

const inView = (i = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Experience() {
  return (
    <section id="experience" className="section-light">
      <div className="container">
        <div className={styles.topRow}>
          <div>
            <p className="section-label">Career</p>
            <h2 className={styles.title}>EXPERIENCE<br />&amp; LEADERSHIP</h2>
          </div>
          <p className={styles.intro}>
            From government data labs to student org leadership —<br />
            building real-world impact across roles.
          </p>
        </div>

        <div className={styles.list}>
          {experiences.map((exp, i) => (
            <motion.div key={exp.num} className={styles.item} {...inView(i * 0.05)}>
              <div className="dashed-line" />
              <div className={styles.itemInner}>
                {/* Left meta */}
                <div className={styles.metaCol}>
                  <span className={styles.num}>{exp.num} / {exp.total}</span>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                </div>

                {/* Center desc */}
                <p className={styles.desc}>{exp.desc}</p>

                {/* Right: type + arrow */}
                <div className={styles.rightCol}>
                  <span className={styles.type}>{exp.type}</span>
                  <span className={styles.period}>{exp.period}</span>
                </div>

                {/* Image */}
                <div className={styles.imgWrap}>
                  <img src={exp.image} alt={exp.company} className={styles.img} />
                </div>
              </div>
            </motion.div>
          ))}
          <div className="dashed-line" />
        </div>

        {/* Featured Video Asset Showcase */}
        <motion.div className={styles.videoCard} {...inView(0.3)}>
          <div className={styles.videoHeader}>
            <span className={styles.videoBadge}>VIDEO HIGHLIGHT ✦</span>
            <h3 className={styles.videoTitle}>Organization Speech & Ceremony Leadership</h3>
          </div>
          <div className={styles.videoContainer}>
            <video
              src={`${BASE_PATH}/videos/pidato_leadership.mp4`}
              autoPlay
              loop
              muted
              playsInline
              controls
              className={styles.videoElement}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
