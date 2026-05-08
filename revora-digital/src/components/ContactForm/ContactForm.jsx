import { useState } from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [form, setForm] = useState({
    company: "", firstName: "", lastName: "",
    email: "", phone: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.section}>
      {/* dashed arrow decoration */}
      <div className={styles.arrowDeco}>
        <svg viewBox="0 0 90 90">
          <path d="M10 80 Q50 10 80 10 M65 10 L80 10 L80 25" />
        </svg>
      </div>

      <div className={styles.inner}>
        {/* ── LEFT ── */}
        <div className={styles.left}>
          <span className={styles.eyebrow}>let's talk</span>

          <h1 className={styles.heading}>
            Turn Every Conversation to{" "}
            <span className={styles.headingAccent}>Skyrocket</span>{" "}
            Your Business Growth
          </h1>

          <p className={styles.desc}>
            Book a Free consultation with our marketing experts. Uncover
            strategies that suit Your Business and boost your sales.
          </p>

          <div className={styles.btnRow}>
            <button className={styles.btnPrimary}>
              Get in Touch
              <span className={styles.btnIcon}>
                <FaArrowRight size={10} />
              </span>
            </button>

            <button className={styles.btnLink}>
              Or &nbsp; View our Services
              <HiArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* ── RIGHT — FORM CARD ── */}
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>
            Get A Free Consultation With<br />Marketing Our Expert
          </h2>

          {submitted ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>
                <FaCheck />
              </div>
              <div className={styles.successTitle}>Message Sent!</div>
              <p className={styles.successMsg}>
                We'll get back to you within 24 hours. Looking forward to
                speaking with you.
              </p>
            </div>
          ) : (
            <div className={styles.formBody}>
              {/* Company */}
              <div className={styles.fieldFull}>
                <input
                  className={styles.input}
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>

              {/* First / Last */}
              <div className={styles.fieldRow}>
                <input
                  className={styles.input}
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  className={styles.input}
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email / Phone */}
              <div className={styles.fieldRow}>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <input
                  className={styles.input}
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Message */}
              <div className={styles.fieldFull}>
                <textarea
                  className={styles.textarea}
                  name="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              {/* Submit */}
              <button className={styles.submitBtn} onClick={handleSubmit}>
                Submit
                <span className={styles.submitIcon}>
                  <FaArrowRight size={10} />
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;