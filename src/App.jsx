
import About from "./components/about/About";
import Home from "./components/home/Home";
import "./App.css"
import Skill from "./components/skill/Skill";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Loader from "./components/Loader";
import  { useState, useEffect } from 'react';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [loader,setLoader]=useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, [3000]);
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
    return (
    <div>
      {
        loader?(<Loader/>):(
          <>
          <div className="mouse-dot" style={{ left: position.x, top: position.y }}></div>
         <Home />
         < About/>
         <Skill />
         <Project/>
         <Contact/>
         <Footer/>
         </>
        )
      }
    </div>
      
    )
      
}

export default App
