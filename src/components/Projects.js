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
        <a href="https://catherinecunningham.github.io/mod-4-challenge-codingquiz/">
          <img src={require("../images/coding-quiz.png")} alt="A runner leans down to lace up their shoe" />
          <div className="top-left">Coding Quiz</div>
        </a>
      </div>
      <div className="application-image">
        <a href="https://catherinecunningham.github.io/mod-6-weatherdashboard/">
          <img src={require("../images/weather-dashboard.png")} alt="A runner leans down to lace up their shoe" />
          <div className="top-left">Weather Dashboard</div>
        </a>
      </div>
      <div className="application-image">
        <a href="https://catherinecunningham.github.io/mod-3-challenge-passwordgenerator/">
          <img src={require("../images/password-generator.png")} alt="A runner leans down to lace up their shoe" />
          <div className="top-left">Weather Dashboard</div>
        </a>
      </div>
    </div>
  </section>
    )
}
export default Projects