import "./skill.css";

function MySkill() {
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
    <section className="Skill-card">
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

export default MySkill;
