
import React from 'react';
import '../Styles/Header.css';
import { FaBell, FaEnvelope, FaHome, FaCommentDots, FaClipboardList, FaPaperPlane, FaMoneyCheckAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import the PNG image from the assets folder
import logoImage from '../assets/logo.png';  // Adjust the path as necessary

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          {/* Use the image as the logo */}
          <img src={logoImage} alt="Hostel Management" className="logo-image" />
        </Link>
      </div>
      <nav className="header-nav">
        <Link to="/" className="header-nav-link">
          <FaHome className="header-nav-icon" />
          Home
        </Link>
        <Link to="/leave" className="header-nav-link">
          <FaPaperPlane className="header-nav-icon" />
          Leave
        </Link>
        <Link to="/feedback" className="header-nav-link">
          <FaCommentDots className="header-nav-icon" />
          Feedback
        </Link>
        <Link to="/notice" className="header-nav-link">
          <FaClipboardList className="header-nav-icon" />
          Notices
        </Link>
        <Link to="/fee" className="header-nav-link">
          <FaMoneyCheckAlt className="header-nav-icon" />
          Fee Payment
        </Link>
       </nav>
      <div className="header-icons">
        <FaEnvelope className="header-icon" />
      </div>
    </header>
  );
};

export default Header;

