import Img from "./logo.jpg";
import "./home.css";
import "../../App.css";
import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShootingStar from "../ShootingStar";


function Home() {
  // Retrieve theme from localStorage or set default to "light"
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);
  const [isDark, setIsDark] = useState(storedTheme === "dark");

  // State for menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu
  const HandleShowMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleCloseMenu = () => setIsMenuOpen(false);

  // Toggle theme
  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setIsDark(newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // Apply theme changes
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#2D2D2D" : "#EFF0F4";
    document.body.style.color = isDark ? "#F8FAFC" : "#000";
  }, [isDark]);

  // GSAP Animation
  const homeP = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(homeP.current, {
      y: 60,
      duration: 0.7,
      opacity: 0,
      delay: 1,
      scrub: true,
    });

    gsap.from("h1", {
      y: 90,
      duration: 0.7,
      opacity: 0,
      delay: 1,
      scrub: true,
    });

    gsap.from(".hero-img img", {
      y: 400,
      ease: "power2.inOut",
      duration: 1,
      opacity: 0,
      delay: 0.5,
      scrub: true,
    });
  });

  return (
    <main>
      <div className="main-home" id="home">
        <ShootingStar />

        {/* Home Navbar */}
        <nav className={`home-nav ${isDark ? "bg-[#2D2D2D]" : "bg-[#f1f1f1]"}`}>
          <div className="logo-img">
            <img src={Img} alt="Logo" />
          </div>

          <div className="home-menu">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skill">Services</a></li>
              <li><a href="#project">Project</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            {/* Menu Toggle */}
            <p className="nav-icon" onClick={HandleShowMenu} role="button" aria-label="Toggle Menu">
              {isMenuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
            </p>
          </div>

          {/* Theme Toggle */}
          <div className="theme" onClick={handleTheme} role="button" aria-label="Toggle Theme">
            <p className={`transition-transform duration-700 ${isDark ? "translate-x-0" : "translate-x-12 light"}`}>
              {isDark ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
            </p>
          </div>

          {/* Mobile Menu */}
          <div
            className={`hidden-menu absolute right-0 top-20 w-full h-96 text-black p-4 transition-transform duration-700 
            ${isMenuOpen ? "translate-y-0" : "translate-x-full"}`}
          >
            <ul>
              <li><a onClick={handleCloseMenu} href="#home">Home</a></li>
              <li><a onClick={handleCloseMenu} href="#about">About</a></li>
              <li><a onClick={handleCloseMenu} href="#skill">Services</a></li>
              <li><a onClick={handleCloseMenu} href="#project">Project</a></li>
              <li><a onClick={handleCloseMenu} href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero flex items-center justify-center">
          <div className="container">
            <div className="grid">
              {Array.from({ length: 25 }).map((_, index) => (
                <div key={index} className="square"></div>
              ))}
            </div>
          </div>

          {/* Hero Text */}
          <section className="home-text">
            <p>Hello</p>
            <h1>
              I am{" "}
              <span className={`${isDark ? "after:bg-[#2D2D2D]" : "after:bg-[#EFF0F4]"}`}></span>
            </h1>
            <p ref={homeP}>Let&apos;s Explore My Journey</p>
            <a href="#about">
              <button>More About Me</button>
            </a>
          </section>

          {/* Hero Image */}
          <section className="home-image flex items-center justify-center">
            <div className="hero-img">
              <img src="/hero1.png" alt="Hero" />
            </div>
          </section>

          <div className="design"></div>
        </section>
      </div>
    </main>
  );
}

export default Home;
