"use client";

import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const skills = [
  {
    id: "python-java",
    name: "Python / Java",
    desc: "Core languages for data science, AI modeling, and enterprise backends.",
  },
  {
    id: "typescript-js",
    name: "TypeScript / JavaScript",
    desc: "Building scalable, type-safe, and high-performance web applications.",
  },
  {
    id: "nextjs-react",
    name: "Next.js / React.js",
    desc: "Modern frontend frameworks for interactive and dynamic user interfaces.",
  },
  {
    id: "sql-postgresql",
    name: "SQL / PostgreSQL",
    desc: "Advanced relational database management and complex query optimization.",
  },
  {
    id: "eda-data",
    name: "EDA / Data Cleaning",
    desc: "Exploratory data analysis, wrangling, and preparing datasets for modeling.",
  },
  {
    id: "tensorflow-keras",
    name: "TensorFlow / Keras",
    desc: "Deep learning model development, training, and production deployment.",
  },
  {
    id: "fastapi-langchain",
    name: "FastAPI / LangChain",
    desc: "High-performance AI APIs and LLM orchestration for agentic systems.",
  },
  {
    id: "yolo-opencv",
    name: "YOLOv8 / OpenCV",
    desc: "Real-time computer vision, object detection, and image processing pipelines.",
  },
  {
    id: "docker-linux",
    name: "Docker / Linux",
    desc: "Containerization, deployment pipelines, and server environment management.",
  },
  {
    id: "tableau-powerbi",
    name: "Tableau / Power BI",
    desc: "Business intelligence dashboards and data visualization for stakeholders.",
  },
];

const inView = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] as const },
});

const marqueeItems = [
  "SKILLS", "—", "MY SKILLS & TOOLS", "—",
  "SKILLS", "—", "MY SKILLS & TOOLS", "—",
  "SKILLS", "—", "MY SKILLS & TOOLS", "—",
  "SKILLS", "—", "MY SKILLS & TOOLS", "—",
];

export default function Skills() {
  return (
    <section id="skills" className="section-light">
      {/* Marquee header */}
      <div className={styles.marqueeWrap}>
        <div className="marquee-track" style={{ animationDuration: "18s" }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className={item === "—" ? "marquee-item-light marquee-sep-light" : "marquee-item-light"}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className={styles.header}>
          <p className="section-label">THESE ARE JUST MY MOST SIGNIFICANT SKILLS</p>
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
