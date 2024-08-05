import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Real time Object Detection</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/object-detection">Object Detection</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
