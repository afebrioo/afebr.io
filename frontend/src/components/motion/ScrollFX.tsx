"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/** Returns true once the intro sequence has finished (or immediately if skipped / absent). */
export function useIntroDone() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    if ((window as unknown as { __introDone?: boolean }).__introDone) { setDone(true); return; }
    const on = () => setDone(true);
    window.addEventListener("intro-done", on);
    // Safety net — never leave content hidden
    const t = window.setTimeout(on, 9500);
    return () => { window.removeEventListener("intro-done", on); clearTimeout(t); };
  }, []);
  return done;
}

export default function ScrollFX() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
