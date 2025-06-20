import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactUsPage.css';
import './HomePage.css'; // Import homepage styles for navbar consistency
import NavBar from './NavBar';

const ContactUsPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  console.log('ContactUsPage component loaded');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5001/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          inquiryType: 'general'
        });

        // Show success message with estimated response time
        console.log('Contact form submitted successfully:', result);
      } else {
        setSubmitStatus('error');
        console.error('Contact form submission failed:', result.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting contact form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="app-container">
      <NavBar className='navbar-home' showContact={false}></NavBar>
      <div className="contact-us-page"
        style={{
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          minHeight: 'calc(100vh - 80px)', // Adjust for navbar height
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          padding: '2rem 0'
        }}
      >
        {/* Hero Section */}
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 2rem'
        }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #e63946 0%, #c1121f 100%)', 
            color: 'white', 
            padding: '4rem 3rem', 
            textAlign: 'center', 
            borderRadius: '16px', 
            marginBottom: '3rem',
            boxShadow: '0 20px 40px rgba(230, 57, 70, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              opacity: 0.3
            }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h1 style={{ 
                fontSize: '3.5rem', 
                fontWeight: 'bold', 
                marginBottom: '1.5rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>Get in Touch</h1>
              <p style={{ 
                fontSize: '1.3rem', 
                marginBottom: '3rem',
                opacity: '0.95',
                maxWidth: '600px',
                margin: '0 auto 3rem auto'
              }}>
                We're here to help you save lives. Reach out to us for any questions,
                support, or partnership opportunities.
              </p>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '3rem', 
                flexWrap: 'wrap' 
              }}>
                <div style={{ 
                  textAlign: 'center',
                  background: 'rgba(255,255,255,0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>24/7</div>
                  <div style={{ fontSize: '1rem', opacity: '0.9' }}>Support Available</div>
                </div>
                <div style={{ 
                  textAlign: 'center',
                  background: 'rgba(255,255,255,0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>&lt;2hrs</div>
                  <div style={{ fontSize: '1rem', opacity: '0.9' }}>Response Time</div>
                </div>
                <div style={{ 
                  textAlign: 'center',
                  background: 'rgba(255,255,255,0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>500+</div>
                  <div style={{ fontSize: '1rem', opacity: '0.9' }}>Partner Hospitals</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', 
            gap: '3rem', 
            marginBottom: '3rem',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem'
          }}>
            {/* Contact Information */}
            <div style={{ 
              background: 'white', 
              padding: '3rem', 
              borderRadius: '16px', 
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(230, 57, 70, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, #e63946 0%, #c1121f 100%)',
                opacity: 0.05,
                borderRadius: '50%',
                transform: 'translate(30px, -30px)'
              }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ 
                  fontSize: '2.2rem', 
                  fontWeight: 'bold', 
                  color: '#1d3557', 
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{ color: '#e63946' }}>📞</span>
                  Contact Information
                </h2>
                <p style={{ 
                  color: '#6c757d', 
                  marginBottom: '2.5rem',
                  fontSize: '1.1rem',
                  lineHeight: '1.6'
                }}>
                  Ready to make a difference? Our dedicated team is here to assist you
                  with blood donations, emergency requests, and partnership opportunities.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1.5rem', 
                    padding: '1.5rem', 
                    background: 'linear-gradient(135deg, #fff5f5 0%, #fef2f2 100%)', 
                    borderRadius: '12px',
                    border: '2px solid #fee2e2',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}>
                    <div style={{
                      fontSize: '2.5rem',
                      background: 'linear-gradient(135deg, #e63946 0%, #c1121f 100%)',
                      borderRadius: '50%',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(230, 57, 70, 0.3)'
                    }}>🚨</div>
                    <div>
                      <h3 style={{ 
                        margin: '0 0 0.5rem 0', 
                        color: '#1d3557',
                        fontSize: '1.3rem',
                        fontWeight: 'bold'
                      }}>Emergency Hotline</h3>
                      <p style={{ 
                        margin: '0 0 0.25rem 0', 
                        fontWeight: 'bold', 
                        color: '#e63946',
                        fontSize: '1.1rem'
                      }}>+1 (555) 911-BLOOD</p>
                      <span style={{ 
                        fontSize: '0.95rem', 
                        color: '#6c757d', 
                        fontStyle: 'italic' 
                      }}>Available 24/7 for urgent blood requests</span>
                    </div>
                  </div>

                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1.5rem', 
                    padding: '1.5rem', 
                    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', 
                    borderRadius: '12px',
                    border: '2px solid #bae6fd',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}>
                    <div style={{
                      fontSize: '2.5rem',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                      borderRadius: '50%',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                    }}>📧</div>
                    <div>
                      <h3 style={{ 
                        margin: '0 0 0.5rem 0', 
                        color: '#1d3557',
                        fontSize: '1.3rem',
                        fontWeight: 'bold'
                      }}>General Inquiries</h3>
                      <p style={{ 
                        margin: '0 0 0.25rem 0', 
                        fontWeight: 'bold', 
                        color: '#3b82f6',
                        fontSize: '1.1rem'
                      }}>info@vitaldrop.com</p>
                      <span style={{ 
                        fontSize: '0.95rem', 
                        color: '#6c757d', 
                        fontStyle: 'italic' 
                      }}>Response within 2 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ 
              background: 'white', 
              padding: '3rem', 
              borderRadius: '16px', 
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(230, 57, 70, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, #e63946 0%, #c1121f 100%)',
                opacity: 0.05,
                borderRadius: '50%',
                transform: 'translate(-30px, -30px)'
              }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ 
                  fontSize: '2.2rem', 
                  fontWeight: 'bold', 
                  color: '#1d3557', 
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{ color: '#e63946' }}>📝</span>
                  Send us a Message
                </h2>
                <p style={{ 
                  color: '#6c757d', 
                  marginBottom: '2.5rem',
                  fontSize: '1.1rem',
                  lineHeight: '1.6'
                }}>Fill out the form below and we'll get back to you as soon as possible.</p>

                {submitStatus === 'success' && (
                  <div style={{ padding: '1rem', background: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '8px', marginBottom: '1rem', textAlign: 'center', color: '#155724' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
                    <h3 style={{ margin: '0 0 0.5rem 0' }}>Message Sent Successfully!</h3>
                    <p style={{ margin: '0' }}>Thank you for contacting us. We'll respond within 2 hours.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div style={{ padding: '1rem', background: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: '8px', marginBottom: '1rem', textAlign: 'center', color: '#721c24' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>❌</div>
                    <h3 style={{ margin: '0 0 0.5rem 0' }}>Something went wrong</h3>
                    <p style={{ margin: '0' }}>Please try again or contact us directly.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', gap: '1rem' }}>
                    <div>
                      <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: '#495057' }}>Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                        style={{ width: '100%', padding: '0.75rem', border: '2px solid #e9ecef', borderRadius: '4px', fontSize: '1rem', boxSizing: 'border-box' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: '#495057' }}>Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                        style={{ width: '100%', padding: '0.75rem', border: '2px solid #e9ecef', borderRadius: '4px', fontSize: '1rem', boxSizing: 'border-box' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: '#495057' }}>Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Brief description of your inquiry"
                      style={{ width: '100%', padding: '0.75rem', border: '2px solid #e9ecef', borderRadius: '4px', fontSize: '1rem', boxSizing: 'border-box' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: '#495057' }}>Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      placeholder="Please provide details about your inquiry..."
                      style={{ width: '100%', padding: '0.75rem', border: '2px solid #e9ecef', borderRadius: '4px', fontSize: '1rem', resize: 'vertical', boxSizing: 'border-box' }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      background: isSubmitting ? '#6c757d' : 'linear-gradient(135deg, #e63946 0%, #c1121f 100%)',
                      color: 'white',
                      padding: '1.2rem 2.5rem',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.75rem',
                      transition: 'all 0.3s ease',
                      boxShadow: isSubmitting ? 'none' : '0 8px 20px rgba(230, 57, 70, 0.3)',
                      transform: isSubmitting ? 'none' : 'translateY(0)',
                      width: '100%'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span>⏳</span>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <span>📤</span>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
