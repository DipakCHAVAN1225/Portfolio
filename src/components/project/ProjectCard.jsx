import "./project.css"

function ProjectCard({proName,proUrl,proDetail}) {
  return (
        <div className="project-card">
          <div className="project-img">
            <img src={proUrl}></img>
          </div>
          <p className="h-pro-name">{proDetail}</p>
          <strong className="project-detail">{proName}</strong>
        </div>
  )
}

export default ProjectCard
