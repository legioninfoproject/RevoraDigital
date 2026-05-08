import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaCheck,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";

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
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  const themeClass = variant === "light"
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
            Optimize your success with our ROI-driven
            digital marketing agency.
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

        {/* ── NEWSLETTER ── */}
        <div className={styles.newsCol}>
          <div className={styles.newsTitle}>
            Join our Newsletter
          </div>

          {subscribed ? (
            <div className={styles.successBox}>
              <FaCheck className={styles.tickIcon} />

              <p className={styles.successText}>
                You're subscribed! Thanks for joining.
              </p>
            </div>
          ) : (
            <>
              <div className={styles.newsInputRow}>
                <input
                  className={styles.newsInput}
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    handleSubscribe()
                  }
                />

                <button
                  className={styles.newsBtn}
                  onClick={handleSubscribe}
                  aria-label="Subscribe"
                >
                  <HiArrowRight />
                </button>
              </div>

              <p className={styles.newsDesc}>
                We will send you weekly updates
                for your better product management.
              </p>
            </>
          )}
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