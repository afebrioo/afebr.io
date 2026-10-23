"use client";

import { motion } from "framer-motion";
import styles from "./QuoteSection.module.css";


export default function QuoteSection() {
  return (
    <section className={styles.section} aria-label="Personal Philosophy">
      <div className={styles.glow} />
      <div className={styles.container}>
        <motion.blockquote
          className={styles.quoteText}
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.firstLine}>&ldquo;I don&apos;t stop when i&apos;m tired.</span>
          <span className={styles.highlight}>I&apos;ll stop when i&apos;m done.&rdquo;</span>
        </motion.blockquote>

        <motion.div
          className={styles.line}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </section>
  );
}
