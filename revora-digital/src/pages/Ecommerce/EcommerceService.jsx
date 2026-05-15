import React from "react";
import {
  FiMonitor,
  FiSearch,
  FiMapPin,
  FiGlobe,
  FiBarChart2,
  FiTrendingUp,
//   FiArrowRight,
} from "react-icons/fi";
import styles from "./EcommerceService.module.css";

/* ── Service data ── */
const SERVICES = [
  {
    icon: <FiMonitor />,
    title: "Optimize Your Website",
    desc: "Improve speed, UX, and conversions for a seamless shopping experience.",
  },
  {
    icon: <FiSearch />,
    title: "E-commerce SEO",
    desc: "Rank higher on search engines and drive high-intent organic traffic.",
  },
  {
    icon: <FiMapPin />,
    title: "Google My Business",
    desc: "Enhance your local presence and attract more nearby customers.",
  },
  {
    icon: <FiGlobe />,
    title: "Google Search",
    desc: "Capture high-intent customers actively searching for your products.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Console Google Analytics",
    desc: "Track user behavior and measure what truly drives sales.",
  },
  {
    icon: <FiTrendingUp />,
    title: "CRO Optimization",
    desc: "Increase conversions with data-driven testing and smart optimization.",
  },
];

const EcommerceServices = ()=> {
  return (
    <section className={styles.section}>
      {/* ── HEADER ── */}
      <div className={styles.header}>
        {/* eyebrow */}
        <div className={styles.eyebrow}>What We Do</div>

        {/* heading — using the exact structure you requested */}
        <h2 className={styles.heading}>
          <div className={styles.heroTag}>
            <span>
              Our{" "}
              <span className={styles.tagHighlight}>E-commerce</span>
              {" "}Marketing Services
            </span>
          </div>
        </h2>

        {/* Yellow separator line */}
        <div className={styles.divider}>
          <div className={styles.dividerLine} />
          <div className={styles.dividerDot} />
          <div className={styles.dividerLine} />
        </div>
      </div>

      {/* ── GRID ── */}
      <div className={styles.grid}>
        {SERVICES.map((svc, i) => (
          <div className={styles.card} key={i}>
            {/* Icon */}
            <div className={styles.iconWrap}>{svc.icon}</div>

            {/* Text */}
            <h3 className={styles.cardTitle}>{svc.title}</h3>
            <p className={styles.cardDesc}>{svc.desc}</p>

            {/* Arrow link */}
            {/* <a href="contact" className={styles.cardArrow}>
              Learn more
              <span className={styles.arrowIcon}>
                <FiArrowRight />
              </span>
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default EcommerceServices