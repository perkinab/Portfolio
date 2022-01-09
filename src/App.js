import React from 'react';

import Navigation from './Components/navbar/Navbar';
import About from './Components/about/About';
import Contact from './Components/contact/Contact';
import Projects from './Components/projects/Projects';
import Resume from './Components/resume/Resume';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="sections">
        <About />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
