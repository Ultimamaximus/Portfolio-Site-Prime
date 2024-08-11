import React from 'react';
import './Hero.css';

const Hero = () => {
  const backgroundImage = './path-to-your-background-image.jpg'; // Adjust the path accordingly

  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-container">
        <h1 className="title">Welcome to My Website</h1>
        <p className="subtitle">Building the future, one line of code at a time</p>
      </div>
    </div>
  );
};

export default Hero;
