import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <ul>
        <li className="project-item">
          <img src="./project1.png" alt="Project 1" className="project-image" width='200px' />
          <span>Project 1: Online Shopping Application</span>
        </li>
        <li className="project-item">
          <img src="./Project2.png" alt="Project 2" className="project-image" />
          <span>Project 2: Weather Dashboard</span>
        </li>
        <li className="project-item">
          <img src="./Project3.png" alt="Movie Search App" className="project-image" />
          <span>Project 3: Movie Search App</span>
        </li>
        <li className="project-item">
          <img src="./Project4.png" alt="JavaScript Project" className="project-image" />
          <span>Project 4: JavaScript Project</span>
        </li>
        <li className="project-item">
          <img src="./Project5.png" alt="Theme App" className="project-image" />
          <span>Project 5: Theme App</span>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
