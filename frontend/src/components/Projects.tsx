"use client";

import { motion } from "framer-motion";
import styles from "./Projects.module.css";

const BASE_PATH = "/afebr.io";

const projects = [
  {
    id: "sigigi",
    num: "01",
    name: "SIGIGI 2.0",
    role: "AI Engineer & Full-Stack Developer",
    tagline: "AI-Powered Dental Clinic Management System",
    description:
      "Full-stack clinic management platform with CNN-based X-ray diagnosis using EfficientNetB0 — achieving 91.18% accuracy. Built with Laravel, React, MySQL, FastAPI, and TensorFlow.",
    image: `${BASE_PATH}/images/sigigi-landing.png`,
    hasImage: true,
    tags: ["FastAPI", "TensorFlow", "CNN", "React", "Laravel"],
    github: "https://github.com/afebrioo",
    total: "06",
  },
  {
    id: "commodity-forecast",
    num: "02",
    name: "Commodity Forecasting",
    role: "Data Scientist · Kemendag RI Internship",
    tagline: "Multi-Model Price Forecasting for Government",
    description:
      "Multi-model price forecasting system using XGBoost, Random Forest, Prophet, and LSTM for Kementerian Perdagangan RI. Delivered interactive analytics dashboard for government stakeholders.",
    image: null,
    hasImage: false,
    tags: ["XGBoost", "Prophet", "LSTM", "Python"],
    github: null,
    total: "06",
  },
  {
    id: "bigdata-etl",
    num: "03",
    name: "Big Data Pipeline",
    role: "Data Engineer",
    tagline: "End-to-End Scalable ETL Architecture",
    description:
      "Scalable ETL & ELT pipeline processing large-scale datasets with interactive analytics dashboard and real-time monitoring capabilities.",
    image: null,
    hasImage: false,
    tags: ["ETL", "ELT", "Big Data", "Python", "Airflow"],
    github: "https://github.com/afebrioo",
    total: "06",
  },
  {
    id: "sysrec",
    num: "04",
    name: "Sysrec",
    role: "ML Researcher",
    tagline: "Export Potential Predictor with Random Forest",
    description:
      "Machine learning model to predict commodity export potential using Random Forest, with comprehensive EDA and feature engineering in Jupyter.",
    image: null,
    hasImage: false,
    tags: ["Random Forest", "Scikit-learn", "Jupyter", "EDA"],
    github: "https://github.com/afebrioo",
    total: "06",
  },
  {
    id: "traffic-sign",
    num: "05",
    name: "Traffic Sign Detector",
    role: "Computer Vision Engineer",
    tagline: "Real-Time Detection Using YOLOv8",
    description:
      "Real-time traffic sign detection and classification using YOLOv8 and OpenCV with live webcam feed support and edge deployment capability.",
    image: null,
    hasImage: false,
    tags: ["YOLOv8", "OpenCV", "Python", "Computer Vision"],
    github: "https://github.com/afebrioo",
    total: "06",
  },
  {
    id: "fuzzy-route",
    num: "06",
    name: "Fuzzy Route Estimator",
    role: "AI Systems Developer",
    tagline: "Intelligent Route Comfort System",
    description:
      "Fuzzy logic system estimating route comfort between Telkom University and Lembang based on traffic, weather, and road conditions.",
    image: null,
    hasImage: false,
    tags: ["Fuzzy Logic", "Python", "AI Systems"],
    github: "https://github.com/afebrioo",
    total: "06",
  },
];

const inView = (i = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Projects() {
  return (
    <section id="projects" className="section-dark">
      {/* Marquee header */}
      <div className="marquee-outer">
        <div className="marquee-track">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>
              <span className="marquee-item">SELECTED WORK</span>
              <span className="marquee-item marquee-sep">—</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container" style={{ paddingTop: "60px" }}>
        <div className={styles.header}>
          <p className="section-label-light">Portfolio</p>
          <a
            href="https://github.com/afebrioo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ color: "var(--text-light)", borderColor: "var(--border-dark)" }}
            id="projects-github"
          >
            View All ↗
          </a>
        </div>

        {/* Featured project (SIGIGI) — full width with image */}
        <motion.div className={styles.featured} id="project-sigigi" {...inView(0)}>
          <div className={styles.featuredImgWrap}>
            <img src={projects[0].image!} alt={projects[0].name} className={styles.featuredImg} />
          </div>
          <div className={styles.featuredMeta}>
            <div className={styles.featuredTop}>
              <span className={styles.num}>{projects[0].num} / {projects[0].total}</span>
              <span className={styles.role}>{projects[0].role}</span>
              {projects[0].github && (
                <a href={projects[0].github} target="_blank" rel="noopener noreferrer"
                   className={styles.arrowLink} aria-label="Open project">↗</a>
              )}
            </div>
            <div className="dashed-line-dark" style={{ margin: "12px 0" }} />
            <h3 className={styles.name}>{projects[0].name}</h3>
            <p className={styles.tagline}>{projects[0].tagline}</p>
            <div className={styles.tags}>
              {projects[0].tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="dashed-line-dark" style={{ margin: "40px 0" }} />

        {/* Remaining projects — text list style */}
        <div className={styles.list}>
          {projects.slice(1).map((p, i) => (
            <motion.div key={p.id} className={styles.listItem} id={`project-${p.id}`} {...inView((i + 1) * 0.06)}>
              <div className="dashed-line-dark" />
              <div className={styles.listInner}>
                <span className={styles.listNum}>{p.num} / {p.total}</span>
                <div className={styles.listMain}>
                  <h3 className={styles.listName}>{p.name}</h3>
                  <p className={styles.listTagline}>{p.tagline}</p>
                </div>
                <p className={styles.listDesc}>{p.description}</p>
                <div className={styles.listRight}>
                  <span className={styles.listRole}>{p.role}</span>
                  <div className={styles.listTags}>
                    {p.tags.map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                       className={styles.arrowLink} aria-label="Open project">↗</a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="dashed-line-dark" />
        </div>
      </div>
    </section>
  );
}
