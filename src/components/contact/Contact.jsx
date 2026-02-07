import { useState, useRef } from "react";
import "./contact.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Contact() {
  // State for handling user input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://sheetdb.io/api/v1/g2hk8hj79ymzx", {
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
    })
      .then((response) => response.json())
      .then((data) => console.log("Form submitted:", data));

    setShowPopup(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Hide popup after 5 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  // ================= GSAP Animations =================
  const containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-detail", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-detail",
          start: "top 98%",
          end: "top 40%",
          scrub:1,
        },
      });

      gsap.from(".form input", {
        opacity: 0,
        x: -200,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".form input",
          start: "top 98%",
          end: "top 40%",
          scrub:1,
        },
      });

      gsap.from(".form textarea", {
        opacity: 0,
        x: 200,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".form textarea",
          start: "top 98%",
          end: "top 40%",
          scrub:1,
        },
      });

      gsap.from("h2", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "h2",
          start: "top 98%",
          end: "top 40%",
          scrub:1,
        },
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="contact-container" id="contact">
      <h2>CONTACT</h2>

      {/* Contact Info Cards */}
      <div className="contact-detail">
        <section className="contact-card">
          <i className="fa-solid fa-phone"></i>
          <strong>Phone</strong>
          <p>9322706604</p>
        </section>
        <section className="contact-card">
          <i className="fa-solid fa-envelope"></i>
          <strong>Email Address</strong>
          <p>dc741094@gmail.com</p>
        </section>
        <section className="contact-card">
          <i className="fa-solid fa-location-dot"></i>
          <strong>Address</strong>
          <p>PUNE , Maharashtra</p>
        </section>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form">
            <section className="form-input">
              <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder=" Name.." required />
              <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email.." required />
              <input name="subject" value={formData.subject} onChange={handleChange} type="text" placeholder="Subject.." required />
            </section>
            <section>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message...." required></textarea>
            </section>
          </div>
          <button type="submit" className="btn">Send Message</button>

          {/* Popup Notification */}
          {showPopup && (
            <div className="fixed bottom-5 w-1/3 right-5 bg-green-500 text-white p-4 rounded-lg flex flex-col gap-5 items-center shadow-lg animate-slideIn">
              <span className="text-2xl">
                <video src="/Tick.mp4" autoPlay loop height="100px" width="100px" loading="lazy"></video>
              </span>
              <span className="text-4xl">Thank you</span>
              <span className="ml-2 text-lg">Your form submitted successfully!</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
