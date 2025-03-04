import "./skill.css"
function Education(){
  return (
    // =========================== it is a education section in skill =====================================
    <>
    <section className=" edu-container bg-red-404">
        <div className="edu-card bg-gray-200 p-8 text-end">
        <p className="text-cyan-500">2022 – 2025</p>
        <h1 className="">Bachelor Of Computer Application</h1>
         <p>Moolji Jaitha College (jalgaon)</p>
          <p>CGPA : 7.50</p>
        </div>
        <div className="edu-line"></div>
        <p className="edu-icon">  <i className="fa-solid fa-graduation-cap"></i></p>
    </section>
    <section className=" edu-container2 bg-red-404">
        <div className="edu-line2"></div>
        <div className="edu-card2 bg-gray-200 p-8 text-end">
        <p className="edu-icon2"><i className="fa-solid fa-graduation-cap"></i></p>
        <p className="text-cyan-500">2022 – 2025</p>
        <h1 className="">Bachelor Of Computer Application</h1>
         <p>Moolji Jaitha College (jalgaon)</p>
          <p>CGPA : 7.50</p>
        </div>
      
    </section>
    </>
  )
}

export default Education

