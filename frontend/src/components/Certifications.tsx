"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import styles from "./Certifications.module.css";

const BASE_PATH = "/afebr.io";

const certs = [
  { id: "ibm-data",       title: "Getting Started with Data",           issuer: "IBM",              date: "Jul 2026", link: "https://linkedin.com/in/afebrioo", category: "Data Science" },
  { id: "nvidia-dl",      title: "Fundamentals of Deep Learning",       issuer: "NVIDIA",           date: "Oct 2025", link: "https://linkedin.com/in/afebrioo", category: "Deep Learning" },
  { id: "dicoding-viz",   title: "Belajar Dasar Visualisasi Data",      issuer: "Dicoding",         date: "Feb 2025", link: "https://linkedin.com/in/afebrioo", category: "Data Viz" },
  { id: "telkom-english", title: "English Communicative Competence",    issuer: "Telkom University", date: "Oct 2025", link: "https://linkedin.com/in/afebrioo", category: "Communication" },
];

const volunteering = [
  {
    id: "vol-president",
    num: "01",
    role: "President",
    org: "CONNECTION HMTK Telkom University",
    image: `${BASE_PATH}/images/afebrio-kabinet.jpg`,
    desc: "Led community service program with 30 lecturers & 68 students. Collaborated with GOJEK for sponsorship.",
    total: "04",
  },
  {
    id: "vol-event",
    num: "02",
    role: "Event Director",
    org: "CONNECTION HMTK",
    image: `${BASE_PATH}/images/afebrio-keynote.jpg`,
    desc: "Coordinated team of 60+ volunteers for a large-scale university event from planning to execution.",
    total: "04",
  },
  {
    id: "vol-orientation",
    num: "03",
    role: "Seminar Presenter",
    org: "Technology-Driven Education Innovation",
    image: `${BASE_PATH}/images/afebrio-wide.jpg`,
    desc: "Empowering educators in rural elementary schools with AI and modern data processing tools.",
    total: "04",
  },
  {
    id: "vol-logistics",
    num: "04",
    role: "Logistics Officer",
    org: "Telkom University PKKMB",
    image: `${BASE_PATH}/images/afebrio-speech.jpg`,
    desc: "Managed logistics and resource allocation for university-wide orientation activities.",
    total: "04",
  },
];

const inView = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Certifications() {
  return (
    <>
      {/* Certifications */}
      <section id="certifications" className="section-light">
        <div className="container">
          <p className="section-label" style={{ marginBottom: 14 }}>Credentials</p>
          <h2 className={styles.secTitle}>Certifications</h2>

          <div className={styles.certGrid}>
            {certs.map((cert, i) => (
              <motion.a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certCard}
                id={`cert-${cert.id}`}
                {...inView(i * 0.08)}
              >
                <div className={styles.certTop}>
                  <span className={styles.certCategory}>{cert.category}</span>
                  <ExternalLink size={13} className={styles.certArrow} />
                </div>
                <div className="dashed-line" style={{ margin: "14px 0" }} />
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <div className={styles.certBottom}>
                  <span className={styles.certIssuer}>{cert.issuer}</span>
                  <span className={styles.certDate}>{cert.date}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Volunteering */}
      <section id="volunteering" className="section-alt">
        <div className="container">
          <p className="section-label" style={{ marginBottom: 14 }}>Community</p>
          <h2 className={styles.secTitle}>Volunteering &amp; <em>Leadership</em></h2>

          <div className={styles.volGrid}>
            {volunteering.map((v, i) => (
              <motion.div key={v.id} className={styles.volCard} id={`vol-${v.id}`} {...inView(i * 0.08)}>
                <div className={styles.volImgWrap}>
                  <img src={v.image} alt={v.org} className={styles.volImg} />
                </div>
                <div className={styles.volMeta}>
                  <div className={styles.volTop}>
                    <span className={styles.volNum}>{v.num} / {v.total}</span>
                    <span className={styles.volRole}>{v.role}</span>
                  </div>
                  <p className={styles.volOrg}>{v.org}</p>
                  <p className={styles.volDesc}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Keynote video */}
          <motion.div className={styles.videoCard} {...inView(0.4)}>
            <div className={styles.videoMeta}>
              <span className="section-label">Video Highlight</span>
              <h3 className={styles.videoTitle}>Keynote Speech &amp; Public Relations Closing</h3>
              <p className={styles.videoSub}>Recorded during CONNECTION HMTK annual event</p>
            </div>
            <div className={styles.videoWrap}>
              <video
                src={`${BASE_PATH}/videos/keynote_speech.mp4`}
                controls
                playsInline
                muted
                className={styles.video}
                poster={`${BASE_PATH}/images/afebrio-keynote.jpg`}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
