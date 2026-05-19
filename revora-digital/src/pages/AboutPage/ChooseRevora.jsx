import React from "react";
import styles from "./ChooseRevora.module.css";
import { FaCheck } from "react-icons/fa";

const features = [
  "Data Driven Marketing Strategies",
  "Creative and Innovative Campaigns",
  "SEO and Lead Generation Expertise",
  "Dedicated Client Support",
  "Transparent Communication and Reporting",
  "Growth Focused Digital Solutions",
];

const ChooseRevora = () => {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <span className={styles.tag}>
            WHY CHOOSE REVORA DIGITAL
          </span>

          <h2 className={styles.heading}>
            Why Businesses Choose{" "}
            <span>Revora Digital</span>
          </h2>

          <p className={styles.description}>
            Businesses today need result driven marketing
            strategies to grow online successfully. Revora
            Digital helps brands improve visibility,
            generate quality leads, and achieve long term
            business growth through customized digital
            marketing solutions.
          </p>
        </div>

        {/* RIGHT FEATURES */}
        <div className={styles.right}>
          {features.map((item, index) => (
            <div
              className={styles.card}
              key={index}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div className={styles.icon}><FaCheck /></div>

              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseRevora;