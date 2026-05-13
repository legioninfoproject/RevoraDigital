import React, { useState, useEffect, useRef } from "react";
import styles from "./BlogHeader.module.css";
import BlogImage from "../../assets/blogImage.jpg";

// ── Floating icon cards (matching screenshot icons) ──────────────────────────
const FloatingCard = ({ children, className, delay }) => (
  <div className={`${styles.floatingCard} ${className}`} style={{ animationDelay: delay }}>
    {children}
  </div>
);

// Simple SVG icons
const BarChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
    <rect x="3" y="12" width="4" height="9" rx="1" />
    <rect x="10" y="7" width="4" height="14" rx="1" />
    <rect x="17" y="3" width="4" height="18" rx="1" />
  </svg>
);

const LightbulbIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 4 12.9V17H8v-2.1A7 7 0 0 1 12 2z" />
  </svg>
);

const MegaphoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
    <path d="M3 11v2a2 2 0 0 0 2 2h1l2 4h2l-1-4h1a1 1 0 0 0 .9-.55L19 8V6L9.1 4.05A1 1 0 0 0 8 5v7" />
    <path d="M19 6v8" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// ── Mock blog image (laptop with BLOG on screen) ────────────────────────────
const BlogIllustration = () => (
  <div className={styles.illustrationWrap}>
    
    {/* Background Circle */}
    <div className={styles.circleBg}></div>

    {/* Main Laptop Image */}
    <div className={styles.imageCard}>
      <img
        src={BlogImage}
        alt="Blog Laptop"
        className={styles.blogLaptop}
      />
    </div>

    {/* Floating Cards */}
    <FloatingCard className={styles.cardTeal} delay="0s">
      <BarChartIcon />
    </FloatingCard>

    <FloatingCard className={styles.cardPurple} delay="0.4s">
      <LightbulbIcon />
    </FloatingCard>

    <FloatingCard className={styles.cardOrange} delay="0.8s">
      <MegaphoneIcon />
    </FloatingCard>

    {/* Small Dots */}
    <div className={styles.dotsTop}></div>
    <div className={styles.dotsBottom}></div>
  </div>
);

// ── Main Component ───────────────────────────────────────────────────────────
const BlogHeader = () => {
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.visible : ""}`}
    >
      {/* Background mesh blobs */}
      <span className={styles.blob1} />
      <span className={styles.blob2} />
      <span className={styles.blob3} />

      <div className={styles.inner}>
        {/* ── LEFT ── */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>Blog &amp; Insights</p>

          <h1 className={styles.heading}>
            <span className={styles.accentLine}>
              Digital Insights
              <span className={styles.underlineBar} />
            </span>
            <br />
            That Drive Real
            <br />
            Business Growth
          </h1>

          <p className={styles.body}>
            Explore expert tips, industry trends, and proven strategies
            <br />
            to help your business grow smarter in the digital world.
          </p>

          {/* Search bar */}
          <div className={styles.searchBar}>
            <span className={styles.searchIcon}>
              <SearchIcon />
            </span>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className={styles.searchBtn} type="button" aria-label="Search">
              <ArrowIcon />
            </button>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className={styles.right}>
          <BlogIllustration />
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;