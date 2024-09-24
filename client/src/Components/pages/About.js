// src/components/About.js
import React from 'react';
import './About.css';
import Nav from '../Nav';


const About = () => {
  return (
    <>
      <Nav />
      <div className="aboutus-container">
        <h2 className="aboutus-header">About Us</h2>
        <div className="aboutus-section">
          <h3>Our Mission</h3>
          <p>
            At [Your Company Name], our mission is to provide exquisite timepieces that combine style and functionality. We strive to offer a diverse collection of watches that cater to different tastes and preferences.
          </p>
        </div>
        <div className="aboutus-section">
          <h3>Our Vision</h3>
          <p>
            We envision a world where everyone has access to high-quality, stylish watches that not only tell time but also tell a story. Our goal is to be a leading brand in the watch industry, known for innovation and excellence.
          </p>
        </div>
        <div className="aboutus-section">
          <h3>Our History</h3>
          <p>
            Founded in [Year], [Your Company Name] started with a passion for watchmaking and a commitment to quality. Over the years, we have grown into a reputable brand, trusted by customers worldwide. Our journey began in [starting location], and today, we continue to expand our reach while maintaining our core values.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
