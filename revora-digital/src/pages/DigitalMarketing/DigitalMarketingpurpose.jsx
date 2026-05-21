import { useEffect, useRef } from "react";
import {
  FiSearch,
  FiClipboard,
  FiSettings,
  FiActivity,
  FiTrendingUp,
} from "react-icons/fi";
import styles from "./DigitalMarketingpurpose.module.css";

/* ─── Data ─── */
const features = [
  {
    icon: FiSearch,
    title: "Business Understanding",
    desc: "We analyze your goals, audience, competitors, and current online presence.",
  },
  {
    icon: FiClipboard,
    title: "Strategy Planning",
    desc: "A customized digital marketing roadmap is created for your business growth.",
  },
  {
    icon: FiSettings,
    title: "Campaign Execution",
    desc: "We launch SEO, social media, content, and paid marketing campaigns effectively.",
  },
  {
    icon: FiActivity,
    title: "Optimization & Monitoring",
    desc: "Performance tracking and real-time analytics help improve campaign results.",
  },
  {
    icon: FiTrendingUp,
    title: "Reporting & Growth",
    desc: "Transparent reporting and continuous scaling strategies drive long-term growth.",
  },
];

/* ─── Scroll Reveal Hook ─── */
function useScrollReveal(cardSelector, threshold = 0.18) {
  const ref = useRef(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const cards = section.querySelectorAll(cardSelector);

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
  }, [cardSelector, threshold]);

  return ref;
}

/* ─── Component ─── */
const DigitalMarketingpurpose = () => {
  const sectionRef = useScrollReveal(`.${styles.card}`);

  return (
    <section className={styles.section} ref={sectionRef}>
      
      {/* ─── Header ─── */}
      <header className={styles.header}>
        <p className={styles.tag}>Work Process</p>

        <h2 className={styles.title}>
          Our Digital Marketing{" "}
          <span className={styles.highlight}>
            Process
          </span>
        </h2>

        <div className={styles.divider}></div>
      </header>

      {/* ─── Cards ─── */}
      <div className={styles.grid}>
        {features.map(({ icon: Icon, title, desc }) => (
          <article className={styles.card} key={title}>
            
            <div className={styles.iconCircle}>
              <Icon />
            </div>

            <h3 className={styles.cardTitle}>
              <span>{title}</span>
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

export default DigitalMarketingpurpose;