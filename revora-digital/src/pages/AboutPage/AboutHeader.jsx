import React from 'react';
import styles from './AboutHeader.module.css';
import image from '../../assets/about-section.jpg';

/* ── Icon helpers (inline SVG so no extra deps) ── */


/* ── Main Component ── */
const AboutHeader = () => {
  return (
   <section className={styles.aboutSection} aria-label="About Us">

<h1 className={styles.aboutLabel}>About Revora Digital</h1>

<div className={styles.aboutGrid}>

<div className={styles.aboutLeft}>

<h2 className={styles.aboutHeading}>
  We’re Here to Drive Your {' '}
  <span className={styles.highlight}>Digital Success</span>
</h2>

<p className={styles.aboutBody}>

 Revora Digital is a performance driven digital marketing 
 agency focused on helping businesses grow, improve online 
 visibility, and generate measurable results. We combine creativity,
  strategy, and data driven marketing solutions to strengthen brand presence, 
  increase engagement, and support long term business growth.
   Whether you are a startup or an established business,
  our customized digital marketing strategies are designed to maximize visibility, 
  leads, and return on investment.

</p>

</div>

<div className={styles.aboutRight}>

<span className={`${styles.dotAccent} ${styles.d1}`} />
<span className={`${styles.dotAccent} ${styles.d2}`} />

<div className={styles.aboutImageWrapper}>

<img
  src={image}
  alt="Revora Digital team collaborating"
/>



</div>
</div>
</div>
</section>
  );
};

export default AboutHeader;