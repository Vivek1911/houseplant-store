import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const LandingPage = () => {
  return (
    <div className="landing">
      <h1>Welcome to Green Haven</h1>
      <p>We bring the beauty of nature to your home with our carefully selected houseplants.</p>
      <Link to="/products"><button>Get Started</button></Link>
    </div>
  );
};

export default LandingPage;
