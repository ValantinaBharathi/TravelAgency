import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-column">
          <h3>TravelEase</h3>
          <p>Your trusted partner in creating unforgettable travel experiences around the globe.</p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul className="footer-links">
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="footer-links">
            <li>Email: info@travelease.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 Travel St, Wanderlust City</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} TravelEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;