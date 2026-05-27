import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";


import { IoIosArrowRoundForward } from "react-icons/io";
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
} from "react-icons/ri";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        
        {/* LOGO */}
        <a href="/" className={styles.logo}>
          <img src={logo} alt="Revora Digital" className={styles.logoImg} />
        </a>

        {/* DESKTOP MENU */}
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>
              Home
            </a>
          </li>

          <li className={styles.navItem}>
            <a href="/about-revora-digital" className={styles.navLink}>
              About Us
            </a>
          </li>

          {/* SERVICES DROPDOWN */}
          <li
            className={styles.navItem}
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <button
              className={styles.dropdownBtn}
              onClick={() => setServiceOpen(!serviceOpen)}
            >
              Services

              <span className={styles.chevron}>
                {serviceOpen ? (
                  <RiArrowDropUpLine />
                ) : (
                  <RiArrowDropDownLine />
                )}
              </span>
            </button>

            <div
              className={`${styles.dropdownMenu} ${
                serviceOpen ? styles.dropdownOpen : ""
              }`}
            >
              <a
                href="/digital-marketing-services"
                className={styles.dropdownItem}
              >
                Digital Marketing
              </a>

              <a
                href="/brand-marketing-services"
                className={styles.dropdownItem}
              >
                Brand Marketing
              </a>

              <a
                href="/ecommerce-marketing-services"
                className={styles.dropdownItem}
              >
                Ecommerce Marketing
              </a>
            </div>
          </li>

          {/* <li className={styles.navItem}>
            <a href="/blog" className={styles.navLink}>
              Blog
            </a>
          </li> */}

          <li className={styles.navItem}>
            <a href="/contact-revora-digital" className={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>

        {/* CTA BUTTON */}
        <a href="/revoraform" className={styles.ctaButton}>
          Get in Touch
          <IoIosArrowRoundForward className={styles.ctaArrow} />
        </a>

        {/* MOBILE HAMBURGER */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`${styles.bar} ${
              mobileOpen ? styles.bar1Open : ""
            }`}
          ></span>

          <span
            className={`${styles.bar} ${
              mobileOpen ? styles.bar2Open : ""
            }`}
          ></span>

          <span
            className={`${styles.bar} ${
              mobileOpen ? styles.bar3Open : ""
            }`}
          ></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`${styles.mobileMenu} ${
          mobileOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <ul className={styles.mobileNavLinks}>
          <li>
            <a
              href="/"
              className={styles.mobileNavLink}
              onClick={() => setMobileOpen(false)}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/about-revora-digital"
              className={styles.mobileNavLink}
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </a>
          </li>

          {/* MOBILE SERVICES */}
          <li>
            <button
              className={styles.mobileDropdownBtn}
              onClick={() => setServiceOpen(!serviceOpen)}
            >
              Services

              {serviceOpen ? (
                <RiArrowDropUpLine />
              ) : (
                <RiArrowDropDownLine />
              )}
            </button>

            {serviceOpen && (
              <div className={styles.mobileDropdown}>
                <a
                  href=" /digital-marketing-services"
                  className={styles.mobileDropdownItem}
                >
                  Digital Marketing
                </a>

                <a
                  href="/brand-marketing-services"
                  className={styles.mobileDropdownItem}
                >
                  Brand Marketing
                </a>

                <a
                  href="/ecommerce-marketing-services"
                  className={styles.mobileDropdownItem}
                >
                  Ecommerce Marketing
                </a>
              </div>
            )}
          </li>

          {/* <li>
            <a
              href="/blog"
              className={styles.mobileNavLink}
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </a>
          </li> */}

          <li>
            <a
              href="/contact-revora-digital"
              className={styles.mobileNavLink}
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </a>
          </li>

          <li>
            <a href="/revoraform" className={styles.mobileCtaButton}>
              Get in Touch
              <IoIosArrowRoundForward />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;