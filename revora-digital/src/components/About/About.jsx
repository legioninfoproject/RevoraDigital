import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

import aboutImage from "../../assets/about-image.png";
import aboutShape2 from "../../assets/about-shape2.png";

const stats = [
  { value: "SEO", label: "Driven Results" },
  { value: "Brand", label: "Growth Focus" },
  { value: "Ads", label: "Reach" },
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
         Revora Digital helps businesses improve online visibility, generate qualified leads,
          strengthen brand authority, and achieve measurable growth through result-driven digital marketing strategies. 
          From SEO services and branding to social media marketing, ecommerce marketing, and performance campaigns,
           we create customized solutions designed to improve engagement, search rankings, and business growth.
           <br></br>
           Businesses often struggle with low website traffic, 
           poor search visibility, inconsistent lead generation, 
           and weak online engagement. Our team focuses on SEO-driven digital marketing,
            audience-focused strategies, and conversion optimization to help businesses 
            achieve sustainable growth and stronger ROI.{" "}
          <a href="/about-revora-digital" className={styles.readMore}>
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