import React from 'react';
import './Hero.css';
import heroImage from '../Images/test-img.webp'; // Adjust the path as needed

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={heroImage} alt="Hero" className="hero-image" />
      <div className="text-container">
        <h1 className="title">howdy folks, I'm</h1>
        <p className="subtitle">Victor Branson</p>
      </div>
    </div>
  );
};

export default Hero;
