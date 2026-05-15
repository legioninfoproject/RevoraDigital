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
          We create powerful branding and marketing strategies that help
          businesses connect, engage, and grow faster in the digital world.
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