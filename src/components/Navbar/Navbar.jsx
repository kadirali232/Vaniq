import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Vaniqlogo from '../../assets/Vaniqlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    console.log("Menu toggled. Current state:", !isOpen); // Debugging log
    setIsOpen(!isOpen);
  };

  // Function to handle link clicks
  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false); // Close the menu if it's open
    }
  };

  return (
    <div className='navbar'>
      {/* Logo aligned to the left */}
      <Link to='/Home'>
        <img src={Vaniqlogo} alt='Logo' className='navbar-logo' />
      </Link>
      
      {/* Hamburger Icon for small screens */}
      <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>

      {/* Navigation Links */}
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/Blog" onClick={handleLinkClick}>Blog</Link></li>
        <li><Link to="/Plans" onClick={handleLinkClick}>Plans</Link></li>
        <li><Link to="/LogIn" onClick={handleLinkClick}>Log In</Link></li>
        <li><Link to="/OpenAccount" onClick={handleLinkClick}>Open Account</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
