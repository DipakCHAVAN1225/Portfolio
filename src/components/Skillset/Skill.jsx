import { useState, useRef } from "react";
import Education from "./Education";
import Ex from "./Ex";
import MySkill from "./Myskill";
import "./skill.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tabs = [
  { key: "skill",      label: "Skills",      icon: "fa-code"          },
  { key: "experience", label: "Experience",   icon: "fa-briefcase"     },
  { key: "education",  label: "Education",    icon: "fa-graduation-cap" },
];

const Skill = () => {
  const [activeTab, setActiveTab] = useState("skill");
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-heading", {
        opacity: 0,
        y: -40,
        duration: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skill-heading",
          start: "top 10%",
          end: "top 100%",
          scrub: 1,
        },
      });

      gsap.from(".skill-tabs", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skill-tabs",
          start: "top 92%",
          end: "top 60%",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  const renderContent = () => {
    switch (activeTab) {
      case "skill":      return <MySkill />;
      case "experience": return <Ex />;
      case "education":  return <Education />;
      default:           return <MySkill />;
    }
  };

  return (
    <div ref={containerRef} className="skill-section" id="skill">

      {/* Heading */}
      <div className="skill-heading">
        <span className="skill-eyebrow">What I Know</span>
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
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="skill-content">
        {renderContent()}
      </div>

    </div>
  );
};

export default Skill;