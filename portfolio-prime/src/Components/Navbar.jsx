import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <h2>Victor Branson</h2>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <button className="nav-link">About</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">Work</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
