import Img from "./logo.jpg"
import "./home.css"

function Home() {

  return (
    <div className="main-home" id="home">
      {/*================== Home page Navbar ========================== */}
      <nav className="home-nav">
         <div className="logo-img">
              <img src={Img}/>
         </div>
         <div className="home-menu">
            <ul>
              {/* <li>Home</li> */}
              <a href="#home"> <li>Home</li></a>
               <a href="#about"> <li>About</li></a>
               <a href="#skill"> <li>Services</li></a>
               <a href="#project"> <li>project</li></a>
               <a href="#contact"> <li>Contact</li></a>
              {/* <li>Services</li>
              <li>Projects</li>
              <li>Contact</li> */}
            </ul>
             <p className="nav-icon">
                <i className="fa-solid fa-bars"></i>
             </p>
         </div>
      </nav>
      {/*==================== home page text and hero image ======================*/}
       <section className="hero flex items-center justify-center">
        {/*===================== text section ===========================*/}
         <section className="home-text">
            <p>Hello</p>
            <h1>I am <span></span></h1>
            <p>Let&apos;s Explore My Journey</p>
            <button>More About Me</button>
         </section>
         {/* =========================== image section =============================*/}
         <section className="home-image flex items-center justify-center">
          <img src={Img} className="hero-img"></img>
         </section>
       </section>
    </div>

  )
}

export default Home
