import React from "react";
import styles from "./Services.module.css";
import { FaSearchDollar } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";

const Services = () => {
  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        
        {/* TOP CONTENT */}
        <div className={styles.topContent}>
          <span className={styles.tag}>Digital Marketing Solutions</span>

          <h2 className={styles.heading}>
            Complete Digital Marketing Services That{" "}
            <span>Drive Real Results</span>
          </h2>

          <p className={styles.description}>
            At Revora Digital, we combine strategy, creativity, and analytics
            to help businesses attract the right audience and convert traffic
            into customers.
            Our digital marketing services are designed to improve visibility,
            strengthen branding, increase website traffic, and maximize ROI.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className={styles.grid}>
          
          {/* SEO CARD */}
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.icon}>
  <FaSearchDollar />
</div>

              <div>
                <h3 className={styles.cardTitle}>
                  Advanced SEO Services
                </h3>

                <p className={styles.cardText}>
                  Improve your search engine rankings and grow organic traffic
                  with data-driven SEO strategies tailored to your business goals.
                </p>
              </div>
            </div>

            <div className={styles.subBox}>
              <h4 className={styles.subHeading}>
                Our SEO Solutions Include:
              </h4>

              <div className={styles.listGrid}>
                <span>On-Page SEO</span>
                <span>Off-Page SEO</span>
                <span>Technical SEO</span>
                <span>Local SEO</span>
                <span>SEO Analytical Reports</span>
                <span>Google Analytics Setup</span>
                <span>Google Search Console Integration</span>
                <span>Webmaster Tools Management</span>
              </div>
            </div>

            <p className={styles.bottomText}>
              We help businesses rank higher on Google, improve website
              performance, and attract customers actively searching for their
              services.
            </p>
          </div>

          {/* SOCIAL MEDIA CARD */}
          <div className={styles.card}>
            <div className={styles.cardTop}>
             <div className={styles.icon}>
  <MdCampaign />
</div>

              <div>
                <h3 className={styles.cardTitle}>
                  Social Media & Advertising Solutions
                </h3>

                <p className={styles.cardText}>
                  Build stronger customer engagement and generate quality leads
                  through targeted social media and paid advertising campaigns.
                </p>
              </div>
            </div>

            <div className={styles.subBox}>
              <h4 className={styles.subHeading}>
                Our Social Media & Ads Services Include:
              </h4>

              <div className={styles.listGrid}>
                <span>Social Media Marketing (SMM)</span>
                <span>Profile Creation & Optimization</span>
                <span>Poster & Flyer Design</span>
                <span>Ad Campaign Management</span>
                <span>LinkedIn Marketing</span>
                <span>Google Ads</span>
                <span>Meta Ads</span>
              </div>
            </div>

            <p className={styles.bottomText}>
              From brand awareness to lead generation, our campaigns are
              designed to deliver measurable growth across digital platforms.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;