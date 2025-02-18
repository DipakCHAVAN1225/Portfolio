import Education from "./Education";
import Ex from "./Ex";
import Myskill from "./Myskill";
import "./skill.css"
import { useState } from "react";
// ===================== here the functionality to make the button functional===============================
const Skill=()=> {
  const [content, setContent] = useState(<Myskill/>);

  const handleClick = (data) => {
    setContent(data);
  };

  return (
    // ================== code for the switch button ==========================================

    <div className=" Skill">
      <div className="flex space-x-4 justify-center">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          onClick={() => handleClick(<Myskill/>)}
        >
          Skill
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
          onClick={() => handleClick(<Ex/>)}
        >
          Button 2
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
          onClick={() => handleClick(<Education/>)}
        >
          Education
        </button>
      </div>
      {/* ====================== code for the shows the section on which user click ================================= */}
      {content && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">{content}</h2>
        </div>
      )}
    </div>
  );
}


export default Skill
