import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => (
  <footer>
    <hr className="zline" />
    <div className="d-flex align-items-center justify-content-between">
      <p>
        <Icon icon="mdi:at" />
        2023. All Rights Reserved
      </p>
      <p>Design Implemented By RONNIE BISASO</p>
      <ul className="d-flex align-items-center">
        <li>
          <a href="https://twitter.com/bisaso_r">
            <Icon className="icon" icon="pajamas:twitter" color="white" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ronnie-bisaso/">
            <Icon className="icon" icon="formkit:linkedin" />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@bronnie313">
            <Icon className="icon" icon="mingcute:medium-fill" />
          </a>
        </li>
        <li>
          <a href="https://github.com/bronnie313">
            <Icon className="icon" icon="charm:github" />
          </a>
        </li>
        <li>
          <a href="https://wellfound.com/u/bisaso-ronald">
            <Icon className="icon" icon="simple-icons:wellfound" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
