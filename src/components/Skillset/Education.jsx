import "./skill.css";

const educationData = [
  {
    year: "2025 – 2027",
    degree: "Master of Computer Application",
    school: "Institute of management and career courses (IMCC), Pune",
    grade: "CGPA: 7.50",
    side: "right",
    icon: "fa-graduation-cap",
  },
  {
    year: "2022 – 2025",
    degree: "Bachelor of Computer Application",
    school: "Moolji Jaitha College, Jalgaon",
    grade: "CGPA: 8.53",
    side: "left",
    icon: "fa-university",
  },
  {
    year: "2021 – 2022",
    degree: "12th Science",
    school: "Gram Vikash Vidyalay, Pimpalgaon Hare",
    grade: "Percentage: 72%",
    side: "right",
    icon: "fa-school",
  },
];

function Education() {
  return (
    <div className="edu-timeline">
      {/* Center line */}
      <div className="edu-center-line">
        <div className="edu-center-line-fill" />
      </div>

      {educationData.map((edu, i) => (
        <div
          key={i}
          className={`edu-card-wrap ${edu.side === "right" ? "edu-card-wrap--right" : ""}`}
          style={{ "--edu-delay": `${i * 0.15}s` }}
        >
          <div className="edu-card">
            <div className="edu-card-top-bar" />
            <span className="edu-year">
              <i className="fa-regular fa-calendar" /> {edu.year}
            </span>
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
            <div className="edu-dot-ring" />
            <i className={`fa-solid ${edu.icon}`}></i>
          </div>

          {/* Connector line */}
          <div className="edu-connector" />
        </div>
      ))}
    </div>
  );
}

export default Education;