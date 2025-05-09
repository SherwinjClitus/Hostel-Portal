import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/SignIn.css'; // Create this file for styling
import loginImage from '../assets/login-image.png'; // your uploaded image

const SignIn = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const captchaText = "KNTRL"; // Hardcoded for now

  const handleLogin = (e) => {
    e.preventDefault();
    if (studentId && password && captchaInput === captchaText) {
      navigate('/'); // Redirect to homepage
    } else {
      alert("Invalid login details. Please check again.");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-image">
        <img src={loginImage} alt="Login Visual" />
      </div>
      <div className="signin-form">
        <h2>Welcome to Hostel Management</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="captcha-box">
            <div className="captcha-text">{captchaText}</div>
            <input
              type="text"
              placeholder="Enter CAPTCHA"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signin-button">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
