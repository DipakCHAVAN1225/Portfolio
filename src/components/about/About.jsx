import "./about.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const containerRef = useRef(null);

  const openResume = () => {
    window.open("/Dipak_Chavan_9322706604.pdf", "_blank");
  };

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        // Image animation
        gsap.from(".about-img", {
          opacity: 0,
          scale: 0.85,
          x: -40,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-img",
            start: "top 88%",
            end: "top 50%",
            scrub: 1,
          },
        });

        // Social icons stagger
        gsap.from(".connect-me li", {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".connect-me",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });

        // Right side
        gsap.from(".about-right-side", {
          opacity: 0,
          x: 50,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-right-side",
            start: "top 88%",
            end: "top 50%",
            scrub: 1,
          },
        });

        // Skill tags
        gsap.from(".skill-tag", {
          opacity: 0,
          scale: 0.7,
          stagger: 0.08,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".skills-row",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef }
  );

  const skills = ["HTML", "CSS", "JavaScript", "React", "GSAP", "Git", "Figma", "Node.js"];

  return (
    <section ref={containerRef} className="about" id="about">

      {/* ── LEFT SIDE ── */}
      <div className="about-left-side">
        <div className="about-img">
          <img src="/hero2.jpeg" alt="Dipak Chavan" loading="lazy" />
          <div className="img-ring img-ring--1" />
          <div className="img-ring img-ring--2" />
        </div>

        <ul className="connect-me">
          <li><a href="https://www.facebook.com/profile.php?id=100054613264309" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a></li>
          <li><a href="https://www.linkedin.com/in/dipak-chavan-19317024b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a></li>
          <li><a href="https://github.com/DipakCHAVAN1225" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a></li>
          <li><a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a></li>
          <li><a href="https://dribbble.com/Dipu9322" target="_blank" rel="noreferrer" aria-label="Dribbble"><i className="fa-brands fa-dribbble"></i></a></li>
        </ul>
      </div>

      {/* ── RIGHT SIDE ── */}
      <div className="about-right-side">
        <span className="about-eyebrow">Who I Am</span>
        <h1>About <span className="highlight">Me</span></h1>

        <p>
          Hi, I am <span className="highlight">Dipak Chavan</span> — a dedicated frontend developer with a passion for creating dynamic and user-friendly web experiences. With a solid foundation in HTML, CSS, JavaScript, and React, I turn design concepts into functional, visually appealing interfaces.
        </p>

        <p>
          I am committed to continuous learning, always staying up-to-date with the latest web technologies. My goal is to contribute to a team by building innovative and impactful web solutions while growing professionally.
        </p>

        {/* Skill tags */}
        <div className="skills-row">
          {skills.map((s) => (
            <span key={s} className="skill-tag">{s}</span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="about-cta">
          <button className="btn btn--primary" onClick={openResume}>
            <i className="fa-solid fa-download"></i> Download CV
          </button>
          <a href="/contact" className="btn btn--outline">
            <i className="fa-solid fa-envelope"></i> Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;