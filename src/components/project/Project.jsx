import ProjectCard from "./ProjectCard";
import "./project.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    proName: "Veg Restaurant",
    proUrl: "/veg restro.png",
    proDetail: "View Project",
    link: null,
    tags: ["HTML", "CSS"],
  },
  {
    proName: "Synthia Ugwu Clone",
    proUrl: "/synthia ugwu clone.png",
    proDetail: "View Project",
    link: "https://dipakchavan1225.github.io/cynthia-ugwu-clone/",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    proName: "Cuberto Clone",
    proUrl: "/Cuberto clone.png",
    proDetail: "View Project",
    link: null,
    tags: ["HTML", "CSS", "GSAP"],
  },
  {
    proName: "Two Good Clone",
    proUrl: "/two good clone.png",
    proDetail: "View Project",
    link: "https://dipakchavan1225.github.io/two-good-clone/",
    tags: ["HTML", "CSS", "GSAP"],
  },
  {
    proName: "Sidcup Clone",
    proUrl: "/Sidcup clone.png",
    proDetail: "View Project",
    link: "https://dipakchavan1225.github.io/sidcupClone/",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    proName: "Pokémon Search",
    proUrl: "/Pokemon search.png",
    proDetail: "View Project",
    link: null,
    tags: ["React", "API"],
  },
  {
    proName: "Bubble Game",
    proUrl: "/Bubble Game.png",
    proDetail: "View Project",
    link: "https://dipakchavan1225.github.io/bubbleGame/",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    proName: "Weather App",
    proUrl: "/Wether app.png",
    proDetail: "View Project",
    link: "https://dipakchavan1225.github.io/weather-app/",
    tags: ["React", "API"],
  },
  {
    proName: "Currency Changer",
    proUrl: "/currancy changer.png",
    proDetail: "View Project",
    link: "https://dipakchavan1225.github.io/currencyChangerInReact/",
    tags: ["React", "API"],
  },
  {
    proName: "Tic-Tac-Toe Game",
    proUrl: "/tic-tac-toe game.png",
    proDetail: "View Project",
    link: "https://dipakchavan1225.github.io/tic-tac-toe/",
    tags: ["React"],
  },
];

function Project() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.from(".project-heading", {
        opacity: 0,
        y: -40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-heading",
          start: "top 88%",
          end: "top 55%",
          scrub: 1,
        },
      });

      // Cards staggered
      gsap.from(".project-card", {
        opacity: 0,
        y: 60,
        scale: 0.92,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-grid",
          start: "top 88%",
          end: "top 40%",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="project-container" id="project">

      {/* Heading */}
      <div className="project-heading">
        <span className="project-eyebrow">What I've Built</span>
        <h1>My <span className="project-highlight">Projects</span></h1>
        <p className="project-subtext">A collection of real-world projects I've designed and developed.</p>
      </div>

      {/* Cards grid */}
      <div className="project-grid">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>

    </section>
  );
}

export default Project;