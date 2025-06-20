import React from 'react';
import './AboutUsPage.css';
import NavBar from './NavBar';

const AboutUsPage = () => {
  return (
    <>
      <NavBar className='navbar-home' showContact={true}></NavBar>
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>
          <span style={{ color: '#d62828' }}>Vital</span>
          <span style={{ color: '#000000' }}>Drop</span>
          <span role="img" aria-label="blood drop" style={{ color: '#d62828' }}>🩸
          </span>
          <br/>
        </h1>
        <p className="about-us-quote">Connecting donors with those in need—every drop counts!</p>
        <br/>
      </div>

      <div className="about-us-content">
        <div className="about-us-card">
          <h2>Who We Are?</h2>
          <br/>
          <p>We are <strong>VitalDrop</strong>, a platform dedicated to simplifying blood donation, making it accessible and efficient.</p>
          <br/>
          <p>Our mission is to empower donors and ensure every patient gets the help they need, when they need it.</p>
        </div>

        <div className="about-us-card">
          <h2>Why Donate?</h2>
          <br/>
          <p>Every donation can save <strong>up to three lives</strong>. Be a part of something life-changing.</p>
        </div>

        <div className="about-us-card">
          <h2>How It Works?</h2>
          <br/>
          <ul>
            <li>Sign up and find donation centers near you.</li>
            <li>Schedule a convenient donation time.</li>
            <li>Track your impact and encourage others to join.</li>
          </ul>
        </div>
      </div>

      <div className="about-us-image-container">
        <img src="https://wallpapercave.com/wp/wp4323467.jpg" alt="Blood donation" className="about-us-image"/>
      </div>
    </div>
    </>
  );
};

export default AboutUsPage;