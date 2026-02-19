
import "./home.css";
import "../../App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShootingStar from "../ShootingStar";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  // Retrieve theme from localStorage or set default to "light"

  

  // State for menu toggle


  // Toggle menu
  

  // Toggle theme
  

  // Apply theme changes


  // GSAP Animation
  const homeP = useRef();

  useGSAP(() => {
    gsap.from(homeP.current, {
      y: 60,
      duration: 0.7,
      opacity: 0,
      delay: 1,
      scrub: 3,
    });

    gsap.from("h1", {
      y: 90,
      duration: 0.7,
      opacity: 0,
      delay: 1,
      scrub:3,
    });

    gsap.from(".hero-img img", {
      y: 400,
      ease: "power2.inOut",
      duration: 1,
      opacity: 0,
      delay: 0.5,
      scrub:3,
    });
  });

  return (
    <main>
      <div className="main-home" id="home">
        <ShootingStar />

        {/* Home Navbar */}
      

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
              {/* <span className={`${isDark ? "after:bg-[#2D2D2D]" : "after:bg-[#EFF0F4]"}`}></span> */}
            </h1>
            <p ref={homeP}>Let&apos;s Explore My Journey</p>
            <a href="#about">
              <button className="nav-hire-btn"> More About Me</button>
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
