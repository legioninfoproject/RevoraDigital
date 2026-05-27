import React from "react";
import { FiArrowRight } from "react-icons/fi";

import styles from "./EcommerceHero.module.css";
import heroImage from "../../assets/ecommerce.avif";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const EcommerceHero = () => {
  return (
    <>
      <Helmet>
             <title>
               E-commerce Marketing Services | Revora Digital
             </title>
     
             <meta
               name="description"
               content="Revora Digital provides e-commerce marketing services including SEO, paid ads, CRO, and analytics to increase traffic, sales, and growth."
             />
     
             <meta
               name="keywords"
               content="E-commerce Marketing Services,Ecommerce SEO,Conversion Rate Optimization,Online Store Growth,Ecommerce Advertising,Ecommerce Analytics,Sales Growth Strategy"
             />
           </Helmet>
    <section className={styles.hero}>
      {/* Background */}
      <div className={styles.heroBlobOne}></div>
      <div className={styles.heroBlobTwo}></div>

      <div className={styles.heroContainer}>
        {/* LEFT CONTENT */}
        <div className={styles.heroContent}>

          {/* Tag */}
          <div className={styles.heroTag}>
            <span>
              <span>E-commerce</span> Growth Solutions
            </span>
          </div>

          {/* Title */}
          <h1 className={styles.heroTitle}>
            Grow Your <br />
            <span>Online Store</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.heroSubtitle}>
            Increase Sales &{" "}
            <strong>Customer Engagement</strong>
          </p>

          {/* Description */}
          <p className={styles.heroDescription}>
            Revora Digital helps e-commerce businesses scale faster
            with performance-driven marketing strategies designed to
            increase traffic, improve conversions, and maximize
            online revenue.
            <br />
            <br />
            From SEO and paid advertising to analytics and conversion
            optimization, we create data-driven e-commerce marketing
            solutions that help online brands attract the right
            audience and achieve measurable growth.
          </p>
          {/* Buttons */}
          <div className={styles.ctaRow}>
          <Link
  to="/ecommerce#ecommerce-about"
  className={styles.btnPrimary}
>
  Explore Services
  <FiArrowRight size={18} />
</Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.heroImageSection}>
          <div className={styles.imageWrapper}>
            <img
              src={heroImage}
              alt="E-commerce Marketing"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );

};

export default EcommerceHero;