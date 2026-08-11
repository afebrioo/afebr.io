"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import styles from "./Contact.module.css";

const socials = [
  { href: "https://github.com/afebrioo",   Icon: FaGithub,     label: "GitHub",    handle: "afebrioo",  id: "contact-github" },
  { href: "https://linkedin.com/in/afebrioo", Icon: FaLinkedinIn, label: "LinkedIn",  handle: "afebrioo",  id: "contact-linkedin" },
  { href: "https://instagram.com/afebrioo", Icon: FaInstagram,  label: "Instagram", handle: "@afebrioo", id: "contact-instagram" },
];

const inView = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Contact() {
  return (
    <section id="contact" className="section-light">
      <div className="container">
        {/* Big CTA heading */}
        <motion.div className={styles.ctaBlock} {...inView(0)}>
          <p className="section-label" style={{ marginBottom: 24 }}>Get in Touch</p>
          <h2 className={styles.ctaHeading}>LET&apos;S WORK<br />TOGETHER.</h2>
        </motion.div>

        {/* Divider */}
        <div className="dashed-line" style={{ margin: "56px 0" }} />

        {/* Bottom row: email + socials */}
        <motion.div className={styles.bottomRow} {...inView(0.1)}>
          {/* Email */}
          <div className={styles.emailBlock}>
            <p className="section-label" style={{ marginBottom: 12 }}>Email</p>
            <a
              href="mailto:rahmandaafebrioyuris@gmail.com"
              className={styles.emailLink}
              id="contact-email-link"
            >
              rahmandaafebrioyuris<br />@gmail.com
            </a>
          </div>

          {/* Socials list */}
          <div className={styles.socialsBlock}>
            <p className="section-label" style={{ marginBottom: 12 }}>Socials</p>
            <div className={styles.socialsList}>
              {socials.map(({ href, Icon, label, handle, id }) => (
                <a key={id} href={href} target="_blank" rel="noopener noreferrer" className={styles.socialItem} id={id}>
                  <span className={styles.socialLabel}>
                    <Icon size={14} />
                    {label}
                  </span>
                  <span className={styles.socialHandle}>{handle} ↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Location + availability */}
          <div className={styles.locationBlock}>
            <p className="section-label" style={{ marginBottom: 12 }}>Based In</p>
            <p className={styles.location}>Bandung,<br />Indonesia</p>
            <p className={styles.availability}>
              <span className={styles.availDot} />
              Open to opportunities Aug 2026+
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <div className="container">
          <div className={styles.footerInner}>
            <p className={styles.footerBrand}>afebrio<span>.</span></p>
            <p className={styles.footerStack}>Built with Next.js · FastAPI · LangGraph</p>
            <p className={styles.footerCopy}>© {new Date().getFullYear()} Rahmanda Afebrio</p>
          </div>
        </div>
      </div>
    </section>
  );
}
