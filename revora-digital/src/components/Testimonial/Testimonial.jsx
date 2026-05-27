import { useState, useRef } from "react";
import {
  FaArrowRight,
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import styles from "./Testimonial.module.css";
import image1 from "../../assets/testimonial-image1.png";
import image2 from "../../assets/testimonial-image2.png";
import image3 from "../../assets/testimonial-image3.png";
import image4 from "../../assets/testimonial-image4.png";

// ─── DATA ──────────────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Working with Revora Digital transformed our online presence. Their SEO and marketing strategies increased our website traffic, generated qualified leads, and helped us achieve measurable business growth.",
    name: "Kawser Ahmed",
    role: "Chief Executive Officer",
    avatar: image1,
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Revora Digital understood our brand vision perfectly and delivered creative marketing campaigns that connected with our audience. Their team is professional, innovative, and results-driven.",
    name: "Priya Nair",
    role: "Head of Strategy",
    avatar: image2,
    rating: 5,
  },
  {
    id: 3,
    quote:
      "We saw remarkable improvement in search rankings and customer engagement after partnering with Revora Digital. Their SEO, content, and social media strategies delivered real business impact.",
    name: "Marcus Haven",
    role: "Creative Director",
    avatar: image3,
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Revora Digital helped us identify new growth opportunities and build a strong digital presence. Their transparent communication and performance-focused marketing approach exceeded expectations.",
    name: "Olivia Riday",
    role: "Client Relations Manager",
    avatar: image4,
    rating: 5,
  },
];

// small avatar row (stack)
const AVATAR_STACK = [
     image1 ,
     image2,
     image3,
     image4
  
];

// ─── STAR RATING ───────────────────────────────────────────────────────────────
const StarRating = ({ rating, max = 5 }) => (
  <div className={styles.stars}>
    {Array.from({ length: max }).map((_, i) =>
      i < rating
        ? <FaStar key={i} />
        : <FaRegStar key={i} className={styles.starEmpty} />
    )}
  </div>
);

// ─── COMPONENT ─────────────────────────────────────────────────────────────────
const Testimonial = () => {
  const [current, setCurrent]   = useState(0);
  const [cardState, setCardState] = useState("entering"); // entering | exiting | enterFromLeft
  // const [direction, setDirection] = useState("right");    // right | left
  const timerRef = useRef(null);

  const total = TESTIMONIALS.length;

  // auto-advance every 5s
  // useEffect(() => {
  //   timerRef.current = setInterval(() => navigate("right"), 5000);
  //   return () => clearInterval(timerRef.current);
  // }, [current]);

  const navigate = (dir) => {
    clearInterval(timerRef.current);
    // setDirection(dir);
    // exit current card
    setCardState("exiting");
    setTimeout(() => {
      setCurrent((c) =>
        dir === "right" ? (c + 1) % total : (c - 1 + total) % total
      );
      setCardState(dir === "right" ? "enterFromLeft" : "enterFromRight");
      // tiny frame gap then entering
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setCardState("entering"));
      });
    }, 320);
  };

  const goTo = (idx) => {
    if (idx === current) return;
    navigate(idx > current ? "right" : "left");
    // override the index directly after exit
    setTimeout(() => {
      setCurrent(idx);
      setCardState("entering");
    }, 320);
  };

  const t = TESTIMONIALS[current];

  // ─── RENDER ─────────────────────────────────────────────────────────────────
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* ── LEFT ── */}
        <div className={styles.left}>
          <span className={styles.eyebrow}>
            Clients Testimonial
          </span>

          <h2 className={styles.heading}>
           what Clients
           <br />
            Say About{" "}
           Revora Digital
         <span className={styles.underline}>  Services</span>
          </h2>

          <p className={styles.desc}>
            Our clients trust Revora Digital for innovative marketing strategies, transparent communication,
             and measurable results that help businesses grow online.
          </p>

          <button className={styles.ctaBtn}>
            Try it Now
            <span className={styles.ctaBtnIcon}>
              <FaArrowRight size={10} />
            </span>
          </button>

          <div className={styles.divider} />

          <div className={styles.clientRow}>
            <div className={styles.avatarStack}>
              {AVATAR_STACK.map((src, i) => (
                <img key={i} src={src} alt={`client ${i + 1}`} />
              ))}
              <span className={styles.badge5k}>5k+</span>
            </div>
            <div className={styles.clientLabel}>
              <strong>Satisfied Clients</strong>
of Revora Digital
            </div>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className={styles.right}>

          {/* Card */}
          <div className={styles.cardOuter}>
            <div className={`${styles.card} ${styles[cardState]}`}>
              <span className={styles.quoteIcon}>"</span>

              <p className={styles.quoteText}>{t.quote}</p>

              <div className={styles.cardDivider} />

              <div className={styles.authorRow}>
                <div className={styles.authorLeft}>
                  <img
                    className={styles.authorAvatar}
                    src={t.avatar}
                    alt={t.name}
                  />
                  <div>
                    <div className={styles.authorName}>{t.name}</div>
                    <div className={styles.authorRole}>{t.role}</div>
                  </div>
                </div>

                <StarRating rating={t.rating} />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.navRow}>
            <button
              className={styles.navBtn}
              onClick={() => navigate("left")}
              aria-label="Previous"
            >
              <HiArrowLeft />
            </button>

            <div className={styles.dots}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              className={styles.navBtn}
              onClick={() => navigate("right")}
              aria-label="Next"
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