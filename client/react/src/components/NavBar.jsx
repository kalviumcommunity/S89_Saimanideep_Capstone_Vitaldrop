import React from 'react';
import '../components/NavBar.css';

const NavBar = () => {
  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <h1 className="logo-text">
          <span className="vital">VITAL</span>
          <span className="drop">DROP</span>
        </h1>
      </div>

      {/* Navigation Menu */}
      <nav className="navigation">
        <ul className="nav-links">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;