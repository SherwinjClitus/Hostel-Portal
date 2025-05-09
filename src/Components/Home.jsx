import React from 'react';
import Lottie from 'lottie-react';  // Correct default import
import animationData from '../assets/Animation - 1744559193527.json'; // Path to your Lottie JSON file
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-card">
        {/* Lottie Animation */}
        <div className="lottie-container">
          <Lottie animationData={animationData} loop={true} style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Welcome Text */}
        <h1 className="welcome-text">Welcome to SJIT Hostel Portal</h1>
      </div>
    </div>
  );
};

export default Home;

