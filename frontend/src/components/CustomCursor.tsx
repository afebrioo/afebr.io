"use client";

import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      ringRef.current?.classList.add(styles.enlarged);
    };
    const onLeaveLink = () => {
      ringRef.current?.classList.remove(styles.enlarged);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(animate);

    const addHover = () => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", onEnterLink);
        el.addEventListener("mouseleave", onLeaveLink);
      });
    };

    addHover();
    const obs = new MutationObserver(addHover);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  );
}
