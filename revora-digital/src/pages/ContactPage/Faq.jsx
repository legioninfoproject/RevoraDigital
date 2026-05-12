import React, { useState, useRef, useEffect } from "react";
import styles from "./Faq.module.css";

const faqData = {
  General: [
    {
      q: "What sets Marketi apart from other digital marketing agencies?",
      a: "We prioritize a personalized approach, combining strategic insights with creativity. Our dedicated team is committed to understanding your business and delivering customized solutions that drive tangible results.",
    },
    {
      q: "What services does Marketi offer?",
      a: "We offer a full spectrum of digital marketing services including SEO, paid advertising, social media management, content strategy, email marketing, and conversion rate optimization — all tailored to your specific goals.",
    },
    {
      q: "How long does it take to see results from digital marketing efforts?",
      a: "The timeline varies based on your industry, goals, and chosen strategies. While some changes can be immediate, significant improvements typically become noticeable within 3–6 months of consistent effort.",
    },
    {
      q: "How can digital marketing benefit my business?",
      a: "Digital marketing enhances your online presence, increases brand visibility, drives targeted traffic, and is a cost-effective way to reach potential customers and build long-term relationships.",
    },
  ],
  Support: [
    {
      q: "How do I reach the support team?",
      a: "You can reach our support team via email at hello@marketi.com, through the live chat on our website, or by calling +1 (555) 123-4567 during business hours.",
    },
    {
      q: "What are your support hours?",
      a: "Our support team is available Monday through Friday, 9:00 AM to 6:00 PM (PST). For urgent matters outside these hours, we have an emergency escalation process.",
    },
    {
      q: "Do you offer onboarding assistance for new clients?",
      a: "Absolutely. Every new client is assigned a dedicated onboarding specialist who guides them through account setup, strategy kickoff, and the first 30 days of campaign management.",
    },
    {
      q: "Can I switch my plan after signing up?",
      a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of the next billing cycle with no hidden fees or penalties.",
    },
  ],
  Payment: [
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit and debit cards (Visa, Mastercard, Amex), bank transfers, and PayPal. Enterprise clients may also request invoice-based billing.",
    },
    {
      q: "Is there a contract or minimum commitment?",
      a: "We offer both month-to-month and annual plans. Annual plans come with a discount. There is no long-term lock-in on our standard monthly plans.",
    },
    {
      q: "Do you offer refunds?",
      a: "We offer a 14-day money-back guarantee on all new subscriptions. If you're not satisfied within the first two weeks, we'll issue a full refund — no questions asked.",
    },
    {
      q: "Are there any hidden fees?",
      a: "No hidden fees ever. The price you see is the price you pay. Any optional add-ons are clearly listed and require your explicit confirmation before being charged.",
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