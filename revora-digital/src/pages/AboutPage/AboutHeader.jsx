import React from 'react';
import styles from './AboutHeader.module.css';
import {
  FiBarChart2,
  FiAward,
  FiStar,
  FiHeadphones,
//   FiUsers,
} from "react-icons/fi";
import image from '../../assets/about-section.jpg';

/* ── Icon helpers (inline SVG so no extra deps) ── */


/* ── Animated counter ── */
const features = [
  {
    icon: <FiBarChart2 />,
    label: "Data-Driven Strategies",
  },
  {
    icon: <FiAward />,
    label: "Creative & Innovative Team",
  },
  {
    icon: <FiStar />,
    label: "Proven Track Record",
  },
  {
    icon: <FiHeadphones />,
    label: "Dedicated Client Support",
  },
];



/* ── Main Component ── */
const AboutHeader = () => {
  return (
   <section className={styles.aboutSection} aria-label="About Us">

<p className={styles.aboutLabel}>About Us</p>

<div className={styles.aboutGrid}>

<div className={styles.aboutLeft}>

<h2 className={styles.aboutHeading}>
  We're Here to Drive Your{' '}
  <span className={styles.highlight}>Digital Success</span>
</h2>

<p className={styles.aboutBody}>
  Revora Digital is a results-driven digital marketing agency dedicated
  to helping businesses grow online.
</p>

 <div className={styles.aboutFeatures}>
            {features.map((feature, index) => (
              <div
                className={styles.featureCard}
                key={index}
              >
                <div className={styles.featureIcon}>
                  {feature.icon}
                </div>

                <span className={styles.featureLabel}>
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
</div>

<div className={styles.aboutRight}>

<span className={`${styles.dotAccent} ${styles.d1}`} />
<span className={`${styles.dotAccent} ${styles.d2}`} />

<div className={styles.aboutImageWrapper}>

<img
  src={image}
  alt="Revora Digital team collaborating"
/>

{/* <div className={styles.statsBadge}>

  <div className={styles.statsBadgeIcon}>
    <Icon name="users" />
  </div>

  <div className={styles.statsBadgeText}>

    <div className={styles.number}>
      <Counter target={200} />+
    </div>

    <div className={styles.label}>
      Happy Clients
    </div>

  </div>
</div> */}

</div>
</div>
</div>
</section>
  );
};

export default AboutHeader;