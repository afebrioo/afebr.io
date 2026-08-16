"use client";

import { motion } from "framer-motion";
import styles from "./Connection.module.css";

const BASE_PATH = "/afebr.io";

const photos = [
  {
    src: `${BASE_PATH}/images/connection-pembukaan.jpg`,
    alt: "CONNECTION Opening Ceremony",
    caption: "Opening Ceremony",
  },
  {
    src: `${BASE_PATH}/images/connection-ramai.jpg`,
    alt: "CONNECTION Community Engagement",
    caption: "Community Engagement",
  },
];

const videos = [
  { src: `${BASE_PATH}/videos/byebyemenjauh.mp4` },
  { src: `${BASE_PATH}/videos/briefing.mp4` },
];

const inView = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Connection() {
  return (
    <section id="connection" className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div>
            <p className="section-label" style={{ marginBottom: 12 }}>Community Service</p>
            <h2 className={styles.title}>CONNECTION<br /><em>Program</em></h2>
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
            <em>Sukamaju Village</em> and <em>Cihanjaro Elementary School</em>. Responsible for
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
              <span className={styles.statLabel}>Sponsor</span>
            </div>
          </div>
        </motion.div>

        <div className="dashed-line" style={{ margin: "48px 0" }} />

        {/* Photo gallery (2 items) */}
        <motion.div className={styles.photoGrid} {...inView(0.1)}>
          {photos.map((p, i) => (
            <motion.div key={i} className={styles.photoCard} {...inView(i * 0.08)}>
              <div className={styles.photoWrap}>
                <img src={p.src} alt={p.alt} className={styles.photo} />
              </div>
              <span className={styles.photoCaption}>{p.caption}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="dashed-line" style={{ margin: "48px 0" }} />

        {/* Side-by-Side Flush Hero Videos (1 | 2 Mentok Kiri Kanan, No Gap) */}
        <div className={styles.heroVideoRow}>
          {videos.map((v, i) => (
            <motion.div key={i} className={styles.heroVideoCard} {...inView(0.2 + i * 0.1)}>
              <video
                src={v.src}
                autoPlay
                loop
                muted
                playsInline
                className={styles.heroVideoBg}
              />
              <div className={styles.heroVideoOverlay} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
