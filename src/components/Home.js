import React from 'react';
import { Icon } from '@iconify/react';
import '../css/home.css';

const Home = () => (
  <section id="about-me">
    <div className="profile ">
      <p className="headline mb-2">Welcome</p>
      <h1 style={{ fontWeight: '600' }}>
        <span className="text-success">Greetings!</span>
        {' '}
        My name is
        {' '}
        <span className="text-success">Ronnie Bisaso</span>
        ,
      </h1>
      <p>
        <em>
          and I specialize in software development.
          If you have a product, feature or website you would like to bring to life,
          please don&apos;t hesitate to get in touch.
        </em>
      </p>
      <button type="button" className="btn btn-success btn-sm mt-2"><a href="#my-contacts">contact me</a></button>
    </div>
    <div className="profile-pic">
      <img className="profile-img" src="./images/profile.png" alt="profile-pic" />
    </div>
    <div className="social-connection">
      <div className="vertical-text">
        Follow me on:
        <hr className="vertical-line" />
      </div>
      <ul className="social-media">
        <li>
          <a href="https://twitter.com/bisaso_r" target="_blank" rel="noopener noreferrer">
            <Icon className="icon" icon="simple-icons:x" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ronnie-bisaso/" target="_blank" rel="noopener noreferrer">
            <Icon className="icon" icon="formkit:linkedin" />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@bronnie313" target="_blank" rel="noopener noreferrer">
            <Icon className="icon" icon="mingcute:medium-fill" />
          </a>
        </li>
        <li>
          <a href="https://github.com/bronnie313" target="_blank" rel="noopener noreferrer">
            <Icon className="icon" icon="charm:github" />
          </a>
        </li>
        <li>
          <a href="https://wellfound.com/u/bisaso-ronald" target="_blank" rel="noopener noreferrer">
            <Icon className="icon" icon="simple-icons:wellfound" />
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default Home;
