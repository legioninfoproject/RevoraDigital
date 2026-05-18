import { useState, useEffect, useRef } from "react";
import styles from "./TeamSection.module.css";
import image1 from "../../assets/team-image1.png";
import image2 from "../../assets/team-image2.png";
import image3 from "../../assets/team-image3.png";
import image4 from "../../assets/team-image4.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaXTwitter,
  FaChevronLeft,
  FaChevronRight,
  FaXmark,
} from "react-icons/fa6";

// ─── DATA ──────────────────────────────────────────────────────────────────────
const TEAM = [
  {
    id: 1,
    name: "Olivia Riday",
    role: "Client Relations Manager",
    img: image1,
    bio: "Olivia brings 8+ years of client experience, building lasting partnerships and ensuring every brand interaction is seamless and impactful.",
    socials: ["fb", "ig", "li", "tw"],
  },
  {
    id: 2,
    name: "Kawser Ahmed",
    role: "Chief Executive Officer",
    img: image2,
    bio: "Kawser leads Marketi with a vision for bold, data-driven marketing. He's spearheaded campaigns that grew client revenue by over 300%.",
    socials: ["fb", "ig", "li", "sk"],
  },
  {
    id: 3,
    name: "Marcus Haven",
    role: "Creative Director",
    img: image3,
    bio: "Marcus is the aesthetic engine behind Marketi's visual storytelling, blending art direction with performance to create campaigns that convert.",
    socials: ["ig", "li", "tw"],
  },
  {
    id: 4,
    name: "Priya Nair",
    role: "Head of Strategy",
    img: image4,
    bio: "Priya crafts go-to-market strategies that are precise, bold, and rooted in deep consumer insight. She's worked across 20+ industries.",
    socials: ["fb", "li", "tw"],
  },
  {
    id: 5,
    name: "Eli Voss",
    role: "Performance Marketing Lead",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80",
    bio: "Eli engineers ROI-focused campaigns across paid channels. His data-first mindset delivers consistent, measurable growth for every client.",
    socials: ["ig", "li"],
  },
  {
    id: 6,
    name: "Amara Osei",
    role: "Brand Strategist",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&q=80",
    bio: "Amara helps brands find their voice. Her frameworks have shaped identities for startups and Fortune 500 companies alike.",
    socials: ["fb", "ig", "li"],
  },
];

const SOCIAL_ICONS = {
  fb: {
    label: "Facebook",
    icon: <FaFacebookF />,
  },
  ig: {
    label: "Instagram",
    icon: <FaInstagram />,
  },
  li: {
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
  },
  sk: {
    label: "Skype",
    icon: <FaSkype />,
  },
  tw: {
    label: "Twitter",
    icon: <FaXTwitter />,
  },
};

