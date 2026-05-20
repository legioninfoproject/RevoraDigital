import React from "react";
import {
  FiSearch,
  FiTrendingUp,
  FiTarget,
  // FiDollarSign,
  FiAward,
  FiBarChart2,
} from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";
import styles from "./WhyChoose.module.css";

const challenges = [
  {
    icon: <FiSearch />,
    title: "Low Search Engine Rankings",
  },
  {
    icon: <FiTrendingUp />,
    title: "Poor Online Visibility",
  },
  {
    icon: <FiTarget />,
    title: "Inconsistent Lead Generation",
  },
  {
    icon:<FaRupeeSign />,
    title: "High Advertising Costs with Low ROI",
  },
  {
    icon: <FiAward />,
    title: "Weak Brand Identity",
  },
  {
    icon: <FiBarChart2 />,
    title: "Low Website Conversion Rates",
  },
];

const WhyChoose = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <span className={styles.tag}>WHY CHOOSE REVORA DIGITAL</span>

          <h2 className={styles.title}>
            Smart Digital Strategies
            <br />
            for <span className={styles.highlight}>Sustainable</span> Growth
          </h2>

          <p className={styles.description}>
            Many businesses invest in marketing but struggle to achieve
            consistent results due to poor strategy, weak targeting, or
            ineffective campaigns.
          </p>

          <p className={styles.description}>
            Revora Digital solves these challenges with customized and data
            driven marketing solutions focused on measurable growth.
          </p>

          <div className={styles.bottomContent}>
            <div className={styles.line}></div>

            <p>
             We believe every business is unique. That’s why we create customized 
             strategies and optimize campaigns based on your goals, industry requirements,
              and evolving market trends
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <div className={styles.cardWrapper}>
            <h3 className={styles.cardTitle}>
              Common Challenges Businesses Face
            </h3>

            <div className={styles.grid}>
              {challenges.map((item, index) => (
                <div
                  className={styles.card}
                  key={index}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={styles.icon}>{item.icon}</div>
                  <h4>{item.title}</h4>
                </div>
              ))}
            </div>

            <div className={styles.highlightBox}>
              <p>
                Our focus is on generating meaningful engagement, quality
                leads, and sustainable long term business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;