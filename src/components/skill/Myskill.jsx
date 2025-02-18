import "./skill.css";
function Myskill() {
  // ============================ is is a skill section =============================
  return (
    <section className="Skill-card">
      <div className="card">
        <div className="card-img"><img src="\HTML5_logo_and_wordmark.svg"></img></div>
        <p>HTML</p>
      </div>
      <div className="card">
      <di className="card-img"><img src="\CSS3_logo_and_wordmark.svg"></img></di>
      <p>CSS</p>
      </div>
      <div className="card">
      <div className="card-img"><img src="\JavaScript-logo.png"></img></div>
      <p>JavaScript</p>
      </div>
      <div className="card">
      <div className="card-img"><img src="\React-icon.svg"></img></div>
      <p>React</p>
      </div>
      <div className="card">
      <div className="card-img"><img src="\Octicons-mark-github.svg"></img></div>
      <p>Github</p>
      </div>
      <div className="card">
      <div className="card-img"><img src="\Figma-logo.svg"></img></div>
      <p>Figma</p>
      </div>
    </section>
  );
}

export default Myskill;
