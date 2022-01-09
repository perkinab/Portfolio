import './about.css';
import React from 'react';

export default function About() {
  return (
    <div className="about">
      <div className="about-left">Hi, I'm Andrew</div>
      <div className="about-right">
        Here's what I'm learning:<br></br>
        <i class="devicon-javascript-plain colored" alt="JavaScript"></i>JavaScript<br></br>
        <i class="devicon-typescript-plain colored"></i>TypeScript<br></br>
        <i class="devicon-html5-plain-wordmark colored"></i>HTML<br></br>
        <i class="devicon-css3-plain" alt="CSS">
          CSS
        </i>
        <br></br>
        <i class="devicon-react-original colored"></i>React<br></br>
        <i class="devicon-redux-original colored"></i>Redux<br></br>
        <i class="devicon-git-plain colored"></i>Git
        <i class="devicon-github-original-wordmark colored"></i>
        <br></br>
        <i class="devicon-googlecloud-plain-wordmark colored"></i>GCP
      </div>
    </div>
  );
}
