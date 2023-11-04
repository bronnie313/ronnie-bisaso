import React from 'react';
import { Icon } from '@iconify/react';
import '../css/modal.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';

const Modal = () => {
  const selectedProject = useSelector((store) => store.slide.selectedProject);
  const {
    title, image, description, link, github,
  } = selectedProject;
  const dispatch = useDispatch();
  return (
    <div className="modal-container">
      <div className="modal">
        <Icon icon="carbon:close-outline" className="close-btn" onClick={() => dispatch(closeModal())} />
        <div className="modal-sections">
          <div className="modal-image-container">
            <div className="modal-image">
              <img className="modal-img-pic" src={image} alt={image} />
            </div>
          </div>
          <div className="modal-details">
            <div className="modal-info">
              <h3 className="modal-name">{title}</h3>
              <p className="modal-description">{description}</p>
              <ul className="tech-stack">
                <li><Icon icon="logos:html-5" /></li>
                <li><Icon icon="akar-icons:css-fill" /></li>
                <li><Icon icon="devicon:react-wordmark" /></li>
                <li><Icon icon="logos:redux" /></li>
                <li><Icon icon="devicon:ruby-wordmark" /></li>
                <li><Icon icon="logos:rails" /></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="btn-container mt-2">
          <button type="button" className="btn btn-light btn-sm see-btns">
            <a href={link}>
              See live
              {' '}
              <Icon icon="solar:round-arrow-left-up-broken" rotate={1} />
            </a>
          </button>
          <button type="button" className="btn btn-light btn-sm see-btns">
            <a href={github}>
              See source
              {' '}
              <Icon icon="teenyicons:github-solid" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
