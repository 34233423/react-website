// src/Footer.js
import React from 'react';
import './Footer.css';
import  { FaTwitter } from 'react-icons/fa';

import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <>
    
    <footer className="footer" id='footer'>
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-title">About Us</h2>
          <p>
            We are a team of passionate developers making web applications to solve everyday problems.
          </p>
        </div>
        <div className="footer-section links">
          <h2 className="footer-title">Quick Links</h2>
          <ul>
            <li><Link to='/home'><a href="#home">Home</a></Link></li>
            <li><Link to='/about'><a href="#about">About</a></Link></li>
            <li><a href="#services">Services</a></li>
            <li><Link to='/contact'><a href="#contact">Contact</a></Link></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2 className="footer-title">Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 YourCompany. All rights reserved.
      </div>
    </footer>
    </>
  );
};

export default Footer;
