import { useEffect, useRef } from "react";
import {
  FiSearch,
  FiThumbsUp,
  FiMousePointer,
  FiFileText,
  FiMail,
  FiBarChart2,
  FiRefreshCw,
  FiShield,
} from "react-icons/fi";

import styles from "./DigitalMarketingExplore.module.css";

/* ─── Data ─── */
const solutions = [
  {
    icon: FiSearch,
    title: "Search Engine Optimization (SEO)",
    desc: "Improve your rankings and drive organic traffic with proven SEO strategies.",
  },
  {
    icon: FiThumbsUp,
    title: "Social Media Marketing (SMM)",
    desc: "Engage your audience and build your brand across all major social platforms.",
  },
  {
    icon: FiMousePointer,
    title: "Pay-Per-Click Advertising (PPC)",
    desc: "Run high-converting ad campaigns that deliver instant traffic and leads.",
  },
  {
    icon: FiFileText,
    title: "Content Marketing",
    desc: "Create valuable content that attracts, engages, and converts your target audience.",
  },
  {
    icon: FiMail,
    title: "Email Marketing",
    desc: "Nurture leads and retain customers with targeted email campaigns.",
  },
  {
    icon: FiBarChart2,
    title: "Web Analytics & Reporting",
    desc: "Track performance, measure results, and make data-driven decisions.",
  },
  {
    icon: FiRefreshCw,
    title: "Conversion Rate Optimization (CRO)",
    desc: "Optimize your website and funnels to turn more visitors into paying customers.",
  },
  {
    icon: FiShield,
    title: "Online Reputation Management",
    desc: "Build trust and credibility with positive reviews and brand reputation management.",
  },
];

/* ─── Floating Particles ─── */
const particles = [
  { size: 60, top: "12%", left: "8%", duration: "9s", delay: "0s" },
  { size: 40, top: "70%", left: "3%", duration: "13s", delay: "2s" },
  { size: 24, top: "30%", left: "92%", duration: "10s", delay: "1s" },
  { size: 50, top: "80%", left: "88%", duration: "14s", delay: "3s" },
  { size: 16, top: "50%", left: "50%", duration: "8s", delay: "0.5s" },
];

/* ─── Scroll Reveal Hook ─── */
function useScrollReveal(selector, threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const section = ref.current;

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

  return ref;
}

/* ─── Component ─── */
const DigitalMarketingExplore = () => {
  const sectionRef = useScrollReveal(`.${styles.card}`);

  return (
    <section className={styles.section} ref={sectionRef}>

      {/* ─── Floating Particles ─── */}
      {particles.map((particle, index) => (
        <span
          key={index}
          className={styles.particle}
          style={{
            width: particle.size,
            height: particle.size,
            top: particle.top,
            left: particle.left,
            animationDuration: particle.duration,
            animationDelay: particle.delay,
          }}
        />
      ))}

      {/* ─── Header ─── */}
      <header className={styles.header}>

        <p className={styles.tag}>
          What We Do
        </p>

        <h2 className={styles.title}>
          Complete{" "}
          <span className={styles.highlight}>
            Digital Marketing
          </span>{" "}
          Solutions
        </h2>

        <p className={styles.subtitle}>
          From increasing visibility to driving conversions,
          we cover every aspect of digital marketing.
        </p>

        <div className={styles.divider}></div>

      </header>

      {/* ─── Cards Grid ─── */}
      <div className={styles.grid}>
        {solutions.map(({ icon: Icon, title, desc }) => (
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

export default DigitalMarketingExplore;