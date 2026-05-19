import { useState, useEffect, useRef } from "react";
import {
  FaBullseye,
  FaEye,
  FaGem,
//   FaRocket,
//   FaChartLine,
//   FaUsers,
} from "react-icons/fa";

import styles from "./Mission.module.css";

/* ───────── Hook ───────── */
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

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
};

/* ───────── Data ───────── */
const cards = [
  {
    id: 1,
    icon: <FaBullseye />,
    tag: "OUR MISSION",
    title: "Drive Growth",
    description:
      "Empowering businesses with innovative digital marketing strategies that create measurable success.",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1000",
    // stat: "10x ROI",
  },

  {
    id: 2,
    icon: <FaEye />,
    tag: "OUR VISION",
    title: "Global Leadership",
    description:
      "To become a trusted digital marketing leader recognized for creativity and impactful results.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000",
    // stat: "50+ Countries",
  },

  {
    id: 3,
    icon: <FaGem />,
    tag: "OUR VALUES",
    title: "Transparency",
    description:
      "We believe in trust, collaboration, creativity, and long-term partnerships with every client.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000",
    // stat: "100% Trust",
  },
];

// const stats = [
//   {
//     icon: <FaRocket />,
//     value: "500+",
//     label: "Campaigns",
//   },

//   {
//     icon: <FaChartLine />,
//     value: "98%",
//     label: "Client Retention",
//   },

//   {
//     icon: <FaUsers />,
//     value: "200+",
//     label: "Team Members",
//   },
// ];

/* ───────── Component ───────── */
const Mission = () => {
 const [sectionRef, sectionVisible] = useInView(0.1);

  return (
    <div className={styles.mvv}>

      {/* HERO */}
      <div className={styles.mvvHero}>

        <span className={styles.mvvHeroTag}>
          Who We Are
        </span>

        <h2 className={styles.mvvHeroTitle}>
          Built on <span>Purpose</span>,
          <br />
          Driven by Impact
        </h2>

        <p className={styles.mvvHeroText}>
          Our mission, vision, and values shape every strategy
          and every result we deliver.
        </p>

      </div>

      {/* CARDS */}
      <section
        className={styles.mvvSection}
        ref={sectionRef}
      >
        <div className={styles.mvvGrid}>

          {cards.map((card) => (
          <div
  key={card.id}
  className={`${styles.mvvCard} ${
    sectionVisible ? styles.showCard : ""
  }`}
>

              {/* IMAGE */}
              <div className={styles.mvvCardImage}>

                <img
                  src={card.image}
                  alt={card.title}
                />

                <div className={styles.mvvOverlay}></div>

              </div>

              {/* CONTENT */}
              <div className={styles.mvvCardContent}>

                <div className={styles.mvvTop}>

                  <div className={styles.mvvIcon}>
                    {card.icon}
                  </div>

                  <span className={styles.mvvTag}>
                    {card.tag}
                  </span>

                </div>

                <h2 className={styles.mvvCardTitle}>
                  {card.title}
                </h2>

                <p className={styles.mvvCardText}>
                  {card.description}
                </p>

                <div className={styles.mvvDivider}></div>

                <div className={styles.mvvBottom}>

                  <div className={styles.mvvStat}>
                    {card.stat}
                  </div>

                  {/* <div className={styles.mvvBar}>
                    <div
                      className={styles.mvvFill}
                      style={{
                        width:
                          hovered === card.id ||
                          sectionVisible
                            ? "80%"
                            : "0%",
                      }}
                    ></div>
                  </div> */}

                </div>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* STATS */}
      {/* <div
        className={styles.mvvStats}
        ref={statsRef}
      >
        <div className={styles.mvvStatsContainer}>

          {stats.map((item, index) => (
            <div
              key={index}
              className={`${styles.mvvStatsCard} ${
                statsVisible ? styles.showStats : ""
              }`}
            >

              <div className={styles.mvvStatsIcon}>
                {item.icon}
              </div>

              <h3 className={styles.mvvStatsValue}>
                {item.value}
              </h3>

              <p className={styles.mvvStatsLabel}>
                {item.label}
              </p>

            </div>
          ))}

        </div>
      </div> */}

    </div>
  );
};

export default Mission;