import React from "react";
import {
  FiSearch,
  FiTarget,
  FiTrendingUp,
  FiBarChart2,
  FiAward,
} from "react-icons/fi";
import styles from "./Process.module.css";

/* ── Step data ── */
const STEPS = [
  {
    num: "01",
    icon: <FiSearch />,
    title: "SEO Research",
    desc: "We analyze keywords, competitors, search trends, and website performance to identify SEO growth opportunities.",
  },
  {
    num: "02",
    icon: <FiTarget />,
    title: "SEO Strategy",
    desc: "Our team creates customized SEO strategies focused on rankings, organic traffic, and audience targeting.",
  },
  {
    num: "03",
    icon: <FiTrendingUp />,
    title: "SEO Execution",
    desc: "We implement on-page SEO, technical SEO, content optimization, and link-building strategies for better visibility.",
  },
  {
    num: "04",
    icon: <FiBarChart2 />,
    title: "SEO Optimization",
    desc: "Using analytics and search performance data, we continuously optimize campaigns to improve rankings and conversions.",
  },
  {
    num: "05",
    icon: <FiAward />,
    title: "SEO Growth",
    desc: "We scale successful SEO strategies to increase organic traffic, customer engagement, and long-term business growth.",
  },
];

const Process = () => {
  return (
    <section className={styles.section}>
      {/* ── HEADER ── */}
      <div className={styles.header}>
        <div className={styles.eyebrow}>WORK PROCESS</div>

        {/* ── heading ── */}
       <div className={styles.heroTag}>
  <h2 className={styles.heading}>
    Our{" "}
    <span className={styles.titleHighlight}>
      E-commerce Marketing
    </span>{" "}
    Process
  </h2>
</div>

        {/* description */}
        <p className={styles.subText}>
          A proven process designed to help online businesses improve
          visibility, increase conversions, and achieve long-term digital
          growth.
        </p>

        {/* divider */}
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

              <div
                className={styles.iconRing}
                data-num={step.num}
              >
                {step.icon}
              </div>

              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>

            {/* CONNECTOR */}
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
};

export default Process;