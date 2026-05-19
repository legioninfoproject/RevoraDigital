import { React } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

import styles from "./Footer.module.css";
import image from "../../assets/logo.png";

/* ─── NAV DATA ───────────────────────────────────────── */
const NAV = {
  Company: ["About Us", "Services", "Blog", "Contact"],
  Support: ["Contact Us", "FAQ", "Customer Service", "Terms Conditions"],
  Legal: ["Privacy Policy", "Cookie Policy", "Copyright"],
};

/* ─── COMPONENT ──────────────────────────────────────── */
const Footer = ({ variant = "dark" }) => {

  const themeClass =
    variant === "light"
      ? styles.light
      : styles.dark;

  return (
    <footer className={`${styles.footer} ${themeClass}`}>
      <div className={styles.inner}>

        {/* ── BRAND ── */}
        <div className={styles.brand}>
          <a className={styles.logoRow} href="/">
            <div className={styles.logoIcon}>
              <img
                src={image}
                alt="Revora Digital"
                className={styles.logoImage}
              />
            </div>

            <span className={styles.heading}>
              Revora Digital
            </span>
          </a>

          <p className={styles.desc}>
            Revora Digital is a performance-focused digital
            marketing agency helping businesses grow through
            SEO, paid advertising, social media marketing,
            branding, and website optimization.
          </p>
        </div>

        {/* ── NAVIGATION ── */}
        {Object.entries(NAV).map(([title, links]) => (
          <div key={title} className={styles.col}>
            <div className={styles.colTitle}>
              {title}
            </div>

            {links.map((link) => (
              <a
                key={link}
                href="/"
                className={styles.link}
              >
                {link}
              </a>
            ))}
          </div>
        ))}

        {/* ── ADDRESS ── */}
        <div className={styles.contactCol}>
          <div className={styles.colTitle}>
            Contact Info
          </div>

          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.contactIcon} />

            <p>
              Hanudev Info Tech Park, Regus, Unit No,
              Block C, 6th Floor, SF No. 558/2,
              Udayampalayam Road, Nava India,
              Coimbatore – 641028
            </p>
          </div>

          <div className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} />

            <a
              href="mailto:revoradigital.info@gmail.com"
              className={styles.contactLink}
            >
              revoradigital.info@gmail.com
            </a>
          </div>

          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.contactIcon} />

            <a
              href="tel:04226738215"
              className={styles.contactLink}
            >
              04226738215
            </a>
          </div>

          <div className={styles.contactItem}>
            <FaClock className={styles.contactIcon} />

            <p>
              Mon - Fri: 10:00 - 19:00
              <br />
              Closed on Weekends
            </p>
          </div>
        </div>
      </div>

      {/* ── BOTTOM ── */}
      <div className={styles.bottom}>
        <hr className={styles.divider} />

        <div className={styles.bottomInner}>
          <span className={styles.copy}>
            &copy; {new Date().getFullYear()} Revora Digital.
            All rights reserved.
          </span>

          <div className={styles.socialRow}>
            {[
              {
                icon: <FaFacebookF />,
                label: "Facebook",
              },
              {
                icon: <FaInstagram />,
                label: "Instagram",
              },
              {
                icon: <FaLinkedinIn />,
                label: "LinkedIn",
              },
              {
                icon: <FaTwitter />,
                label: "Twitter",
              },
            ].map(({ icon, label }) => (
              <button
                key={label}
                className={styles.socialBtn}
                aria-label={label}
                title={label}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;