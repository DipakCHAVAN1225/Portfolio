import "./skill.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

function Education(){
// ===================================== gsap animation section ==============================
  const containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".edu-container", {
      opacity:0,
      x:-300,
  
      scrollTrigger: {
          trigger:".edu-container",
          start: "top 80%", 
          end: "top 30%",
          scrub: true,
        
      }
      
  });
  gsap.from(".edu-container2", {
    opacity:0,
    x:300,

    scrollTrigger: {
        trigger:".edu-container2",
        start: "top 80%", 
        end: "top 30%",
        scrub: true,
        
    }
    })
  }, { scope: containerRef });
  return (
    // =========================== it is a education section in skill =====================================
    <div ref={containerRef}>
    <section className=" edu-container bg-red-404">
        <div className="edu-card p-8 text-end">
        <p className="text-cyan-500">2022 – 2025</p>
        <h1 className="">Bachelor Of Computer Application</h1>
         <p>Moolji Jaitha College (jalgaon)</p>
          <p>CGPA : 7.50</p>
        </div>
        <div className="edu-line"></div>
        <p className="edu-icon">  <i className="fa-solid fa-graduation-cap"></i></p>
    </section>
    <section className=" edu-container2 bg-red-404">
        <div className="edu-line2"></div>
        <div className="edu-card2  p-8 text-end">
        <p className="edu-icon2"><i className="fa-solid fa-graduation-cap"></i></p>
        <p className="text-cyan-500">2021 – 2022</p>
        <h1 className="">12th</h1>
         <p>gram vikash vidyalay  (pimpalgaon hare)</p>
          <p>per:72%</p>
        </div>
      
    </section>
    </div>
  )
}

export default Education

