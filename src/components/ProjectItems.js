import React from 'react'
import { useDispatch } from 'react-redux';
import { setSelectedProject } from '../features/slide/slideSlice';
import { openModal } from '../features/modal/modalSlice';

const ProjectItem = ({id, title, description, image}) => {
  const dispatch = useDispatch()

  const handleViewMore = () => {
    dispatch(setSelectedProject({id, title, description, image}));
    dispatch(openModal())
  }   

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
      </div>
        <button type="button" className="btn btn-success m-2 btn-sm"
        onClick={handleViewMore}
        >View more</button>
    </div>
  )
}

export default ProjectItem;
