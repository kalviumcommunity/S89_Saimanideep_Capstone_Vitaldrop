import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';
import image from '../assets/login-right.png';
import NavBar from './NavBar';


const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/signup', { name: fullName, email, password });
      setMessage('Registration successful! Please log in.');
      navigate("/login")

    } catch (error) {
      if (error.response && error.response.status === 409) {
        setMessage('Email already exists. Please use a different email.');
      } else {
        setMessage('Signup failed. Please try again.');
      }
    }
  };

  return (
    <>
      <NavBar showContact={true} />
      <div className="login-main-container">
        <div className="login-form-section">
          <h2 className="login-title">Join VitalDrop Today!</h2>
          <p className="login-subtitle">Help save lives with your donation</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <button type="submit" className="login-btn">Sign up</button>
          </form>
          <p>{message}</p>
          <p className="login-link-text">Already have an account? <a href="/login">Sign in</a></p>
        </div>
        <div className="login-image-section">
          <img src={image} alt="Signup Illustration" width="260" height="260" className='image' />
        </div>
      </div>
    </>
  );
};

export default SignupPage;