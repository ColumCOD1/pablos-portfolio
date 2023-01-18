import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import IconButton  from "@material-ui/core/IconButton";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Pablo A. Garcia</h2>
        <div className="prompt">
          <p>I am a Full Stack Devloper that specializes in the React.JS library and Python programming language.</p>
          <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/pablo-alexander-garcia-2b828816b/')}>
          <LinkedInIcon fontSize="large" /> </IconButton>
          <IconButton aria-label="EmailIcon" onClick={() => window.open('https://github.com/ColumCOD1')}>
          <GithubIcon fontSize="large" /> </IconButton>
          
        </div>
      </div>
      <div className="skills">
        <h1> Technical Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Programming Languages</h2>
            <span>JavaScript and Python </span>
          </li>
          <li className="item">
            <h2> Front End</h2>
            <span>
              ReactJS, HTML, XML, JSX, CSS, React Native, NPM, Yarn,
              BootStrap, MaterialUI, StyledComponents, WordPress, Elementor,
            </span>
          </li>
          <br/>
          <li className="item">
            <h2>Back End</h2>
            <span>
              NodeJS, Sanity.IO, Flask, Django, AWS Cloud, RapidAPI, SQL, MySQL and MongoDB.
            </span>
          </li>
          <li className="item">
            <h2>Objective Skills</h2>
            <span>
              Object Oriented Programming (OOP), Procedural Programming, Software Development Life Cycle (SDLC), Search Engine Optimization (SEO)
            </span>
          </li>
          <br/>
          <li className="item">
            <h2>Systems, Tools & IDEs</h2>
            <span>
              MacOS, Windows, VSCode, Pycharm, Microsoft Excel, Microsoft Word, and SEM Rush.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;;