import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const Home = ({ isLoggedIn }) => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Dream Vacation</h1>
          <p>Explore the world's most breathtaking destinations with our expert travel planners</p>
          {isLoggedIn ? (
            <Link to="/destinations" className="btn">Browse Destinations</Link>
          ) : (
            <Link to="/signup" className="btn">Get Started</Link>
          )}
        </div>
      </section>

      <section className="container">
        <div className="content-page">
          <h2>Why Choose TravelEase?</h2>
          <p>At TravelEase, we believe that every journey should be as unique as the traveler. With over 15 years of experience in the industry, we've perfected the art of creating personalized travel experiences that go beyond the ordinary.</p>
          
          <h3>Our Services</h3>
          <ul>
            <li><strong>Custom Itineraries:</strong> Tailored to your preferences and budget</li>
            <li><strong>24/7 Support:</strong> Assistance whenever you need it</li>
            <li><strong>Best Price Guarantee:</strong> We'll match any lower price you find</li>
            <li><strong>Exclusive Access:</strong> To hidden gems and local experiences</li>
          </ul>
          
          <h3>Featured Destinations</h3>
          <p>From tropical beaches to mountain retreats, urban adventures to wildlife safaris, we offer a diverse range of destinations to satisfy every type of traveler.</p>
          
          {!isLoggedIn && (
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <h3>Ready to Start Your Adventure?</h3>
              <Link to="/signup" className="btn">Create Your Account</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;