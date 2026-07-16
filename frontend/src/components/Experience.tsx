"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import styles from "./Experience.module.css";

const experiences = [
  {
    role: "Laboratory Assistant",
    company: "i-Smile Laboratory",
    period: "Jun 2025 – May 2026",
    type: "Academic",
    desc: "Assisted in AI/ML lab sessions, guided students on practical experiments, and supervised research projects in intelligent systems.",
    tags: ["AI/ML", "Lab Instruction", "Research"],
  },
  {
    role: "Chairman",
    company: "HMTK, Telkom University",
    period: "Oct 2025 – Jan 2026",
    type: "Leadership",
    desc: "Led student engineering organization (HMTK) with hundreds of members. Oversaw strategic planning, events, and inter-departmental coordination.",
    tags: ["Leadership", "Management", "Strategy"],
  },
  {
    role: "Data Scientist Intern",
    company: "Kementerian Perdagangan RI",
    period: "Jun 2025 – Aug 2025",
    type: "Internship",
    desc: "Built commodity price forecasting models using XGBoost, Random Forest, Prophet, and LSTM. Delivered analytical dashboard for stakeholders.",
    tags: ["XGBoost", "Prophet", "LSTM", "Data Analysis"],
  },
  {
    role: "Lab Assistant & Vice Coordinator",
    company: "SEA Laboratory",
    period: "Jun 2024 – Jun 2025",
    type: "Academic",
    desc: "Co-managed laboratory operations, mentored junior members, and contributed to research in software engineering and AI applications.",
    tags: ["Mentoring", "Research", "Operations"],
  },
  {
    role: "Head of Study Group",
    company: "SEA Laboratory",
    period: "Nov 2024 – Dec 2024",
    type: "Academic",
    desc: "Led focused study group sessions on AI/ML topics, organized workshops, and curated learning resources for laboratory members.",
    tags: ["Study Group", "Workshop", "AI/ML"],
  },
  {
    role: "Member, External Department",
    company: "HMTK, Telkom University",
    period: "Dec 2024 – Oct 2025",
    type: "Organization",
    desc: "Coordinated external relations, managed partnerships with companies, and represented the organization at inter-university events.",
    tags: ["External Relations", "Partnerships"],
  },
];

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.p className="eyebrow" {...fadeUp(0)}>career</motion.p>
        <motion.h2 className="section-title" {...fadeUp(0.05)}>Experience</motion.h2>

        <div className={styles.timeline}>
          <div className={styles.line} />

          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.role}-${i}`}
              className={styles.item}
              {...fadeUp(i * 0.08)}
            >
              {/* Dot */}
              <div className={styles.dot} />

              <div className={`card ${styles.card}`}>
                <div className={styles.cardHeader}>
                  <span className="badge badge-blue">
                    <Briefcase size={10} />
                    {exp.type}
                  </span>
                  <span className={styles.period}>
                    <Calendar size={11} />
                    {exp.period}
                  </span>
                </div>

                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.company}>{exp.company}</p>
                <p className={styles.desc}>{exp.desc}</p>

                <div className={styles.tags}>
                  {exp.tags.map((t) => (
                    <span key={t} className="badge badge-subtle">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
