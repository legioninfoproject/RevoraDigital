import { useEffect, useRef } from "react";
import {
  FiEye,
  FiTarget,
  FiBarChart2,
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";
import styles from "./DigitalMarketingpurpose.module.css";

/* ─── Data ─── */
const features = [
  {
    icon: FiEye,
    title: "More Visibility",
    desc: "Be seen by the right people at the right time on the right platforms.",
  },
  {
    icon: FiTarget,
    title: "Targeted Reach",
    desc: "Reach your ideal audience with precision and relevant messaging.",
  },
  {
    icon: FiBarChart2,
    title: "Measurable Results",
    desc: "Track performance in real-time and optimize for better outcomes.",
  },
  {
    icon: FiDollarSign,
    title: "Cost Effective",
    desc: "Get better ROI with data-driven strategies and smart budget allocation.",
  },
  {
    icon: FiTrendingUp,
    title: "Business Growth",
    desc: "Generate leads, increase conversions, and grow your brand consistently.",
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
const DigitalMarketingpurpose= () => {
  const sectionRef = useScrollReveal(`.${styles.card}`);

  return (
    <section className={styles.section} ref={sectionRef}>
      
      {/* ─── Header ─── */}
      <header className={styles.header}>
        <p className={styles.tag}>Why Digital Marketing?</p>

        <h2 className={styles.title}>
          Smarter Marketing.{" "}
          <span className={styles.highlight}>
            Stronger Results.
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