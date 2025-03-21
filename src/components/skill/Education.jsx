import "./skill.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Education() {
  // GSAP animation setup
  const containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from([".edu-container", ".edu-container2"], {
      opacity: 0,
      x: (i) => (i === 0 ? -300 : 300), // Left for first, right for second
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      {/* First Education Card */}
      <section className="edu-container">
        <div className="edu-card p-8 text-end">
          <p className="text-cyan-500">2022 – 2025</p>
          <h1>Bachelor Of Computer Application</h1>
          <p>Moolji Jaitha College (Jalgaon)</p>
          <p>CGPA: 7.50</p>
        </div>
        <div className="edu-line"></div>
        <p className="edu-icon">
          <i className="fa-solid fa-graduation-cap"></i>
        </p>
      </section>

      {/* Second Education Card */}
      <section className="edu-container2">
        <div className="edu-line2"></div>
        <div className="edu-card2 p-8 text-end">
          <p className="edu-icon2">
            <i className="fa-solid fa-graduation-cap"></i>
          </p>
          <p className="text-cyan-500">2021 – 2022</p>
          <h1>12th</h1>
          <p>Gram Vikash Vidyalay (Pimpalgaon Hare)</p>
          <p>Percentage: 72%</p>
        </div>
      </section>
    </div>
  );
}

export default Education;
