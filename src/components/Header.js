import React from 'react';
import { Icon } from '@iconify/react';

const Header = () => (
  <nav className="d-flex justify-content-around align-items-center mt-3">
    <div className="d-flex justify-content-center flex-column align-items-center">
      <h1 className="logo">
        R
        <Icon icon="ant-design:code-filled" color="#0db760" fontSize="5rem" />
        N
      </h1>
      <p className="solutions"><em>Software Solutions</em></p>
    </div>
    <ul className="d-flex align-items-center">
      <li className="nav-title">About</li>
      <li className="nav-title">Skills</li>
      <li className="nav-title">Reviews</li>
      <li className="nav-title">Projects</li>
      <li className="nav-title">contact</li>
    </ul>
    <button type="button" className="btn btn-outline-success btn-sm">Download CV</button>
  </nav>
);

export default Header;
