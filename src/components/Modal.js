import React from 'react'
import { Icon } from '@iconify/react';
import '../css/modal.css'
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';
import store from '../store';

const Modal = () => {
    const { id, image, title, description } =useSelector((store) => store.slide)
    console.log(useSelector((store) => store.slide));
    const dispatch = useDispatch()
  return (
    <div className='modal-container'>
      <div className='modal'>
      <Icon icon="carbon:close-outline" className='close-btn' onClick={() => dispatch(closeModal())}/>
        <div className='modal-image-container'>
            <div className='modal-image'>
                <img className='modal-img-pic' src={image} alt={image} />
            </div>
        </div>
        <div className='modal-details'>
            <div>
                <h3 className="name">{title}</h3>
                <p className='description'>{description}</p>
                <ul className='tech-stack'>
                    <li><Icon icon="logos:html-5" /></li>
                    <li><Icon icon="akar-icons:css-fill" /></li>
                    <li><Icon icon="devicon:react-wordmark" /></li>
                    <li><Icon icon="logos:redux" /></li>
                    <li><Icon icon="devicon:ruby-wordmark" /></li>
                    <li><Icon icon="logos:rails" /></li>
                </ul>
            </div>
            <div className='btn-container'>
                <button type="button" className="btn btn-light m-2 btn-sm">See live <Icon icon="solar:round-arrow-left-up-broken" rotate={1} /></button>
                <button type="button" className="btn btn-light m-2 btn-sm">See source <Icon icon="teenyicons:github-solid" /></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;
