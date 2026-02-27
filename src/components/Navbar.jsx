import { useState, useEffect } from "react";
import "./navbar.css";

const navLinks = [
  { label: "Home",     to: "#home"     },
  { label: "About",    to: "#about"    },
  { label: "Services", to: "#services" },
  { label: "Project",  to: "#project"  },
  { label: "Contact",  to: "#contact"  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Track scroll — navbar always stays visible
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Highlight active section
      const sections = navLinks.map(l => l.to.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveLink(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setIsMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(o => !o);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>

        {/* Animated accent line at bottom */}
        <div className="navbar-accent-line" />

        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <div className="navbar-logo-img-wrap">
            <img src="/header.jpg" alt="Dipak" />
            <div className="navbar-logo-ring" />
          </div>
          <span className="navbar-logo-name">
            Dipak<span className="navbar-logo-dot">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="navbar-links">
          {navLinks.map(({ label, to }) => {
            const id = to.replace("#", "");
            const isActive = activeLink === id;
            return (
              <li key={label}>
                <a
                  href={to}
                  className={`navbar-link ${isActive ? "navbar-link--active" : ""}`}
                  onClick={closeMenu}
                >
                  {label}
                  <span className="navbar-link-dot" />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right controls */}
        <div className="navbar-controls">
          <a href="#contact" className="navbar-hire-btn" onClick={closeMenu}>
            <span className="navbar-hire-bg" />
            <i className="fa-solid fa-envelope" />
            <span>Hire Me</span>
            <i className="fa-solid fa-arrow-right navbar-hire-arrow" />
          </a>

          {/* Hamburger */}
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
      <div className={`navbar-mobile ${isMenuOpen ? "navbar-mobile--open" : ""}`}>
        <div className="navbar-mobile-inner">
          {navLinks.map(({ label, to }, i) => {
            const id = to.replace("#", "");
            return (
              <a
                key={label}
                href={to}
                className={`navbar-mobile-link ${activeLink === id ? "navbar-mobile-link--active" : ""}`}
                onClick={closeMenu}
                style={{ "--i": i }}
              >
                <span className="mobile-link-bar" />
                {label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="navbar-mobile-hire"
            onClick={closeMenu}
            style={{ "--i": navLinks.length }}
          >
            <i className="fa-solid fa-envelope" />
            Hire Me
          </a>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="navbar-overlay" onClick={closeMenu} />
      )}
    </>
  );
};

export default Navbar;