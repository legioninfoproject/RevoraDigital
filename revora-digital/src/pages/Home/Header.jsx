import styles from "./Header.module.css";
import bannerStar from "../../assets/banner-tittle-star.webp";
import { Helmet } from "react-helmet-async";

import { HiArrowRight } from "react-icons/hi2";
import { HiArrowUpRight } from "react-icons/hi2";
import mainImage from "../../assets/ImageBackgound.jpg";

const Header = () => {
  return (
    <>
      <Helmet>
        <title>
           Digital Marketing for Business Growth | Revora Digital
        </title>

        <meta
          name="description"
          content=" Revora Digital provides SEO, branding, Google Ads, social media marketing, and lead generation services to grow your business online."
        />

        <meta
          name="keywords"
          content="Digital Marketing, Business Growth, SEO Services, Lead Generation, Google Ads, Social Media Marketing, Branding Services"
        />
      </Helmet>

      <main
        className={styles.heroSection}
        style={{ backgroundImage: `url(${mainImage})` }}
      >
        <div className={styles.heroContainer}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine1}>
                The Digital
                <img src={bannerStar} alt="" className={styles.titleStar} />
              </span>

              <span className={styles.titleLine2}>
                Marketing Agency
              </span>

              <span className={styles.titleLine3}>
                For{" "}
                <span className={styles.titleHighlight}>
                  Higher ROI
                </span>
              </span>
            </h1>

            <p className={styles.heroDesc}>
             Revora Digital helps businesses improve online visibility,
              generate qualified leads, strengthen brand authority, 
              and achieve measurable growth through SEO, branding, performance marketing,
               and conversion-focused digital strategies. Many businesses struggle with low website traffic, 
               poor Google rankings, inconsistent leads, and weak online engagement. 
               Our customized digital marketing strategies solve these challenges through SEO, branding, 
               content marketing, and performance-driven campaigns focused on long-term growth.
            </p>

            <div className={styles.heroCtas}>
              <a href="/revoraform" className={styles.btnPrimary}>
                Get Started
                <HiArrowRight className={styles.btnIcon} />
              </a>

              <a href="/about-revora-digital" className={styles.btnSecondary}>
                Explore Services
                <HiArrowUpRight className={styles.btnSecIcon} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
