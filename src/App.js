import React from "react";

import Navbar from "./Components/navbar/Navbar";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Projects from "./Components/projects/Projects";
import Resume from "./Components/resume/Resume";
import "./app.css";


function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">           
        <About/>        
        <Projects/>
        <Resume/>        
        <Contact/>
      </div>
    </div>
  );
}

export default App;
