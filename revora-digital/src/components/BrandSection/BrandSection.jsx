import React, { useEffect, useRef, useState } from "react";
import styles from "./BrandSection.module.css";

import { FaBullhorn } from "react-icons/fa6";
import { RiAdvertisementLine } from "react-icons/ri";
import { HiShoppingCart } from "react-icons/hi";

/* Intersection Observer */
const useInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};

/* Arrow Icon */
const ArrowRight = () => (
  <svg
    viewBox="0 0 14 14"
    fill="none"
    width="14"
    height="14"
  >
    <path
      d="M2 7h10M8 3l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* Services Data */
const services = [
  {
    icon: <FaBullhorn />,
    title: "Brand Marketing",
    body:
      "Build a powerful brand identity that resonates with your audience and creates a lasting emotional connection.",
  },

  {
    icon: <RiAdvertisementLine />,
    title: "Digital Marketing",
    body:
      "From SEO to paid campaigns, we create integrated strategies that drive traffic and maximize conversions.",
  },

  {
    icon: <HiShoppingCart />,
    title: "Ecommerce Marketing",
    body:
      "Boost your online sales with conversion-focused ecommerce marketing strategies and funnel optimization.",
  },
];

const BrandSection = () => {
  const [ref, inView] = useInView();

  return (
    <section className={styles.section} ref={ref}>
      {/* TOP CONTENT */}
      <div
        className={`${styles.topContent} ${
          inView ? styles.visibleTop : ""
        }`}
      >
        <span className={styles.eyebrow}>
          SERVICES
        </span>

        <h2 className={styles.heading}>
          Services {" "}
          <span className={styles.highlight}>
            We Offer
          </span>
          <br />
         For Your Business
        </h2>

        <p className={styles.description}>
          We help brands grow faster through
          strategic digital solutions, creative
          campaigns, and performance-driven
          marketing experiences.
        </p>
      </div>

      {/* SERVICE CARDS */}
      <div
        className={`${styles.grid} ${
          inView ? styles.visible : ""
        }`}
      >
        {services.map((service, index) => (
          <div
            className={styles.card}
            key={index}
            style={{
              animationDelay: `${index * 0.15}s`,
            }}
          >
            {/* Icon */}
            <div className={styles.iconWrap}>
              <div className={styles.icon}>
                {service.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className={styles.cardTitle}>
              {service.title}
            </h3>

            {/* Body */}
            <p className={styles.cardBody}>
              {service.body}
            </p>

            {/* Link */}
            <a href="/" className={styles.cardLink}>
              Explore More
              <ArrowRight />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandSection;