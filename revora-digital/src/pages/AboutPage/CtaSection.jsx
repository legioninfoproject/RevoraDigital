import React from "react";
import styles from "./CtaSection.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";

const CtaSection = () => {
    return (
        <section className={styles.ctaSection}>
  <div className={styles.ctaContainer}>
    <h2 className={styles.ctaTitle}>
      Let’s Grow Your Business
    </h2>

    <p className={styles.ctaText}>
      Whether you want to improve your online visibility,
      generate quality leads, strengthen your brand, or
      scale your ecommerce business, Revora Digital is
      here to help.
    </p>

    <p className={styles.ctaText}>
      Partner with Revora Digital and experience
      performance driven digital marketing solutions
      designed to create sustainable business growth,
      stronger customer engagement, and measurable
      success.
    </p>

    <a href="/contact-revora-digital" className={styles.ctaBtn}>
  <span>Contact Us</span>
  <IoIosArrowRoundForward className={styles.arrowIcon} />
</a>
  </div>
</section>
    );
}

export default CtaSection