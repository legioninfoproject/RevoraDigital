import React from "react";
import styles from "./BrandHeader.module.css";

const BrandHeader = () => {
  return (
    <section className={styles.brandMarketing}>
      <div className={styles.brandMarketingContainer}>
        
        {/* Left Content */}
        <div className={styles.brandMarketingContent}>
          <span className={styles.brandMarketingLabel}>
            BRAND MARKETING
          </span>

          <h1 className={styles.brandMarketingTitle}>
            Build Your{" "}
            <span className={styles.brandMarketingHighlight}>
              Brand.
            </span>
            <br />
            Grow Your{" "}
            <span className={styles.brandMarketingHighlightTeal}>
              Business.
            </span>
          </h1>

          <p className={styles.brandMarketingDescription}>
            We create powerful brand strategies and marketing campaigns
            that connect, engage, and leave a lasting impression.
          </p>

          <div className={styles.brandMarketingButtons}>
            <button className={styles.brandMarketingBtnPrimary}>
              Let's Build Your Brand
            </button>

            <button className={styles.brandMarketingBtnSecondary}>
              <span className={styles.brandMarketingPlayIcon}>
                ▶
              </span>
              Watch Our Story
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className={styles.brandMarketingVisual}>
          <div className={styles.brandMarketingImagePlaceholder}>
            <img
              src="/placeholder-brand-image.png"
              alt="Brand Marketing Visual"
              className={styles.brandMarketingImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHeader;