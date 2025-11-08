import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter antialiased">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="bg-slate-950 py-10 text-center text-white/60">
        <p className="text-sm">© {new Date().getFullYear()} Faizaa • Built with React, Tailwind & Spline</p>
      </footer>
    </div>
  );
}

export default App;
