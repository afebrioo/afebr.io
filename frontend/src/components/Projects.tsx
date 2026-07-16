"use client";

import { motion } from "framer-motion";
import { ExternalLink, Tag } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import styles from "./Projects.module.css";

const projects = [
  {
    id: "sigigi",
    name: "SIGIGI 2.0",
    tagline: "AI-Powered Dental Clinic Management",
    description:
      "Full-stack clinic system with CNN-based X-ray diagnosis using EfficientNetB0 — achieving 91.18% accuracy. Built with Laravel, React, MySQL, FastAPI, and TensorFlow.",
    tags: ["FastAPI", "TensorFlow", "CNN", "React", "Laravel"],
    badge: "91.18% Accuracy",
    github: "https://github.com/afebrioo",
    featured: true,
  },
  {
    id: "commodity-forecast",
    name: "Commodity Forecasting",
    tagline: "Kementerian Perdagangan RI Internship",
    description:
      "Multi-model price forecasting using XGBoost, Random Forest, Prophet, and LSTM. Delivered analytics dashboard for government stakeholders.",
    tags: ["XGBoost", "Prophet", "LSTM", "Python"],
    badge: "Gov. Internship",
    github: null,
    featured: false,
  },
  {
    id: "bigdata-etl",
    name: "Big Data Pipeline",
    tagline: "End-to-End Data Engineering",
    description:
      "Scalable ETL & ELT pipeline processing large-scale datasets with interactive analytics dashboard.",
    tags: ["ETL", "ELT", "Big Data", "Python"],
    badge: "Data Eng.",
    github: "https://github.com/afebrioo",
    featured: false,
  },
  {
    id: "sysrec",
    name: "Sysrec",
    tagline: "Export Potential Predictor",
    description:
      "Random Forest model to predict commodity export potential, with comprehensive EDA and feature engineering in Jupyter.",
    tags: ["Random Forest", "Scikit-learn", "Jupyter"],
    badge: "ML Research",
    github: "https://github.com/afebrioo",
    featured: false,
  },
  {
    id: "traffic-sign",
    name: "Traffic Sign Detector",
    tagline: "Real-Time Computer Vision",
    description:
      "Real-time traffic sign detection and classification using YOLOv8 and OpenCV with live webcam feed support.",
    tags: ["YOLOv8", "OpenCV", "Python"],
    badge: "Vision AI",
    github: "https://github.com/afebrioo",
    featured: false,
  },
  {
    id: "fuzzy-route",
    name: "Fuzzy Route Estimator",
    tagline: "Intelligent Route Comfort System",
    description:
      "Fuzzy logic system estimating route comfort between Telkom University and Lembang based on traffic, weather, and road conditions.",
    tags: ["Fuzzy Logic", "Python"],
    badge: "AI Systems",
    github: "https://github.com/afebrioo",
    featured: false,
  },
];

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
});

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.p className="eyebrow" {...fadeUp(0)}>portfolio</motion.p>
        <motion.h2 className="section-title" {...fadeUp(0.05)}>Featured Projects</motion.h2>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              className={`card ${styles.card} ${p.featured ? styles.featured : ""}`}
              id={`project-${p.id}`}
              {...fadeUp(i * 0.07)}
            >
              <div className={styles.top}>
                <span className={styles.badge}>
                  <Tag size={9} /> {p.badge}
                </span>
                <div className={styles.links}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                       className={styles.iconLink} aria-label="GitHub">
                      <FaGithub size={14} />
                    </a>
                  )}
                  <a href={p.github || "#"} target="_blank" rel="noopener noreferrer"
                     className={styles.iconLink} aria-label="External">
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.tagline}>{p.tagline}</p>
              <p className={styles.desc}>{p.description}</p>

              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className="badge badge-subtle">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className={styles.more} {...fadeUp(0.5)}>
          <a href="https://github.com/afebrioo" target="_blank" rel="noopener noreferrer"
             className="btn btn-outline" id="projects-github">
            <FaGithub size={15} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
