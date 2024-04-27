import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Social from "./components/Social";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />

      <SocialLinks />
      <Social />
    </div>
  );
}

export default App;
