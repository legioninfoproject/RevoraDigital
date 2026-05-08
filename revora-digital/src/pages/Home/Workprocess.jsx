import { useState, useEffect, useRef } from "react";
import styles from "./Workprocess.module.css";

import {
  HiOutlineClipboardDocument,
  HiOutlineLightBulb,
  HiOutlineCog6Tooth,
  HiOutlineCheckBadge,
  HiArrowLongRight,
} from "react-icons/hi2";

const steps = [
  {
    id: "01",
    icon: HiOutlineClipboardDocument,
    title: "Briefing",
    desc: "We dive deep into your brand's goals, audience, and challenges to craft a strategy that's uniquely yours.",
  },
  {
    id: "02",
    icon: HiOutlineLightBulb,
    title: "Idea Generating",
    desc: "Our creative minds collide to spark bold, data-backed concepts that cut through the noise.",
  },
  {
    id: "03",
    icon: HiOutlineCog6Tooth,
    title: "Processing",
    desc: "We execute with precision building, testing, and refining every asset with relentless attention to detail.",
  },
  {
    id: "04",
    icon: HiOutlineCheckBadge,
    title: "Finishing",
    desc: "We launch, measure, and optimize ensuring your campaign delivers lasting impact.",
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
          Discover a spectrum of cutting-edge digital marketing services
          tailored to elevate your online presence.
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