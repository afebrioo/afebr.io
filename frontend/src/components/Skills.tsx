"use client";

import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const skills = [
  { id: "python-java",      name: "Python / Java",           desc: "Core languages for data science, AI modeling, and enterprise backends." },
  { id: "typescript-js",   name: "TypeScript / JavaScript",  desc: "Building scalable, type-safe, and high-performance web applications." },
  { id: "nextjs-react",    name: "Next.js / React",          desc: "Modern frontend frameworks for interactive and dynamic user interfaces." },
  { id: "sql-postgresql",  name: "SQL / PostgreSQL",         desc: "Advanced relational database management and complex query optimization." },
  { id: "eda-data",        name: "EDA / Data Cleaning",      desc: "Exploratory data analysis, wrangling, and preparing datasets for modeling." },
  { id: "tensorflow-keras",name: "TensorFlow / Keras",       desc: "Deep learning model development, training, and production deployment." },
  { id: "fastapi-langchain",name: "FastAPI / LangChain",     desc: "High-performance AI APIs and LLM orchestration for agentic systems." },
  { id: "yolo-opencv",     name: "YOLOv8 / OpenCV",          desc: "Real-time computer vision, object detection, and image processing." },
  { id: "docker-linux",    name: "Docker / Linux",           desc: "Containerization, deployment pipelines, and server environment management." },
  { id: "tableau-powerbi", name: "Tableau / Power BI",       desc: "Business intelligence dashboards and data visualization for stakeholders." },
];

const inView = (i = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Skills() {
  return (
    <section id="skills" className="section-alt">
      {/* Marquee strip */}
      <div className={styles.marqueeWrap}>
        <div className="marquee-track" style={{ animationDuration: "22s" }}>
          {[...Array(8)].map((_, i) => (
            <span key={i}>
              <span className="marquee-item">Skills &amp; Tools</span>
              <span className="marquee-sep"> · </span>
            </span>
          ))}
        </div>
      </div>

      <div className="container" style={{ paddingTop: 56 }}>
        <div className={styles.header}>
          <p className="section-label" style={{ marginBottom: 8 }}>Capabilities</p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
            letterSpacing: "-0.02em",
            color: "var(--text-1)",
          }}>
            My top skills
          </h2>
        </div>

        <div className={styles.grid}>
          {skills.map((skill, i) => (
            <motion.div key={skill.id} className={styles.card} id={`skill-${skill.id}`} {...inView(i * 0.04)}>
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
