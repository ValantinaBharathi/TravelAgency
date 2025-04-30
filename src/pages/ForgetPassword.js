import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter your email address');
      return;
    }
    
    setMessage(`Password reset link has been sent to ${email}`);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="form-title">Forgot Password</h2>
        <p>Enter your email address and we'll send you a link to reset your password.</p>
        {message && <p style={{ color: message.includes('sent') ? 'green' : 'red', textAlign: 'center', marginBottom: '20px' }}>{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <button type="submit" className="btn" style={{ width: '100%' }}>Send Reset Link</button>
        </form>
        <div className="form-footer">
          <p>Remember your password? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;