"use client";

import { motion } from "framer-motion";
import styles from "./Connection.module.css";
import { mediaReveal } from "./motion/Reveal";

const BASE_PATH = "/afebr.io";

const photos = [
  {
    src: `${BASE_PATH}/images/connection-pembukaan.jpg`,
    alt: "CONNECTION Opening Ceremony",
    caption: "Opening Ceremony // Sukamaju",
  },
  {
    src: `${BASE_PATH}/images/connection-ramai.jpg`,
    alt: "CONNECTION Community Engagement",
    caption: "Community Engagement // Cihanjaro",
  },
];

const videos = [
  { src: `${BASE_PATH}/videos/byebyemenjauh.mp4`, title: "Field Departure & Farewell" },
  { src: `${BASE_PATH}/videos/briefing.mp4`, title: "Operational Briefing & Alignment" },
];

const inView = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Connection() {
  return (
    <section id="connection" className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div>
            <p className="sec-index" style={{ marginBottom: 12 }}>( 05 ) Community Service</p>
            <motion.h2 className={styles.title} {...inView(0)}>
              CONNECTION <span className={styles.titleAccent}>Initiative.</span>
            </motion.h2>
          </div>

          <div className={styles.sponsorBadge}>
            <span className={styles.sponsorLabel}>Supported by</span>
            <img
              src={`${BASE_PATH}/images/gojek-logo.svg`}
              alt="Gojek Logo"
              className={styles.sponsorLogo}
            />
          </div>
        </div>

        <div className="dashed-line" style={{ marginBottom: 48 }} />

        {/* Description */}
        <motion.div className={styles.descBlock} {...inView(0)}>
          <p className={styles.desc}>
            Led the coordination of a community service initiative involving{" "}
            <strong>30 lecturers</strong> from <strong>2 different faculties</strong> and{" "}
            <strong>68 students</strong> from the Computer Engineering Major at{" "}
            <span className={styles.highlightLoc}>Sukamaju Village</span> and{" "}
            <span className={styles.highlightLoc}>Cihanjaro Elementary School</span>. Responsible for
            overseeing planning, logistics, and execution to ensure impactful engagement and smooth
            collaboration between academic participants and community partners. As well successfully
            established a sponsorship collaboration with{" "}
            <strong className={styles.gojekHighlight}>GOJEK</strong>, one of Indonesia&apos;s top
            tech companies, to support the program&apos;s operational and promotional needs.
          </p>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>30</span>
              <span className={styles.statLabel}>Lecturers</span>
            </div>
            <div className={styles.statDiv} />
            <div className={styles.stat}>
              <span className={styles.statNum}>68</span>
              <span className={styles.statLabel}>Students</span>
            </div>
            <div className={styles.statDiv} />
            <div className={styles.stat}>
              <span className={styles.statNum}>2</span>
              <span className={styles.statLabel}>Faculties</span>
            </div>
            <div className={styles.statDiv} />
            <div className={styles.stat}>
              <span className={styles.statNum}>1</span>
              <span className={styles.statLabel}>Tech Sponsor</span>
            </div>
          </div>
        </motion.div>

        <div className="dashed-line" style={{ margin: "48px 0" }} />

        {/* Photo gallery (2 items) — strictly preserved */}
        <motion.div className={styles.photoGrid} {...inView(0.1)}>
          {photos.map((p, i) => (
            <motion.div key={i} className={styles.photoCard} {...inView(i * 0.08)}>
              <motion.div className={styles.photoWrap} {...mediaReveal(0.15 + i * 0.12)}>
                <img src={p.src} alt={p.alt} className={styles.photo} />
                <div className={styles.photoBadge}>{p.caption}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <div className="dashed-line" style={{ margin: "48px 0" }} />

        {/* Side-by-Side Flush Hero Videos — strictly preserved */}
        <div className={styles.heroVideoRow}>
          {videos.map((v, i) => (
            <motion.div key={i} className={styles.heroVideoCard} {...mediaReveal(0.1 + i * 0.12, i % 2 ? "right" : "left")}>
              <video
                src={v.src}
                autoPlay
                loop
                muted
                playsInline
                className={styles.heroVideoBg}
              />
              <div className={styles.heroVideoOverlay} />
              <div className={styles.videoLabel}>
                <span className={styles.recDot} />
                <span>{v.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
