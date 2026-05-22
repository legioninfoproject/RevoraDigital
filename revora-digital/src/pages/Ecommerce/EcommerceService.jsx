import React from "react";
import {
  FiMonitor,
  FiSearch,
  FiMapPin,
  FiGlobe,
  FiBarChart2,
  FiTrendingUp,
  // FiArrowRight,
} from "react-icons/fi";
import styles from "./EcommerceService.module.css";

/* ── Service data ── */
const SERVICES = [
  {
    icon: <FiMonitor />,
    title: "Increase Website Traffic",
    desc: "Drive targeted traffic from search engines, paid campaigns, and digital marketing channels to reach high-intent customers.",
  },
  {
    icon: <FiSearch />,
    title: "Improve Customer Trust",
    desc: "Create professional and consistent shopping experiences that build credibility and encourage repeat purchases.",
  },
  {
    icon: <FiMapPin />,
    title: "Optimize Product Visibility",
    desc: "Improve product rankings and discoverability through advanced e-commerce SEO strategies.",
  },
  {
    icon: <FiGlobe />,
    title: "Strengthen Customer Engagement",
    desc: "Connect with your audience through personalized marketing campaigns and customer-focused communication.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Performance Analytics",
    desc: "Track customer behavior, measure campaign performance, and identify opportunities for continuous growth.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Maximize Sales Performance",
    desc: "Use analytics, CRO optimization, and performance marketing to improve conversions and revenue growth.",
  },
];

const EcommerceServices = () => {
  return (
    <section className={styles.section}>
      {/* ── HEADER ── */}
      <div className={styles.header}>
        {/* eyebrow */}
        <div className={styles.eyebrow}>E-COMMERCE GROWTH</div>

        {/* heading */}
        <h2 className={styles.heading}>
          <div className={styles.heroTag}>
            <span>
              Build a <span className={styles.Highlight}>Strong Online Presence</span> for{" "}
              <span className={styles.tagHighlight}>
                Sustainable Growth
              </span>
            </span>
          </div>
        </h2>

        {/* paragraph */}
        <p className={styles.subText}>
          In today’s competitive digital market, e-commerce businesses need more
          than just an online store. They need visibility, trust, and strategic
          marketing to attract customers and drive sales consistently.
          <br />
          <br />
          Our e-commerce marketing strategies focus on improving search
          visibility, customer experience, and conversion performance to help
          brands grow successfully online.
        </p>

        {/* divider */}
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
};

export default EcommerceServices;