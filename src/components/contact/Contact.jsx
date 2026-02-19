import { useState, useRef } from "react";
import "./contact.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef(null);

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

  // GSAP Animations
  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        // Heading
        gsap.from(".contact-heading", {
          opacity: 0,
          y: -40,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-heading",
            start: "top 90%",
            end: "top 50%",
            scrub: 1,
          },
        });

        // Info cards stagger
        gsap.from(".contact-card", {
          opacity: 0,
          y: 60,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-detail",
            start: "top 90%",
            end: "top 50%",
            scrub: 1,
          },
        });

        // Inputs from left
        gsap.from(".form-input .contact-input", {
          opacity: 0,
          x: -80,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".form",
            start: "top 90%",
            end: "top 50%",
            scrub: 1,
          },
        });

        // Textarea from right
        gsap.from(".contact-textarea", {
          opacity: 0,
          x: 80,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".form",
            start: "top 90%",
            end: "top 50%",
            scrub: 1,
          },
        });

        // Submit button
        gsap.from(".submit-btn", {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".submit-btn",
            start: "top 95%",
            toggleActions: "play none none none",
          },
        });
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef }
  );

  const contactInfo = [
    { icon: "fa-phone",        label: "Phone",         value: "9322706604",         href: "tel:9322706604" },
    { icon: "fa-envelope",     label: "Email Address",  value: "dc741094@gmail.com",  href: "mailto:dc741094@gmail.com" },
    { icon: "fa-location-dot", label: "Address",        value: "Pune, Maharashtra",   href: "#" },
  ];

  return (
    <section ref={containerRef} className="contact-container" id="contact">

      {/* Heading */}
      <div className="contact-heading">
        <span className="contact-eyebrow">Get In Touch</span>
        <h2>Contact <span className="contact-highlight">Me</span></h2>
        <p className="contact-subtext">Have a project in mind or want to collaborate? I'd love to hear from you.</p>
      </div>

      {/* Info Cards */}
      <div className="contact-detail">
        {contactInfo.map(({ icon, label, value, href }) => (
          <a key={label} href={href} className="contact-card">
            <div className="card-icon-wrap">
              <i className={`fa-solid ${icon}`}></i>
            </div>
            <strong className="card-label">{label}</strong>
            <p className="card-value">{value}</p>
          </a>
        ))}
      </div>

      {/* Form */}
      <div className="contact-form">
        <form onSubmit={handleSubmit} noValidate>
          <div className="form">

            {/* Left — inputs */}
            <div className="form-input">
              {[
                { name: "name",    type: "text",  placeholder: "Your Name",    icon: "fa-user"    },
                { name: "email",   type: "email", placeholder: "Your Email",   icon: "fa-envelope" },
                { name: "subject", type: "text",  placeholder: "Subject",      icon: "fa-tag"     },
              ].map(({ name, type, placeholder, icon }) => (
                <div key={name} className="input-group">
                  <i className={`fa-solid ${icon} input-icon`}></i>
                  <input
                    className="contact-input"
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}
            </div>

            {/* Right — textarea */}
            <div className="textarea-wrap">
              <i className="fa-solid fa-message textarea-icon"></i>
              <textarea
                className="contact-textarea"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="btn-spinner"></span> Sending...
              </>
            ) : (
              <>
                <i className="fa-solid fa-paper-plane"></i> Send Message
              </>
            )}
          </button>
        </form>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-toast">
          <div className="popup-icon">
            <video src="/Tick.mp4" autoPlay loop height="60px" width="60px" loading="lazy" />
          </div>
          <div className="popup-text">
            <strong>Message Sent!</strong>
            <p>Thank you! I&apos;ll get back to you soon.</p>
          </div>
          <button className="popup-close" onClick={() => setShowPopup(false)}>✕</button>
        </div>
      )}
    </section>
  );
}

export default Contact;