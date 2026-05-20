import React from "react";
import styles from "./ContactHead.module.css";
import contactBg from "../../assets/contactbanner.png";
import { FiZap, FiHeadphones, FiStar } from "react-icons/fi";

const ContactHead = () => {
  return (
    <section
      className={styles.ch2Hero}
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* Drifting grid */}
      <div className={styles.grid} />

      {/* Left Content */}
      <div className={styles.content}>

        {/* Label */}
        <span className={styles.label}>Contact Revora Digital</span>

        {/* Heading */}
        <h1 className={styles.heading}>
          <span>
           Leading <strong>Digital Marketing  </strong>
            Agency in Coimbatore
          </span>
        </h1>

        {/* Animated line */}
        <div className={styles.line} />

        {/* Description */}
        <p className={styles.desc}>
          Get in touch with Revora Digital, a performance driven digital marketing agency 
          in Coimbatore offering SEO services, Google Ads management, social media marketing, 
          branding, and website development.
          We help businesses improve Google rankings, generate qualified leads, 
          and grow online with result focused digital marketing strategies.

        </p>

        {/* Features */}
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <FiZap />
            </div>

            <span>
              Quick
              <br />
              Response
            </span>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <FiHeadphones />
            </div>

            <span>
              Reliable
              <br />
              Support
            </span>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <FiStar />
            </div>

            <span>
              Trusted by
              <br />
              Clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHead;