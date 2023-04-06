import React from "react";
import "../assets/App.css";

function Portfolio() {
  return (
    <div className="projects-div">
      <h1 id="Portfolio">Portfolio</h1>

      <div></div>

      <div className="projects">
        {/* Add your new Social Media Project div here */}
        <div className="project-container">
          <h4>Social Media Project</h4>
          <a href="https://wotsproject.herokuapp.com/">
            <img
              src="WOTShomepageDesktop.jpg"
              alt="Social Media Project Picture"
              height="400"
              href="#"
            />
            <br />
          </a>
        </div>

        <div className="project-container">
          <h4>Horiseon Project</h4>
          <a href="https://ryanhood10.github.io/Challenge1Horiseon/">
            <img
              src="website-top-screen-shot.png"
              alt="Webpage Example 1"
              height="400"
              href="#"
            />
            <br />
          </a>
        </div>
        {/* Rest of your projects */}
        <div className="project-container">
          <a href="https://ryanhood10.github.io/Challenge1Horiseon/">
            <img
              src="website-bottom-screen-shot.png"
              alt="Webpage Example 2"
              height="300"
              href="#"
            />
            <br />
          </a>
        </div>

        <div className="project-container">
          <h4>Flexbox Project</h4>
          <a href="https://google.com">
            <img
              src="Screenshot slack.png"
              alt="Project 2g"
              height="300"
              href="#"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
