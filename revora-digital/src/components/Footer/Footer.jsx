import React from "react";
import { Link } from "react-router-dom";

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
  Company: [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/brandmarketing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ],

  Support: [
    { name: "Contact Us", path: "/revoraform" },
    { name: "FAQ", path: "/contact" },
    { name: "Customer Service", path: "/customer-service" },
    { name: "Terms Conditions", path: "/terms-and-conditions" },
  ],

  Legal: [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Cookie Policy", path: "/cookie-policy" },
    { name: "Copyright", path: "/copyright" },
  ],
};

/* ─── SOCIAL LINKS ───────────────────────────────────── */

const SOCIAL_LINKS = [
  {
    icon: <FaFacebookF />,
    label: "Facebook",
    url: "https://facebook.com",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    url: "https://instagram.com",
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    url: "https://linkedin.com",
  },
  {
    icon: <FaTwitter />,
    label: "Twitter",
    url: "https://twitter.com",
  },
];

/* ─── COMPONENT ──────────────────────────────────────── */

const Footer = ({ variant = "dark" }) => {

  const themeClass =
    variant === "light"
      ? styles.light
      : styles.dark;

  return (
    <footer className={`${styles.footer} ${themeClass}`}>
      <div className={styles.inner}>

        {/* ── BRAND ───────────────────────── */}
        <div className={styles.brand}>
          <Link className={styles.logoRow} to="/">
            <div className={styles.logoIcon}>
              <img
                src={image}
                alt="Revora Digital"
                className={styles.logoImage}
              />
            </div>

            {/* <span className={styles.heading}>
              Revora Digital
            </span> */}
          </Link>

          <p className={styles.desc}>
            Revora Digital is a performance-focused digital
            marketing agency helping businesses grow through
            SEO, paid advertising, social media marketing,
            branding, and website optimization.
          </p>
        </div>

        {/* ── NAVIGATION ─────────────────── */}
        {Object.entries(NAV).map(([title, links]) => (
          <div key={title} className={styles.col}>

            <div className={styles.colTitle}>
              {title}
            </div>

            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={styles.link}
              >
                {link.name}
              </Link>
            ))}
          </div>
        ))}

        {/* ── CONTACT INFO ───────────────── */}
        <div className={styles.contactCol}>

          <div className={styles.colTitle}>
            Contact Info
          </div>

          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.contactIcon} />

            <p>
              Hanudev Info Tech Park, Regus,
              Unit No, Block C, 6th Floor,
              SF No. 558/2, Udayampalayam Road,
              Nava India, Coimbatore – 641028
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

      {/* ── BOTTOM ─────────────────────── */}
      <div className={styles.bottom}>

        <hr className={styles.divider} />

        <div className={styles.bottomInner}>

          <span className={styles.copy}>
            &copy; {new Date().getFullYear()} Revora Digital.
            All rights reserved.
          </span>

          <div className={styles.socialRow}>

            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className={styles.socialBtn}
                aria-label={item.label}
                title={item.label}
              >
                {item.icon}
              </a>
            ))}

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;