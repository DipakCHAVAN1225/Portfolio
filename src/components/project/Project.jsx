import ProjectCard from "./ProjectCard"
import "./project.css"
function Project() {
  return (
    // ================== this is project section ============================================
    <section className="project-container" id="project">
      <h1>My Projects</h1>
      <div className="project">
      
      {/* ======================== here is each card that show the project =============================== */}

         <ProjectCard 
         proName="VEG RESTAURANT"  
         proUrl="/veg restro.png" 
         proDetail="View Project"/>

         <ProjectCard 
         proName="SYNTHIA UGAWU CLONE" 
         proUrl="/synthia ugwu clone.png" 
         proDetail="View Project" 
         link="https://dipakchavan1225.github.io/cynthia-ugwu-clone/"/>

         <ProjectCard 
         proName="CUBERTO CLONE" 
         proUrl="/Cuberto clone.png" 
         proDetail="View Project"/>

         <ProjectCard 
         proName="TWO GOOD CLONE" 
         proUrl="/two good clone.png" 
         proDetail="View Project"
         link="https://dipakchavan1225.github.io/two-good-clone/"/>

         <ProjectCard 
         proName="SIDCUP CLONE" 
         proUrl="/Sidcup clone.png" 
         proDetail="View Project"/>

         <ProjectCard 
         proName="POKEMON SEARCH"  
         proUrl="/Pokemon search.png" 
         proDetail="View Project"/>

         <ProjectCard 
         proName="BUBBLE GAME"   
         proUrl="/Bubble Game.png" 
         proDetail="View Project"
         link="https://dipakchavan1225.github.io/bubbleGame/"/>

         <ProjectCard 
         proName="WETHER APP"  
         proUrl="/Wether app.png" 
         proDetail="View Project" 
         link="https://dipakchavan1225.github.io/weather-app/"/>

         <ProjectCard 
         proName="CURRENCY CHANGER" 
         proUrl="/currancy changer.png" 
         proDetail="View Project" 
         link="https://dipakchavan1225.github.io/currencyChangerInReact/"/>

         <ProjectCard 
         proName="TIC-TAC-TOE GAME" 
         proUrl="/tic-tac-toe game.png" 
         proDetail="View Project"
         link="https://dipakchavan1225.github.io/tic-tac-toe/"/>

        </div>
    </section>
  )
}

export default Project
