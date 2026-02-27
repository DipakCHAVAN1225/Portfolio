import "./skill.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    year: "2025 – 2027",
    degree: "Master of Computer Application",
    school: "Institute of management and career courses (IMCC), Pune",
    grade: "CGPA: 7.50",
    side: "right",
  },
  {
    year: "2022 – 2025",
    degree: "Bachelor of Computer Application",
    school: "Moolji Jaitha College, Jalgaon",
    grade: "CGPA: 8.53",
    side: "left",
  },
  {
    year: "2021 – 2022",
    degree: "12th Science",
    school: "Gram Vikash Vidyalay, Pimpalgaon Hare",
    grade: "Percentage: 72%",
    side: "right",
  },
];

function Education() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".edu-card-wrap", {
        opacity: 0,
        x: (i) => (i % 2 === 0 ? -80 : 80),
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "top 30%",
          scrub: 2,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="edu-timeline">
      {/* Center line */}
      <div className="edu-center-line" />

      {educationData.map((edu, i) => (
        <div
          key={i}
          className={`edu-card-wrap ${edu.side === "right" ? "edu-card-wrap--right" : ""}`}
        >
          <div className="edu-card">
            <span className="edu-year">{edu.year}</span>
            <h3 className="edu-degree">{edu.degree}</h3>
            <p className="edu-school">
              <i className="fa-solid fa-location-dot"></i> {edu.school}
            </p>
            <p className="edu-grade">
              <i className="fa-solid fa-star"></i> {edu.grade}
            </p>
          </div>

          {/* Timeline dot */}
          <div className="edu-dot">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>

          {/* Connector line */}
          <div className="edu-connector" />
        </div>
      ))}
    </div>
  );
}

export default Education;