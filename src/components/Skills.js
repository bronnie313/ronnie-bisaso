import React from 'react';
import { Icon } from '@iconify/react';
import '../css/skills.css';

const Skills = () => (
  <div id="my-skills" className="skills">
    <div>
      <p className="headline mb-2">My Skills</p>
      <h3>
        Why Hire Me For Your Next
        <span className="text-success"> Project</span>
      </h3>
      <p>
        <em>
          I&apos;m so passionate about Software development,
          I&apos;ve got both soft and good technical skills, good at problem-solving,
          I enjoy working with new technologies and I love collaborating with other
          passionate Software developers.
          {' '}
        </em>
      </p>
      <button type="button" className="btn btn-sm btn-success mt-2"><a href="#my-contacts">Hire Me</a></button>
    </div>
    <div className="skill-set">
      <div className="one-skill">
        <Icon icon="mdi:language-ruby" color="#0db760" fontSize="2rem" />
        <p><strong>Ruby</strong></p>
      </div>
      <div className="one-skill">
        <Icon icon="fluent:javascript-16-regular" color="#0db760" fontSize="2rem" />
        <p><strong>JavaScript</strong></p>
      </div>
      <div className="one-skill">
        <Icon icon="cib:rails" color="#0db760" fontSize="2rem" />
        <p><strong>Ruby on Rails</strong></p>
      </div>
      <div className="one-skill">
        <Icon icon="fa6-brands:react" color="#0db760" fontSize="2rem" />
        <Icon icon="akar-icons:redux-fill" color="#0db760" fontSize="2rem" />
        <p><strong>React-Redux</strong></p>
      </div>
      <div className="one-skill">
        <Icon icon="dashicons:html" color="#0db760" fontSize="2rem" />
        <p><strong>HTML</strong></p>
      </div>
      <div className="one-skill">
        <Icon icon="nonicons:css-16" color="#0db760" fontSize="2rem" />
        <p><strong>CSS</strong></p>
      </div>
      <div className="one-skill">
        <Icon icon="ri:bootstrap-line" color="#0db760" fontSize="2rem" />
        <p><strong>Bootstrap</strong></p>
      </div>
      <div className="one-skill">
        <Icon icon="la:git" color="#0db760" fontSize="2rem" />
        <p><strong>Git</strong></p>
      </div>
      <div className="one-skill">
        <Icon icon="ri:github-fill" color="#0db760" fontSize="2rem" />
        <p><strong>Github</strong></p>
      </div>
      <div className="one-skill">
        <Icon fontSize="2rem" icon="solar:figma-bold-duotone" color="#0db760" />
        <p><strong>Figma</strong></p>
      </div>
      <div className="one-skill">
        <Icon fontSize="2rem" icon="bxl:postgresql" color="#0db760" />
        <p><strong>Postgresql</strong></p>
      </div>
      <div className="one-skill">
        <Icon fontSize="2rem" icon="arcticons:linux-deploy" color="#0db760" />
        <p><strong>Postgresql</strong></p>
      </div>
    </div>
  </div>
);

export default Skills;
