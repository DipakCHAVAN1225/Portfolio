
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home/home.css";
const Navbar = () => {
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
  
  return (
    <div>
        <nav className={`home-nav ${isDark ? "bg-[#2D2D2D]" : "bg-[#f1f1f1]"}`}>
          <div className="logo-img">
            <img src="/header.jpg" alt="Logo" />
          </div>

        
          <div className="home-menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/project">Project</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              {/* <li><a href="#about">About</a></li>
              <li><a href="#skill">Services</a></li>
              <li><a href="#project">Project</a></li>
              <li><a href="#contact">Contact</a></li> */}
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
    </div>
  )
}

export default Navbar
