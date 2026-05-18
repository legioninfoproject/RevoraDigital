import styles from "./Header.module.css";

import bannerStar from "../../assets/banner-tittle-star.webp";

import { HiArrowRight } from "react-icons/hi2";
import { HiArrowUpRight } from "react-icons/hi2";
import mainImage from "../../assets/ImageBackgound.jpg";

const Header = () => {
  return (
    <main
  className={styles.heroSection}
  style={{ backgroundImage: `url(${mainImage})` }}
>

      <div className={styles.heroContainer}>
        {/* ── LEFT CONTENT ── */}
        <div className={styles.heroLeft}>

          {/* Heading */}
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine1}>
              The Digital
              <img src={bannerStar} alt="" className={styles.titleStar} />
            </span>
            <span className={styles.titleLine2}>Marketing Agency</span>
            <span className={styles.titleLine3}>
              For{" "}
              <span className={styles.titleHighlight}>Higher ROI</span>
            </span>
          </h1>

          {/* Sub-text */}
          <p className={styles.heroDesc}>
             Revora Digital helps businesses improve online visibility,
              generate qualified leads, strengthen brand authority, and achieve measurable growth through SEO,
               branding, performance marketing, and conversion-focused digital strategies.
            Many businesses struggle with low website traffic, poor Google rankings, inconsistent leads, and weak online engagement. Our customized digital marketing strategies solve these challenges through SEO, branding, content marketing, and performance-driven campaigns focused on long-term growth.
              
          </p>

          {/* CTA row */}
          <div className={styles.heroCtas}>
            <a href="/revoraform" className={styles.btnPrimary}>
              Try it Now
              <HiArrowRight className={styles.btnIcon} />
            </a>
            <a href="/about" className={styles.btnSecondary}>
              Explore More
              <HiArrowUpRight className={styles.btnSecIcon} />
            </a>
          </div>
   </div> 
      </div>
    </main>
  );
};

export default Header;