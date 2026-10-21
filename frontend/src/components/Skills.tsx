"use client";

import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const skills = [

  { id: "python-java",       name: "Python / Java",           desc: "Core languages for data science, AI modeling, and enterprise backends." },
  { id: "typescript-js",    name: "TypeScript / JavaScript",  desc: "Building scalable, type-safe, and high-performance web applications." },
  { id: "nextjs-react",     name: "Next.js / React",          desc: "Modern frontend frameworks for interactive and dynamic user interfaces." },
  { id: "sql-postgresql",   name: "SQL / PostgreSQL",         desc: "Advanced relational database management and complex query optimization." },
  { id: "eda-data",         name: "EDA / Data Cleaning",      desc: "Exploratory data analysis, wrangling, and preparing datasets for modeling." },
  { id: "tensorflow-keras", name: "TensorFlow / Keras",       desc: "Deep learning model development, training, and production deployment." },
  { id: "fastapi-langchain", name: "FastAPI / LangChain",     desc: "High-performance AI APIs and LLM orchestration for agentic systems." },
  { id: "yolo-opencv",      name: "YOLOv8 / OpenCV",          desc: "Real-time computer vision, object detection, and image processing." },
  { id: "docker-linux",     name: "Docker / Linux",           desc: "Containerization, deployment pipelines, and server environment management." },
  { id: "tableau-powerbi",  name: "Tableau / Power BI",       desc: "Business intelligence dashboards and data visualization for stakeholders." },
];

const inView = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.6, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Skills() {
  return (
    <section id="skills" className="section-alt">
      {/* Marquee strip */}
      <div className={styles.marqueeWrap}>
        <div className="marquee-track" style={{ animationDuration: "20s" }}>
          {[...Array(8)].map((_, i) => (
            <span key={i} className={styles.marqueePair}>
              <span className={styles.marqueeText}>CAPABILITIES // TOOLKIT</span>
              <span className={styles.marqueeSep}>✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container" style={{ paddingTop: 64 }}>
        <div className={styles.header}>
          <p className="sec-index" style={{ marginBottom: 12 }}>( 03 ) Capabilities</p>
          <motion.h2 className={styles.title} {...inView(0)}>
            Technical <span className={styles.titleAccent}>Toolkit.</span>
          </motion.h2>
        </div>


        <div className={styles.grid}>
          {skills.map((skill, i) => (
            <motion.div key={skill.id} className={styles.card} id={`skill-${skill.id}`} {...inView(i * 0.03)}>
              <span className={styles.skillIdx}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <p className={styles.skillDesc}>{skill.desc}</p>
              <div className={styles.cardLine} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
