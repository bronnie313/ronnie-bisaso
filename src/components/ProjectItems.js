import React from 'react'

const ProjectItem = ({id, title, description, image}) => {
  return (
    <div className='project'>
      <div className='image-content'>
        <div className='card-image'>
          <img className='image-pic' src={image} alt={image} />
        </div>
      </div>
      <div className='project-content'>
        <h3 className="name">{title}</h3>
        <p className='description'>{description}</p>
        <button type="button" className="btn btn-success btn-sm">View more</button>
      </div>
    </div>
  )
}

export default ProjectItem;
