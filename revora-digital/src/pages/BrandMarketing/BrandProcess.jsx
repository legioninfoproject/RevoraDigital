import React, { useEffect, useRef } from "react";
import {
  FiSearch,
  FiCompass,
  FiPenTool,
  FiMessageSquare,
  FiZap,
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
    label: "Research",
    icon: FiSearch,
    color: "#0d7a7a",
    desc: "We analyse your market, audience, and competitors.",
  },
  {
    number: "02",
    label: "Strategy",
    icon: FiCompass,
    color: "#0a5f5f",
    desc: "We define your brand strategy and positioning.",
  },
  {
    number: "03",
    label: "Identity",
    icon: FiPenTool,
    color: "#0d7a7a",
    desc: "We design your brand identity and assets.",
  },
  {
    number: "04",
    label: "Messaging",
    icon: FiMessageSquare,
    color: "#0a5f5f",
    desc: "We craft your brand voice and key messages.",
  },
  {
    number: "05",
    label: "Launch",
    icon: FiZap,
    color: "#0d7a7a",
    desc: "We launch campaigns to introduce your brand.",
  },
  {
    number: "06",
    label: "Growth",
    icon: FiTrendingUp,
    color: "#0a5f5f",
    desc: "We optimise and grow your brand over time.",
  },
];

// ── Main Component ────────────────────────────────────────────────────────────
const BrandProcess = () => {
  const sectionRef = useScrollReveal(`.${styles.card}`);

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <span className={`${styles.line} ${styles.left}`} />
          <h2 className={styles.title}>Our Brand Marketing Process</h2>
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
                <p className={styles.stepDesc}>{step.desc}</p>
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