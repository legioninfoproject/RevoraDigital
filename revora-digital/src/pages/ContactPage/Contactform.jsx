import React, {
  useState,
  useEffect,
  useRef,
} from "react";
import styles from "./Contactform.module.css";
import { FiCheck, FiSend } from "react-icons/fi";
import revoraContact from "../../service/revora";

const features = [
  { label: "Quick Response" },
  { label: "Professional Support" },
  { label: "Trusted Partnership" },
];

const ContactSection = () => {
  const [visible, setVisible] = useState(false);
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    Name: "",
    organization: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current)
      observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Validation
  const validateForm = () => {
    let newErrors = {};

    if (!form.name.trim())
      newErrors.name =
        "Name is required";

    if (!form.email.trim())
      newErrors.email =
        "Email is required";

    if (!form.phone.trim())
      newErrors.phone =
        "Phone number is required";

    if (!form.subject.trim())
      newErrors.subject =
        "Subject is required";

    if (!form.message.trim())
      newErrors.message =
        "Message is required";

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const payload = {
      type: "contact",
      Name: form.name,
      Email: form.email,
      Mobile: form.phone,
      organizationName:
        form.organization,
      subject: form.subject,
      message: form.message,
    };

    console.log(payload);

    try {
      const response =
        await revoraContact(payload);

      console.log(response);

      setSent(true);

      setTimeout(() => {
        setSent(false);
      }, 3000);

      setForm({
        name: "",
        organization: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setErrors({});
    } catch (err) {
      console.log(
        "API Error:",
        err
      );
    }
  };

  return (
    <section id="contact"
      ref={sectionRef}
      className={`${styles.section} ${
        visible ? styles.visible : ""
      }`}
    >
      <div className={styles.inner}>
        {/* LEFT */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>
            Get In Touch
          </p>

          <h2 className={styles.heading}>
            Let's Build Something
            <br />
            Amazing{" "}
            <span
              className={styles.accent}
            >
              Together
            </span>
          </h2>

          <p className={styles.body}>
            Grow your business faster
            with data driven digital
            marketing strategies.
          </p>

          <ul className={styles.features}>
            {features.map((f, i) => (
              <li
                key={f.label}
                className={
                  styles.featureItem
                }
                style={{
                  animationDelay: `${
                    0.6 + i * 0.12
                  }s`,
                }}
              >
                <span
                  className={
                    styles.checkIcon
                  }
                >
                  <FiCheck
                    strokeWidth={3}
                  />
                </span>
                {f.label}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div
            className={styles.formCard}
          >
            <div
              className={
                styles.formHeader
              }
            >
              <span
                className={
                  styles.iconWrap
                }
              >
                <FiSend />
              </span>

              <div>
                <h3
                  className={
                    styles.formTitle
                  }
                >
                  Send Us a Message
                </h3>

                <p
                  className={
                    styles.formSub
                  }
                >
                  Fill the form below.
                </p>
              </div>
            </div>

            <form
              className={styles.form}
              onSubmit={handleSubmit}
            >
              {/* NAME + ORG */}
              <div className={styles.row}>
                <div
                  className={
                    styles.field
                  }
                >
                  <input
                    className={`${styles.input} ${
                      errors.name
                        ? styles.inputError
                        : ""
                    }`}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={
                      handleChange
                    }
                  />

                  {errors.name && (
                    <span
                      className={
                        styles.errorText
                      }
                    >
                      {errors.name}
                    </span>
                  )}
                </div>

                <div
                  className={
                    styles.field
                  }
                >
                  <input
                    className={
                      styles.input
                    }
                    type="text"
                    name="organization"
                    placeholder="Organization Name"
                    value={
                      form.organization
                    }
                    onChange={
                      handleChange
                    }
                  />
                </div>
              </div>

              {/* EMAIL + PHONE */}
              <div className={styles.row}>
                <div
                  className={
                    styles.field
                  }
                >
                  <input
                    className={`${styles.input} ${
                      errors.email
                        ? styles.inputError
                        : ""
                    }`}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={
                      handleChange
                    }
                  />

                  {errors.email && (
                    <span
                      className={
                        styles.errorText
                      }
                    >
                      {errors.email}
                    </span>
                  )}
                </div>

                <div
                  className={
                    styles.field
                  }
                >
                  <input
                    className={`${styles.input} ${
                      errors.phone
                        ? styles.inputError
                        : ""
                    }`}
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={
                      handleChange
                    }
                  />

                  {errors.phone && (
                    <span
                      className={
                        styles.errorText
                      }
                    >
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* SUBJECT */}
              <div className={styles.field}>
                <input
                  className={`${styles.input} ${
                    errors.subject
                      ? styles.inputError
                      : ""
                  }`}
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={
                    handleChange
                  }
                />

                {errors.subject && (
                  <span
                    className={
                      styles.errorText
                    }
                  >
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* MESSAGE */}
              <div className={styles.field}>
                <textarea
                  className={`${styles.input} ${styles.textarea} ${
                    errors.message
                      ? styles.inputError
                      : ""
                  }`}
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={form.message}
                  onChange={
                    handleChange
                  }
                />

                {errors.message && (
                  <span
                    className={
                      styles.errorText
                    }
                  >
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                className={`${styles.btn} ${
                  sent
                    ? styles.btnSent
                    : ""
                }`}
                type="submit"
              >
                {sent ? (
                  <>
                    <FiCheck
                      strokeWidth={3}
                    />
                    Message Sent!
                  </>
                ) : (
                  "Send Message →"
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