import "./about.css"
import Img from "../home/logo.jpg"
function About() {
  return (
    // ============== this is an about section ========================================
    <section className="about">
      {/* =============== this is an image side of it here image and connection =========================== */}
      <div className="about-left-side">
         <div className="about-img">
         <img src={Img}></img>
         </div>
         <div className="connect-me">
          <li><i className="fa-brands fa-facebook"></i></li>
          <li><i className="fa-brands fa-linkedin"></i></li>
          <li><i className="fa-brands fa-github"></i></li>
          <li><i className="fa-brands fa-instagram"></i></li>
          <li><i className="fa-brands fa-twitter"></i></li>
          <li><i className="fa-brands fa-dribbble"></i></li>
       </div> 
      </div>
      {/* ============== this section for paragraph and header=============================== */}
      <div className="about-right-side">
        <h1>About me</h1>

        <p>Hi, I am Shubhangini Patil As a dedicated frontend developer, I bring a blend of technical expertise and a passion for creating dynamic and user-friendly web experiences. With a solid foundation in HTML, CSS, Bootstrap, JavaScript, and React, I am adept at turning design concepts into functional, visually appealing interfaces. My background in C, C++, Python, and SQL has provided me with a strong problem-solving mindset and the ability to integrate backend functionality when needed.

        </p>

        <p>I am committed to continuous learning and improvement, always staying up-to-date with the latest web technologies and best practices. My goal is to contribute effectively to a team by leveraging my skills to build innovative and impactful web solutions. I am open to opportunities that will allow me to grow professionally and collaborate on exciting projects.</p>
        <strong>
        <button>Download CV</button>
        <button>Hire Me</button>
        </strong>

      </div>
    </section>
  )
}

export default About
