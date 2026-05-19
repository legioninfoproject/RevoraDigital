import { useState, useEffect, useRef } from "react";
import {
  FaBullseye,
  FaEye,
  FaGem,

} from "react-icons/fa";
import image1 from "../../assets/mission.jpg";
import image2 from "../../assets/vission.jpg";
import image3 from "../../assets/ourvalues.jpg";
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
      "Our mission is to help businesses grow through innovative digital marketing solutions that improve online visibility, generate quality leads, strengthen brand identity, and deliver measurable business results. We focus on creating strategies that support sustainable growth and long term success.",
    image:image1,
   
  },

  {
    id: 2,
    icon: <FaEye />,
    tag: "OUR VISION",
    title: "Global Leadership",
    description:"Our vision is to become a trusted digital marketing partner for businesses by delivering creative strategies, impactful campaigns, and performance driven solutions. We aim to help brands grow confidently and succeed in the evolving digital landscape.",
    image:image2,
      
    
  },

  {
    id: 3,
    icon: <FaGem />,
    tag: "OUR VALUES",
    title: "Transparency",
    description:"At Revora Digital, we believe strong business relationships are built on transparency, innovation, and measurable results. Our team is committed to honest communication, creative thinking, client focused strategies, and long term business growth through effective digital marketing solutions.",
     image:image3
  
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
          Built on <span className={styles.mvvHeroSpan}>Purpose</span>,
          <br />
          Driven by Results
        </h2>

        <p className={styles.mvvHeroText}>
          Our approach combines creativity, strategy, technology, and performance analytics to 
          create campaigns that generate visibility, engagement, and conversions. 
          We continuously adapt to changing digital trends and search engine updates to 
          help businesses stay ahead in the competitive online market.
        Unlike agencies that rely on generic marketing methods, Revora Digital 
         focuses on innovation, transparency, and long term business growth. Every campaign is designed to create meaningful and measurable results.

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

                  <h2>
                    <span className={styles.mvvTag}>
                    {card.tag}
                  </span>
                  </h2>

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