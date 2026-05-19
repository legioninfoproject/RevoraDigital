import React from "react";
import {
  FiSearch,
  FiPenTool,
  FiTrendingUp,
  FiBarChart2,
} from "react-icons/fi";

import styles from "./Approach.module.css";

const approachData = [
  {
    icon: <FiSearch />,
    title: "Research and Strategy",
    description:
      "We analyze your business, competitors, industry trends, and target audience to create customized marketing strategies.",
  },
  {
    icon: <FiPenTool />,
    title: "Creative Execution",
    description:
      "Our team develops engaging content, impactful visuals, and campaigns designed to attract and convert customers.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Performance Optimization",
    description:
      "We continuously monitor and optimize campaigns to improve results, maximize ROI, and ensure long term success.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Transparent Reporting",
    description:
      "We provide regular updates and detailed reports so clients always stay informed about campaign performance.",
  },
];

const ApproachSection = () => {
  return (
    <section className={styles.approachSection}>
      <div className={styles.container}>
        <div className={styles.headingWrapper}>
          <span className={styles.subTitle}>Our Process</span>

          <h2 className={styles.heading}>
            Our <span>Approach</span>
          </h2>

          <p className={styles.description}>
            Our marketing approach combines strategy, creativity, and
            performance analysis to create campaigns that deliver measurable
            business results.
          </p>
        </div>

        <div className={styles.cardGrid}>
          {approachData.map((item, index) => (
            <div
              className={styles.card}
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.iconBox}>{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;