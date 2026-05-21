import React, { useEffect, useRef } from "react";
import {
  FiTarget,
  FiLayers,
  FiMessageCircle,
  FiCompass,
  FiZap,
  FiTrendingUp,
} from "react-icons/fi";

import styles from "./BrandExplore.module.css";

/* ─── Data ─── */
const services = [
  {
    icon: FiTarget,
    title: "Brand Strategy",
    desc: "We create strategic branding plans that align with your business goals, audience, and market position.",
  },
  {
    icon: FiLayers,
    title: "Brand Identity",
    desc: "We design professional visual identities that create consistency across digital and marketing platforms.",
  },
  {
    icon: FiMessageCircle,
    title: "Brand Messaging",
    desc: "We develop clear and customer-focused messaging that communicates your brand value effectively.",
  },
  {
    icon: FiCompass,
    title: "Market Positioning",
    desc: "We position your brand to stand out in competitive markets and connect with the right audience.",
  },
  {
    icon: FiZap,
    title: "Campaign Development",
    desc: "We create impactful marketing campaigns that improve brand awareness and audience engagement.",
  },
  {
    icon: FiTrendingUp,
    title: "Brand Growth",
    desc: "We help businesses strengthen brand presence, build loyalty, and support long-term business growth.",
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
        
        {/* Eyebrow */}
        <span className={styles.eyebrow}>
          Work We Do
        </span>

        <div className={styles.titleRow}>
          <span className={`${styles.line} ${styles.left}`} />

          <h2 className={styles.title}>
            What We Do in <span className={styles.highlight}>Brand Marketing</span>
          </h2>

          <span className={`${styles.line} ${styles.right}`} />
        </div>

        <p className={styles.subtitle}>
          From strategy to storytelling, we help businesses build a
          brand that improves visibility, strengthens customer trust,
          and supports long-term growth.
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