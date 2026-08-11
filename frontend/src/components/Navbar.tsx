"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import styles from "./Navbar.module.css";

const links = [
  { href: "#about",    label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills",   label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact",  label: "Contact" },
];

const BASE_PATH = "/afebr.io";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`} role="navigation" aria-label="Main navigation">
        {/* Left: avatar + name */}
        <a href="#hero" className={styles.brand} id="nav-brand" onClick={close}>
          <img
            src={`${BASE_PATH}/images/afebrio-profpic.jpg`}
            alt="Afebrio"
            className={styles.avatar}
          />
          <span className={styles.brandName}>afebrio<span className={styles.brandDot}>.</span></span>
        </a>

        {/* Center: nav links (desktop) */}
        <ul className={styles.links} role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={styles.link} id={`nav-${label.toLowerCase()}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: hamburger */}
        <button
          className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          id="nav-hamburger"
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`} role="dialog" aria-modal="true">
        <div className={styles.mobileInner}>
          <ul className={styles.mobileLinks} role="list">
            {links.map(({ href, label }, i) => (
              <li key={href} style={{ transitionDelay: `${0.06 * i}s` }}>
                <a href={href} className={styles.mobileLink} onClick={close}>
                  <span className={styles.mobileLinkNum}>0{i + 1}</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.mobileSocials}>
            <a href="https://github.com/afebrioo" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub"><FaGithub size={18}/></a>
            <a href="https://linkedin.com/in/afebrioo" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn"><FaLinkedinIn size={18}/></a>
            <a href="https://instagram.com/afebrioo" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram"><FaInstagram size={18}/></a>
          </div>
        </div>
      </div>
    </>
  );
}
