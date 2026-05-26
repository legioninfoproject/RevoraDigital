import React, { useEffect, useRef } from "react";
import {
  FiSearch,
  FiBarChart2,
  FiThumbsUp,
  FiMail,
  FiDollarSign,
  FiFileText,
  FiArrowRight,
} from "react-icons/fi";

import styles from "./DigitalHero.module.css";
import image from "../../assets/digitalMarketing.png";
import { Link } from "react-router-dom";
/* ─────────────────────────────────────────────
   Orbital Services
───────────────────────────────────────────── */
const SERVICES = [
  {
    id: "seo",
    Icon: FiSearch,
    label: "SEO",
    angle: 90,
    yellow: false,
  },
  {
    id: "social",
    Icon: FiThumbsUp,
    label: "Social Media",
    angle: 20,
    yellow: true,
  },
  {
    id: "ppc",
    Icon: FiDollarSign,
    label: "Paid Ads",
    angle: -40,
    yellow: true,
  },
  {
    id: "content",
    Icon: FiFileText,
    label: "Content Marketing",
    angle: -95,
    yellow: false,
  },
  {
    id: "email",
    Icon: FiMail,
    label: "Email Marketing",
    angle: 200,
    yellow: false,
  },
  {
    id: "analytics",
    Icon: FiBarChart2,
    label: "Analytics",
    angle: 145,
    yellow: true,
  },
];

/* ─────────────────────────────────────────────
   Laptop Image
───────────────────────────────────────────── */
const LaptopMockup = () => (
  <div className={styles.laptopImageWrapper}>
    <img
      src={image}
      alt="Digital Marketing"
      className={styles.laptopImage}
    />
  </div>
);

/* ─────────────────────────────────────────────
   Orbit Pills
───────────────────────────────────────────── */
const OrbPill = ({ Icon, label, angle, yellow, radius }) => {
  const rad = (angle * Math.PI) / 180;

  const x = Math.cos(rad) * radius;
  const y = -Math.sin(rad) * radius;

  return (
    <div
      className={styles.orbPill}
      style={{
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
      }}
    >
      <span
        className={styles.orbIcon}
        style={{
          background: yellow ? "#e8c840" : "#0d7a7a",
        }}
      >
        <Icon size={15} color={yellow ? "#222" : "#fff"} />
      </span>

      <span className={styles.orbLabel}>{label}</span>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
const DigitalHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;

    if (!el) return;

    const onMove = (e) => {
      const { left, top, width, height } =
        el.getBoundingClientRect();

      const x = ((e.clientX - left) / width - 0.5) * 18;
      const y = ((e.clientY - top) / height - 0.5) * 12;

      el.style.setProperty("--px", `${x}px`);
      el.style.setProperty("--py", `${y}px`);
    };

    el.addEventListener("mousemove", onMove);

    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  /* Smooth Scroll */
  // const handleExploreClick = () => {
  //   const nextSection = document.getElementById("digital-services");

  //   if (nextSection) {
  //     nextSection.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <section className={styles.hero} ref={heroRef}>
      {/* Background Shape */}
      <div className={styles.cornerAccent}></div>

      {/* Dots */}
      <div className={styles.cornerDots}>
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className={styles.dot}></span>
        ))}
      </div>

      {/* LEFT CONTENT */}
      <div className={styles.left}>
        <span className={styles.eyebrow}>
          DIGITAL MARKETING
        </span>

        <h1 className={styles.headline}>
          Results-Driven
          <br />
          <span className={styles.accentGreen}>
            Digital Marketing
          </span>
           Solutions
        </h1>

        <p className={styles.body}>
          Grow your visibility, generate more leads,
          and scale your brand online with customized
          SEO strategies, social media marketing,
          paid advertising, and performance-driven
          digital campaigns tailored to your business goals.
        </p>

        <div className={styles.ctaRow}>
              <Link
        to="/digital#services"
        className={styles.btnPrimary}
      >
        Explore Services
        <FiArrowRight size={18} />
      </Link>

          <Link
  to="/revoraform"
  className={styles.btnOutline}
>
  Get Free Consultation
  <FiArrowRight size={18} />
</Link>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className={styles.right}>
        {/* Orbit Rings */}
        <div className={styles.orbitRing}></div>
        <div className={styles.orbitRingInner}></div>

        {/* Laptop */}
        <div className={styles.laptopWrap}>
          <LaptopMockup />
        </div>

        {/* Pills */}
        {SERVICES.map((service) => (
          <OrbPill
            key={service.id}
            {...service}
            radius={220}
          />
        ))}
      </div>
    </section>
  );
};

export default DigitalHero;