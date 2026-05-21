import React from "react";
import styles from "./BrandPresence.module.css";
import {
  FiTrendingUp,
  FiShield,
  FiTarget,
  FiMessageCircle,
  FiUsers,
} from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";

const BrandWaveSection = () => {
  return (
    <section className={styles.brandSection}>
      {/* LEFT CONTENT */}
      <div className={styles.left}>
        <span className={styles.tag}>Brand Growth</span>
        <h2 className={styles.heading}>
          Create a Strong
          <span> Brand Presence</span>
          in Competitive Markets
        </h2>

        <p className={styles.desc}>
         A strong brand helps businesses stand out, build credibility,
          and create lasting customer relationships. In today’s digital landscape, 
          businesses need consistent branding and clear communication to attract and retain customers.
        </p>

        <p className={styles.desc}>
          Our branding strategies focus on creating a professional 
          and memorable business presence across digital platforms.
        </p>

       <button className={styles.btn}>
  <span>Explore Branding</span>
  <IoIosArrowRoundForward className={styles.arrow} />
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