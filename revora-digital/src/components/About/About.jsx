import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

import aboutImage from "../../assets/about-image.png";
import aboutShape2 from "../../assets/about-shape2.png";

const stats = [
  { value: "12+", label: "Years of experience" },
  { value: "10K", label: "Completed Projects" },
  { value: "5K", label: "Trusted Customers" },
];

/* Intersection Animation Hook */
const useInView = (threshold = 0.2) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
};


const About = () => {
  const [sectionRef, inView] = useInView(0.15);

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* LEFT IMAGE */}
      <div
        className={`${styles.imageBlock} ${
          inView ? styles.slideInLeft : ""
        }`}
      >
        {/* Decorative shape */}
        <img
          src={aboutShape2}
          alt=""
          className={styles.shapeBehind}
          aria-hidden="true"
        />

        {/* Floating Shapes */}
        <div className={styles.squareTeal}></div>
        <div className={styles.squareYellow}></div>

        {/* Main Image */}
        <div className={styles.photoWrapper}>
          <img
            src={aboutImage}
            alt="Revora Digital Team"
            className={styles.photo}
          />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div
        className={`${styles.content} ${
          inView ? styles.slideInRight : ""
        }`}
      >
        <span className={styles.eyebrow}>ABOUT US</span>

        <h2 className={styles.heading}>
          Why{" "}
          <span className={styles.brandGreen}>
            Revora Digital
          </span>
          <br />
          Should Be Your Top Choice
        </h2>

        <p className={styles.body}>
          Choose Revora Digital for unparalleled digital success — where
          expertise, innovation, and strategic brilliance converge to elevate
          your business to new heights.{" "}
          <a href="/" className={styles.readMore}>
            Read More
          </a>
        </p>

        {/* STATS */}
        <div className={styles.stats}>
          {stats.map((item, index) => (
            <div
              key={index}
              className={styles.statItem}
            >
              <span className={styles.statValue}>
                {item.value}
              </span>

              <span className={styles.statLabel}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
     
    </section>
   
   
  );
};

export default About;