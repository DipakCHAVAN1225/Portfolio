import { useEffect, useRef, useState } from "react";
import "./App.css";

import Navbar  from "./components/Navbar";
import Home    from "./components/home/Home";
import About   from "./components/about/About";
import Skill   from "./components/Skillset/Skill";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Footer  from "./components/footer/Footer";

// ── Custom cursor ──
function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos     = useRef({ x: 0, y: 0 });
  const ring    = useRef({ x: 0, y: 0 });
  const animRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top  = `${e.clientY}px`;
      }
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animateRing = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12);
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top  = `${ring.current.y}px`;
      }
      animRef.current = requestAnimationFrame(animateRing);
    };
    animRef.current = requestAnimationFrame(animateRing);

    const onEnter = () => {
      dotRef.current?.classList.add("cursor-dot--hover");
      ringRef.current?.classList.add("cursor-ring--hover");
    };
    const onLeave = () => {
      dotRef.current?.classList.remove("cursor-dot--hover");
      ringRef.current?.classList.remove("cursor-ring--hover");
    };

    const attachListeners = () => {
      document
        .querySelectorAll("a, button, [role='button'], input, textarea, .project-card, .skill-card")
        .forEach((el) => {
          el.addEventListener("mouseenter", onEnter);
          el.addEventListener("mouseleave", onLeave);
        });
    };

    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    attachListeners();

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className={`cursor-dot  ${visible ? "cursor-dot--visible"  : ""}`} />
      <div ref={ringRef} className={`cursor-ring ${visible ? "cursor-ring--visible" : ""}`} />
    </>
  );
}

// ── Scroll to top on every route change ──

function App() {
  return (
    <div className="app-root">
      <CustomCursor />
      <Navbar />

      <main className="app-main">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Skill />
        </section>

        <section id="project">
          <Project />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;