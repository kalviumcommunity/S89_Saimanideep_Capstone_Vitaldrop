import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ContactUsPage from './components/ContactUsPage';
import AdminDashboard from './components/AdminDashboard';
import AdminLoginPage from './components/AdminLoginPage';

// Simple Navigation Component
const Navigation = () => (
  <nav style={{
    backgroundColor: '#1d3557',
    padding: '1rem 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{
            color: 'white',
            margin: 0,
            fontSize: '1.8rem',
            fontWeight: 'bold'
          }}>
            <span style={{ color: '#e63946' }}>🩸 VITAL</span>
            <span style={{ color: 'white' }}>DROP</span>
          </h1>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="/" style={{
            color: 'white',
            textDecoration: 'none',
            padding: '10px 16px',
            borderRadius: '8px'
          }}>Home</a>
          <a href="/about" style={{
            color: 'white',
            textDecoration: 'none',
            padding: '10px 16px',
            borderRadius: '8px'
          }}>About</a>
          <a href="/donate" style={{
            color: 'white',
            textDecoration: 'none',
            padding: '10px 16px',
            borderRadius: '8px'
          }}>Donate</a>
          <a href="/contact" style={{
            color: 'white',
            textDecoration: 'none',
            padding: '10px 16px',
            borderRadius: '8px'
          }}>Contact</a>
          <a href="/admin" style={{
            background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
            color: 'white',
            textDecoration: 'none',
            padding: '12px 24px',
            borderRadius: '12px',
            fontSize: '0.95rem',
            fontWeight: '600'
          }}>Admin</a>
        </div>
      </div>
    </div>
  </nav>
);

// Simple Home Page Component
const HomePage = () => (
  <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
    {/* Hero Section */}
    <div style={{
      background: 'linear-gradient(135deg, #1d3557 0%, #457b9d 100%)',
      color: 'white',
      padding: '100px 20px',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          textShadow: '0 4px 8px rgba(0,0,0,0.3)'
        }}>
          Save Lives with <span style={{ color: '#e63946' }}>VitalDrop</span>
        </h1>
        <p style={{
          fontSize: '1.5rem',
          marginBottom: '3rem',
          opacity: '0.9',
          maxWidth: '800px',
          margin: '0 auto 3rem auto'
        }}>
          Join thousands of heroes who donate blood to save lives. 
          Your donation can make the difference between life and death.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/donate" style={{
            background: 'linear-gradient(135deg, #e63946 0%, #c1121f 100%)',
            color: 'white',
            textDecoration: 'none',
            padding: '20px 40px',
            borderRadius: '12px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            boxShadow: '0 8px 25px rgba(230, 57, 70, 0.4)',
            transition: 'all 0.3s ease'
          }}>
            🩸 Donate Now
          </a>
          <a href="/about" style={{
            background: 'rgba(255,255,255,0.1)',
            color: 'white',
            textDecoration: 'none',
            padding: '20px 40px',
            borderRadius: '12px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            border: '2px solid rgba(255,255,255,0.3)',
            transition: 'all 0.3s ease'
          }}>
            📖 Learn More
          </a>
        </div>
      </div>
    </div>

    {/* Stats Section */}
    <div style={{
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#1d3557',
          marginBottom: '4rem'
        }}>
          Our Impact
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '16px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            border: '1px solid rgba(230, 57, 70, 0.1)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👥</div>
            <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#e63946', margin: '0 0 1rem 0' }}>
              25,847
            </h3>
            <p style={{ color: '#6c757d', fontSize: '1.2rem', margin: 0 }}>Active Donors</p>
          </div>
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '16px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            border: '1px solid rgba(230, 57, 70, 0.1)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🩸</div>
            <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#e63946', margin: '0 0 1rem 0' }}>
              89,234
            </h3>
            <p style={{ color: '#6c757d', fontSize: '1.2rem', margin: 0 }}>Lives Saved</p>
          </div>
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '16px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            border: '1px solid rgba(230, 57, 70, 0.1)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏥</div>
            <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#e63946', margin: '0 0 1rem 0' }}>
              450+
            </h3>
            <p style={{ color: '#6c757d', fontSize: '1.2rem', margin: 0 }}>Partner Hospitals</p>
          </div>
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '16px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            border: '1px solid rgba(230, 57, 70, 0.1)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌍</div>
            <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#e63946', margin: '0 0 1rem 0' }}>
              50+
            </h3>
            <p style={{ color: '#6c757d', fontSize: '1.2rem', margin: 0 }}>Cities Covered</p>
          </div>
        </div>
      </div>
    </div>

    {/* Call to Action */}
    <div style={{
      background: 'linear-gradient(135deg, #e63946 0%, #c1121f 100%)',
      color: 'white',
      padding: '80px 20px',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          Ready to Save Lives?
        </h2>
        <p style={{
          fontSize: '1.3rem',
          marginBottom: '3rem',
          opacity: '0.95'
        }}>
          Join our community of heroes. Every donation counts, every life matters.
        </p>
        <a href="/signup" style={{
          background: 'white',
          color: '#e63946',
          textDecoration: 'none',
          padding: '20px 40px',
          borderRadius: '12px',
          fontSize: '1.3rem',
          fontWeight: 'bold',
          boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
          display: 'inline-block'
        }}>
          🚀 Get Started Today
        </a>
      </div>
    </div>
  </div>
);

// Simple About Page
const AboutPage = () => (
  <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: '80px 20px' }}>
    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', color: '#1d3557', marginBottom: '2rem' }}>About VitalDrop</h1>
      <p style={{ fontSize: '1.2rem', color: '#6c757d', lineHeight: '1.8' }}>
        VitalDrop is a revolutionary blood donation platform that connects donors with those in need. 
        Our mission is to save lives by making blood donation easier, more accessible, and more rewarding.
      </p>
    </div>
  </div>
);

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
