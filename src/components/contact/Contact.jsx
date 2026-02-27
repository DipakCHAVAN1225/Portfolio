import { useState } from "react";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://sheetdb.io/api/v1/g2hk8hj79ymzx", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              name: formData.name,
              email: formData.email,
              subject: formData.subject,
              message: formData.message,
            },
          ],
        }),
      });
      await res.json();
    } catch (err) {
      console.error("Submission error:", err);
    }

    setIsSubmitting(false);
    setShowPopup(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setShowPopup(false), 5000);
  };

  const contactInfo = [
    { icon: "fa-phone",        label: "Phone",         value: "9322706604",         href: "tel:9322706604" },
    { icon: "fa-envelope",     label: "Email Address",  value: "dc741094@gmail.com",  href: "mailto:dc741094@gmail.com" },
    { icon: "fa-location-dot", label: "Address",        value: "Pune, Maharashtra",   href: "#" },
  ];

  return (
    <section className="contact-container" id="contact">

      {/* Animated background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Floating grid dots */}
      <div className="dot-grid" />

      {/* Heading */}
      <div className="contact-heading animate-fade-up" style={{ "--delay": "0s" }}>
        <span className="contact-eyebrow">
          <span className="eyebrow-dot" />
          Get In Touch
          <span className="eyebrow-dot" />
        </span>
        <h2>Let&apos;s <span className="contact-highlight">Connect</span></h2>
        <p className="contact-subtext">Have a project in mind or want to collaborate? I&apos;d love to hear from you.</p>
      </div>

      {/* Info Cards */}
      <div className="contact-detail">
        {contactInfo.map(({ icon, label, value, href }, i) => (
          <a
            key={label}
            href={href}
            className="contact-card animate-fade-up"
            style={{ "--delay": `${0.1 + i * 0.12}s` }}
          >
            <div className="card-glow" />
            <div className="card-icon-wrap">
              <i className={`fa-solid ${icon}`}></i>
            </div>
            <strong className="card-label">{label}</strong>
            <p className="card-value">{value}</p>
            <div className="card-arrow">
              <i className="fa-solid fa-arrow-up-right-from-square" />
            </div>
          </a>
        ))}
      </div>

      {/* Form */}
      <div className="contact-form animate-fade-up" style={{ "--delay": "0.45s" }}>
        <div className="form-header">
          <span className="form-tag">✦ Send a message</span>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form">

            {/* Left — inputs */}
            <div className="form-input">
              {[
                { name: "name",    type: "text",  placeholder: "Your Name",    icon: "fa-user",    label: "Name"    },
                { name: "email",   type: "email", placeholder: "Your Email",   icon: "fa-envelope", label: "Email"   },
                { name: "subject", type: "text",  placeholder: "Subject",      icon: "fa-tag",      label: "Subject" },
              ].map(({ name, type, placeholder, icon, label }) => (
                <div
                  key={name}
                  className={`input-group ${focused === name ? "is-focused" : ""} ${formData[name] ? "has-value" : ""}`}
                >
                  <label className="floating-label">{label}</label>
                  <i className={`fa-solid ${icon} input-icon`}></i>
                  <input
                    className="contact-input"
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleChange}
                    onFocus={() => setFocused(name)}
                    onBlur={() => setFocused(null)}
                    required
                  />
                  <span className="input-underline" />
                </div>
              ))}
            </div>

            {/* Right — textarea */}
            <div className={`textarea-wrap ${focused === "message" ? "is-focused" : ""} ${formData.message ? "has-value" : ""}`}>
              <label className="floating-label">Message</label>
              <i className="fa-solid fa-message textarea-icon"></i>
              <textarea
                className="contact-textarea"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                required
              />
              <span className="textarea-border" />
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            <span className="btn-bg" />
            {isSubmitting ? (
              <>
                <span className="btn-spinner"></span>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <i className="fa-solid fa-paper-plane btn-icon"></i>
                <span>Send Message</span>
                <i className="fa-solid fa-arrow-right btn-arrow"></i>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-toast">
          <div className="popup-ring" />
          <div className="popup-icon">
            <video src="/Tick.mp4" autoPlay loop height="60px" width="60px" loading="lazy" />
          </div>
          <div className="popup-text">
            <strong>Message Sent! 🎉</strong>
            <p>Thank you! I&apos;ll get back to you soon.</p>
          </div>
          <button className="popup-close" onClick={() => setShowPopup(false)}>✕</button>
        </div>
      )}
    </section>
  );
}

export default Contact;