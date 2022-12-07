function Projects() {
    return(
        <section id="about-my-work">
    <h2 className="lower-title">About My Work</h2>
    <div className="lower-images">
      <div className="application-image">
        <a href="https://lowsaetern.github.io/Group-Project-1/" target="_blank">
          <img src={require("../images/What Do I Do Now.png")} alt="Screenshot of What Do I Do Now app" />
          <div className="top-left">What Do I Do Now</div>
        </a>
      </div>
      <div className="application-image">
        <a href="https://smart-homie.herokuapp.com/" target="_blank">
          <img src={require("../images/Smart Homie.png")} alt="Screenshot of Smart Homie app" />
          <div className="top-left">Smart Homie</div>
        </a>
      </div>
      <div className="application-image">
        <a href="https://catherinecunningham.github.io/run-buddy/">
          <img src={require("../images/Run Buddy.png")} alt="A runner leans down to lace up their shoe" />
          <div className="top-left">Run Buddy</div>
        </a>
      </div>
    </div>
  </section>
    )
}
export default Projects