// ─── COMPONENT ─────────────────────────────────────────────────────────────────
const TeamSection = () => {
  const [activeIdx, setActiveIdx] = useState(null);
  const [modalMember, setModalMember] = useState(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [slide, setSlide] = useState(0);
  const [perView, setPerView] = useState(4);

  const headerRef = useRef(null);
  const maxSlide = Math.max(0, TEAM.length - perView);

  // Responsive perView
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;

      if (w < 560) {
        setPerView(1);
      } else if (w < 900) {
        setPerView(2);
      } else {
        setPerView(4);
      }
    };

    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  // Header reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      obs.observe(headerRef.current);
    }

    return () => obs.disconnect();
  }, []);

  // Card animation
  useEffect(() => {
    TEAM.forEach((_, i) => {
      setTimeout(() => {
        setVisibleCards((v) => [...v, i]);
      }, 120 * i + 300);
    });
  }, []);

  const goTo = (idx) => {
    setSlide(Math.max(0, Math.min(idx, maxSlide)));
  };

  return (
    <>
      <div className={styles.wrapper}>
        {/* Header */}
        <div
          ref={headerRef}
          className={`${styles.header} ${
            headerVisible ? styles.headerVisible : ""
          }`}
        >
          <span className={styles.eyebrow}>Exceptional Team</span>

          <h2 className={styles.title}>
            Meet With Our
            <span className={styles.highlight}> Team</span>
          </h2>

          <p className={styles.subtitle}>
            Our skilled team of digital marketing experts works together to deliver innovative,
             performance-driven solutions for sustainable business growth.

          </p>
        </div>

       <div className={styles.carouselOuter}>
  <div className={styles.trackWrapper}>
    <div
      className={styles.track}
      style={{
        transform: `translateX(calc(-${slide * 100}% / ${perView}))`,
      }}
    >
      {TEAM.map((member, i) => {
        const isActive = activeIdx === i;
        const isVisible = visibleCards.includes(i);

        const cardClass = [
          styles.card,
          isVisible ? styles.cardVisible : "",
          isActive ? styles.cardActive : "",
        ].join(" ");

        return (
          <div
            key={member.id}
            className={cardClass}
            style={{ transitionDelay: `${i * 0.06}s` }}
            onMouseEnter={() => setActiveIdx(i)}
            onMouseLeave={() => setActiveIdx(null)}
            onClick={() => setModalMember(member)}
          >
            {/* Image */}
            <div className={styles.imageWrap}>
              <img src={member.img} alt={member.name} />

              {/* Overlay */}
              <div className={styles.overlay}>
                <div className={styles.socialPills}>
                  {member.socials.map((s) => (
                    <span
                      key={s}
                      className={styles.pill}
                      title={SOCIAL_ICONS[s].label}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {SOCIAL_ICONS[s].icon}
                    </span>
                  ))}
                </div>
              </div>

              <span className={styles.badge}>Featured</span>
            </div>

            {/* Info */}
            <div className={styles.cardBody}>
              <div className={styles.cardName}>
                {member.name}
              </div>

              <div className={styles.cardRole}>
                {member.role}
              </div>
            </div>

            <div className={styles.accentLine} />
          </div>
        );
      })}
    </div>
  </div>

  {/* Navigation */}
  <div className={styles.nav}>
    <button
      className={styles.navBtn}
      onClick={() => goTo(slide - 1)}
      disabled={slide === 0}
    >
      <FaChevronLeft />
    </button>

    <div className={styles.dots}>
      {Array.from({ length: maxSlide + 1 }).map((_, i) => (
        <div
          key={i}
          className={`${styles.dot} ${
            slide === i ? styles.dotActive : ""
          }`}
          onClick={() => goTo(i)}
        />
      ))}
    </div>

    <button
      className={styles.navBtn}
      onClick={() => goTo(slide + 1)}
      disabled={slide >= maxSlide}
    >
      <FaChevronRight />
    </button>
  </div>
</div>
      </div>

      {/* Modal */}
      <div
        className={`${styles.backdrop} ${
          modalMember ? styles.backdropOpen : ""
        }`}
        onClick={() => setModalMember(null)}
      >
        {modalMember && (
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className={styles.modalHero}
              src={modalMember.img}
              alt={modalMember.name}
            />

            <button
              className={styles.modalClose}
              onClick={() => setModalMember(null)}
            >
              <FaXmark />
            </button>

            <div className={styles.modalBody}>
              <span className={styles.modalTag}>
                {modalMember.role}
              </span>

              <div className={styles.modalName}>
                {modalMember.name}
              </div>

              <div className={styles.modalRole}>
                Marketi · Full-Time
              </div>

              <p className={styles.modalBio}>
                {modalMember.bio}
              </p>

              <div className={styles.modalSocials}>
                {modalMember.socials.map((s) => (
                  <button
                    key={s}
                    className={styles.modalSocialBtn}
                  >
                    {SOCIAL_ICONS[s].icon}

                    {SOCIAL_ICONS[s].label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TeamSection;