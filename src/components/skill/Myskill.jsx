import "./skill.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Myskill() {
  // GSAP animation setup
  const containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".card", {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.2, // Smooth stagger effect for each card
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  // Skill data
  const skills = [
    { name: "HTML", img: "/HTML5.png" },
    { name: "CSS", img: "/CSS3.png" },
    { name: "JavaScript", img: "/JavaScript.png" },
    { name: "Tailwind", img: "/Tailwind CSS.png" },
    { name: "React", img: "/React.png" },
    { name: "GitHub", img: "/GitHub.png" },
    { name: "Figma", img: "/Figma.png" },
    { name: "GSAP", img: "/pngwing.com.png" },
  ];

  return (
    <section ref={containerRef} className="Skill-card">
      {skills.map((skill, index) => (
        <div key={index} className="card">
          <div className="card-img">
            <img src={skill.img} alt={skill.name} />
          </div>
          <p>{skill.name}</p>
        </div>
      ))}
    </section>
  );
}

export default Myskill;
