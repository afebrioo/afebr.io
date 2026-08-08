"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import styles from "./Certifications.module.css";

const certs = [
  {
    id: "ibm-data",
    title: "Getting Started with Data",
    issuer: "IBM",
    date: "Jul 2026",
    link: "https://linkedin.com/in/afebrioo",
  },
  {
    id: "nvidia-dl",
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "Oct 2025",
    link: "https://linkedin.com/in/afebrioo",
  },
  {
    id: "dicoding-viz",
    title: "Belajar Dasar Visualisasi Data",
    issuer: "Dicoding",
    date: "Feb 2025",
    link: "https://linkedin.com/in/afebrioo",
  },
  {
    id: "telkom-english",
    title: "English Communicative Competence Test",
    issuer: "Telkom University",
    date: "Oct 2025",
    link: "https://linkedin.com/in/afebrioo",
  },
];

const volunteering = [
  {
    id: "vol-president",
    role: "President",
    org: "CONNECTION HMTK Telkom University",
    desc: "Led a community service program with 30 lecturers + 68 students. Collaborated with GOJEK for sponsorship and event production.",
    icon: "🏛️",
  },
  {
    id: "vol-event",
    role: "Event Staff",
    org: "CONNECTION HMTK",
    desc: "Coordinated a team of 60+ volunteers for a large-scale university event.",
    icon: "🎪",
  },
  {
    id: "vol-orientation",
    role: "Student Orientation Liaison",
    org: "Telkom University",
    desc: "Guided incoming freshmen through orientation programs and campus integration.",
    icon: "🎓",
  },
  {
    id: "vol-logistics",
    role: "Logistics Officer",
    org: "Telkom University PKKMB",
    desc: "Managed logistics and resource allocation for university-wide orientation activities.",
    icon: "📦",
  },
];

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
});

const BASE_PATH = "/afebr.io";

export default function Certifications() {
  return (
    <>
      {/* Certifications */}
      <section id="certifications" className="section">
        <div className="container">
          <motion.p className="eyebrow" {...fadeUp(0)}>credentials</motion.p>
          <motion.h2 className="section-title" {...fadeUp(0.05)}>Certifications</motion.h2>

          <div className={styles.certGrid}>
            {certs.map((cert, i) => (
              <motion.a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`card ${styles.certCard}`}
                id={`cert-${cert.id}`}
                {...fadeUp(i * 0.08)}
              >
                <div className={styles.certIcon}>
                  <Award size={20} />
                </div>
                <div className={styles.certBody}>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                  <h3 className={styles.certTitle}>{cert.title}</h3>
                  <p className={styles.certDate}>{cert.date}</p>
                </div>
                <ExternalLink size={13} className={styles.certExternal} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering */}
      <section id="volunteering" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.p className="eyebrow" {...fadeUp(0)}>community</motion.p>
          <motion.h2 className="section-title" {...fadeUp(0.05)}>Volunteering & Community</motion.h2>

          <div className={styles.volGrid}>
            {volunteering.map((v, i) => (
              <motion.div
                key={v.id}
                className={`card ${styles.volCard}`}
                id={`vol-${v.id}`}
                {...fadeUp(i * 0.08)}
              >
                <div className={styles.volIcon}>{v.icon}</div>
                <div>
                  <h3 className={styles.volRole}>{v.role}</h3>
                  <p className={styles.volOrg}>{v.org}</p>
                  <p className={styles.volDesc}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Community Outreach Photo */}
          <motion.div className={styles.volBanner} {...fadeUp(0.3)}>
            <img
              src={`${BASE_PATH}/images/afebrio-hublusos.jpg`}
              alt="Community Service & External Relations"
              className={styles.bannerImg}
            />
            <div className={styles.bannerOverlay}>
              <span className={styles.bannerTag}>Public Relations & Community Service</span>
              <p className={styles.bannerTitle}>Directing Community Service & External Relations at Telkom University</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
