import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const navLinks = [
  { label: "Home",     to: "#home"        },
  { label: "About",    to: "#about"   },
  { label: "Services", to: "#services"},
  { label: "Project",  to: "#project" },
  { label: "Contact",  to: "#contact" },
];

const Navbar = () => {
  const [theme,      setTheme]      = useState(() => localStorage.getItem("theme") || "light");
  const [isDark,     setIsDark]     = useState(() => localStorage.getItem("theme") === "dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [hidden,     setHidden]     = useState(false);

  // Track scroll position + direction
  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      // Hide navbar when scrolling DOWN fast, show when scrolling UP
      setHidden(currentY > lastY && currentY > 120);
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Apply theme to body
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#2D2D2D" : "#EFF0F4";
    document.body.style.color           = isDark ? "#F8FAFC" : "#1a1a2e";
  }, [isDark]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setIsMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    setIsDark(next === "dark");
    localStorage.setItem("theme", next);
  };

  const toggleMenu  = () => setIsMenuOpen((o) => !o);
  const closeMenu   = () => setIsMenuOpen(false);

  return (
    <>
      <nav
        className={[
          "navbar",
          scrolled   ? "navbar--scrolled" : "",
          hidden     ? "navbar--hidden"   : "",
          isDark     ? "navbar--dark"     : "navbar--light",
        ].join(" ")}
      >
        {/* Logo */}
        <div className="navbar-logo">
          <img src="/header.jpg" alt="Dipak Logo" />
          <span className="navbar-logo-name">Dipak<span className="navbar-logo-dot">.</span></span>
        </div>

        {/* Desktop links */}
        <ul className="navbar-links">
          {navLinks.map(({ label, to }) => (
            <li key={label}>
              <a href={to} className="navbar-link" onClick={closeMenu}>
  {label}
</a>
            </li>
          ))}
        </ul>

        {/* Right side controls */}
        <div className="navbar-controls">
          {/* Theme toggle */}
          <button
            className={`theme-toggle ${isDark ? "theme-toggle--dark" : "theme-toggle--light"}`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <div className="theme-toggle-thumb">
              <i className={`fa-solid ${isDark ? "fa-sun" : "fa-moon"}`}></i>
            </div>
          </button>

          {/* Hire Me button (desktop) */}
          {/* <Link to="/contact" className="navbar-hire-btn">Hire Me</Link> */}
          <a href="#contact" className="navbar-hire-btn" onClick={closeMenu}>
  Hire Me
</a>

          {/* Hamburger (mobile) */}
          <button
            className={`navbar-hamburger ${isMenuOpen ? "navbar-hamburger--open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div className={`navbar-mobile ${isMenuOpen ? "navbar-mobile--open" : ""} ${isDark ? "navbar-mobile--dark" : ""}`}>
        <ul>
          {navLinks.map(({ label, to }) => (
            <li key={label}>
              {/* <Link to={to} onClick={closeMenu} className="navbar-mobile-link">{label}</Link> */}
              <a href={to} className="navbar-mobile-link" onClick={closeMenu}>
  {label}
</a>
            </li>
          ))}
          <li>
            <Link to="/contact" onClick={closeMenu} className="navbar-mobile-hire">Hire Me</Link>
            <a href="#contact" className="navbar-mobile-hire" onClick={closeMenu}>
  Hire Me
</a>
          </li>
        </ul>
      </div>

      {/* Overlay behind mobile menu */}
      {isMenuOpen && (
        <div className="navbar-overlay" onClick={closeMenu} />
      )}
    </>
  );
};

export default Navbar;