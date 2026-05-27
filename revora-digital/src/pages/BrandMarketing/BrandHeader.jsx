import React from "react";
import styles from "./BrandHeader.module.css";
import heroImage from "../../assets/brandMarketting.avif";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BrandHeader = () => {
  return (
    <>
      <Helmet>
        <title>
           Brand Marketing Services | Revora Digital
        </title>

        <meta
          name="description"
          content=" Revora Digital offers brand marketing services to improve visibility, build trust, strengthen brand identity, and grow your business online."
        />

        <meta
          name="keywords"
          content="Brand Marketing Services, Brand Strategy , Brand Identity , Business Branding ,Brand Growth , Digital Branding ,Market Positioning"
        />
      </Helmet>

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
            Revora Digital provides strategic brand marketing
            services that help businesses improve visibility,
            strengthen customer trust, and create a strong
            market presence. We help businesses build
            professional brand identities and marketing
            strategies that connect with the right audience
            and support long-term business growth.
            From brand strategy and visual identity to
            digital campaigns and market positioning, our
            solutions are designed to create meaningful
            customer engagement and measurable business
            impact.
          </p>

          <div className={styles.buttonGroup}>
            <Link
              to="/brand-marketing-services#brand-presence"
              className={styles.primaryBtn}
            >
              Start Your Brand Journey
              <span className={styles.arrowIcon}>
                <IoIosArrowRoundForward />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className={styles.rightContent}>
          <img
            src={heroImage}
            alt="Brand Marketing"
            className={styles.heroImage}
          />
        </div>
      </header>
    </>
  );
};

export default BrandHeader;