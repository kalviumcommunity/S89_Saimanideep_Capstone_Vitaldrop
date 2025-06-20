import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavBar from './NavBar';

const ThankYou = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get appointment details from navigation state
  const appointmentDetails = location.state || {};

  const handleGoHome = () => {
    navigate('/');
  };

  const handleScheduleAnother = () => {
    navigate('/schedule');
  };

  return (
    <>
      <NavBar showContact={true} />
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        padding: '40px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          width: '100%',
          background: 'white',
          borderRadius: '25px',
          padding: '60px 40px',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          {/* Success Icon */}
          <div style={{
            fontSize: '5rem',
            marginBottom: '30px'
          }}>
            🎉
          </div>

          {/* Main Thank You Message */}
          <div style={{
            marginBottom: '40px'
          }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #dc3545 0%, #e63946 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '20px',
              lineHeight: '1.2'
            }}>
              Thank You, Hero!
            </h1>
            
            <p style={{
              fontSize: '1.4rem',
              color: '#374151',
              lineHeight: '1.6',
              marginBottom: '30px',
              fontWeight: '500'
            }}>
              Your blood donation appointment has been successfully scheduled!
            </p>
            
            <p style={{
              fontSize: '1.1rem',
              color: '#6b7280',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              You're about to make a life-changing difference. Your single donation can save up to 3 lives. 
              We'll send you a confirmation email with all the details shortly.
            </p>
          </div>

          {/* Appointment Details Card */}
          {appointmentDetails.name && (
            <div style={{
              background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
              borderRadius: '20px',
              padding: '30px',
              marginBottom: '40px',
              border: '2px solid #dc3545'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                color: '#1f2937',
                marginBottom: '25px',
                fontWeight: '700'
              }}>
                📋 Your Appointment Details
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
                textAlign: 'left'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '1.5rem' }}>👤</span>
                  <div>
                    <strong style={{ color: '#374151' }}>Name:</strong>
                    <div style={{ color: '#6b7280' }}>{appointmentDetails.name}</div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '1.5rem' }}>🩸</span>
                  <div>
                    <strong style={{ color: '#374151' }}>Blood Type:</strong>
                    <div style={{ color: '#6b7280' }}>{appointmentDetails.bloodType}</div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '1.5rem' }}>📅</span>
                  <div>
                    <strong style={{ color: '#374151' }}>Date:</strong>
                    <div style={{ color: '#6b7280' }}>{appointmentDetails.date}</div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '1.5rem' }}>⏰</span>
                  <div>
                    <strong style={{ color: '#374151' }}>Time:</strong>
                    <div style={{ color: '#6b7280' }}>{appointmentDetails.time}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={handleGoHome}
              style={{
                background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
                color: 'white',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '15px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(220, 53, 69, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 12px 35px rgba(220, 53, 69, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 25px rgba(220, 53, 69, 0.3)';
              }}
            >
              🏠 Go to Home
            </button>
            
            <button
              onClick={handleScheduleAnother}
              style={{
                background: 'transparent',
                color: '#dc3545',
                border: '2px solid #dc3545',
                padding: '15px 30px',
                borderRadius: '15px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#dc3545';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#dc3545';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              📅 Schedule Another
            </button>
          </div>

          {/* Inspirational Message */}
          <div style={{
            marginTop: '40px',
            padding: '25px',
            background: 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)',
            borderRadius: '15px',
            border: '2px solid #28a745'
          }}>
            <p style={{
              fontSize: '1.1rem',
              color: '#155724',
              margin: 0,
              fontWeight: '600',
              lineHeight: '1.6'
            }}>
              💝 "The gift of blood is the gift of life. Thank you for being someone's hero today!"
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
