import "./skill.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML",       img: "/HTML5.png",           level: 95 },
  { name: "CSS",        img: "/CSS3.png",            level: 90 },
  { name: "JavaScript", img: "/JavaScript.png",      level: 82 },
  { name: "Tailwind",   img: "/Tailwind CSS.png",    level: 85 },
  { name: "React",      img: "/React.png",           level: 80 },
  { name: "GitHub",     img: "/GitHub.png",          level: 78 },
  { name: "Figma",      img: "/Figma.png",           level: 70 },
  { name: "GSAP",       img: "/pngwing.com.png",     level: 72 },
];

function MySkill() {
  useGSAP(() => {
    gsap.from(".skill-card", {
      opacity: 0,
      y: 40,
      scale: 0.88,
      stagger: 0.08,
      duration: 0.6,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".skill-cards-grid",
        start: "top 88%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div className="skill-cards-grid">
      {skills.map((skill, i) => (
        <div key={i} className="skill-card">
          <div className="skill-card-img">
            <img src={skill.img} alt={skill.name} loading="lazy" />
          </div>
          <p className="skill-card-name">{skill.name}</p>
          <div className="skill-bar-track">
            <div
              className="skill-bar-fill"
              style={{ "--level": `${skill.level}%` }}
            />
          </div>
          <span className="skill-level">{skill.level}%</span>
        </div>
      ))}
    </div>
  );
}

export default MySkill;