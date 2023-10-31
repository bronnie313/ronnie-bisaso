import React from 'react'

const ProjectItem = ({id, title, description, image}) => {
  return (
    <div className='project'>
      <div className='image-content'>
        <span className='overlay'></span>

        <div className='card-image'>
          <img className='image-pic' src={image} alt={image} />
        </div>
      </div>

      <div className='project-content'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
        <button type="button">View more</button>
    </div>
  )
}

export default ProjectItem;
