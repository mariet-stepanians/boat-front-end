import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Boat Co
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
