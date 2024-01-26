import React from 'react';
import { Icon } from '@iconify/react';
import '../css/footer.css';

const Footer = () => (
  <footer>
    <hr className="zline" />
    <div className="d-flex align-items-center justify-content-between mb-2">
      <p className="rights">
        <Icon icon="mdi:at" />
        2024. All Rights Reserved
      </p>
      <p className="footer-design">Design Implemented By Ronnie Bisaso</p>
      <ul className="d-flex align-items-center footer-icons">
        <li>
          <a href="https://twitter.com/bisaso_r" target="_blank" rel="noopener noreferrer">
            <Icon className="icon3" icon="simple-icons:x" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ronnie-bisaso/" target="_blank" rel="noopener noreferrer">
            <Icon className="icon3" icon="formkit:linkedin" />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@bronnie313" target="_blank" rel="noopener noreferrer">
            <Icon className="icon3" icon="mingcute:medium-fill" />
          </a>
        </li>
        <li>
          <a href="https://github.com/bronnie313" target="_blank" rel="noopener noreferrer">
            <Icon className="icon3" icon="charm:github" />
          </a>
        </li>
        <li>
          <a href="https://wellfound.com/u/bisaso-ronald" target="_blank" rel="noopener noreferrer">
            <Icon className="icon3" icon="simple-icons:wellfound" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
