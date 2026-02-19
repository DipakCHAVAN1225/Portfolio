import "./project.css";

function ProjectCard({ proName, proUrl, proDetail, link, tags }) {
  const handleClick = () => {
    if (link) window.open(link, "_blank");
  };

  return (
    <div className={`project-card ${!link ? "project-card--no-link" : ""}`}>

      {/* Image area */}
      <div className="project-img-wrap">
        <img src={proUrl} alt={proName} className="project-img" loading="lazy" />

        {/* Overlay on hover */}
        <div className="project-overlay">
          <button
            className="project-view-btn"
            onClick={handleClick}
            disabled={!link}
          >
            {link ? (
              <><i className="fa-solid fa-arrow-up-right-from-square"></i> {proDetail}</>
            ) : (
              <><i className="fa-solid fa-lock"></i> Coming Soon</>
            )}
          </button>
        </div>
      </div>

      {/* Card info */}
      <div className="project-info">
        <strong className="project-name">{proName}</strong>
        <div className="project-tags">
          {tags?.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ProjectCard;