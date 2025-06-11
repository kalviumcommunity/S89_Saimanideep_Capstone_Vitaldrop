import './ThankYouPage.css';
import React from 'react';
import NavBar from './NavBar';

const ThankYouPage = () => {
  return (
    <>
      <NavBar className='navbar-home'></NavBar>
    <div className="thank-you-container">
      <h1>Thank You for Your Contribution!</h1>
      <p>Your form has been successfully submitted. We appreciate your effort in contributing to our cause.</p>
    </div>
    </>
  );
};

export default ThankYouPage;