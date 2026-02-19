import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: "fa-facebook",  href: "https://www.facebook.com/profile.php?id=100054613264309", label: "Facebook" },
    { icon: "fa-linkedin",  href: "https://www.linkedin.com/in/dipak-chavan-19317024b/",    label: "LinkedIn" },
    { icon: "fa-github",    href: "https://github.com/DipakCHAVAN1225",                      label: "GitHub"   },
    { icon: "fa-instagram", href: "#",                                                        label: "Instagram"},
    { icon: "fa-dribbble",  href: "https://dribbble.com/Dipu9322",                           label: "Dribbble" },
  ];

  const navLinks = [
    { label: "Home",    href: "#"        },
    { label: "About",   href: "#about"   },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer">

      {/* Top wave */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#2CB0ED" />
        </svg>
      </div>

      <div className="footer-inner">

        {/* Brand */}
        <div className="footer-brand">
          <span className="footer-logo">Dipak<span className="footer-logo-dot">.</span></span>
          <p className="footer-tagline">Frontend Developer &amp; UI Enthusiast</p>
        </div>

        {/* Nav links */}
        <nav className="footer-nav">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className="footer-nav-link">{label}</a>
          ))}
        </nav>

        {/* Socials */}
        <div className="footer-socials">
          {socials.map(({ icon, href, label }) => (
            <a key={label} href={href} className="footer-social-icon" aria-label={label} target="_blank" rel="noreferrer">
              <i className={`fa-brands ${icon}`}></i>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Copyright */}
        <p className="footer-copy">
          © {currentYear} All rights reserved — Designed &amp; built with
          <span className="footer-heart"> ❤️ </span>
          by <span className="footer-name">Dipuuu</span>
        </p>

      </div>
    </footer>
  );
}

export default Footer;