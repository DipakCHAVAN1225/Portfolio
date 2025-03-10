import { useState, useEffect } from "react";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Skill from "./components/skill/Skill";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";
import ErrorPage from "./components/Error";
// import Chatbot from "./components/Chatbot";
import "./App.css";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [validPage, setValidPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Check if the hash corresponds to a valid section
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const validSections = ["home", "about", "skill", "project", "contact"];
      
      if (hash && !validSections.includes(hash)) {
        setValidPage(false);
      } else {
        setValidPage(true);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Check the current hash when the app loads

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div
            className="mouse-dot"
            style={{ left: position.x, top: position.y }}
          ></div>

          {/* Show Error Page if hash is invalid */}
          {!validPage ? (
            <ErrorPage />
          ) : (
            <div>
              {/* Navigation */}
              <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50">
                <a href="#home" className="mr-4">Home</a>
                <a href="#about" className="mr-4">About</a>
                <a href="#skill" className="mr-4">Skills</a>
                <a href="#project" className="mr-4">Projects</a>
                <a href="#contact">Contact</a>
              </nav>

              {/* All sections are displayed together for scrolling */}
              <div id="home"><Home /></div>
              <div id="about"><About /></div>
              <div id="skill"><Skill /></div>
              <div id="project"><Project /></div>
              <div id="contact"><Contact /></div>
              <Footer />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
