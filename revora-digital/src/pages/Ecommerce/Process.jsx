import React from "react";
import {
  FiSearch,
  FiTarget,
  FiZap,
  FiBarChart2,
  FiAward,
} from "react-icons/fi";
import styles from "./Process.module.css";

/* ── Step data ── */
const STEPS = [
  {
    num: "01",
    icon: <FiSearch />,
    title: "Research",
    desc: "We analyze your niche, competitors, and customers.",
  },
  {
    num: "02",
    icon: <FiTarget />,
    title: "Strategy",
    desc: "We create a customized marketing strategy.",
  },
  {
    num: "03",
    icon: <FiZap />,
    title: "Execute",
    desc: "We implement campaigns to drive quality traffic.",
  },
  {
    num: "04",
    icon: <FiBarChart2 />,
    title: "Optimize",
    desc: "We analyze results and optimize for better ROI.",
  },
  {
    num: "05",
    icon: <FiAward />,
    title: "Grow",
    desc: "We scale what works and maximize your growth.",
  },
];

const Process=()=>{
  return (
    <section className={styles.section}>
      {/* ── HEADER ── */}
      <div className={styles.header}>
        <div className={styles.eyebrow}>Our Proven Process</div>

        {/* ── heading using your exact code structure ── */}
        <div className={styles.heroTag}>
          <span>
            <h2 className={styles.heading}>
              How We{" "}
              <span className={styles.tagHighlight}>Drive Results</span>
              {" "}For You
            </h2>
          </span>
        </div>

        {/* yellow separator */}
        <div className={styles.divider}>
          <div className={styles.dividerLine} />
          <div className={styles.dividerDot} />
          <div className={styles.dividerLine} />
        </div>
      </div>

      {/* ── TRACK ── */}
      <div className={styles.track}>
        {STEPS.map((step, i) => (
          <React.Fragment key={step.num}>
            {/* STEP */}
            <div className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>

              {/* Icon ring — data-num feeds the CSS ::after yellow badge */}
              <div
                className={styles.iconRing}
                style={{ "--badge": `"${step.num}"` }}
                data-num={step.num}
              >
                {step.icon}
              </div>

              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>

            {/* CONNECTOR between steps (not after last) */}
            {i < STEPS.length - 1 && (
              <div className={styles.connector}>
                <div className={styles.connectorInner} />
                <div className={styles.connectorArrow} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Process;