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
    desc: "Build a powerful identity that connects with your audience and creates lasting impressions.",
    icon: <FiLayers />,
  },
  {
    id: "02",
    title: "Digital Marketing",
    desc: "Creative campaigns and smart strategies that help your business grow online faster.",
    icon: <FiTrendingUp />,
  },
  {
    id: "03",
    title: "Ecommerce Marketing",
    desc: "Boost online sales with performance-driven strategies designed for modern ecommerce brands.",
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
              Content that
              <br />
              <em>commands</em> attention
            </h2>
          </div>

          <p
            className={`${style.sub} ${
              inView ? style.visible : ""
            }`}
          >
            We blend strategic thinking with sharp creative execution —
            turning ideas into content that actually does something.
          </p>
        </div>

        {/* Divider */}
        <div
          className={`${style.divider} ${
            inView ? style.visible : ""
          }`}
        />

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