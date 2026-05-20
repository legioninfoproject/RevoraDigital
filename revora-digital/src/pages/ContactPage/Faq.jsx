import React, { useState, useRef, useEffect } from "react";
import styles from "./Faq.module.css";

const faqData = {
  General: [
    {
      q: "What services does Revora Digital offer?",
      a: "We provide SEO services, Google Ads management, social media marketing, branding, and website development to help businesses grow online and generate qualified leads.",
    },
    {
      q: "How can digital marketing help my business?",
      a: "Digital marketing improves your online visibility, attracts targeted customers, increases brand awareness, and helps generate consistent business leads.",
    },
    {
      q: "Do you work with all types of businesses?",
      a: "Yes, we work with startups, SMEs, and large enterprises across multiple industries with customized growth strategies.",
    },
    {
      q: "How long does it take to see results?",
      a: "Paid advertising can show quick results, while SEO and organic strategies typically take a few months for sustainable growth and strong rankings.",
    },
  ],
  Support: [
    {
      q: "How can I contact your support team?",
      a: "You can reach us through email, phone, or the contact form. Our team is available during business hours to assist you quickly.",
    },
    {
      q: "What is your average response time?",
      a: "We usually respond within 24 hours on business days depending on the request type.",
    },
    {
      q: "Do you provide ongoing support after project completion?",
      a: "Yes, we provide continuous support, optimization, and performance monitoring even after project delivery.",
    },
    {
      q: "Can I switch my plan after signing up?",
      a: "Yes, we offer revisions and updates based on feedback and project scope to ensure the best results.",
    },
  ],
  Payment: [
    {
      q: "What payment methods do you accept?",
      a: "We accept secure business payment methods such as bank transfer and other mutually agreed digital payment options.",
    },
    {
      q: "Do you require advance payments?",
      a: "Yes, most projects require an initial advance payment before starting work, based on project scope and agreement.",
    },
    {
      q: "Are there any hidden charges?",
      a: "No, we follow complete transparency. All costs are clearly discussed and approved before project initiation.",
    },
    {
      q: "Are there any hidden fees?",
      a: "Refund policies depend on the service type and project stage. All terms are clearly defined before starting any engagement.",
    },
  ],
};

const TABS = Object.keys(faqData);

const AccordionItem = ({ item, index, isOpen, onToggle }) => {
  const bodyRef = useRef(null);

  return (
    <div
      className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
      style={{ "--i": index }}
    >
      <button
        className={styles.question}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={styles.qText}>{item.q}</span>
        <span className={styles.icon} aria-hidden>
          <span className={styles.iconBar} />
          <span className={`${styles.iconBar} ${styles.iconBarV}`} />
        </span>
      </button>

      <div
        ref={bodyRef}
        className={styles.answerWrap}
        style={{
          maxHeight: isOpen
            ? bodyRef.current
              ? bodyRef.current.scrollHeight + "px"
              : "500px"
            : "0px",
        }}
      >
        <p className={styles.answer}>{item.a}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("General");
  const [openIndex, setOpenIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setOpenIndex(null);
  }, [activeTab]);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const items = faqData[activeTab];
  const left  = items.slice(0, 2);
  const right = items.slice(2);

  return (
    <section ref={ref} className={`${styles.section} ${visible ? styles.visible : ""}`}>
      {/* Background mesh */}
      <div className={styles.mesh} aria-hidden />

      {/* Header row */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.eyebrow}>Frequently A&Q</p>
          <h2 className={styles.heading}>
            Find <span className={styles.highlight}>Answer</span> You Needs
          </h2>
        </div>

        <nav className={styles.tabs} role="tablist" aria-label="FAQ categories">
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Two-column FAQ grid */}
      <div className={styles.grid}>
        <div className={styles.col}>
          {left.map((item, i) => (
            <AccordionItem
              key={item.q}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
        <div className={styles.col}>
          {right.map((item, i) => (
            <AccordionItem
              key={item.q}
              item={item}
              index={i + 2}
              isOpen={openIndex === i + 2}
              onToggle={() => setOpenIndex(openIndex === i + 2 ? null : i + 2)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;