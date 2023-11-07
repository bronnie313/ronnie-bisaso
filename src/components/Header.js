import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

const Header = () => {
  const [breakpoint, setBreakpoint] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (breakpoint <= 520) {
    return (
      <div className="d-flex justify-content-between align-items-center m-3">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <h1 className="logo">
            R
            <Icon icon="ant-design:code-filled" color="#0db760" fontSize="3rem" />
            N
          </h1>
        </div>
        <div className="dropdown">
          <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
            <Icon icon="mingcute:menu-fill" fontSize="3rem" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <button className="dropdown-item" type="button">
                <a className="nav-title" href="#my-skills">
                  Skills
                </a>
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                <a className="nav-title" href="#my-reviews">
                  Reviews
                </a>
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                <a className="nav-title" href="#my-projects">
                  projects
                </a>
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                <a className="nav-title" href="#my-contacts">
                  contact
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
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
      <button type="button" className="btn btn-outline-success btn-sm" aria-label="Download CV"><a className="cv" href="https://docs.google.com/document/d/1BNoFCStYQbHl8Bwq073pdJt1owdG0XDF3TrVxV-KHgE/edit?usp=sharing">Download CV</a></button>
      {/* <hr className="header-line" /> */}
    </nav>
  );
};

export default Header;
