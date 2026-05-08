import styles from "./Header.module.css";
import heroImg from "../../assets/hero-image.png";
import bannerStar from "../../assets/banner-tittle-star.webp";
import bannerInfo from "../../assets/banner-info.webp";
import { HiArrowRight } from "react-icons/hi2";
import { HiArrowUpRight } from "react-icons/hi2";

const Header = () => {
  return (
    <main className={styles.heroSection}>
      {/* ── Background ── */}
      <div className={styles.heroBg}>
        <img
          src="https://marketi-nextjs-live.vercel.app/assets/images/banner/banner-bg.png"
          alt=""
          className={styles.heroBgImg}
        />
      </div>

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
            Choose success with our digital marketing agency, dedicated to
            delivering higher ROI that propels your business to new heights.
          </p>

          {/* CTA row */}
          <div className={styles.heroCtas}>
            <a href="/" className={styles.btnPrimary}>
              Try it Now
              <HiArrowRight className={styles.btnIcon} />
            </a>
            <a href="/" className={styles.btnSecondary}>
              Explore More
              <HiArrowUpRight className={styles.btnSecIcon} />
            </a>
          </div>

          {/* Stats row */}
          {/* <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>12K+</span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNum}>95%</span>
              <span className={styles.statLabel}>Success Rate</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNum}>8Y+</span>
              <span className={styles.statLabel}>Experience</span>
            </div>
          </div> */}
        </div>

        {/* ── RIGHT — Hero Image ── */}
        <div className={styles.heroRight}>
          {/* Wave decoration (SVG) */}
          <svg
            className={styles.waveDecor}
            viewBox="0 0 700 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 200 C80 120, 120 260, 200 180 C280 100, 320 240, 400 160
                 C480 80, 520 220, 600 140 C660 80, 690 160, 700 140"
              stroke="#0a6e70"
              strokeWidth="2.5"
              strokeDasharray="6 4"
              fill="none"
              opacity="0.35"
            />
            <path
              d="M0 240 C80 160, 120 300, 200 220 C280 140, 320 280, 400 200
                 C480 120, 520 260, 600 180 C660 120, 690 200, 700 180"
              stroke="#8b1a1a"
              strokeWidth="2"
              fill="none"
              opacity="0.25"
            />
          </svg>

          {/* Floating info cards */}
          <img src={bannerInfo} alt="Analytics cards" className={styles.bannerInfo} />

          {/* Hero person image */}
          <img src={heroImg} alt="Marketing expert" className={styles.heroImg} />

          {/* Floating badge — top left */}
          <div className={styles.badgeTopLeft}>
            <span className={styles.badgeDot} />
            <span className={styles.badgeText}>
              <strong>500+</strong> Projects Done
            </span>
          </div>

          {/* Floating badge — bottom right */}
          <div className={styles.badgeBottomRight}>
            <div className={styles.badgeIcon}>📈</div>
            <div>
              <div className={styles.badgeBig}>3.5x</div>
              <div className={styles.badgeSub}>Average ROI</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;