import React, { useEffect, useRef } from "react";
import {
  FiSearch,
  FiCompass,
  FiPenTool,
  FiMessageSquare,
  // FiZap,
  FiTrendingUp,
} from "react-icons/fi";
import styles from "./BrandProcess.module.css";

// ── useScrollReveal hook ─────────────────────────────────────────────────────
const useScrollReveal = (selector) => {
  const ref = useRef(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const targets = section.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealed);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);

  return ref;
};

// ── Process Steps Data ───────────────────────────────────────────────────────
const STEPS = [
  {
    number: "01",
    label: "Research & Discovery",
    icon: FiSearch,
    color: "#0d7a7a",
    desc: "We analyze your business, audience behavior, competitors, and industry trends to identify branding opportunities and growth strategies.",
  },
  {
    number: "02",
    label: "Strategy Planning",
    icon: FiCompass,
    color: "#0a5f5f",
    desc: "Our team develops a customized branding roadmap aligned with your business objectives and target audience.",
  },
  {
    number: "03",
    label: "Brand Development",
    icon: FiPenTool,
    color: "#0d7a7a",
    desc: "We create visual identity systems, messaging frameworks, and branding assets that represent your business professionally.",
  },
  {
    number: "04",
    label: "Campaign Execution",
    icon: FiMessageSquare,
    color: "#0a5f5f",
    desc: "We implement branding strategies across digital channels to improve visibility, engagement, and audience reach.",
  },
  {
    number: "05",
    label: "Performance Optimization",
    icon: FiTrendingUp,
    color: "#0d7a7a",
    desc: "We continuously monitor brand performance and optimize strategies to support long-term business growth.",
  },
];
// ── Main Component ────────────────────────────────────────────────────────────
const BrandProcess = () => {
  const sectionRef = useScrollReveal(`.${styles.card}`);

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* Header */}
     <header className={styles.header}>
  <h3 className={styles.eyebrow}>Work Process</h3>

  <div className={styles.titleRow}>
    <span className={`${styles.line} ${styles.left}`} />
    <h2 className={styles.title}>Our <span className={styles.highlight}>Brand Marketing </span>Process</h2>
    <span className={`${styles.line} ${styles.right}`} />
  </div>

  <p className={styles.subtitle}>
    A proven process to build strong brands that drive real results.
  </p>
</header>

      {/* Steps */}
      <div className={styles.track}>
        {/* Connector line behind cards */}
        <div className={styles.connector} aria-hidden="true">
          <div className={styles.connectorFill} />
        </div>

        {STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className={styles.card}
              style={{ "--delay": `${i * 0.14}s` }}
            >
              {/* Icon bubble */}
              <div className={styles.bubble}>
                <Icon size={22} strokeWidth={1.8} />
                {/* Step number badge */}
                <span className={styles.numBadge}>{step.number}</span>
              </div>

              {/* Dashed vertical stem */}
              <div className={styles.stem} aria-hidden="true" />

              {/* Content */}
              <div className={styles.cardBody}>
                <h3 className={styles.stepLabel}>{step.label}</h3>
                {/* <p className={styles.stepDesc}>{step.desc}</p> */}
              </div>

              {/* Arrow connector (not on last) */}
              {i < STEPS.length - 1 && (
                <div className={styles.arrow} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 8h8M9 5l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom decorative row */}
      <div className={styles.progressBar} aria-hidden="true">
        {STEPS.map((s, i) => (
          <div
            key={s.number}
            className={styles.progressDot}
            style={{ "--di": i }}
          />
        ))}
      </div>
    </section>
  );
};

export default BrandProcess;