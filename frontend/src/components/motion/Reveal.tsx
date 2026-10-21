"use client";

import { motion } from "framer-motion";
import type { ReactNode, CSSProperties, ElementType } from "react";

export const EASE = [0.76, 0, 0.24, 1] as const;   // snappy "motion designer" in-out
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

/**
 * RevealLines — smooth staggered rise without overflow-clipping so text is never cut off.
 */
export function RevealLines({
  lines,
  as = "h2",
  className,
  style,
  delay = 0,
  stagger = 0.09,
  id,
}: {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  stagger?: number;
  id?: string;
}) {
  const Tag = as;
  return (
    <Tag className={className} style={style} id={id}>
      {lines.map((line, i) => (
        <motion.span
          key={i}
          style={{ display: "block" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.65, delay: delay + i * stagger, ease: EASE_OUT }}
        >
          {line}
        </motion.span>
      ))}
    </Tag>
  );
}

/**
 * Split characters with a staggered rise — used for short, punchy words.
 */
export function RevealChars({
  text,
  className,
  delay = 0,
  stagger = 0.03,
  animateOnMount = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  animateOnMount?: boolean;
}) {
  const trigger = animateOnMount
    ? { animate: { y: "0%", opacity: 1 } }
    : { whileInView: { y: "0%", opacity: 1 }, viewport: { once: true, amount: 0.1 } };
  return (
    <span className={className} aria-label={text} style={{ display: "inline-block" }}>
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          style={{ display: "inline-block", whiteSpace: "pre" }}
          initial={{ opacity: 0, y: 14 }}
          {...trigger}
          transition={{ duration: 0.6, delay: delay + i * stagger, ease: EASE_OUT }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}

/**
 * Props for a media container: safe fade-in without clip-path so assets are NEVER hidden or clipped.
 */
export const mediaReveal = (i = 0, _dir?: "up" | "left" | "right") => {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.05 },
    transition: { duration: 0.7, delay: i, ease: EASE_OUT },
  };
};

/** Standard fade-rise used for body copy. */
export const rise = (i = 0, y = 24) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.7, delay: i, ease: EASE_OUT },
});

