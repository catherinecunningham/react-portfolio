import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
  <header>
    <h1>
      <a href="./index.html">Catherine Cunningham</a>
    </h1>
    <nav>
      <ul>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#about-my-work">About My Work</a>
        </li>
        <li>
          <a href="#contact-info">Contact Information</a>
        </li>
      </ul>
    </nav>
  </header>
  {/*end navigation*/}
  {/*about me*/}
  <section id="about-me">
    <img id="profile-img" src={require("./images/PXL_20220121_234114806.MP.jpg")} alt="Catherine standing in front of her collection of houseplants" />
    <article>
      <h2>About Me</h2>
      <p>
        Hello!  My name is Catherine Cunningham and I am a budding web developer looking to switch my career into the tech world.  I am currently a middle school science teacher near Sacramento, CA.  I am working on my full stack web development certificate through UC Davis's boot camp program and will be finished in December of 2022.  I live in Elk Grove, CA with my husband and dog, and love to get out in nature.
      </p>
    </article>
  </section>
  {/*end about me*/}
  {/*about my work*/}
  <section id="about-my-work">
    <h2 className="lower-title">About My Work</h2>
    <div className="lower-images">
      <div className="application-image">
        <a href="https://lowsaetern.github.io/Group-Project-1/" target="_blank">
          <img src={require("./images/What Do I Do Now.png")} alt="Screenshot of What Do I Do Now app" />
          <div className="top-left">What Do I Do Now</div>
        </a>
      </div>
      <div className="application-image">
        <a href="https://smart-homie.herokuapp.com/" target="_blank">
          <img src={require("./images/Smart Homie.png")} alt="Screenshot of Smart Homie app" />
          <div className="top-left">Smart Homie</div>
        </a>
      </div>
      <div className="application-image">
        <a href="https://catherinecunningham.github.io/run-buddy/">
          <img src={require("./images/Run Buddy.png")} alt="A runner leans down to lace up their shoe" />
          <div className="top-left">Run Buddy</div>
        </a>
      </div>
    </div>
  </section>
  {/*end about my work*/}
  {/*contact info*/}
  <section id="contact-info">
    <h2 className="lower-title">Contact Information</h2>
    <address>
      Phone: (916) 213-5539 
      <br />
      Email: <a href="mailto:cfunk512@gmail.com">cfunk512@gmail.com</a>
      <br />
      <a href="https://github.com/catherinecunningham">GitHub Profile</a>
    </address>
  </section>
  {/*end contact info*/}
  {/*footer*/}
  <section className="footer">
    <h3>Made with ❤️ by Catherine Cunningham</h3>
  </section>
</div>

    </div>
  );
}

export default App;
