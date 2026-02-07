
import About from "./components/about/About";
import Home from "./components/home/Home";
import "./App.css"
import Skill from "./components/skill/skill";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
    return (
    <div>
          <>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route  path="/about" element={<About/>}/>
            <Route path="/services" element={<Skill/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
          <Footer/>
         {/* <Home />
         < About/>
         <Skill />
         <Project/>
         <Contact/>
         <Footer/> */}
         </>
    </div>
      
    )
      
}

export default App
