import React, { useEffect, useRef, useState } from "react";
import styles from "./ContactInfo.module.css";

// Replace these imports with your actual image paths
import img1 from "../../assets/1.jpeg"; // conference room
// import img2 from "../../assets/2.jpeg"; // open office / window
import img3 from "../../assets/3.jpeg"; // co-working desk
import img4 from "../../assets/4.jpeg"; // building exterior
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
} from "react-icons/fi";

const contactItems = [
  {
    icon: <FiPhone />,
    label: "Phone",
    value: "04226738215",
    delay: "0.3s",
  },
  {
    icon: <FiMail />,
    label: "Email",
    value: "revoradigital.info@gmail.com",
    delay: "0.42s",
  },
  {
    icon: <FiMapPin />,
    label: "Address",
    value: "Hanudev Info Tech Park, Regus, Unit No, Block C, 6th Floor, SF No. 558/2, Udayampalayam Road, Nava India, Coimbatore – 641028",
    delay: "0.54s",
  },
  {
    icon: <FiClock />,
    label: "Working Hours",
    value: "Mon – Fri: 9:00 AM – 6:00 PM\nSat – : 9:00 AM – 2:00 PM\nSun: Closed",
    delay: "0.66s",
  },
];

const ContactInfo = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className={`${styles.section} ${visible ? styles.visible : ""}`}>
      {/* subtle background pattern */}
      <span className={styles.bgDot} />

      <div className={styles.inner}>
        {/* ── LEFT COLUMN ── */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>Contact Information</p>
          <h2 className={styles.heading}>We're Here to Help</h2>
          <p className={styles.sub}>
            Reach out to us through any of the following channels.
            We're available and ready to assist you with your needs.
          </p>

          <ul className={styles.list}>
            {contactItems.map((item) => (
              <li
                key={item.label}
                className={styles.item}
                style={{ "--delay": item.delay }}
              >
                <span className={styles.iconBubble}>{item.icon}</span>
                <div>
                  <span className={styles.itemLabel}>{item.label}</span>
                  <span className={styles.itemValue}>
                    {item.value.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < item.value.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── RIGHT COLUMN: image mosaic ── */}
        <div className={styles.right}>
          {/* Large image — spans rows 1–2 */}
          <div className={`${styles.imgWrap} ${styles.imgLarge}`}>
            <img src={img4} alt="Building exterior" className={styles.img} />
          </div>

          {/* Top-right */}
          <div className={`${styles.imgWrap} ${styles.imgTR}`}>
            <img src={img1} alt="Conference room" className={styles.img} />
          </div>

          {/* Bottom-right */}
          <div className={`${styles.imgWrap} ${styles.imgBR}`}>
            <img src={img3} alt="Co-working desks" className={styles.img} />
          </div>

          {/* Floating card */}
          <div className={styles.floatingCard}>
            <p className={styles.cardTitle}>Let's Connect</p>
            <p className={styles.cardText}>We're ready to bring your ideas to life.</p>
            <span className={styles.cardWave}>〰</span>
          </div>

          {/* Accent dot cluster */}
          <span className={styles.dotCluster} />
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;