import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
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
  <Projects />
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
  <Footer />
</div>

    </div>
  );
}

export default App;
