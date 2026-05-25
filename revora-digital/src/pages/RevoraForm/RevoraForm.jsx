import { useEffect, useState } from "react";
import styles from "./RevoraForm.module.css";
import revoraContact from "../../service/revora";

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

const SERVICES = [
  "Digital Marketing",
  "Ecommerce Marketing",
  "Brand Marketing",
];

const RevoraContact = () => {
  const [countries, setCountries] = useState([]);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    organizationName: "",
    email: "",
    landline: "",
    mobile: "",
    country: "",
    city: "",
    help: "Digital Marketing",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch Countries
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        const countryNames = data
          .map((country) => country.name.common)
          .sort();

        setCountries(countryNames);
      })
      .catch((err) => console.log(err));
  }, []);

  // Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Validation
  const validateForm = () => {
    let newErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!form.organizationName.trim()) {
      newErrors.organizationName =
        "Organization name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        form.email
      )
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10,15}$/.test(form.mobile)) {
      newErrors.mobile = "Invalid mobile number";
    }

    if (!form.country) {
      newErrors.country = "Please select country";
    }

    if (!form.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const payload = {
         type: "help",
        firstName: form.firstName,
        lastName: form.lastName,
        organizationName: form.organizationName,
        Email: form.email,
        LandLine: form.landline,
        Mobile: form.mobile,
        country: form.country,
        city: form.city,
        help: form.help,
        message: form.message,
        subject: "Revora Contact Form",
      };

      console.log("Payload:", payload);

      // API Call
      const response = await revoraContact(payload);

      console.log("Success:", response);

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);

      // Reset Form
      setForm({
        firstName: "",
        lastName: "",
        organizationName: "",
        email: "",
        landline: "",
        mobile: "",
        country: "",
        city: "",
        help: "Digital Marketing",
        message: "",
      });

    } catch (error) {
      console.log("API Error:", error);

      alert(
        error?.response?.data?.message ||
          "Failed to send message"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.revoraPage}>
      <div className={styles.blobRight}></div>

      <div className={styles.revoraCard}>
        {/* Header */}
        <div className={styles.revoraHeader}>
          <div className={styles.headerAvatar}>
            <FaUser />
          </div>

          <div className={styles.headerText}>
            <h1>Connect With Revora Digital</h1>
            <p>Let's Build Your Brand Together</p>
          </div>
        </div>

        {/* Form */}
        <form
          className={styles.revoraForm}
          onSubmit={handleSubmit}
          noValidate
        >
          {/* First + Last */}
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
                  placeholder="Enter first name"
                  value={form.firstName}
                  onChange={handleChange}
                  className={
                    errors.firstName
                      ? styles.inputError
                      : ""
                  }
                />
              </div>

              {errors.firstName && (
                <span className={styles.errorText}>
                  {errors.firstName}
                </span>
              )}
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
                  placeholder="Enter last name"
                  value={form.lastName}
                  onChange={handleChange}
                  className={
                    errors.lastName
                      ? styles.inputError
                      : ""
                  }
                />
              </div>

              {errors.lastName && (
                <span className={styles.errorText}>
                  {errors.lastName}
                </span>
              )}
            </div>
          </div>

          {/* Organization */}
          <div className={styles.formGroup}>
            <label>
              Organization Name <span>*</span>
            </label>

            <div className={styles.inputWrap}>
              <FaBuilding className={styles.inputIcon} />

              <input
                type="text"
                name="organizationName"
                placeholder="Enter organization name"
                value={form.organizationName}
                onChange={handleChange}
                className={
                  errors.organizationName
                    ? styles.inputError
                    : ""
                }
              />
            </div>

            {errors.organizationName && (
              <span className={styles.errorText}>
                {errors.organizationName}
              </span>
            )}
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label>
              Organization Email <span>*</span>
            </label>

            <div className={styles.inputWrap}>
              <FaEnvelope className={styles.inputIcon} />

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
                className={
                  errors.email ? styles.inputError : ""
                }
              />
            </div>

            {errors.email && (
              <span className={styles.errorText}>
                {errors.email}
              </span>
            )}
          </div>

          {/* Phone */}
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
              <label>
                Mobile Number <span>*</span>
              </label>

              <div className={styles.inputWrap}>
                <FaPhoneAlt className={styles.inputIcon} />

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={form.mobile}
                  onChange={handleChange}
                  className={
                    errors.mobile
                      ? styles.inputError
                      : ""
                  }
                />
              </div>

              {errors.mobile && (
                <span className={styles.errorText}>
                  {errors.mobile}
                </span>
              )}
            </div>
          </div>

          {/* Country + City */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>
                Country <span>*</span>
              </label>

              <div className={styles.inputWrap}>
                <FaGlobe className={styles.inputIcon} />

                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className={
                    errors.country
                      ? styles.inputError
                      : ""
                  }
                >
                  <option value="">
                    Select country
                  </option>

                  {countries.map((country) => (
                    <option
                      key={country}
                      value={country}
                    >
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {errors.country && (
                <span className={styles.errorText}>
                  {errors.country}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label>
                City <span>*</span>
              </label>

              <div className={styles.inputWrap}>
                <FaMapMarkerAlt
                  className={styles.inputIcon}
                />

                <input
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  value={form.city}
                  onChange={handleChange}
                  className={
                    errors.city
                      ? styles.inputError
                      : ""
                  }
                />
              </div>

              {errors.city && (
                <span className={styles.errorText}>
                  {errors.city}
                </span>
              )}
            </div>
          </div>

          {/* Help */}
          <div className={styles.formGroup}>
            <label>How can we help you?</label>

            <div className={styles.inputWrap}>
              <FaListUl className={styles.inputIcon} />

              <select
                name="help"
                value={form.help}
                onChange={handleChange}
              >
                {SERVICES.map((service) => (
                  <option
                    key={service}
                    value={service}
                  >
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className={styles.formGroup}>
            <label>
              Your Message <span>*</span>
            </label>

            <div className={styles.textareaWrap}>
              <FaPen className={styles.inputIcon} />

              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                className={
                  errors.message
                    ? styles.inputError
                    : ""
                }
              ></textarea>
            </div>

            {errors.message && (
              <span className={styles.errorText}>
                {errors.message}
              </span>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={loading}
          >
            <FaPaperPlane />
            {loading ? "Sending..." : "Send Message"}
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