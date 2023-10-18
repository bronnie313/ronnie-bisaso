import React from 'react';

const Header = () => (
  <nav className="d-flex justify-content-around align-items-center mt-3">
    <div>Logo</div>
    <ul className="d-flex align-items-center">
      <li>About</li>
      <li>Skills</li>
      <li>Projects</li>
      <li>contact</li>
    </ul>
    <button type="button" className="btn btn-outline-success btn-sm">Download CV</button>
  </nav>
);

export default Header;
