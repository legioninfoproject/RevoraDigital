import React, { useEffect, useRef } from "react";
import {
  FiSearch,
  FiPenTool,
  FiMessageSquare,
  FiUsers,
  FiBarChart2,
  FiTrendingUp,
} from "react-icons/fi";

import styles from "./BrandExplore.module.css";

/* ─── Data ─── */
const services = [
  {
    icon: FiSearch,
    title: "Brand Strategy",
    desc: "We research, analyze, and craft strategies that define your brand purpose and direction.",
  },
  {
    icon: FiPenTool,
    title: "Brand Identity",
    desc: "We design unique logos, color palettes, typography, and visual identities.",
  },
  {
    icon: FiMessageSquare,
    title: "Brand Messaging",
    desc: "We create powerful messages that communicate your brand's value.",
  },
  {
    icon: FiUsers,
    title: "Market Positioning",
    desc: "We position your brand to stand out from competitors and attract the right audience.",
  },
  {
    icon: FiBarChart2,
    title: "Campaign Development",
    desc: "We plan and execute impactful campaigns that drive brand awareness.",
  },
  {
    icon: FiTrendingUp,
    title: "Brand Growth",
    desc: "We help you build loyalty and grow your brand consistently.",
  },
];

/* ─── Scroll Reveal Hook ─── */
function useScrollReveal(selector, threshold = 0.15) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [selector, threshold]);

  return sectionRef;
}

/* ─── Component ─── */
const BrandExplore = () => {
  const sectionRef = useScrollReveal(`.${styles.card}`);

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <span className={`${styles.line} ${styles.left}`} />

          <h2 className={styles.title}>
            What We Do in Brand Marketing
          </h2>

          <span className={`${styles.line} ${styles.right}`} />
        </div>

        <p className={styles.subtitle}>
          From strategy to storytelling, we help you build a brand
          that stands out
          {/* <span className={styles.goldDot} /> */}
          and stays in the minds of your audience.
        </p>
      </header>

      {/* Cards */}
      <div className={styles.grid}>
        {services.map(({ icon: Icon, title, desc }) => (
          <article className={styles.card} key={title}>
            <div className={styles.iconWrap}>
              <Icon />
            </div>

            <h3 className={styles.cardTitle}>
              {title}
            </h3>

            <p className={styles.cardDesc}>
              {desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BrandExplore;