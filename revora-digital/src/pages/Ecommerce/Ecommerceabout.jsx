import React, { useState } from "react";
import styles from "./Ecommerceabout.module.css";

const services = [
  {
    title: "Optimize Your Website",
    description:
      "We improve website speed, performance, and customer experience to create smooth and engaging shopping journeys.",
    includes: [
      "Website Speed Optimization",
      "Mobile Responsiveness",
      "UX/UI Improvements",
      "Core Web Vitals Optimization",
      "Performance Monitoring",
    ],
    benefits: [
      "Faster website loading",
      "Better shopping experience",
      "Lower bounce rates",
    ],
  },
  {
    title: "E-commerce SEO",
    description:
      "Increase your product visibility and rank higher on search engines with advanced SEO strategies.",
    includes: [
      "Product Page SEO",
      "Technical SEO",
      "Keyword Research",
      "Internal Linking",
    ],
    benefits: [
      "Higher organic traffic",
      "Better search rankings",
      "Long-term online growth",
    ],
  },
  {
    title: "Google My Business",
    description:
      "Strengthen your local online presence and attract nearby customers.",
    includes: [
      "Business Profile Setup",
      "Google Maps Optimization",
      "Review Management",
    ],
    benefits: [
      "Better local visibility",
      "Improved credibility",
      "More customer inquiries",
    ],
  },
  {
    title: "Google Analytics",
    description:
      "Track customer behavior and gain valuable business insights.",
    includes: [
      "Analytics Setup",
      "Traffic Analysis",
      "Goal Tracking",
      "Conversion Monitoring",
    ],
    benefits: [
      "Better audience understanding",
      "Improved marketing performance",
      "Accurate tracking",
    ],
  },
  {
    title: "CRO Optimization",
    description:
      "Increase sales and conversions through strategic optimization.",
    includes: [
      "Landing Page Optimization",
      "A/B Testing",
      "CTA Optimization",
    ],
    benefits: [
      "Higher conversion rates",
      "Better ROI",
      "Increased sales",
    ],
  },
];

const Ecommerceabout = () => {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>WORK WE DO</span>

        <h2 className={styles.heading}>
          Our <span>E-commerce</span> Marketing Services
        </h2>

        <div className={styles.accordion}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.item} ${
                active === index ? styles.active : ""
              }`}
            >
              <button
                className={styles.title}
                onClick={() => setActive(active === index ? null : index)}
              >
                <span>{service.title}</span>
                <span>{active === index ? "−" : "+"}</span>
              </button>

              {active === index && (
                <div className={styles.content}>
                  <p>{service.description}</p>

                  <div className={styles.grid}>
                    <div>
                      <h4>Services Include</h4>
                      <ul>
                        {service.includes.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4>Benefits</h4>
                      <ul>
                        {service.benefits.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecommerceabout;