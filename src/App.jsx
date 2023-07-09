import { useEffect } from 'react';
import './App.css'
import Navbar from './Layouts/Navbar'
import Aos from 'aos';
import "aos/dist/aos.css";
import Hero from './components/Hero';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Projects from './components/Projects';
// import AllProjects from './components/Projects/AllProjects';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <div className="">
      <Navbar></Navbar>
      {/* <Banner></Banner> */}
      <Hero></Hero>
      <Skills></Skills>
      <Services></Services>
      <Projects></Projects>
      {/* <AllProjects></AllProjects> */}
      <Contact></Contact>
      
    </div>
  )
}

export default App
