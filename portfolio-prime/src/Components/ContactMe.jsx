import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <div className="contact-me-container">
      <div className="contact-me-text">
        <p>
          Ready to elevate your code base to new heights? Experience the exceptional expertise of a skilled mentor who effortlessly propels projects to the next level. Let’s partner with your needs to maximize your code's potential. Don't miss out on this opportunity!
        </p>
      </div>
      <form className="contact-me-form">
        <input type="text" placeholder="Your name here" className="contact-input" />
        <input type="email" placeholder="Your email here" className="contact-input" />
        <select className="contact-input">
          <option>What are you interested in?</option>
          <option>Web Development</option>
          <option>Mentorship</option>
          <option>Consultation</option>
        </select>
        <textarea placeholder="Resume it in a few words" className="contact-input"></textarea>
        <div className="contact-checkbox-container">
          <input type="checkbox" id="privacy-policy" />
          <label htmlFor="privacy-policy">By sending my details, I have read and accept the Privacy policy.</label>
        </div>
        <button type="submit" className="contact-submit-button">
          Let’s talk <span className="arrow">➔</span>
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
