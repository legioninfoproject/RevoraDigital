import React from "react";
import styles from "./Logostrips.module.css";

import brand1 from "../../assets/brand-image1.png";
import brand2 from "../../assets/brand-image2.png";
import brand3 from "../../assets/brand-image3.png";
// import brand1 from "../../assets/brand-image4.png";
// import brand1 from "../../assets/brand-image5.png";

const logos = [
  {
    id: 1,
    image: brand1,
    alt: "Brand 1",
  },
  {
    id: 2,
    image: brand2,
    alt: "Brand 2",
  },
  {
    id: 3,
    image: brand3,
    alt: "Brand 3",
  },
  {
    id: 4,
    image: brand1,
    alt: "Brand 4",
  },
  {
    id: 5,
    image: brand2,
    alt: "Brand 5",
  },
    {
    id: 5,
    image: brand3,
    alt: "Brand 5",
  },
];

const LogoItem = ({ image, alt }) => (
  <div className={styles.logoItem}>
    <img src={image} alt={alt} className={styles.logoImage} />
  </div>
);

const Logostrips = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.label}>
          Everything Your Brand Needs
        </span>

        <div className={styles.dividerLine}></div>
      </div>

      <div className={styles.scrollMask}>
        <div className={styles.track}>
          {/* First Set */}
          {logos.map((logo) => (
            <LogoItem key={logo.id} {...logo} />
          ))}

          {/* Duplicate Set */}
          {logos.map((logo) => (
            <LogoItem key={`${logo.id}-dup`} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logostrips;