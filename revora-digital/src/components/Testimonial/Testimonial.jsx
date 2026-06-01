import { useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import styles from "./Testimonial.module.css";

const TESTIMONIALS = [
  {
    id: 1,
    company: "SafePlus",
    quote:
      "Revora Digital helped improve our online visibility and created a stronger digital identity through strategic marketing.",
    result: "SEO + Brand Growth",
    rating: 5,
  },
  {
    id: 2,
    company: "Startup Business",
    quote:
      "The Revora team delivered professional campaigns and helped us connect with the right audience effectively.",
    result: "Lead Generation",
    rating: 5,
  },
  {
    id: 3,
    company: "Business Partner",
    quote:
      "Creative ideas, transparent communication and measurable results made Revora Digital a reliable marketing partner.",
    result: "Social Media Growth",
    rating: 5,
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  const t = TESTIMONIALS[current];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* LEFT */}
        <div className={styles.left}>
          <span className={styles.eyebrow}>
            Client Experience
          </span>

          <h2 className={styles.heading}>
            Trusted By
            <br />
            Growing
            <span> Brands</span>
          </h2>

          <p className={styles.desc}>
            Revora Digital helps businesses build stronger digital presence,
            improve visibility and achieve measurable marketing success.
          </p>

          <Link
            to="/contact-revora-digital"
            className={styles.ctaBtn}
          >
            Start Project
            <FaArrowRight />
          </Link>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.card}>

            <div className={styles.logoBox}>
              {t.company.charAt(0)}
            </div>

            <div className={styles.company}>
              {t.company}
            </div>

            <div className={styles.result}>
              {t.result}
            </div>

            <p className={styles.quote}>
              "{t.quote}"
            </p>

            <div className={styles.rating}>
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span>4.9 Client Rating</span>
            </div>

          </div>

          <div className={styles.navRow}>
            <button
              className={styles.navBtn}
              onClick={prev}
            >
              <HiArrowLeft />
            </button>

            <button
              className={styles.navBtn}
              onClick={next}
            >
              <HiArrowRight />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;