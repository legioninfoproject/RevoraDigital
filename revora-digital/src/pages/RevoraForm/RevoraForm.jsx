import { useState } from "react";
import styles from "./RevoraForm.module.css";

import {
  FaUser,
  FaBuilding,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
  FaMapMarkerAlt,
  FaListUl,
  FaPen,
  FaPaperPlane,
} from "react-icons/fa";

const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
];

const SERVICES = [
    "Digital Marketing",
    "Ecommerce Marketing",
    "Brand Marketing"
];

const RevoraContact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    landline: "",
    mobile: "",
    country: "",
    city: "",
    service: "Safe Plus",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className={styles.revoraPage}>
      <div className={styles.blobRight}></div>

      <div className={styles.blobLeftLines}>
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <div className={styles.revoraCard}>
        {/* Header */}
        <div className={styles.revoraHeader}>
          <div className={styles.headerAvatar}>
            <FaUser />
          </div>

          <div className={styles.headerText}>
            <h1>Connect With Revora Digital</h1>
            <p>Let's Build A Safer Future Together</p>
          </div>
        </div>

        {/* Form */}
        <form
          className={styles.revoraForm}
          onSubmit={handleSubmit}
          noValidate
        >
          {/* First Name + Last Name */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>
                First Name <span>*</span>
              </label>

              <div className={styles.inputWrap}>
                <FaUser className={styles.inputIcon} />

                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>
                Last Name <span>*</span>
              </label>

              <div className={styles.inputWrap}>
                <FaUser className={styles.inputIcon} />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Company */}
          <div className={styles.formGroup}>
            <label>
              Company Name <span>*</span>
            </label>

            <div className={styles.inputWrap}>
              <FaBuilding className={styles.inputIcon} />

              <input
                type="text"
                name="company"
                placeholder="Enter company name"
                value={form.company}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label>
              Company Email <span>*</span>
            </label>

            <div className={styles.inputWrap}>
              <FaEnvelope className={styles.inputIcon} />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Phones */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Landline</label>

              <div className={styles.inputWrap}>
                <FaPhoneAlt className={styles.inputIcon} />

                <input
                  type="tel"
                  name="landline"
                  placeholder="Enter landline"
                  value={form.landline}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Mobile Number</label>

              <div className={styles.inputWrap}>
                <FaPhoneAlt className={styles.inputIcon} />

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={form.mobile}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Country + City */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Country</label>

              <div className={styles.inputWrap}>
                <FaGlobe className={styles.inputIcon} />

                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                >
                  <option value="">Select country</option>

                  {COUNTRIES.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>City</label>

              <div className={styles.inputWrap}>
                <FaMapMarkerAlt className={styles.inputIcon} />

                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={form.city}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Service */}
          <div className={styles.formGroup}>
            <label>How can we help you?</label>

            <div className={styles.inputWrap}>
              <FaListUl className={styles.inputIcon} />

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
              >
                {SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className={styles.formGroup}>
            <label>Your Message</label>

            <div className={styles.textareaWrap}>
              <FaPen className={styles.inputIcon} />

              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className={styles.submitBtn}>
            <FaPaperPlane />
            Send Message
          </button>

          {submitted && (
            <p className={styles.successToast}>
              Your message has been sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default RevoraContact;