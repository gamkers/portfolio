import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <>
      {/* Spline 3D Background */}
      <spline-viewer 
        url="https://prod.spline.design/rV6Jmc853U2mtqN5/scene.splinecode"
        style={{
          position: 'fixed',
          top: '-10%',
          left: '-20%',
          width: '130vw',
          height: '120vh',
          zIndex: 0,
          display: 'block',
          transform: 'scale(1.2)',
          transformOrigin: 'center center'
        }}
      />
      <div className="min-h-screen text-white relative overflow-x-hidden" style={{ backgroundColor: 'transparent', zIndex: 1 }}>
        {/* <ParticleBackground /> */}
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;