import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import FormPage from './components/FormPage';
import AdminLoginPage from './components/AdminLoginPage';
import AdminDashboard from './components/AdminDashboard';
import AboutUsPage from './components/AboutUsPage';
import ThankYouPage from './components/ThankYouPage';
import DonorDashboard from './components/DonorDashboard';
import BloodInventory from './components/BloodInventory';
import EmergencyRequests from './components/EmergencyRequests';
import DonorsList from './components/DonorsList';

const AllRoutes = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/donor-dashboard" element={<DonorDashboard />} />
        <Route path="/donors-list" element={<DonorsList />} />
        <Route path="/blood-inventory" element={<BloodInventory />} />
        <Route path="/emergency-requests" element={<EmergencyRequests />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;