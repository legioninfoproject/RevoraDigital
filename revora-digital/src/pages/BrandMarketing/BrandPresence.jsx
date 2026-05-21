import React from "react";
import styles from "./BrandPresence.module.css";
import {
  FiTrendingUp,
  FiShield,
  FiTarget,
  FiMessageCircle,
  FiUsers,
} from "react-icons/fi";

const BrandWaveSection = () => {
  return (
    <section className={styles.brandSection}>
      {/* LEFT CONTENT */}
      <div className={styles.left}>
        <span className={styles.tag}>Brand Marketing</span>

        <h2 className={styles.heading}>
          Create a Strong
          <span> Brand Presence</span>
        </h2>

        <p className={styles.desc}>
          A strong brand helps businesses stand out, build credibility,
          and create long-term customer relationships in competitive markets.
        </p>

        <p className={styles.desc}>
          Revora Digital helps businesses improve visibility, strengthen
          positioning, and create consistent communication across all digital
          platforms.
        </p>

        <button className={styles.btn}>
          Explore Branding
        </button>
      </div>

      {/* RIGHT TIMELINE */}
      <div className={styles.right}>
        <div className={styles.line}></div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <FiTrendingUp />
          </div>

          <div className={styles.content}>
            <h3>Improve Brand Visibility</h3>
            <p>
              Increase awareness and help customers discover your business
              online.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <FiShield />
          </div>

          <div className={styles.content}>
            <h3>Build Audience Trust</h3>
            <p>
              Create credibility through professional and consistent branding.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <FiTarget />
          </div>

          <div className={styles.content}>
            <h3>Market Positioning</h3>
            <p>
              Stand apart from competitors with clear communication strategies.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <FiMessageCircle />
          </div>

          <div className={styles.content}>
            <h3>Consistent Communication</h3>
            <p>
              Deliver unified messaging across social media and digital channels.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <FiUsers />
          </div>

          <div className={styles.content}>
            <h3>Increase Engagement</h3>
            <p>
              Build stronger customer relationships and long-term business
              growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandWaveSection;