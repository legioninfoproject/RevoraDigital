import React from "react";
import styles from "./DigitalGrowth.module.css";

import {
  FiTrendingUp,
  FiSearch,
  FiTarget,
  FiShield,
  FiBarChart2,
} from "react-icons/fi";

const DigitalGrowth = () => {
  return (
    <section className={styles.growthSection}>
      <div className={styles.container}>
        
        {/* LEFT CONTENT */}
        <div className={styles.leftContent}>
          <span className={styles.tag}>
            Smart Digital Growth Solutions
          </span>

          <h2 className={styles.heading}>
            Smart Strategies for Sustainable{" "}
            <span>Digital Growth</span>
          </h2>

          <p className={styles.description}>
            Many businesses struggle with low online visibility, weak brand
            presence, poor lead quality, high advertising costs, low conversion
            rates, and inconsistent social media engagement.
          </p>

          <p className={styles.description}>
            Revora Digital solves these challenges with customized digital
            marketing strategies focused on performance, optimization, and
            long-term growth.
          </p>

          {/* CHALLENGES */}
          <div className={styles.challengeBox}>
            <div className={styles.challengeItem}>
              <FiTrendingUp />
              <span>Low online visibility</span>
            </div>

            <div className={styles.challengeItem}>
              <FiTrendingUp />
              <span>Weak brand presence</span>
            </div>

            <div className={styles.challengeItem}>
              <FiTrendingUp />
              <span>Poor lead quality</span>
            </div>

            <div className={styles.challengeItem}>
              <FiTrendingUp />
              <span>High advertising costs</span>
            </div>

            <div className={styles.challengeItem}>
              <FiTrendingUp />
              <span>Low conversion rates</span>
            </div>

            <div className={styles.challengeItem}>
              <FiTrendingUp />
              <span>Inconsistent social media engagement</span>
            </div>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className={styles.cardsGrid}>
          
          <div className={styles.card}>
            <div className={styles.iconWrap}>
              <FiSearch />
            </div>

            <h3>Increase Search Visibility</h3>

            <p>
              Rank higher on Google and attract customers searching for your
              products or services.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrap}>
              <FiTarget />
            </div>

            <h3>Generate Quality Leads</h3>

            <p>
              Reach the right audience through SEO, Google Ads, and targeted
              social campaigns.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrap}>
              <FiShield />
            </div>

            <h3>Build Stronger Brand Presence</h3>

            <p>
              Create a professional and trustworthy online identity that drives
              customer confidence.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrap}>
              <FiBarChart2 />
            </div>

            <h3>Improve ROI with Data-Driven Marketing</h3>

            <p>
              Track campaign performance, optimize results, and maximize your
              marketing investment.
            </p>
          </div>

          <div className={`${styles.card} ${styles.fullCard}`}>
            <div className={styles.iconWrap}>
              <FiTrendingUp />
            </div>

            <h3>Drive Consistent Business Growth</h3>

            <p>
              Our scalable marketing solutions help startups, SMEs, and
              enterprises grow sustainably.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalGrowth;