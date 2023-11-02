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
        <li><Icon className="icon" icon="pajamas:twitter" color="white" /></li>
        <li><Icon className="icon" icon="formkit:linkedin" /></li>
        <li><Icon className="icon" icon="mingcute:medium-fill" /></li>
        <li><Icon className="icon" icon="charm:github" /></li>
      </ul>
    </div>
  </footer>
);

export default Footer;
