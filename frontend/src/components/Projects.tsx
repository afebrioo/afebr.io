"use client";

import { motion } from "framer-motion";
import styles from "./Projects.module.css";

const BASE_PATH = "/afebr.io";

const projects = [
  {
    id: "sigigi",
    num: "01",
    name: "SIGIGI 2.0",
    role: "AI Engineer & Full-Stack Dev",
    tagline: "AI-Powered Dental Clinic Management",
    description:
      "Full-stack clinic platform with CNN-based X-ray diagnosis using EfficientNetB0 — 91.18% accuracy. Built with Laravel, React, MySQL, FastAPI, and TensorFlow.",
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
    role: "Data Scientist · Kemendag RI",
    tagline: "Multi-Model Price Forecasting",
    description:
      "Price forecasting system using XGBoost, Random Forest, Prophet, and LSTM for Kementerian Perdagangan RI. Interactive analytics dashboard for government stakeholders.",
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
    tagline: "Export Potential Predictor",
    description:
      "Machine learning model predicting commodity export potential using Random Forest, with comprehensive EDA and feature engineering.",
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
    tagline: "Real-Time Detection — YOLOv8",
    description:
      "Real-time traffic sign detection and classification using YOLOv8 and OpenCV with live webcam feed support and edge deployment.",
    image: null,
    hasImage: false,
    tags: ["YOLOv8", "OpenCV", "Python", "CV"],
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
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Projects() {
  return (
    <section id="projects" className="section-light">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div>
            <p className="section-label" style={{ marginBottom: 12 }}>Portfolio</p>
            <h2 className={styles.title}>Selected<br /><em>Work</em></h2>
          </div>
          <a
            href="https://github.com/afebrioo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            id="projects-github"
          >
            View All on GitHub ↗
          </a>
        </div>

        {/* Featured project */}
        <motion.div className={styles.featured} id="project-sigigi" {...inView(0)}>
          <div className={styles.featuredImg}>
            <img src={projects[0].image!} alt={projects[0].name} className={styles.featuredImgEl} />
          </div>
          <div className={styles.featuredMeta}>
            <div className={styles.featuredTop}>
              <span className={styles.featNum}>{projects[0].num} / {projects[0].total}</span>
              <span className={styles.featRole}>{projects[0].role}</span>
              {projects[0].github && (
                <a href={projects[0].github} target="_blank" rel="noopener noreferrer"
                   className={styles.arrowLink} aria-label="Open project">↗</a>
              )}
            </div>
            <h3 className={styles.featName}>{projects[0].name}</h3>
            <p className={styles.featTagline}>{projects[0].tagline}</p>
            <p className={styles.featDesc}>{projects[0].description}</p>
            <div className={styles.tags}>
              {projects[0].tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="dashed-line" style={{ margin: "48px 0" }} />

        {/* Remaining projects */}
        <div className={styles.list}>
          {projects.slice(1).map((p, i) => (
            <motion.div
              key={p.id}
              className={styles.listItem}
              id={`project-${p.id}`}
              {...inView((i + 1) * 0.07)}
            >
              <div className="dashed-line" />
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
          <div className="dashed-line" />
        </div>
      </div>
    </section>
  );
}
