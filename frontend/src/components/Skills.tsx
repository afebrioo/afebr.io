"use client";

import { motion } from "framer-motion";
import {
  SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv,
  SiPandas, SiNumpy, SiStreamlit, SiMysql,
  SiReact, SiNextdotjs, SiFastapi, SiLaravel,
  SiGit, SiJupyter, SiDocker, SiLinux,
} from "react-icons/si";
import { BarChart2 } from "lucide-react";
import styles from "./Skills.module.css";

const categories = [
  {
    name: "AI / Machine Learning",
    skills: [
      { name: "Python",      icon: SiPython,      level: 95 },
      { name: "TensorFlow",  icon: SiTensorflow,  level: 85 },
      { name: "PyTorch",     icon: SiPytorch,     level: 75 },
      { name: "Scikit-learn",icon: SiScikitlearn, level: 88 },
      { name: "OpenCV",      icon: SiOpencv,      level: 80 },
    ],
  },
  {
    name: "Data Science",
    skills: [
      { name: "Pandas",    icon: SiPandas,    level: 92 },
      { name: "NumPy",     icon: SiNumpy,     level: 90 },
      { name: "Power BI",  icon: BarChart2,   level: 78 },
      { name: "Streamlit", icon: SiStreamlit, level: 82 },
      { name: "MySQL",     icon: SiMysql,     level: 80 },
    ],
  },
  {
    name: "Web / Backend",
    skills: [
      { name: "React",   icon: SiReact,     level: 82 },
      { name: "Next.js", icon: SiNextdotjs, level: 78 },
      { name: "FastAPI", icon: SiFastapi,   level: 85 },
      { name: "Laravel", icon: SiLaravel,   level: 75 },
    ],
  },
  {
    name: "Tools & Infra",
    skills: [
      { name: "Git",     icon: SiGit,     level: 90 },
      { name: "Jupyter", icon: SiJupyter, level: 93 },
      { name: "Docker",  icon: SiDocker,  level: 65 },
      { name: "Linux",   icon: SiLinux,   level: 72 },
    ],
  },
];

const extras = ["XGBoost", "YOLOv8", "LSTM", "Prophet", "LangGraph", "LangChain", "ETL/ELT", "Big Data Analytics"];

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.p className="eyebrow" {...fadeUp(0)}>tech stack</motion.p>
        <motion.h2 className="section-title" {...fadeUp(0.05)}>Skills & Tools</motion.h2>

        <div className={styles.grid}>
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              className={`card ${styles.cat}`}
              {...fadeUp(ci * 0.1)}
            >
              <h3 className={styles.catName}>{cat.name}</h3>

              <ul className={styles.list}>
                {cat.skills.map(({ name, icon: Icon, level }, si) => (
                  <li key={name} className={styles.skill}>
                    <div className={styles.skillRow}>
                      <span className={styles.skillIcon}><Icon size={15} /></span>
                      <span className={styles.skillName}>{name}</span>
                      <span className={styles.skillPct}>{level}%</span>
                    </div>
                    {/* GPU-optimized: scaleX instead of width */}
                    <div className={styles.bar}>
                      <motion.div
                        className={styles.fill}
                        style={{ transformOrigin: "left", width: `${level}%` }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 1.1, delay: si * 0.06 + ci * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div className={styles.extras} {...fadeUp(0.4)}>
          <span className={styles.extrasLabel}>Also working with</span>
          <div className={styles.extrasList}>
            {extras.map((t) => (
              <span key={t} className="badge badge-subtle">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
