import React, { useState } from 'react';
import './navbar.css';

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false); // State for mobile toggle

  // Toggle function for mobile menu
  const handleToggle = () => {
    setIsMobile(!isMobile); // Toggle mobile menu
  };

  return (
    <nav>
      <div className="box-1">
        <h1>Cj<span className="name">Chirag</span></h1>
      </div>
      <div className={`nav-links ${isMobile ? 'open' : ''}`}>
        <div><a href="#">Home</a></div>
        <div><a href="#work">Work</a></div>
        <div><a href="#about">About</a></div>
        <div><a href="#services">Services</a></div>
      </div>
      <div className="box-3">
        <button>Contact</button>
      </div>
      {/* Hamburger icon shown on mobile */}
      <div className={`hamburger ${isMobile ? 'toggle' : ''}`} onClick={handleToggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
