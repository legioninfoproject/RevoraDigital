import { useState, useEffect, useRef } from "react";
import {
  FiLayers,
  FiTrendingUp,
  FiShoppingBag
} from "react-icons/fi";

import style from "./WhatWeDo.module.css";

const services = [
  {
    id: "01",
    title: "Brand Marketing",
    desc: "Strong branding helps businesses build trust, recognition, and customer loyalty. Revora Digital creates professional and memorable brand identities that help businesses stand out in competitive markets.",
    icon: <FiLayers />,
  },
  {
    id: "02",
    title: "Digital Marketing",
    desc: "Our digital marketing services help businesses strengthen their online presence, improve brand visibility, and connect with potential customers through targeted and performance driven strategies.",
    icon: <FiTrendingUp />,
  },
  {
    id: "03",
    title: "Ecommerce Marketing",
    desc: "Growing an online store requires more than listing products. Our ecommerce marketing services are designed to improve product visibility, customer engagement, and online sales performance through strategic marketing solutions.",
    icon: <FiShoppingBag />,
  },
];

function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, threshold]);

  return inView;
}

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);

//   const [hovered, setHovered] = useState(null);

  return (
    <section className={style.section} ref={sectionRef}>
      <div className={style.inner}>
        
        {/* Header */}
        <div className={style.header}>
          <div>
            <p
              className={`${style.label} ${
                inView ? style.visible : ""
              }`}
            >
              What We Do
            </p>

            <h2
              className={`${style.heading} ${
                inView ? style.visible : ""
              }`}
            >
              Digital Marketing Solutions
              <br />
             <span className={style.highlight}>Designed for Growth</span>
            </h2>
          </div>
          <p
            className={`${style.sub} ${
              inView ? style.visible : ""
            }`}
          >
          At Revora Digital, we provide complete digital marketing solutions designed to help businesses improve online visibility, attract the right audience, and grow revenue. Our services focus on solving common business challenges such as low website traffic, poor brand recognition, weak customer engagement, and low conversion rates.
We combine creativity, technology, and performance analytics to create marketing strategies that deliver measurable business results and long term growth.

          </p>
        </div>

        {/* Divider */}
        {/* <div
          className={`${style.divider} ${
            inView ? style.visible : ""
          }`}
        /> */}

        {/* Cards */}
        {/* Cards */}
<div className={style.grid}>
  {services.map((s) => (
   <div
  key={s.id}
  className={`${style.card} ${
    inView ? style.visible : ""
  }`}
>
      <div className={style.cardNum}>{s.id}</div>

      <div className={style.cardIcon}>
        {s.icon}
      </div>

      <div className={style.cardContent}>
        <h3 className={style.cardTitle}>
          {s.title}
        </h3>

        <p className={style.cardDesc}>
          {s.desc}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default WhatWeDo;