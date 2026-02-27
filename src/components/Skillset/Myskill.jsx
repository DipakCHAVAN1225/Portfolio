import "./skill.css";

const skills = [
  { name: "HTML",       img: "/HTML5.png",        level: 95 },
  { name: "CSS",        img: "/CSS3.png",         level: 90 },
  { name: "JavaScript", img: "/JavaScript.png",   level: 82 },
  { name: "Tailwind",   img: "/Tailwind CSS.png", level: 85 },
  { name: "React",      img: "/React.png",        level: 80 },
  { name: "GitHub",     img: "/GitHub.png",       level: 78 },
  { name: "Figma",      img: "/Figma.png",        level: 70 },
  { name: "GSAP",       img: "/pngwing.com.png",  level: 72 },
];

function MySkill() {
  return (
    <div className="skill-cards-grid">
      {skills.map((skill, i) => (
        <div
          key={i}
          className="skill-card"
          style={{ "--card-delay": `${i * 0.08}s` }}
        >
          <div className="skill-card-glow" />
          <div className="skill-card-img">
            <img src={skill.img} alt={skill.name} loading="lazy" />
          </div>
          <p className="skill-card-name">{skill.name}</p>
          <div className="skill-bar-track">
            <div
              className="skill-bar-fill"
              style={{ "--level": `${skill.level}%`, "--bar-delay": `${0.3 + i * 0.08}s` }}
            />
          </div>
          <span className="skill-level">{skill.level}%</span>
        </div>
      ))}
    </div>
  );
}

export default MySkill;