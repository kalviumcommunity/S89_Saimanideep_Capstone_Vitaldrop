import React from 'react';
import '../components/NavBar.css';

const NavBar = ({ showContact = true }) => {
  return (
    <nav style={{
      backgroundColor: '#1d3557',
      padding: '1rem 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', marginRight: '3cm' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            {/* Custom Blood Drop Icon */}
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
               marginLeft: '-200px',
            }}>
              <svg width="40" height="40" viewBox="0 0 40 40" style={{
                filter: 'drop-shadow(0 4px 8px rgba(230, 57, 70, 0.3))',
                transition: 'all 0.3s ease'
              }}>
                <defs>
                  <linearGradient id="bloodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6b6b" />
                    <stop offset="50%" stopColor="#e63946" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M20 5C20 5 10 15 10 23C10 29.627 14.373 35 20 35C25.627 35 30 29.627 30 23C30 15 20 5 20 5Z"
                  fill="url(#bloodGradient)"
                  filter="url(#glow)"
                />
                <ellipse cx="16" cy="18" rx="2" ry="3" fill="rgba(255,255,255,0.3)" />
              </svg>
              {/* Pulse animation ring */}
              <div style={{
                position: 'absolute',
                width: '50px',
                height: '50px',
                border: '2px solid rgba(230, 57, 70, 0.3)',
                borderRadius: '50%',
                animation: 'pulse 2s infinite'
                
              }}></div>
            </div>

            {/* Logo Text */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
              <h1 style={{
                color: 'white',
                margin: 0,
                
                fontSize: '2rem',
                fontWeight: '800',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '1px',
                lineHeight: '1',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                <span style={{
                  color: '#e63946',
                  background: 'linear-gradient(135deg, #ff6b6b 0%, #e63946 50%, #dc2626 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>VITAL</span>
                <span style={{
                  color: '#ffffff',
                  marginLeft: '2px',
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}>DROP</span>
              </h1>
              <p style={{
                margin: 0,
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.8)',
                fontWeight: '500',
                letterSpacing: '2px',
                textTransform: 'uppercase'
              }}>Save Lives • Donate Blood</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ display: 'flex', alignItems: 'center' }}
          className='nav-links-div'
          >
            {/* Main Navigation Group */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginRight: '2rem', marginLeft: '-200px', }}>
              <a href="/" style={{
                color: 'white',
                textDecoration: 'none',
                padding: '10px 16px',
                borderRadius: '8px',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}>Home</a>

              <a href="/about" style={{
                color: 'white',
                textDecoration: 'none',
                padding: '10px 16px',
                borderRadius: '8px',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}>About</a>

              <a href="/schedule" style={{
                color: 'white',
                textDecoration: 'none',
                padding: '10px 16px',
                borderRadius: '8px',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}>Schedule</a>

              {showContact && (
                <a href="/contact" style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}>Contact</a>
              )}

              <a href="/blood-banks" style={{
                color: 'white',
                textDecoration: 'none',
                padding: '10px 16px',
                borderRadius: '8px',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}>Find Blood Banks</a>
            </div>

            {/* Notification and Auth Group */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <a href="/notifications" style={{
                color: 'white',
                textDecoration: 'none',
                padding: '10px 12px',
                borderRadius: '8px',
                fontSize: '1.2rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}>
                🔔
                <span style={{
                  position: 'absolute',
                  top: '6px',
                  right: '8px',
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#ef4444',
                  borderRadius: '50%',
                  border: '1px solid white'
                }}></span>
              </a>

              <a href="/login" style={{
                color: 'white',
                textDecoration: 'none',
                padding: '10px 16px',
                borderRadius: '8px',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}>Login</a>

              <a href="/signup" style={{
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                color: 'white',
                textDecoration: 'none',
                padding: '12px 28px',
                borderRadius: '12px',
                fontSize: '0.95rem',
                fontWeight: '600',
                letterSpacing: '0.025em',
                boxShadow: '0 4px 15px rgba(239, 68, 68, 0.3), 0 2px 8px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                whiteSpace: 'nowrap',
                minWidth: 'fit-content',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px) scale(1.02)';
                e.target.style.boxShadow = '0 6px 20px rgba(239, 68, 68, 0.4), 0 4px 12px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 4px 15px rgba(239, 68, 68, 0.3), 0 2px 8px rgba(0,0,0,0.1)';
              }}>Sign Up</a>

              <a href="/admin" style={{
                background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
                color: 'white',
                textDecoration: 'none',
                padding: '12px 28px',
                borderRadius: '12px',
                fontSize: '0.95rem',
                fontWeight: '600',
                letterSpacing: '0.025em',
                boxShadow: '0 4px 15px rgba(100, 116, 139, 0.3), 0 2px 8px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                whiteSpace: 'nowrap',
                minWidth: 'fit-content',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px) scale(1.02)';
                e.target.style.boxShadow = '0 6px 20px rgba(100, 116, 139, 0.4), 0 4px 12px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 4px 15px rgba(100, 116, 139, 0.3), 0 2px 8px rgba(0,0,0,0.1)';
              }}>Admin</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;