import React from "react";
import styles from "./BrandHeader.module.css";
import heroImage from "../../assets/brandMarketting.avif"
import { IoIosArrowRoundForward } from "react-icons/io";


const BrandHeader = () => {
  return (
    <header className={styles.brandHero}>
      {/* Background Shapes */}
      <div className={styles.circleOne}></div>
      <div className={styles.circleTwo}></div>

      {/* Left Content */}
      <div className={styles.leftContent}>
        <span className={styles.tag}>
          <span className={styles.tagDot}></span>
          BRAND MARKETING
        </span>
       <h1 className={styles.title}>
  Build Your <span className={styles.brandText}>Brand.</span>
  <br />
  Grow Your Business.
</h1>

        <p className={styles.description}>
          Revora Digital provides strategic brand marketing services that help businesses improve visibility,
           strengthen customer trust, and create a strong market presence. We help businesses build professional brand
            identities and marketing strategies that connect with the right audience and support long-term business growth.
From brand strategy and visual identity to digital campaigns and market positioning, our solutions are designed to create meaningful customer engagement and measurable business impact.

        </p>

        <div className={styles.buttonGroup}>
         <button className={styles.primaryBtn}>
  Let’s Build Your Brand

  <span className={styles.arrowIcon}>
    <IoIosArrowRoundForward />
  </span>
</button>

          {/* <button className={styles.secondaryBtn}>
            Watch Story
          </button> */}
        </div>

        {/* Stats */}
        {/* <div className={styles.statsWrapper}>
          <div className={styles.statCard}>
            <h3>500+</h3>
            <p>Brands Built</p>
          </div>

          <div className={styles.statCard}>
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>

          <div className={styles.statCard}>
            <h3>12+</h3>
            <p>Years Experience</p>
          </div>
        </div> */}
      </div>

      {/* Right Image */}
      <div className={styles.rightContent}>
        <img
          src={heroImage}
          alt="Brand Marketing"
          className={styles.heroImage}
        />

        {/* <div className={styles.floatingCard}>
          <div className={styles.greenDot}></div>
          Strategy First
        </div> */}
      </div>
    </header>
  );
};

export default BrandHeader;