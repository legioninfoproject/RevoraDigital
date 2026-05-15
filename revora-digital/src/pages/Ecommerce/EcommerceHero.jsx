import React from "react";
import {
  FiArrowRight,
} from "react-icons/fi";

import styles from "./EcommerceHero.module.css";
import heroImage from "../../assets/ecommerce.avif";

const EcommerceHero = () => {
  return (
    <section className={styles.hero}>
      {/* Background */}
      <div className={styles.heroBlobOne}></div>
      <div className={styles.heroBlobTwo}></div>

      <div className={styles.heroContainer}>
        {/* LEFT CONTENT */}
        <div className={styles.heroContent}>
          
          {/* Tag */}
          <div className={styles.heroTag}>
            <span><span>E-commerce</span> Marketing</span>
          </div>

          {/* Title */}
          <h1 className={styles.heroTitle}>
            E-commerce <br />
            <span>Marketing</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.heroSubtitle}>
            More Traffic. More Sales.{" "}
            <strong>More Growth.</strong>
          </p>

          {/* Description */}
          <p className={styles.heroDescription}>
            We help e-commerce businesses grow with
            data-driven strategies that increase traffic,
            boost conversions, and maximize revenue.
          </p>

          {/* Buttons */}
          <div className={styles.ctaRow}>
            <button className={styles.btnPrimary}>
              Explore Services
              <FiArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.heroImageSection}>
          <div className={styles.imageWrapper}>
            <img
              src={heroImage}
              alt="Ecommerce Marketing"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceHero;