"use client";

import { motion } from "framer-motion";
import { Mail, Send, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import styles from "./Contact.module.css";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.wrapper}>
          {/* Left Column */}
          <motion.div className={styles.left} {...fadeUp(0)}>
            <p className="eyebrow">get in touch</p>
            <h2 className="section-title" style={{ marginBottom: "20px" }}>
              Contact
            </h2>
            <h3 className={styles.cta}>
              Let&apos;s build something<br />
              <span className={styles.gradient}>intelligent together.</span>
            </h3>
            <p className={styles.ctaDesc}>
              I&apos;m open to full-time roles, freelance projects, research collaborations, or just a good conversation about AI and data.
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <MapPin size={15} className={styles.infoIcon} />
                <span>Bandung, Indonesia · Remote-friendly</span>
              </div>
              <a href="mailto:rahmandaafebrioyuris@gmail.com" className={styles.infoItem} id="contact-email-link">
                <Mail size={15} className={styles.infoIcon} />
                <span>rahmandaafebrioyuris@gmail.com</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div className={styles.right} {...fadeUp(0.12)}>
            <div className={styles.linkCards}>
              <a href="mailto:rahmandaafebrioyuris@gmail.com" className={`card ${styles.linkCard}`} id="contact-email-card">
                <div className={styles.linkIcon} style={{ color: "var(--blue-400)" }}>
                  <Mail size={20} />
                </div>
                <div>
                  <p className={styles.linkTitle}>Email</p>
                  <p className={styles.linkSub}>rahmandaafebrioyuris@gmail.com</p>
                </div>
                <Send size={12} className={styles.linkArrow} />
              </a>

              <a href="https://linkedin.com/in/afebrioo" target="_blank" rel="noopener noreferrer" className={`card ${styles.linkCard}`} id="contact-linkedin-card">
                <div className={styles.linkIcon} style={{ color: "var(--blue-400)" }}>
                  <FaLinkedinIn size={20} />
                </div>
                <div>
                  <p className={styles.linkTitle}>LinkedIn</p>
                  <p className={styles.linkSub}>linkedin.com/in/afebrioo</p>
                </div>
                <Send size={12} className={styles.linkArrow} />
              </a>

              <a href="https://instagram.com/afebrioo" target="_blank" rel="noopener noreferrer" className={`card ${styles.linkCard}`} id="contact-instagram-card">
                <div className={styles.linkIcon} style={{ color: "var(--blue-400)" }}>
                  <FaInstagram size={20} />
                </div>
                <div>
                  <p className={styles.linkTitle}>Instagram</p>
                  <p className={styles.linkSub}>instagram.com/afebrioo</p>
                </div>
                <Send size={12} className={styles.linkArrow} />
              </a>

              <a href="https://github.com/afebrioo" target="_blank" rel="noopener noreferrer" className={`card ${styles.linkCard}`} id="contact-github-card">
                <div className={styles.linkIcon} style={{ color: "var(--text-1)" }}>
                  <FaGithub size={20} />
                </div>
                <div>
                  <p className={styles.linkTitle}>GitHub</p>
                  <p className={styles.linkSub}>github.com/afebrioo</p>
                </div>
                <Send size={12} className={styles.linkArrow} />
              </a>
            </div>

            <div className={styles.availability}>
              <span className={styles.availDot} />
              <span>Available for opportunities starting August 2026</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <div className="container">
          <div className="divider" style={{ marginBottom: "28px" }} />
          <div className={styles.footerContent}>
            <p className={styles.footerBrand}>
              afebrio<span style={{ color: "var(--blue-500)" }}>.</span>
            </p>
            <p className={styles.footerText}>
              Built with Next.js · FastAPI · LangGraph
            </p>
            <p className={styles.footerCopy}>
              © {new Date().getFullYear()} afebrio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
