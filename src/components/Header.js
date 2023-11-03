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
      <li>
        <a className="nav-title" href="about-me">
          About
        </a>
      </li>
      <li>
        <a className="nav-title" href="#my-skills">
          Skills
        </a>
      </li>
      <li>
        <a className="nav-title" href="#my-reviews">
          Reviews
        </a>
      </li>
      <li className="nav-title">
        <a className="nav-title" href="#my-projects">
          Projects
        </a>
      </li>
      <li>
        <a className="nav-title" href="#my-contacts">
          contact
        </a>
      </li>
    </ul>
    <button type="button" className="btn btn-outline-success btn-sm"><a className="cv" href="https://docs.google.com/document/d/1BNoFCStYQbHl8Bwq073pdJt1owdG0XDF3TrVxV-KHgE/edit?usp=sharing">Download CV</a></button>
  </nav>
);

export default Header;
