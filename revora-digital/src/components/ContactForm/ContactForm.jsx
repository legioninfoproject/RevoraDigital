import React from "react";
import styles from "./ContactForm.module.css";
import { HiArrowRight } from "react-icons/hi2";

const ContactForm = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <span className={styles.tag}>
            TURN CLICKS INTO CUSTOMERS
          </span>

          <h1 className={styles.title}>
            Free Consultation –{" "}
            <span className={styles.highlight}>
              Grow Your Business
            </span>{" "}
            With Revora Digital Marketing
          </h1>

          <p className={styles.desc}>
            Revora Digital helps businesses build a strong online presence
            through result-driven digital marketing services. Our team
            specializes in SEO, social media marketing, Google Ads,
            branding, and lead generation strategies designed to increase
            visibility, attract potential customers, and drive business
            growth.
          </p>

          {/* BUTTON */}
          <a href="/contact" className={styles.btn}>
            Get Free Marketing Consultation 
            <HiArrowRight className={styles.icon} />
          </a>
        </div>

        {/* RIGHT MAP */}
        <div className={styles.right}>
          <iframe
            className={styles.map}
            title="Revora Digital Marketing Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.383729240039!2d76.9991125744758!3d11.009809054846704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xeacc50b89fc2301%3A0x4ecce8734868ac27!2sLegion%20Info!5e0!3m2!1sen!2sin!4v1779169596825!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;