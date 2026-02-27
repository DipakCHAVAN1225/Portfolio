import "./skill.css";

function Ex() {
  return (
    <div className="ex-empty">
      <div className="ex-orbit">
        <div className="ex-orbit-ring ex-orbit-ring--1" />
        <div className="ex-orbit-ring ex-orbit-ring--2" />
        <div className="ex-empty-icon">
          <i className="fa-solid fa-briefcase"></i>
        </div>
      </div>
      <h3 className="ex-empty-title">No Experience Yet</h3>
      <p className="ex-empty-sub">
        Currently looking for my first opportunity. Open to internships &amp; freelance work!
      </p>
      <div className="ex-badges">
        <span className="ex-badge"><i className="fa-solid fa-laptop-code" /> Open to Internships</span>
        <span className="ex-badge"><i className="fa-solid fa-handshake" /> Freelance Ready</span>
      </div>
      <a href="#contact" className="ex-cta-btn">
        <span className="ex-cta-bg" />
        <i className="fa-solid fa-envelope"></i>
        <span>Hire Me</span>
        <i className="fa-solid fa-arrow-right ex-cta-arrow" />
      </a>
    </div>
  );
}

export default Ex;