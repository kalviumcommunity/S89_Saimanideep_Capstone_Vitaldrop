import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminLoginPage.css';
import NavBar from './NavBar';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/auth/admin/login', { email, password });
      localStorage.setItem('adminToken', response.data.token);
      localStorage.setItem('adminUser', JSON.stringify(response.data.user));

      // Navigate to admin dashboard immediately
      navigate('/admin-dashboard');
    } catch (error) {
      if (error.response && error.response.status === 403) {
        setMessage('Access denied. Admin privileges required.');
      } else if (error.response && error.response.status === 401) {
        setMessage('Invalid admin credentials.');
      } else {
        setMessage('Admin login failed. Please try again.');
      }
    }
  };



  return (
    <>
      <NavBar showContact={true} />
      <div className="admin-login-container">
        <div className="admin-login-card">
        <div className="admin-login-left">
          <div className="admin-logo">
            <div className="logo-icon">
              <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6b6b"/>
                    <stop offset="50%" stopColor="#ee5a52"/>
                    <stop offset="100%" stopColor="#dc3545"/>
                  </linearGradient>
                </defs>
                <circle cx="22.5" cy="22.5" r="20" fill="url(#logoGradient)" stroke="#fff" strokeWidth="2"/>
                <path d="M22.5 10L26.5 18H34.5L28.5 24L30.5 32L22.5 28L14.5 32L16.5 24L10.5 18H18.5L22.5 10Z" fill="#fff"/>
              </svg>
            </div>
            <h1 className="logo-text">
              <span className="vital-text">VITAL</span>
              <span className="drop-text">DROP</span>
            </h1>
          </div>

          <div className="professional-graphic">
            <div className="medical-icon">
              <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
                <defs>
                  <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff"/>
                    <stop offset="100%" stopColor="#f1f5f9"/>
                  </linearGradient>
                  <linearGradient id="crossGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6"/>
                    <stop offset="50%" stopColor="#2563eb"/>
                    <stop offset="100%" stopColor="#1d4ed8"/>
                  </linearGradient>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(0,0,0,0.15)"/>
                  </filter>
                </defs>
                <circle cx="70" cy="70" r="65" fill="url(#bgGradient)" stroke="#e2e8f0" strokeWidth="2" filter="url(#shadow)"/>
                <rect x="52" y="35" width="36" height="70" rx="8" fill="url(#crossGradient)"/>
                <rect x="35" y="52" width="70" height="36" rx="8" fill="url(#crossGradient)"/>
                <circle cx="70" cy="70" r="12" fill="#ffffff" opacity="0.9"/>
              </svg>
            </div>

            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Lives Saved</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Available</div>
              </div>
            </div>
          </div>

          <div className="mission-text">
            <h2>Admin Portal</h2>
            <p>Manage blood donations and save lives with our comprehensive admin dashboard</p>
          </div>
        </div>
        
        <div className="admin-login-right">
          <h2 className="login-title">Login</h2>
          
          <form onSubmit={handleSubmit} className="admin-login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button type="submit" className="admin-login-btn">
              Login
            </button>
          </form>
          
          {message && <p className="login-message">{message}</p>}
          
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminLoginPage;
