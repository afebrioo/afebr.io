"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import styles from "./TapeBand.module.css";

const wrap = (min: number, max: number, v: number) => {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
};

function VelocityRow({
  words,
  baseVelocity,
  variant,
}: {
  words: string[];
  baseVelocity: number;
  variant: "ink" | "cyan" | "blue" | "white";
}) {
  const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const v = useVelocity(scrollY);
  const smooth = useSpring(v, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [0, 1000], [0, 5], { clamp: false });
  const skew = useTransform(smooth, [-2000, 0, 2000], [6, 0, -6]);
  const dir = useRef(1);
  const tx = useTransform(x, (val) => `${wrap(-25, 0, val)}%`);

  useAnimationFrame((_, delta) => {
    let move = dir.current * baseVelocity * (delta / 1000);
    const f = factor.get();
    if (f < 0) dir.current = -1;
    else if (f > 0) dir.current = 1;
    move += dir.current * move * Math.abs(f);
    x.set(x.get() + move);
  });

  const seq = [...words, ...words];
  return (
    <div className={`${styles.row} ${styles[variant]}`}>
      <motion.div className={styles.track} style={{ x: tx, skewX: skew }}>
        {[0, 1, 2, 3].map((k) => (
          <span key={k} className={styles.chunk}>
            {seq.map((w, i) => (
              <span key={i} className={styles.item}>
                <span className={i % 2 ? styles.bold : styles.kinetic}>{w}</span>
                <span className={styles.star}>✦</span>
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/**
 * Two kinetic "tape" bands crossing each other — reacts to scroll velocity.
 * High-energy Showreel transition between sections.
 */
export default function TapeBand({
  top,
  bottom,
  tone = "light",
}: {
  top: string[];
  bottom: string[];
  tone?: "light" | "dark";
}) {
  return (
    <div className={`${styles.wrap} ${tone === "dark" ? styles.wrapDark : ""}`} aria-hidden="true">
      <div className={styles.tapeA}>
        <VelocityRow words={top} baseVelocity={-3} variant={tone === "dark" ? "cyan" : "ink"} />
      </div>
      <div className={styles.tapeB}>
        <VelocityRow words={bottom} baseVelocity={3} variant={tone === "dark" ? "blue" : "cyan"} />
      </div>
    </div>
  );
}
