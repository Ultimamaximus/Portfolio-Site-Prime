import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h2 className="about-me-title">About Me</h2>
      <p className="about-me-paragraph">
        I'm a passionate software developer with a love for building user-friendly web applications. 
        With experience in front-end development and a focus on continuous learning, I enjoy solving complex problems and turning ideas into reality.
      </p>
      <img src="./path-to-your-photo.jpg" alt="About Me" className="about-me-photo" />
    </div>
  );
};

export default AboutMe;
