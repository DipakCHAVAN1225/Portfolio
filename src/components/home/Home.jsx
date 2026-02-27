import "./home.css";
import "../../App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShootingStar from "../ShootingStar";
import { useRef, useState, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const ROLES = [
  "Frontend Developer",
  "Dipak Chavan",
  "Freelance Developer",
  "UI/UX Enthusiast",
  "React Specialist",
];

function TypewriterText() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout;

    if (!deleting && charIndex <= currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex > currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 45);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % ROLES.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="typewriter-text">
      {displayed}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

function Home() {
  const homeP = useRef();
  const heroTextRef = useRef();

  useGSAP(() => {
    // Staggered entrance for hero text children
    gsap.from(heroTextRef.current.children, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.3,
    });

    gsap.from(".hero-img img", {
      y: 80,
      scale: 0.92,
      ease: "power3.out",
      duration: 1.1,
      opacity: 0,
      delay: 0.6,
    });

    // Subtle floating animation on hero image
    gsap.to(".hero-img img", {
      y: -14,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1.8,
    });

    // Grid squares staggered pop-in
    gsap.from(".square", {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      stagger: { amount: 1.2, from: "random" },
      ease: "back.out(1.7)",
      delay: 0.1,
    });
  });

  return (
    <main>
      <div className="main-home" id="home">
        <ShootingStar />

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
          <section className="home-text" ref={heroTextRef}>
            <p className="hero-greeting">Hello 👋</p>

            <h1>
              I am <TypewriterText />
            </h1>

            <p ref={homeP} className="hero-sub">
              Let&apos;s Explore My Journey
            </p>

            <a href="#about">
              <button className="nav-hire-btn">More About Me</button>
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