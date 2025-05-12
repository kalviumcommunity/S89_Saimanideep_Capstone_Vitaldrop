import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import image from '../assets/login-right.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      setMessage(`Welcome ${response.data.user.name}`);
      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } catch (error) {
      setMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-main-container">
      <div className="login-form-section">
        <h2 className="login-title">Login to VitalDrop</h2>
        <p className="login-subtitle">Help save lives with your donation</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button type="submit" className="login-btn">Sign in</button>
        </form>
        <p>{message}</p>
        <p className="login-link-text">Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
      <div className="login-image-section">
        <img src={image} alt="Login Illustration" width="260" height="260" className='image' />
      </div>
    </div>
  );
};

export default LoginPage;