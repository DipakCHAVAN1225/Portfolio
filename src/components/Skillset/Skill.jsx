import { useState } from "react";
import Education from "./Education";
import Ex from "./Ex";
import MySkill from "./Myskill";
import "./skill.css";

const tabs = [
  { key: "skill",      label: "Skills",      icon: "fa-code"           },
  { key: "experience", label: "Experience",   icon: "fa-briefcase"      },
  { key: "education",  label: "Education",    icon: "fa-graduation-cap" },
];

const Skill = () => {
  const [activeTab, setActiveTab] = useState("skill");

  const renderContent = () => {
    switch (activeTab) {
      case "skill":      return <MySkill />;
      case "experience": return <Ex />;
      case "education":  return <Education />;
      default:           return <MySkill />;
    }
  };

  return (
    <div className="skill-section" id="skill">

      {/* Background decorations */}
      <div className="skill-blob skill-blob--1" />
      <div className="skill-blob skill-blob--2" />
      <div className="skill-dot-grid" />

      {/* Heading */}
      <div className="skill-heading">
        <span className="skill-eyebrow">
          <span className="skill-eyebrow-dot" />
          What I Know
          <span className="skill-eyebrow-dot" />
        </span>
        <h2>Skills &amp; <span className="skill-highlight">Background</span></h2>
        <p className="skill-subtext">Technologies I work with, my experience, and my educational journey.</p>
      </div>

      {/* Tab buttons */}
      <div className="skill-tabs">
        {tabs.map(({ key, label, icon }) => (
          <button
            key={key}
            className={`skill-tab-btn ${activeTab === key ? "skill-tab-btn--active" : ""}`}
            onClick={() => setActiveTab(key)}
          >
            <i className={`fa-solid ${icon}`}></i>
            <span>{label}</span>
            {activeTab === key && <span className="tab-active-pip" />}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="skill-content" key={activeTab}>
        {renderContent()}
      </div>

    </div>
  );
};

export default Skill;