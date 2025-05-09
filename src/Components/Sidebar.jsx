
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../Styles/sidebar.css'; // Import the new CSS file for styling
import { FaHome, FaInfoCircle, FaServicestack, FaPhoneAlt } from 'react-icons/fa'; // Using react-icons for simple icons

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('leave');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <h2>HMS</h2>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link
              to="/leave"
              className={`nav-link ${activeLink === 'leave' ? 'active' : ''}`}
              onClick={() => handleLinkClick('leave')}
            >
              <FaHome className="nav-icon" />
              Leave Request
            </Link>
          </li>
          <li>
            <Link
              to="/feedback"
              className={`nav-link ${activeLink === 'feedback' ? 'active' : ''}`}
              onClick={() => handleLinkClick('feedback')}
            >
              <FaInfoCircle className="nav-icon" />
              Mess Feedback
            </Link>
          </li>
          <li>
            <Link
              to="/notice"
              className={`nav-link ${activeLink === 'notice' ? 'active' : ''}`}
              onClick={() => handleLinkClick('notice')}
            >
              <FaServicestack className="nav-icon" />
              Notice Board
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
