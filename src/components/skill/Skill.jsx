import { useState, useRef } from "react";
import Education from "./Education";
import Ex from "./Ex";
import Myskill from "./Myskill";
import "./skill.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skill = () => {
  const [activeTab, setActiveTab] = useState("skill"); // Store string instead of JSX

  // Ref for GSAP animation
  const containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".tab-buttons", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".tab-buttons",
        start: "top 96%",
        end: "top 30%",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  // Function to render the active component
  const renderContent = () => {
    switch (activeTab) {
      case "skill":
        return <Myskill />;
      case "experience":
        return <Ex />;
      case "education":
        return <Education />;
      default:
        return <Myskill />;
    }
  };

  return (
    <div ref={containerRef} className="Skill" id="skill">
      {/* Tab Buttons */}
      <div className="tab-buttons flex space-x-4 justify-center">
        <button
          className={`px-4 py-2 rounded-md ${
            activeTab === "skill" ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-700"
          } text-white`}
          onClick={() => setActiveTab("skill")}
        >
          Skill
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeTab === "experience" ? "bg-green-700" : "bg-green-500 hover:bg-green-700"
          } text-white`}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeTab === "education" ? "bg-red-700" : "bg-red-500 hover:bg-red-700"
          } text-white`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
      </div>

      {/* Content Section */}
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default Skill;
