import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import '../css/header.css';

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
            <Icon icon="carbon:transform-binary" color="#0db760" fontSize="3.5rem" className="rotate-icon" />
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
    <nav className="d-flex justify-content-between align-items-center main-header">
      <div className="d-flex justify-content-center flex-column align-items-center mt-2">
        <h1 className="logo">
          R
          <Icon icon="carbon:transform-binary" color="#0db760" fontSize="3.5rem" className="rotate-icon" />
          N
        </h1>
        <p className="solutions"><em>Software Solutions</em></p>
      </div>
      <ul className="d-flex align-items-center header-ul">
        <li>
          <a className="nav-title" href="#about-me">
            <Icon icon="octicon:home-24" className="nav-icon" />
          </a>
        </li>
        <li>
          <a className="nav-title2" href="#my-skills">
            <Icon icon="game-icons:skills" className="nav-icon" />
          </a>
        </li>
        <li>
          <a className="nav-title3" href="#my-reviews">
            <Icon icon="material-symbols:reviews-outline-rounded" className="nav-icon" />
          </a>
        </li>
        <li>
          <a className="nav-title4" href="#my-projects">
            <Icon icon="bytesize:portfolio" className="nav-icon" />
          </a>
        </li>
        <li>
          <a className="nav-title5" href="#my-contacts">
            <Icon icon="mingcute:contacts-line" className="nav-icon" />
          </a>
        </li>
        <li>
          <button type="button" className="btn btn-outline-success btn-sm" aria-label="Download CV"><a className="cv" href="https://docs.google.com/document/d/1BNoFCStYQbHl8Bwq073pdJt1owdG0XDF3TrVxV-KHgE/edit?usp=sharing">Download CV</a></button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
