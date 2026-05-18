import { useState, useEffect, useRef } from "react";
import styles from "./Workprocess.module.css";

import {
  HiOutlineClipboardDocument,
  HiOutlineLightBulb,
  HiOutlineCog6Tooth,
  HiOutlineCheckBadge,
  HiArrowLongRight,
} from "react-icons/hi2";
import { GiArchiveResearch } from "react-icons/gi";

const steps = [
  {
    id: "01",
    icon: GiArchiveResearch,
    title: "Research",
    desc: "We analyze your business, target audience, competitors, industry trends, and current online presence to identify the best digital marketing opportunities for your brand.",
  },
  {
    id: "02",
    icon: HiOutlineLightBulb,
    title: "Planning",
    desc: "Our team creates a customized digital marketing strategy including SEO, social media marketing, paid advertising, and content planning tailored to your business goals.",
  },
  {
    id: "03",
    icon: HiOutlineCog6Tooth,
    title: "Implementation",
    desc: "We execute result-driven marketing campaigns through SEO optimization, content marketing, Google Ads, social media management, and performance-focused strategies.",
  },
  {
    id: "04",
    icon: HiOutlineCheckBadge,
    title: "Finishing",
    desc: "We continuously monitor campaign performance, track analytics, optimize strategies, and improve conversions to ensure sustainable growth and maximum return on investment.",
  },
];

function useIntersection(ref) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return visible;
}

function StepCard({ step, visible }) {
  const Icon = step.icon;

  return (
    <div className={`${styles.card} ${visible ? styles.show : ""}`}>
      <div className={styles.iconBox}>
        <span className={styles.badge}>{step.id}</span>

        <Icon className={styles.icon} />
      </div>

      <h3 className={styles.title}>{step.title}</h3>

      <p className={styles.desc}>{step.desc}</p>

      <div className={styles.line}></div>
    </div>
  );
}

export default function WorkProcess() {
  const sectionRef = useRef(null);

  const visible = useIntersection(sectionRef);

  return (
    <section className={styles.processSection} ref={sectionRef}>
      <div className={styles.header}>
        <div>
          <p className={styles.subTitle}>HOW DO WE WORK</p>

          <h2 className={styles.heading}>
            Our Work <span>Process</span>
          </h2>
        </div>

        <p className={styles.headerDesc}>
          We follow a strategic digital marketing process focused on improving brand visibility, increasing website traffic, 
          generating quality leads, and delivering measurable business growth.
        </p>
      </div>

      <div className={styles.grid}>
        {steps.map((step) => (
          <StepCard key={step.id} step={step} visible={visible} />
        ))}
      </div>

      <div className={styles.btnWrapper}>
        <button className={styles.button}>
          Start Your Journey
          <HiArrowLongRight />
        </button>
      </div>
    </section>
  );
}