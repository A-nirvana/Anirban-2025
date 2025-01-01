import About from "./pages/About";
import Contact from "./pages/Contact";
import WorkExperience from "./pages/Experience";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Project from "./pages/Project";

const App = ()=>{
    return (
        <main>
          <Navbar/>
          <Hero/>
          <About/>
          <Project/>
          <WorkExperience/>
          <Contact/>
          <Footer/>
        </main>
    )
}

export default App;