import React from 'react';
import ProjectsContainer from './ProjectsContainer'
import '../css/portfolio.css'

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <div>
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
            <button type="button" className="btn btn-sm btn-success">Show more</button>
        </div>
        <ProjectsContainer />
    </div>
  )
}

export default Portfolio;
