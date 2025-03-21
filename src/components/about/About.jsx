import "./about.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef} from "react";

function About() {
  const openResume = () => {
    window.open("/Dipak2.pdf", "_blank");
  };

  const containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-img", {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-img",
          start: "top 90%",
          end: "top 50%",
          scrub: true,
        },
      });

      gsap.from(".about-right-side", {
        opacity: 0,
        x: 50,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-right-side",
          start: "top 90%",
          end: "top 50%",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup animation on unmount
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="about" id="about">
      <div className="about-left-side">
        <div className="about-img">
          <img src="/hero.jpg" alt="Profile" loading="lazy" />
        </div>
        <div className="connect-me">
          <li><a href="https://www.facebook.com/profile.php?id=100054613264309"><i className="fa-brands fa-facebook"></i></a></li>
          <li><a href="https://www.linkedin.com/in/dipak-chavan-19317024b/"><i className="fa-brands fa-linkedin"></i></a></li>
          <li><a href="https://github.com/DipakCHAVAN1225"><i className="fa-brands fa-github"></i></a></li>
          <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
          <li><a href="https://dribbble.com/Dipu9322"><i className="fa-brands fa-dribbble"></i></a></li>
        </div>
      </div>
      <div className="about-right-side">
        <h1>About me</h1>
        <p >Hi, <span>DIPAK CHAVAN</span> As a dedicated frontend developer, I bring a blend of technical expertise and a passion for creating dynamic and user-friendly web experiences. With a solid foundation in HTML, CSS, JavaScript, and React, I am adept at turning design concepts into functional, visually appealing interfaces.
        </p>

        <p>I am committed to continuous learning and improvement, always staying up-to-date with the latest web technologies and best practices. My goal is to contribute effectively to a team by leveraging my skills to build innovative and impactful web solutions. I am open to opportunities that will allow me to grow professionally and collaborate on exciting projects.</p>
        <strong>
          <button onClick={openResume}>Download CV</button>
          <a href="#contact"><button>Hire Me</button></a>
        </strong>
      </div>
    </section>
  );
}

export default About;
