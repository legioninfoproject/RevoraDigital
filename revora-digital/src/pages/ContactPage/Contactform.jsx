import React, { useState, useEffect, useRef } from "react";
import styles from "./Contactform.module.css";
import { FiCheck, FiSend } from "react-icons/fi";

const features = [
  { label: "Quick Response" },
  { label: "Professional Support" },
  { label: "Trusted Partnership" },
];

const ContactSection = () => {
  const [visible, setVisible] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section ref={sectionRef} className={`${styles.section} ${visible ? styles.visible : ""}`}>
      {/* Decorative blobs */}
      <span className={styles.blob1} />
      <span className={styles.blob2} />

      <div className={styles.inner}>
        {/* ── LEFT ── */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>Get In Touch</p>

          <h2 className={styles.heading}>
            Let's Build Something
            <br />
            Amazing{" "}
            <span className={styles.accent}>
              Together
              <span className={styles.underline} />
            </span>
          </h2>

          <p className={styles.body}>
            Have a project in mind or just want to say hello?
            <br />
            We'd love to hear from you. Fill out the form or
            <br />
            use the contact details below.
          </p>

          <ul className={styles.features}>
            {features.map((f, i) => (
              <li
                key={f.label}
                className={styles.featureItem}
                style={{ animationDelay: `${0.6 + i * 0.12}s` }}
              >
                <span className={styles.checkIcon}>
                  <FiCheck strokeWidth={3} />
                </span>
                {f.label}
              </li>
            ))}
          </ul>

        
        </div>

        {/* ── RIGHT: FORM ── */}
        <div className={styles.right}>
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <span className={styles.iconWrap}>
                <FiSend />
              </span>
              <div>
                <h3 className={styles.formTitle}>Send Us a Message</h3>
                <p className={styles.formSub}>
                  Fill out the form below and we'll get back to you shortly.
                </p>
              </div>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <input
                  className={styles.input}
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <textarea
                  className={`${styles.input} ${styles.textarea}`}
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                className={`${styles.btn} ${sent ? styles.btnSent : ""}`}
                type="submit"
              >
                {sent ? (
                  <>
                    <FiCheck strokeWidth={3} /> Message Sent!
                  </>
                ) : (
                  <>
                    Send Message &nbsp;→
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;