import "./project.css"
function Project() {
  return (
    // ================== this is project section ============================================
    <section className="project-container" id="project">
      <h1>My Projects</h1>
      <div className="project">
      
      {/* ======================== here is each card that show the project =============================== */}
        <div className="project-card">
          <div className="project-img">
            <img src=""></img>
          </div>
          <p className="h-pro-name">hidden project name</p>
          <strong className="project-detail">project name</strong>
        </div>
        <div className="project-card">
        <div className="project-img">
            <img src=""></img>
          </div>
          <p className="h-pro-name">hidden project name</p>
          <strong className="project-detail">project name</strong>
        </div>
        <div className="project-card">
        <div className="project-img">
            <img src=""></img>
          </div>
          <p className="h-pro-name">hidden project name</p>
          <strong className="project-detail">project name</strong>
        </div>
        <div className="project-card">
        <div className="project-img">
            <img src=""></img>
          </div>
          <p className="h-pro-name">hidden project name</p>
          <strong className="project-detail">project name</strong>
        </div>
        <div className="project-card">
        <div className="project-img">
            <img src=""></img>
          </div>
          <p className="h-pro-name">hidden project name</p>
          <strong className="project-detail">project name</strong>
        </div>
        </div>
    </section>
  )
}

export default Project
