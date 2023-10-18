import React from 'react';
import { Icon } from '@iconify/react';

const Home = () => (
  <section>
    <div className="profile">
      <p>Welcome</p>
      <h1>Glad to see you!, I&apos;m Bronnie.</h1>
      <p>
        I&apos;m a software developer! I can help you build a product, feature or website.
        If you like what you see and have a project you need coded,
        don&apos;t hesitate to contact me.
      </p>
      <button type="button" className="btn btn-success">contact me</button>
    </div>
    <div className="profile-pic">Profile goes here</div>
    <div className="social-connection">
      <div className="vertical-text">Follow me on:</div>
      <div className="vertical-line"><hr /></div>
      <ul>
        <li><Icon icon="circum:twitter" /></li>
        <li><Icon icon="formkit:linkedin" /></li>
        <li><Icon icon="openmoji:instagram" /></li>
        <li><Icon icon="mingcute:medium-fill" /></li>
        <li><Icon icon="ph:github-logo-thin" /></li>
      </ul>
    </div>
  </section>
);

export default Home;
