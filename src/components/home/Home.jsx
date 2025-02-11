import Img from "./logo.jpg"
import "./home.css"
function Home() {
  return (
    <div className="main-home">
      {/*================== Home page Navbar ========================== */}
      <nav className="home-nav">
         <div className="logo-img">
              <img src={Img}/>
         </div>
         <div className="home-menu">
         <i className="fa-solid fa-bars"></i>
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
