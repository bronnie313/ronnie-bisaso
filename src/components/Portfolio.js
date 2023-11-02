import React from 'react';
import ProjectsContainer from './ProjectsContainer';
import '../css/portfolio.css';

const Portfolio = () => (
  <div className="portfolio">
    <div className="d-flex flex-column justify-content-center align-items-center m-4">
      <p className="headline">Portfolio</p>
      <h3>
        My Creative Works Some Latest
        <span className="text-success"> Project</span>
      </h3>
      <p>
        <em>
          I have selected and mentioned here some of my latest projects to share with you.
        </em>
      </p>
    </div>
    <ProjectsContainer />
  </div>
);

export default Portfolio;
