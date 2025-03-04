import "./about.css"
function About() {
  const openResume = () => {
    window.open("/Dipak2.pdf", "_blank");
  };
  return (
    // ============== this is an about section ========================================
    <section className="about" id="about">
      {/* =============== this is an image side of it here image and connection =========================== */}
      <div className="about-left-side">
         <div className="about-img">
         <img src="/hero.jpg"></img>
         </div>
         <div className="connect-me">
          <li><a href="https://www.facebook.com/profile.php?id=100054613264309"><i className="fa-brands fa-facebook"></i></a></li>
          <li> <a href="https://www.linkedin.com/in/dipak-chavan-19317024b/"><i className="fa-brands fa-linkedin"></i></a></li>
          <li><a href="https://github.com/DipakCHAVAN1225"><i className="fa-brands fa-github"></i></a></li>
          <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
          <li><a href="https://dribbble.com/Dipu9322"><i className="fa-brands fa-dribbble"></i></a></li>
       </div> 
      </div>
      {/* ============== this section for paragraph and header=============================== */}
      <div className="about-right-side">
        <h1>About me</h1>

        <p >Hi, <span>DIPAK CHAVAN</span> As a dedicated frontend developer, I bring a blend of technical expertise and a passion for creating dynamic and user-friendly web experiences. With a solid foundation in HTML, CSS, JavaScript, and React, I am adept at turning design concepts into functional, visually appealing interfaces.
        {/* /* My background in C, C++, Python, and SQL has provided me with a strong problem-solving mindset and the ability to integrate backend functionality when needed.*/ }

        </p>

        <p>I am committed to continuous learning and improvement, always staying up-to-date with the latest web technologies and best practices. My goal is to contribute effectively to a team by leveraging my skills to build innovative and impactful web solutions. I am open to opportunities that will allow me to grow professionally and collaborate on exciting projects.</p>
        <strong>
        <button onClick={openResume}>Download CV</button>
        <a href="#contact" ><button>Hire Me</button></a>
        </strong>

      </div>
    </section>
  )
}

export default About
