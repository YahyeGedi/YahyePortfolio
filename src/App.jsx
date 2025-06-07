import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParticleBackground from './components/Particle'
import Skills from './components/Skills'
import Experience from './components/Experince'
import Projects from './components/projects'
import Contact from './components/Contact'
import Footer from './components/Footer' 

const App = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000, 
    });
  },[]);
  return (
    <>
    <ParticleBackground />
    <Navbar />
    <Hero />
    <Skills />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App