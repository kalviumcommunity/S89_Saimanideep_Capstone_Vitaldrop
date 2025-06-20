import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ContactUsPage from './components/ContactUsPage';
import AdminDashboard from './components/AdminDashboard';
import AdminLoginPage from './components/AdminLoginPage';
import DonorDashboard from './components/DonorDashboard';
import DonorNotifications from './components/DonorNotifications';
import BloodBankLocator from './components/BloodBankLocator';
import DonationScheduler from './components/DonationScheduler';
import QuickEmergencyRequest from './components/QuickEmergencyRequest';
import ThankYou from './components/ThankYou';

// Navigation Component
const Navigation = ({ showContact = true }) => (
  <nav style={{
    backgroundColor: '#1d3557',
    padding: '1rem 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
          marginLeft: '-155px',
          paddingLeft: '15px'
        }}>
          <span style={{
            fontSize: '1.8rem',
            color: '#e63946',
            display: 'flex',
            alignItems: 'center',
            marginTop: '-2px'
          }}>🩸</span>
          <h1 style={{
            color: 'white',
            margin: 0,
            fontSize: '1.8rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            letterSpacing: '0.5px'
          }}>
            <span style={{ color: '#e63946' }}>VITAL</span>
            <span style={{ color: 'white' }}>DROP</span>
          </h1>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginLeft: '297px', paddingRight: '20px' }}>
          <a href="/" style={{
            color: 'white',
            textDecoration: 'none',
            padding: '10px 16px',
            borderRadius: '8px',
            fontSize: '0.95rem',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            position: 'relative'
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

          {/* Professional Sign Up Button */}
          <a href="/signup" style={{
            background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
            color: 'white',
            textDecoration: 'none',
            padding: '12px 14px',
            borderRadius: '12px',
            fontSize: '0.95rem',
            fontWeight: '600',
            letterSpacing: '0.025em',
            boxShadow: '0 4px 15px rgba(239, 68, 68, 0.3), 0 2px 8px rgba(0,0,0,0.1)',
            border: '1px solid rgba(255,255,255,0.1)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 25px rgba(239, 68, 68, 0.4), 0 4px 12px rgba(0,0,0,0.15)';
            e.target.style.background = 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(239, 68, 68, 0.3), 0 2px 8px rgba(0,0,0,0.1)';
            e.target.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
          }}>
            SignUp
          </a>

          {/* Professional Admin Button */}
          <a href="/admin" style={{
            background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
            color: 'white',
            textDecoration: 'none',
            padding: '12px 24px',
            borderRadius: '12px',
            fontSize: '0.95rem',
            fontWeight: '600',
            letterSpacing: '0.025em',
            boxShadow: '0 4px 15px rgba(100, 116, 139, 0.3), 0 2px 8px rgba(0,0,0,0.1)',
            border: '1px solid rgba(255,255,255,0.1)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 25px rgba(100, 116, 139, 0.4), 0 4px 12px rgba(0,0,0,0.15)';
            e.target.style.background = 'linear-gradient(135deg, #475569 0%, #334155 100%)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(100, 116, 139, 0.3), 0 2px 8px rgba(0,0,0,0.1)';
            e.target.style.background = 'linear-gradient(135deg, #64748b 0%, #475569 100%)';
          }}>
            Admin
          </a>
        </div>
      </div>
    </div>
  </nav>
);



// Home Page Component
const HomePage = () => (
  <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
    <style>
      {`
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 8px 25px rgba(197, 48, 48, 0.3), 0 0 15px rgba(197, 48, 48, 0.15); }
          50% { transform: scale(1.05); box-shadow: 0 12px 35px rgba(197, 48, 48, 0.5), 0 0 25px rgba(197, 48, 48, 0.3); }
          100% { transform: scale(1); box-shadow: 0 8px 25px rgba(197, 48, 48, 0.3), 0 0 15px rgba(197, 48, 48, 0.15); }
        }

        /* Stats Cards Animations */
        @keyframes statsFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes countUp {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.2;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-5px);
            opacity: 0.2;
          }
        }

        /* Glow effect for stats cards */
        .stats-glow {
          position: relative;
        }

        .stats-glow::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, transparent, rgba(220, 53, 69, 0.3), transparent);
          border-radius: inherit;
          z-index: -1;
          animation: rotate 3s linear infinite;
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* 🎨 MARVELOUS NEW ANIMATIONS FOR STUNNING UI */
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(-50px);
          }
          50% {
            opacity: 1;
            transform: scale(1.1) translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes shimmerText {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }

        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px currentColor; }
          50% { text-shadow: 0 0 30px currentColor, 0 0 40px currentColor; }
        }

        @keyframes floatingHearts {
          0% {
            opacity: 0;
            transform: translateY(20px) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: translateY(-20px) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: translateY(-40px) rotate(360deg);
          }
        }

        @keyframes shimmer {
          0% { left: -100%; opacity: 0; }
          50% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }

        @keyframes flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; transform: scale(1.1); }
        }

        /* 🌟 NEW SPECTACULAR ANIMATIONS FOR ENHANCED SECTION 🌟 */
        @keyframes sectionPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          50% {
            transform: scale(1.01);
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.2);
          }
        }

        @keyframes enhancedTwinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1) rotate(0deg);
          }
          25% {
            opacity: 0.8;
            transform: scale(1.3) rotate(90deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.5) rotate(180deg);
          }
          75% {
            opacity: 0.6;
            transform: scale(1.2) rotate(270deg);
          }
        }

        @keyframes enhancedLightBeams {
          0%, 100% {
            opacity: 0.1;
            transform: rotate(0deg) scale(1);
          }
          25% {
            opacity: 0.3;
            transform: rotate(90deg) scale(1.1);
          }
          50% {
            opacity: 0.4;
            transform: rotate(180deg) scale(1.2);
          }
          75% {
            opacity: 0.2;
            transform: rotate(270deg) scale(1.05);
          }
        }

        @keyframes floatingOrbs {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(15px) scale(1.2);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-10px) translateX(-10px) scale(1.4);
            opacity: 1;
          }
          75% {
            transform: translateY(-30px) translateX(20px) scale(1.1);
            opacity: 0.5;
          }
        }

        @keyframes borderGlow {
          0%, 100% {
            background: linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(168, 85, 247, 0.5), rgba(236, 72, 153, 0.5), rgba(59, 130, 246, 0.5));
          }
          25% {
            background: linear-gradient(45deg, rgba(168, 85, 247, 0.6), rgba(236, 72, 153, 0.6), rgba(59, 130, 246, 0.6), rgba(168, 85, 247, 0.6));
          }
          50% {
            background: linear-gradient(45deg, rgba(236, 72, 153, 0.7), rgba(59, 130, 246, 0.7), rgba(168, 85, 247, 0.7), rgba(236, 72, 153, 0.7));
          }
          75% {
            background: linear-gradient(45deg, rgba(59, 130, 246, 0.6), rgba(168, 85, 247, 0.6), rgba(236, 72, 153, 0.6), rgba(59, 130, 246, 0.6));
          }
        }

        /* 🌟 ABSOLUTELY SPECTACULAR COSMIC BACKGROUND ANIMATIONS 🌟 */
        @keyframes spectacularPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 30px 80px rgba(0,0,0,0.4), 0 15px 40px rgba(220, 38, 38, 0.2);
          }
          33% {
            transform: scale(1.005);
            box-shadow: 0 35px 90px rgba(0,0,0,0.5), 0 20px 50px rgba(59, 130, 246, 0.3);
          }
          66% {
            transform: scale(1.01);
            box-shadow: 0 40px 100px rgba(0,0,0,0.6), 0 25px 60px rgba(168, 85, 247, 0.4);
          }
        }

        @keyframes nebulaFlow {
          0%, 100% {
            transform: rotate(0deg) scale(1);
            opacity: 0.8;
          }
          25% {
            transform: rotate(90deg) scale(1.1);
            opacity: 1;
          }
          50% {
            transform: rotate(180deg) scale(1.2);
            opacity: 0.9;
          }
          75% {
            transform: rotate(270deg) scale(1.05);
            opacity: 0.7;
          }
        }

        @keyframes cosmicTwinkle {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1) rotate(0deg);
            filter: brightness(1);
          }
          25% {
            opacity: 0.8;
            transform: scale(1.3) rotate(90deg);
            filter: brightness(1.5);
          }
          50% {
            opacity: 1;
            transform: scale(1.6) rotate(180deg);
            filter: brightness(2);
          }
          75% {
            opacity: 0.6;
            transform: scale(1.2) rotate(270deg);
            filter: brightness(1.2);
          }
        }

        @keyframes starPulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.4);
          }
        }

        @keyframes gentleTwinkle {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.9;
          }
        }

        @keyframes magicalFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-30px) translateX(20px) scale(1.2) rotate(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-15px) translateX(-25px) scale(1.5) rotate(180deg);
            opacity: 1;
          }
          75% {
            transform: translateY(-40px) translateX(30px) scale(1.1) rotate(270deg);
            opacity: 0.6;
          }
        }

        @keyframes auroraWave {
          0%, 100% {
            transform: translateX(-100%) skewX(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateX(-50%) skewX(15deg);
            opacity: 0.6;
          }
          50% {
            transform: translateX(0%) skewX(-10deg);
            opacity: 0.8;
          }
          75% {
            transform: translateX(50%) skewX(20deg);
            opacity: 0.4;
          }
        }

        @keyframes cosmicBorderGlow {
          0%, 100% {
            background: linear-gradient(45deg, rgba(220, 38, 38, 0.6) 0%, rgba(59, 130, 246, 0.6) 25%, rgba(168, 85, 247, 0.6) 50%, rgba(16, 185, 129, 0.6) 75%, rgba(220, 38, 38, 0.6) 100%);
            filter: blur(4px) brightness(1);
          }
          25% {
            background: linear-gradient(45deg, rgba(59, 130, 246, 0.8) 0%, rgba(168, 85, 247, 0.8) 25%, rgba(16, 185, 129, 0.8) 50%, rgba(220, 38, 38, 0.8) 75%, rgba(59, 130, 246, 0.8) 100%);
            filter: blur(5px) brightness(1.3);
          }
          50% {
            background: linear-gradient(45deg, rgba(168, 85, 247, 0.9) 0%, rgba(16, 185, 129, 0.9) 25%, rgba(220, 38, 38, 0.9) 50%, rgba(59, 130, 246, 0.9) 75%, rgba(168, 85, 247, 0.9) 100%);
            filter: blur(6px) brightness(1.5);
          }
          75% {
            background: linear-gradient(45deg, rgba(16, 185, 129, 0.7) 0%, rgba(220, 38, 38, 0.7) 25%, rgba(59, 130, 246, 0.7) 50%, rgba(168, 85, 247, 0.7) 75%, rgba(16, 185, 129, 0.7) 100%);
            filter: blur(4px) brightness(1.1);
          }
        }

        /* 🎨 ENHANCED CARD ANIMATION EFFECTS */
        @keyframes cardMagicAppear {
          0% {
            opacity: 0;
            transform: translateY(50px) rotateX(45deg) scale(0.8);
            filter: blur(10px);
          }
          50% {
            opacity: 0.7;
            transform: translateY(20px) rotateX(20deg) scale(0.95);
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) scale(1);
            filter: blur(0px);
          }
        }

        @keyframes textMagicShimmer {
          0%, 100% {
            background-position: -200% 0;
          }
          50% {
            background-position: 200% 0;
          }
        }

        @keyframes iconGlow {
          0%, 100% {
            filter: drop-shadow(0 0 15px rgba(255,255,255,0.8)) brightness(1);
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 25px rgba(255,255,255,1)) brightness(1.3);
            transform: scale(1.1);
          }
        }

        @keyframes emergencyGlow {
          0%, 100% {
            filter: drop-shadow(0 0 15px rgba(255,255,255,0.8)) brightness(1);
            transform: scale(1) rotate(0deg);
          }
          50% {
            filter: drop-shadow(0 0 30px rgba(239, 68, 68, 1)) brightness(1.5);
            transform: scale(1.15) rotate(5deg);
          }
        }

        @keyframes emergencyTextFlash {
          0%, 100% {
            color: white;
            text-shadow: 0 0 10px rgba(255,255,255,0.5);
          }
          50% {
            color: #fecaca;
            text-shadow: 0 0 20px rgba(239, 68, 68, 0.8);
          }
        }

        @keyframes treasureGlow {
          0%, 100% {
            filter: drop-shadow(0 0 15px rgba(255,255,255,0.8)) brightness(1);
            transform: scale(1) rotate(0deg);
          }
          33% {
            filter: drop-shadow(0 0 25px rgba(168, 85, 247, 1)) brightness(1.4);
            transform: scale(1.1) rotate(120deg);
          }
          66% {
            filter: drop-shadow(0 0 20px rgba(236, 72, 153, 1)) brightness(1.2);
            transform: scale(1.05) rotate(240deg);
          }
        }

        @keyframes treasureTextShimmer {
          0%, 100% {
            background: linear-gradient(135deg, #ffffff 0%, #a855f7 50%, #ec4899 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          50% {
            background: linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #ffffff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        }

        @keyframes guardianGlow {
          0%, 100% {
            filter: drop-shadow(0 0 15px rgba(255,255,255,0.8)) brightness(1);
            transform: scale(1) rotate(0deg);
          }
          25% {
            filter: drop-shadow(0 0 20px rgba(16, 185, 129, 1)) brightness(1.3);
            transform: scale(1.08) rotate(90deg);
          }
          50% {
            filter: drop-shadow(0 0 25px rgba(34, 197, 94, 1)) brightness(1.5);
            transform: scale(1.12) rotate(180deg);
          }
          75% {
            filter: drop-shadow(0 0 18px rgba(5, 150, 105, 1)) brightness(1.2);
            transform: scale(1.05) rotate(270deg);
          }
        }

        @keyframes guardianTextPulse {
          0%, 100% {
            color: white;
            text-shadow: 0 0 10px rgba(255,255,255,0.5);
            transform: scale(1);
          }
          50% {
            color: #a7f3d0;
            text-shadow: 0 0 20px rgba(16, 185, 129, 0.8);
            transform: scale(1.05);
          }
        }

        /* 🌟 STUNNING NEW ANIMATIONS FOR PROFESSIONAL EXCELLENCE 🌟 */
        @keyframes stunningGlow {
          0% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.3), 0 15px 35px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2);
          }
          100% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(139, 92, 246, 0.5), 0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3);
          }
        }

        @keyframes professionalFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          25% { transform: translateY(-10px) rotate(90deg); opacity: 1; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
          75% { transform: translateY(-10px) rotate(270deg); opacity: 1; }
        }

        @keyframes backgroundPulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
      `}
    </style>
    <Navigation />
    {/* Hero Section */}
    <div style={{
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #1a252f 50%, #2c3e50 75%, #34495e 100%)',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(220, 53, 69, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 75% 75%, rgba(220, 53, 69, 0.08) 0%, transparent 50%)`,
        zIndex: 1
      }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          {/* Left Content */}
          <div>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #ff4757 0%, #ff3742 25%, #ff2d42 50%, #e63946 75%, #dc3545 100%)',
              color: 'white',
              padding: '12px 28px',
              borderRadius: '35px',
             
              fontSize: '1rem',
              fontWeight: '700',
              marginBottom: '25px',
              border: '2px solid rgba(255, 255, 255, 0.25)',
              boxShadow: '0 12px 35px rgba(255, 71, 87, 0.4), 0 0 25px rgba(255, 71, 87, 0.3), 0 4px 15px rgba(220, 53, 69, 0.2)',
              textShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
              letterSpacing: '0.8px',
              animation: 'pulse 2s infinite',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Bright glow effect */}
              <div style={{
                position: 'absolute',
                top: '-2px',
                left: '-2px',
                right: '-2px',
                bottom: '-2px',
                background: 'linear-gradient(45deg, rgba(255, 71, 87, 0.6), rgba(255, 45, 66, 0.4), rgba(255, 71, 87, 0.6))',
                borderRadius: '35px',
                zIndex: -1,
                animation: 'rotate 3s linear infinite'
              }}></div>
              SAVE LIVES • DONATE BLOOD
            </div>
            <h1 style={{
              fontSize: '3.8rem',
              marginBottom: '25px',
              fontWeight: '700',
              lineHeight: '1.1',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Every Drop<br />
              <span style={{ color: '#dc3545' }}>Saves Lives</span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '35px',
              lineHeight: '1.7',
              color: '#e9ecef',
              fontWeight: '400'
            }}>
              Join our mission to create a world where no life is lost due to blood shortage.
              Your single donation can save up to <strong style={{ color: '#dc3545' }}>three lives</strong>.
            </p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="/donate" style={{
                background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
                color: 'white',
                padding: '16px 32px',
                textDecoration: 'none',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: '600',
                boxShadow: '0 8px 25px rgba(220, 53, 69, 0.3)',
                transition: 'all 0.3s ease',
                border: 'none'
              }}>
                Donate Blood Now
              </a>
              <a href="/signup" style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '16px 32px',
                textDecoration: 'none',
                borderRadius: '12px',
                fontSize: '1.1rem',
                border: '2px solid rgba(255,255,255,0.3)',
                fontWeight: '600',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}>
                Join Community
              </a>
            </div>
          </div>

          {/* Right Content - Animated Stats Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {/* Lives Saved - Main Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(220, 53, 69, 0.15) 0%, rgba(220, 53, 69, 0.08) 50%, rgba(255,255,255,0.05) 100%)',
              backdropFilter: 'blur(25px)',
              border: '2px solid rgba(220, 53, 69, 0.3)',
              borderRadius: '24px',
              padding: '35px 30px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              transform: 'translateY(0) scale(1)',
              boxShadow: '0 15px 35px rgba(220, 53, 69, 0.2), 0 5px 15px rgba(0,0,0,0.1)',
              animation: 'statsFloat 6s ease-in-out infinite'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(220, 53, 69, 0.3), 0 10px 25px rgba(0,0,0,0.15)';
              e.currentTarget.style.borderColor = 'rgba(220, 53, 69, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(220, 53, 69, 0.2), 0 5px 15px rgba(0,0,0,0.1)';
              e.currentTarget.style.borderColor = 'rgba(220, 53, 69, 0.3)';
            }}>
              {/* Animated Background Elements */}
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                width: '60px',
                height: '60px',
                background: 'radial-gradient(circle, rgba(220, 53, 69, 0.3) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'pulse 3s ease-in-out infinite'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                fontSize: '2.5rem',
                opacity: '0.1',
                animation: 'heartbeat 2s ease-in-out infinite'
              }}>❤️</div>

              {/* Content */}
              <div style={{
                fontSize: '3.2rem',
                marginBottom: '12px',
                color: '#dc3545',
                fontWeight: '800',
                textShadow: '0 0 20px rgba(220, 53, 69, 0.4)',
                animation: 'countUp 2s ease-out'
              }}>15,000+</div>
              <div style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: '#ffffff',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                letterSpacing: '0.5px'
              }}>Lives Saved</div>
              <div style={{
                fontSize: '0.9rem',
                color: '#e9ecef',
                marginTop: '8px',
                opacity: '0.8',
                fontStyle: 'italic'
              }}>Through generous donations</div>
            </div>

            {/* Bottom Row - Two Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
              {/* Active Donors Card */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(40, 167, 69, 0.15) 0%, rgba(40, 167, 69, 0.08) 50%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(25px)',
                border: '2px solid rgba(40, 167, 69, 0.3)',
                borderRadius: '20px',
                padding: '28px 22px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                transform: 'translateY(0) scale(1)',
                boxShadow: '0 12px 28px rgba(40, 167, 69, 0.2), 0 4px 12px rgba(0,0,0,0.1)',
                animation: 'statsFloat 6s ease-in-out infinite 1s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(40, 167, 69, 0.3), 0 8px 20px rgba(0,0,0,0.15)';
                e.currentTarget.style.borderColor = 'rgba(40, 167, 69, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(40, 167, 69, 0.2), 0 4px 12px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = 'rgba(40, 167, 69, 0.3)';
              }}>
                {/* Animated Elements */}
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  fontSize: '1.8rem',
                  opacity: '0.15',
                  animation: 'bounce 2s ease-in-out infinite 0.5s'
                }}>👥</div>

                <div style={{
                  fontSize: '2.2rem',
                  marginBottom: '8px',
                  color: '#28a745',
                  fontWeight: '800',
                  textShadow: '0 0 15px rgba(40, 167, 69, 0.4)',
                  animation: 'countUp 2s ease-out 0.5s both'
                }}>8,500+</div>
                <div style={{
                  fontSize: '1rem',
                  color: '#ffffff',
                  fontWeight: '600',
                  textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                  letterSpacing: '0.3px'
                }}>Active Donors</div>
                <div style={{
                  fontSize: '0.8rem',
                  color: '#e9ecef',
                  marginTop: '6px',
                  opacity: '0.7'
                }}>Ready to help</div>
              </div>

              {/* Hospitals Card */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(23, 162, 184, 0.15) 0%, rgba(23, 162, 184, 0.08) 50%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(25px)',
                border: '2px solid rgba(23, 162, 184, 0.3)',
                borderRadius: '20px',
                padding: '28px 22px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                transform: 'translateY(0) scale(1)',
                boxShadow: '0 12px 28px rgba(23, 162, 184, 0.2), 0 4px 12px rgba(0,0,0,0.1)',
                animation: 'statsFloat 6s ease-in-out infinite 2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(23, 162, 184, 0.3), 0 8px 20px rgba(0,0,0,0.15)';
                e.currentTarget.style.borderColor = 'rgba(23, 162, 184, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(23, 162, 184, 0.2), 0 4px 12px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = 'rgba(23, 162, 184, 0.3)';
              }}>
                {/* Animated Elements */}
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  fontSize: '1.8rem',
                  opacity: '0.15',
                  animation: 'bounce 2s ease-in-out infinite 1s'
                }}>🏥</div>

                <div style={{
                  fontSize: '2.2rem',
                  marginBottom: '8px',
                  color: '#17a2b8',
                  fontWeight: '800',
                  textShadow: '0 0 15px rgba(23, 162, 184, 0.4)',
                  animation: 'countUp 2s ease-out 1s both'
                }}>500+</div>
                <div style={{
                  fontSize: '1rem',
                  color: '#ffffff',
                  fontWeight: '600',
                  textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                  letterSpacing: '0.3px'
                }}>Hospitals</div>
                <div style={{
                  fontSize: '0.8rem',
                  color: '#e9ecef',
                  marginTop: '6px',
                  opacity: '0.7'
                }}>Partner network</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Enhanced Professional Features Section */}
    <div style={{
      padding: '120px 20px',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Professional Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(220, 53, 69, 0.03) 0%, transparent 50%),
                         radial-gradient(circle at 80% 20%, rgba(40, 167, 69, 0.03) 0%, transparent 50%),
                         radial-gradient(circle at 40% 80%, rgba(111, 66, 193, 0.03) 0%, transparent 50%)`,
        zIndex: 0
      }}></div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Professional Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 24px',
            backgroundColor: 'rgba(220, 53, 69, 0.1)',
            borderRadius: '50px',
            marginBottom: '20px',
            border: '1px solid rgba(220, 53, 69, 0.2)'
          }}>
            <span style={{ color: '#dc3545', fontWeight: '600', fontSize: '0.9rem', letterSpacing: '1px' }}>
              ✨ TRUSTED BY THOUSANDS
            </span>
          </div>

          <h2 style={{
            fontSize: '3.5rem',
            marginBottom: '24px',
            color: '#1a1a1a',
            fontWeight: '800',
            lineHeight: '1.2',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2c3e50 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Why Choose VitalDrop?
          </h2>

          <p style={{
            fontSize: '1.3rem',
            color: '#495057',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.7',
            fontWeight: '400'
          }}>
            Join the most trusted blood donation platform that has <strong style={{color: '#dc3545'}}>saved over 50,000 lives</strong> through
            innovative technology, verified medical partnerships, and unwavering commitment to safety.
          </p>
        </div>

        {/* Enhanced Professional Feature Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '50px',
          marginBottom: '80px'
        }}>
          {/* Verified Medical Network Card */}
          <div style={{
            textAlign: 'center',
            padding: '50px 40px',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 8px 25px rgba(0,0,0,0.06)',
            border: '1px solid rgba(220, 53, 69, 0.08)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.12), 0 12px 35px rgba(0,0,0,0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.08), 0 8px 25px rgba(0,0,0,0.06)';
          }}>
            {/* Professional Card Accent */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #dc3545 0%, #c82333 100%)'
            }}></div>

            <div style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 30px auto',
              fontSize: '2.5rem',
              boxShadow: '0 15px 35px rgba(220, 53, 69, 0.3)'
            }}>🏥</div>

            <h3 style={{
              color: '#1a1a1a',
              marginBottom: '20px',
              fontSize: '1.6rem',
              fontWeight: '700',
              letterSpacing: '-0.5px'
            }}>Verified Medical Network</h3>

            <p style={{
              color: '#6c757d',
              lineHeight: '1.8',
              fontSize: '1.1rem',
              marginBottom: '25px'
            }}>
              Partnership with <strong style={{color: '#dc3545'}}>800+ certified hospitals</strong> and blood banks
              nationwide, ensuring immediate emergency response and quality assurance.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              fontSize: '0.9rem',
              color: '#28a745',
              fontWeight: '600'
            }}>
              <span>✓ 24/7 Availability</span>
              <span>✓ ISO Certified</span>
            </div>
          </div>

          {/* Lightning-Fast Response Card */}
          <div style={{
            textAlign: 'center',
            padding: '50px 40px',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 8px 25px rgba(0,0,0,0.06)',
            border: '1px solid rgba(40, 167, 69, 0.08)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.12), 0 12px 35px rgba(0,0,0,0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.08), 0 8px 25px rgba(0,0,0,0.06)';
          }}>
            {/* Professional Card Accent */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #28a745 0%, #20c997 100%)'
            }}></div>

            <div style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 30px auto',
              fontSize: '2.5rem',
              boxShadow: '0 15px 35px rgba(40, 167, 69, 0.3)'
            }}>⚡</div>

            <h3 style={{
              color: '#1a1a1a',
              marginBottom: '20px',
              fontSize: '1.6rem',
              fontWeight: '700',
              letterSpacing: '-0.5px'
            }}>Lightning-Fast Response</h3>

            <p style={{
              color: '#6c757d',
              lineHeight: '1.8',
              fontSize: '1.1rem',
              marginBottom: '25px'
            }}>
              AI-powered matching system processes emergency requests in <strong style={{color: '#28a745'}}>under 5 minutes</strong>,
              connecting patients with compatible donors instantly.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              fontSize: '0.9rem',
              color: '#28a745',
              fontWeight: '600'
            }}>
              <span>✓ Real-time Tracking</span>
              <span>✓ Smart Alerts</span>
            </div>
          </div>

          {/* Bank-Level Security Card */}
          <div style={{
            textAlign: 'center',
            padding: '50px 40px',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 8px 25px rgba(0,0,0,0.06)',
            border: '1px solid rgba(111, 66, 193, 0.08)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.12), 0 12px 35px rgba(0,0,0,0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.08), 0 8px 25px rgba(0,0,0,0.06)';
          }}>
            {/* Professional Card Accent */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #6f42c1 0%, #e83e8c 100%)'
            }}></div>

            <div style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #6f42c1 0%, #e83e8c 100%)',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 30px auto',
              fontSize: '2.5rem',
              boxShadow: '0 15px 35px rgba(111, 66, 193, 0.3)'
            }}>🛡️</div>

            <h3 style={{
              color: '#1a1a1a',
              marginBottom: '20px',
              fontSize: '1.6rem',
              fontWeight: '700',
              letterSpacing: '-0.5px'
            }}>Bank-Level Security</h3>

            <p style={{
              color: '#6c757d',
              lineHeight: '1.8',
              fontSize: '1.1rem',
              marginBottom: '25px'
            }}>
              <strong style={{color: '#6f42c1'}}>256-bit encryption</strong> protects all personal data.
              Rigorous medical screening and HIPAA-compliant privacy standards ensure complete safety.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              fontSize: '0.9rem',
              color: '#28a745',
              fontWeight: '600'
            }}>
              <span>✓ HIPAA Compliant</span>
              <span>✓ FDA Approved</span>
            </div>
          </div>
        </div>


      </div>
    </div>

    {/* Professional Testimonials Section */}
    <div style={{
      padding: '100px 20px',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 15% 30%, rgba(220, 53, 69, 0.02) 0%, transparent 50%),
                         radial-gradient(circle at 85% 70%, rgba(40, 167, 69, 0.02) 0%, transparent 50%)`,
        zIndex: 0
      }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 24px',
            backgroundColor: 'rgba(40, 167, 69, 0.1)',
            borderRadius: '50px',
            marginBottom: '20px',
            border: '1px solid rgba(40, 167, 69, 0.2)'
          }}>
            <span style={{ color: '#28a745', fontWeight: '600', fontSize: '0.9rem', letterSpacing: '1px' }}>
              💬 REAL STORIES, REAL IMPACT
            </span>
          </div>

          <h2 style={{
            fontSize: '3rem',
            marginBottom: '20px',
            color: '#1a1a1a',
            fontWeight: '700',
            lineHeight: '1.2'
          }}>
            Trusted by Healthcare Heroes
          </h2>

          <p style={{
            fontSize: '1.2rem',
            color: '#495057',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Hear from medical professionals and donors who trust VitalDrop to save lives every day
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* Medical Professional Testimonial */}
          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            borderRadius: '20px',
            padding: '40px 35px',
            boxShadow: '0 15px 40px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.04)',
            border: '1px solid rgba(0,0,0,0.05)',
            position: 'relative',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.12), 0 8px 25px rgba(0,0,0,0.06)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.04)';
          }}>
            {/* Quote Icon */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '25px',
              fontSize: '3rem',
              color: 'rgba(220, 53, 69, 0.1)',
              fontFamily: 'serif'
            }}>"</div>

            <div style={{
              marginBottom: '25px',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: '#495057',
              fontStyle: 'italic'
            }}>
              "VitalDrop has revolutionized our emergency response. We can now locate compatible blood donors
              within minutes, not hours. This platform has directly contributed to saving countless lives in our ER."
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                color: 'white'
              }}>👨‍⚕️</div>

              <div>
                <div style={{
                  fontWeight: '700',
                  color: '#1a1a1a',
                  fontSize: '1.1rem',
                  marginBottom: '4px'
                }}>Dr. Michael Chen</div>
                <div style={{
                  color: '#6c757d',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>Emergency Medicine Director</div>
                <div style={{
                  color: '#28a745',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  marginTop: '2px'
                }}>⭐ Mayo Clinic Partner</div>
              </div>
            </div>
          </div>

          {/* Donor Testimonial */}
          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            borderRadius: '20px',
            padding: '40px 35px',
            boxShadow: '0 15px 40px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.04)',
            border: '1px solid rgba(0,0,0,0.05)',
            position: 'relative',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.12), 0 8px 25px rgba(0,0,0,0.06)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.04)';
          }}>
            {/* Quote Icon */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '25px',
              fontSize: '3rem',
              color: 'rgba(40, 167, 69, 0.1)',
              fontFamily: 'serif'
            }}>"</div>

            <div style={{
              marginBottom: '25px',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: '#495057',
              fontStyle: 'italic'
            }}>
              "I've been donating through VitalDrop for 2 years. The process is seamless, and knowing exactly
              how my donations help real people makes every visit meaningful. I've helped save 12 lives so far!"
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                color: 'white'
              }}>👩</div>

              <div>
                <div style={{
                  fontWeight: '700',
                  color: '#1a1a1a',
                  fontSize: '1.1rem',
                  marginBottom: '4px'
                }}>Sarah Johnson</div>
                <div style={{
                  color: '#6c757d',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>Regular Donor</div>
                <div style={{
                  color: '#dc3545',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  marginTop: '2px'
                }}>🩸 12 Lives Saved</div>
              </div>
            </div>
          </div>

          {/* Hospital Administrator Testimonial */}
          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            borderRadius: '20px',
            padding: '40px 35px',
            boxShadow: '0 15px 40px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.04)',
            border: '1px solid rgba(0,0,0,0.05)',
            position: 'relative',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.12), 0 8px 25px rgba(0,0,0,0.06)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.04)';
          }}>
            {/* Quote Icon */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '25px',
              fontSize: '3rem',
              color: 'rgba(23, 162, 184, 0.1)',
              fontFamily: 'serif'
            }}>"</div>

            <div style={{
              marginBottom: '25px',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: '#495057',
              fontStyle: 'italic'
            }}>
              "VitalDrop's security standards exceed our expectations. HIPAA compliance, real-time tracking,
              and verified donor profiles give us complete confidence in the platform's reliability."
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #17a2b8 0%, #138496 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                color: 'white'
              }}>👨‍💼</div>

              <div>
                <div style={{
                  fontWeight: '700',
                  color: '#1a1a1a',
                  fontSize: '1.1rem',
                  marginBottom: '4px'
                }}>Robert Martinez</div>
                <div style={{
                  color: '#6c757d',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>Hospital Administrator</div>
                <div style={{
                  color: '#17a2b8',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  marginTop: '2px'
                }}>🏥 Regional Medical Center</div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Trust Metrics */}
        <div style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          borderRadius: '24px',
          padding: '60px 40px',
          textAlign: 'center',
          border: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 8px 25px rgba(0,0,0,0.04)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle background pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(239, 68, 68, 0.02) 0%, transparent 50%)
            `,
            zIndex: 1
          }}></div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            {/* Section Header */}
            <div style={{ marginBottom: '50px' }}>
              <h3 style={{
                fontSize: '2.2rem',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '12px',
                letterSpacing: '-0.025em'
              }}>
                Trusted by Healthcare Professionals
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: '#6b7280',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Industry-leading performance metrics that demonstrate our commitment to excellence
              </p>
            </div>

            {/* Professional Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '32px',
              alignItems: 'stretch'
            }}>
              {/* Satisfaction Rate */}
              <div style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #fef7f7 100%)',
                borderRadius: '20px',
                padding: '40px 32px',
                border: '2px solid rgba(239, 68, 68, 0.1)',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(239, 68, 68, 0.15), 0 10px 30px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.1)';
              }}>

                <div style={{
                  fontSize: '3.5rem',
                  fontWeight: '800',
                  color: '#ef4444',
                  marginBottom: '12px',
                  lineHeight: '1',
                  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
                }}>98%</div>
                <div style={{
                  color: '#374151',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  marginBottom: '8px',
                  letterSpacing: '-0.025em'
                }}>Satisfaction Rate</div>
                <div style={{
                  color: '#6b7280',
                  fontSize: '0.9rem',
                  lineHeight: '1.4'
                }}>Based on 10,000+ user reviews</div>
              </div>

              {/* Average Rating */}
              <div style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
                borderRadius: '20px',
                padding: '40px 32px',
                border: '2px solid rgba(34, 197, 94, 0.1)',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(34, 197, 94, 0.15), 0 10px 30px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.1)';
              }}>

                <div style={{
                  fontSize: '3.5rem',
                  fontWeight: '800',
                  color: '#22c55e',
                  marginBottom: '12px',
                  lineHeight: '1',
                  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
                }}>5.0</div>
                <div style={{
                  color: '#374151',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  marginBottom: '8px',
                  letterSpacing: '-0.025em'
                }}>Average Rating</div>
                <div style={{
                  color: '#6b7280',
                  fontSize: '0.9rem',
                  lineHeight: '1.4'
                }}>Consistently top-rated platform</div>
              </div>

              {/* 24/7 Support */}
              <div style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
                borderRadius: '20px',
                padding: '40px 32px',
                border: '2px solid rgba(59, 130, 246, 0.1)',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(59, 130, 246, 0.15), 0 10px 30px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.1)';
              }}>

                <div style={{
                  fontSize: '3.5rem',
                  fontWeight: '800',
                  color: '#3b82f6',
                  marginBottom: '12px',
                  lineHeight: '1',
                  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
                }}>24/7</div>
                <div style={{
                  color: '#374151',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  marginBottom: '8px',
                  letterSpacing: '-0.025em'
                }}>Support Available</div>
                <div style={{
                  color: '#6b7280',
                  fontSize: '0.9rem',
                  lineHeight: '1.4'
                }}>Round-the-clock assistance</div>
              </div>

              {/* HIPAA Compliant */}
              <div style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)',
                borderRadius: '20px',
                padding: '40px 32px',
                border: '2px solid rgba(147, 51, 234, 0.1)',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(147, 51, 234, 0.15), 0 10px 30px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.1)';
              }}>

                <div style={{
                  fontSize: '3.5rem',
                  fontWeight: '800',
                  color: '#9333ea',
                  marginBottom: '12px',
                  lineHeight: '1',
                  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
                }}>100%</div>
                <div style={{
                  color: '#374151',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  marginBottom: '8px',
                  letterSpacing: '-0.025em'
                }}>HIPAA Compliant</div>
                <div style={{
                  color: '#6b7280',
                  fontSize: '0.9rem',
                  lineHeight: '1.4'
                }}>Enterprise-grade security</div>
              </div>
            </div>

            {/* Professional Certification Badges */}
            <div style={{
              marginTop: '50px',
              paddingTop: '40px',
              borderTop: '1px solid rgba(0,0,0,0.08)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '40px',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 24px',
                  background: 'rgba(59, 130, 246, 0.05)',
                  borderRadius: '50px',
                  border: '1px solid rgba(59, 130, 246, 0.1)'
                }}>
                  <span style={{ color: '#374151', fontWeight: '600', fontSize: '0.9rem' }}>ISO 27001 Certified</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 24px',
                  background: 'rgba(34, 197, 94, 0.05)',
                  borderRadius: '50px',
                  border: '1px solid rgba(34, 197, 94, 0.1)'
                }}>
                  <span style={{ color: '#374151', fontWeight: '600', fontSize: '0.9rem' }}>FDA Approved</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 24px',
                  background: 'rgba(147, 51, 234, 0.05)',
                  borderRadius: '50px',
                  border: '1px solid rgba(147, 51, 234, 0.1)'
                }}>
                  <span style={{ color: '#374151', fontWeight: '600', fontSize: '0.9rem' }}>SOC 2 Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Impact Section */}
    <div style={{
      padding: '100px 20px',
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #2c3e50 50%, #1a252f 75%, #2c3e50 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-10%',
        width: '120%',
        height: '200%',
        background: `radial-gradient(circle at 30% 40%, rgba(220, 53, 69, 0.1) 0%, transparent 50%),
                     radial-gradient(circle at 70% 80%, rgba(220, 53, 69, 0.08) 0%, transparent 50%)`,
        zIndex: 1
      }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: '70px' }}>
          <h2 style={{
            fontSize: '2.8rem',
            marginBottom: '20px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Our Global Impact</h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#e9ecef',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Together, we're building a world where every patient has access to life-saving blood when they need it most.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>

          {/* Lives Saved Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(220, 53, 69, 0.15) 0%, rgba(220, 53, 69, 0.05) 100%)',
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(220, 53, 69, 0.3)',
            borderRadius: '24px',
            padding: '45px 35px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            cursor: 'pointer',
            transform: 'translateY(0)',
            boxShadow: '0 10px 30px rgba(220, 53, 69, 0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(220, 53, 69, 0.25)';
            e.currentTarget.style.borderColor = 'rgba(220, 53, 69, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(220, 53, 69, 0.1)';
            e.currentTarget.style.borderColor = 'rgba(220, 53, 69, 0.3)';
          }}>
            {/* Floating Icon */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              fontSize: '2rem',
              opacity: '0.3'
            }}>❤️</div>

            {/* Animated Background Circle */}
            <div style={{
              position: 'absolute',
              top: '-30px',
              right: '-30px',
              width: '80px',
              height: '80px',
              background: 'radial-gradient(circle, rgba(220, 53, 69, 0.2) 0%, transparent 70%)',
              borderRadius: '50%',
              animation: 'pulse 3s ease-in-out infinite'
            }}></div>

            <div style={{
              fontSize: '4.5rem',
              fontWeight: '800',
              color: '#dc3545',
              marginBottom: '20px',
              textShadow: '0 0 30px rgba(220, 53, 69, 0.4)',
              lineHeight: '1'
            }}>15,000+</div>
            <p style={{
              fontSize: '1.5rem',
              color: '#ffffff',
              fontWeight: '600',
              marginBottom: '10px',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>Lives Saved</p>
            <p style={{
              fontSize: '1rem',
              color: '#e9ecef',
              fontStyle: 'italic',
              opacity: '0.9'
            }}>Through generous donations</p>
          </div>

          {/* Active Donors Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(40, 167, 69, 0.15) 0%, rgba(40, 167, 69, 0.05) 100%)',
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(40, 167, 69, 0.3)',
            borderRadius: '24px',
            padding: '45px 35px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            cursor: 'pointer',
            transform: 'translateY(0)',
            boxShadow: '0 10px 30px rgba(40, 167, 69, 0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(40, 167, 69, 0.25)';
            e.currentTarget.style.borderColor = 'rgba(40, 167, 69, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(40, 167, 69, 0.1)';
            e.currentTarget.style.borderColor = 'rgba(40, 167, 69, 0.3)';
          }}>
            {/* Floating Icon */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              fontSize: '2rem',
              opacity: '0.3'
            }}>👥</div>

            {/* Animated Background Circle */}
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              left: '-30px',
              width: '80px',
              height: '80px',
              background: 'radial-gradient(circle, rgba(40, 167, 69, 0.2) 0%, transparent 70%)',
              borderRadius: '50%',
              animation: 'pulse 3s ease-in-out infinite 1s'
            }}></div>

            <div style={{
              fontSize: '4.5rem',
              fontWeight: '800',
              color: '#28a745',
              marginBottom: '20px',
              textShadow: '0 0 30px rgba(40, 167, 69, 0.4)',
              lineHeight: '1'
            }}>8,500+</div>
            <p style={{
              fontSize: '1.5rem',
              color: '#ffffff',
              fontWeight: '600',
              marginBottom: '10px',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>Active Donors</p>
            <p style={{
              fontSize: '1rem',
              color: '#e9ecef',
              fontStyle: 'italic',
              opacity: '0.9'
            }}>Ready to help 24/7</p>
          </div>

          {/* Partner Hospitals Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(23, 162, 184, 0.15) 0%, rgba(23, 162, 184, 0.05) 100%)',
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(23, 162, 184, 0.3)',
            borderRadius: '24px',
            padding: '45px 35px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            cursor: 'pointer',
            transform: 'translateY(0)',
            boxShadow: '0 10px 30px rgba(23, 162, 184, 0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(23, 162, 184, 0.25)';
            e.currentTarget.style.borderColor = 'rgba(23, 162, 184, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(23, 162, 184, 0.1)';
            e.currentTarget.style.borderColor = 'rgba(23, 162, 184, 0.3)';
          }}>
            {/* Floating Icon */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              fontSize: '2rem',
              opacity: '0.3'
            }}>🏥</div>

            {/* Animated Background Circle */}
            <div style={{
              position: 'absolute',
              top: '50%',
              right: '-40px',
              width: '80px',
              height: '80px',
              background: 'radial-gradient(circle, rgba(23, 162, 184, 0.2) 0%, transparent 70%)',
              borderRadius: '50%',
              animation: 'pulse 3s ease-in-out infinite 2s'
            }}></div>

            <div style={{
              fontSize: '4.5rem',
              fontWeight: '800',
              color: '#17a2b8',
              marginBottom: '20px',
              textShadow: '0 0 30px rgba(23, 162, 184, 0.4)',
              lineHeight: '1'
            }}>500+</div>
            <p style={{
              fontSize: '1.5rem',
              color: '#ffffff',
              fontWeight: '600',
              marginBottom: '10px',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>Partner Hospitals</p>
            <p style={{
              fontSize: '1rem',
              color: '#e9ecef',
              fontStyle: 'italic',
              opacity: '0.9'
            }}>Across the region</p>
          </div>

          {/* Emergency Support Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.15) 0%, rgba(255, 193, 7, 0.05) 100%)',
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(255, 193, 7, 0.3)',
            borderRadius: '24px',
            padding: '45px 35px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            cursor: 'pointer',
            transform: 'translateY(0)',
            boxShadow: '0 10px 30px rgba(255, 193, 7, 0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(255, 193, 7, 0.25)';
            e.currentTarget.style.borderColor = 'rgba(255, 193, 7, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 193, 7, 0.1)';
            e.currentTarget.style.borderColor = 'rgba(255, 193, 7, 0.3)';
          }}>
            {/* Floating Icon */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              fontSize: '2rem',
              opacity: '0.3'
            }}>⚡</div>

            {/* Animated Background Circle */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '80px',
              background: 'radial-gradient(circle, rgba(255, 193, 7, 0.2) 0%, transparent 70%)',
              borderRadius: '50%',
              animation: 'pulse 3s ease-in-out infinite 0.5s'
            }}></div>

            <div style={{
              fontSize: '4.5rem',
              fontWeight: '800',
              color: '#ffc107',
              marginBottom: '20px',
              textShadow: '0 0 30px rgba(255, 193, 7, 0.4)',
              lineHeight: '1'
            }}>24/7</div>
            <p style={{
              fontSize: '1.5rem',
              color: '#ffffff',
              fontWeight: '600',
              marginBottom: '10px',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>Emergency Support</p>
            <p style={{
              fontSize: '1rem',
              color: '#e9ecef',
              fontStyle: 'italic',
              opacity: '0.9'
            }}>Always available</p>
          </div>
        </div>


      </div>
    </div>
  </div>
);

// Login Page Component
const LoginPage = () => (
  <div style={{ fontFamily: 'Arial, sans-serif' }}>
    <Navigation showContact={true} />
    <div style={{ padding: '80px 20px', backgroundColor: '#f8f9fa', minHeight: '80vh' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ textAlign: 'center', color: '#1d3557', marginBottom: '30px', fontSize: '2rem' }}>
            🩸 Login to VitalDrop
          </h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#1d3557', fontWeight: 'bold' }}>Email Address</label>
              <input type="email" style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '6px', fontSize: '1rem' }} placeholder="Enter your email" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#1d3557', fontWeight: 'bold' }}>Password</label>
              <input type="password" style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '6px', fontSize: '1rem' }} placeholder="Enter your password" />
            </div>
            <button type="submit" style={{
              backgroundColor: '#e63946',
              color: 'white',
              padding: '15px',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '10px'
            }}>
              Login
            </button>
          </form>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p style={{ color: '#666' }}>
              Don't have an account? <a href="/signup" style={{ color: '#e63946', textDecoration: 'none', fontWeight: 'bold' }}>Sign up here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Beautiful Signup Page Component with Google Auth
const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      console.log('Google Sign-In Success:', credentialResponse);

      const response = await fetch('http://localhost:5001/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          credential: credentialResponse.credential
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Welcome ${data.user.name}! Your account has been created/logged in successfully.`);
        // Store token in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        // Redirect to home page
        window.location.href = '/';
      } else {
        alert(`Google Sign-In failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Google auth error:', error);
      alert('Google Sign-In failed. Please try again.');
    }
  };

  const handleGoogleError = () => {
    console.log('Google Sign-In Failed');
    alert('Google Sign-In failed. Please try again.');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    console.log('Submitting form data:', {
      name: formData.fullName,
      email: formData.email,
      password: formData.password
    });

    try {
      const response = await fetch('http://localhost:5001/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          password: formData.password
        }),
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        alert('Account created successfully! Please login to continue.');
        // Redirect to login page
        window.location.href = '/login';
      } else {
        console.error('Signup failed:', data);
        if (response.status === 409) {
          setError('This email is already registered. Please use a different email or try logging in.');
        } else {
          setError(data.message || 'Signup failed. Please try again.');
        }
      }
    } catch (error) {
      console.error('Signup error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <style>
        {`
          @keyframes classicSlideUp {
            0% { opacity: 0; transform: translateY(15px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes classicFadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          @keyframes professionalButtonGlow {
            0%, 100% {
              box-shadow: 0 2px 4px rgba(239, 68, 68, 0.2);
            }
            50% {
              box-shadow: 0 4px 8px rgba(239, 68, 68, 0.3);
            }
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <Navigation />

      {/* Classic Professional Background */}
      <div style={{
        background: '#f9fafb',
        minHeight: '100vh',
        padding: '80px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>


        {/* Classic Professional Container */}
        <div style={{
          maxWidth: '440px',
          width: '100%',
          position: 'relative'
        }}>
          <div style={{
            background: 'white',
            padding: '56px 48px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            animation: 'classicSlideUp 0.5s ease-out',
            position: 'relative'
          }}>
            {/* Classic Professional Header */}
            <div style={{ textAlign: 'left', marginBottom: '40px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '8px',
                animation: 'classicFadeIn 0.6s ease-out'
              }}>
                {/* Professional Blood Drop SVG */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{
                    flexShrink: 0
                  }}
                >
                  <path
                    d="M12 2C12 2 6 8 6 14C6 17.31 8.69 20 12 20C15.31 20 18 17.31 18 14C18 8 12 2 12 2Z"
                    fill="#ef4444"
                    stroke="#dc2626"
                    strokeWidth="0.5"
                  />
                  <ellipse
                    cx="10"
                    cy="12"
                    rx="1.5"
                    ry="2"
                    fill="#ffffff"
                    opacity="0.3"
                  />
                </svg>

                <h1 style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  color: '#1e3a8a',
                  margin: 0,
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2'
                }}>
                  Sign up to VitalDrop
                </h1>
              </div>
            </div>



            {/* Error Message */}
            {error && (
              <div style={{
                background: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '6px',
                padding: '12px 16px',
                marginBottom: '20px',
                color: '#dc2626',
                fontSize: '0.875rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {error}
              </div>
            )}

            {/* Classic Professional Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Full Name */}
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '6px',
                  color: '#374151',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  letterSpacing: '0.025em'
                }}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
                    background: 'white',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                  placeholder="Enter your full name"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#ef4444';
                    e.target.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Email Address */}
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '6px',
                  color: '#374151',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  letterSpacing: '0.025em'
                }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
                    background: 'white',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                  placeholder="Enter your email"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#ef4444';
                    e.target.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Password */}
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '6px',
                  color: '#374151',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  letterSpacing: '0.025em'
                }}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
                    background: 'white',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                  placeholder="Enter your password"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#ef4444';
                    e.target.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Classic Professional Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  width: '100%',
                  padding: '12px 24px',
                  background: isLoading ? '#9ca3af' : '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.15s ease-in-out',
                  marginTop: '8px',
                  fontFamily: 'inherit',
                  letterSpacing: '0.025em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.target.style.background = '#dc2626';
                    e.target.style.transform = 'translateY(-1px)';
                    e.target.style.boxShadow = '0 4px 8px rgba(239, 68, 68, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) {
                    e.target.style.background = '#ef4444';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                {isLoading && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeDasharray="31.416" strokeDashoffset="31.416" opacity="0.3"/>
                    <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"/>
                  </svg>
                )}
                {isLoading ? 'Creating Account...' : 'Sign up'}
              </button>
            </form>

            {/* Classic Professional Login Link */}
            <div style={{
              textAlign: 'center',
              marginTop: '24px',
              paddingTop: '24px',
              borderTop: '1px solid #f3f4f6',
              animation: 'classicFadeIn 0.8s ease-out'
            }}>
              <p style={{
                color: '#6b7280',
                margin: 0,
                fontSize: '0.875rem',
                fontWeight: '400'
              }}>
                Already have an account? <a href="/login" style={{
                  color: '#ef4444',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'color 0.15s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#dc2626';
                  e.target.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#ef4444';
                  e.target.style.textDecoration = 'none';
                }}
                >Sign in here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// About Page Component
const AboutPage = () => (
  <div style={{ fontFamily: 'Arial, sans-serif' }}>
    <Navigation showContact={true} />
    <div style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', color: '#1d3557', marginBottom: '20px' }}>About VitalDrop</h1>
          <p style={{ fontSize: '1.3rem', color: '#666', lineHeight: '1.6' }}>
            Connecting donors with those in need, saving lives one drop at a time.
          </p>
        </div>

        {/* Enhanced Mission & Vision Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '50px',
          marginBottom: '80px',
          padding: '0 20px'
        }}>
          {/* Mission Card */}
          <div style={{
            background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
            padding: '50px 45px',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 8px 25px rgba(0,0,0,0.04)',
            border: '1px solid rgba(220, 53, 69, 0.08)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.12), 0 12px 35px rgba(0,0,0,0.06)';
            e.currentTarget.style.borderColor = 'rgba(220, 53, 69, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.08), 0 8px 25px rgba(0,0,0,0.04)';
            e.currentTarget.style.borderColor = 'rgba(220, 53, 69, 0.08)';
          }}>
            {/* Decorative Background Element */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '150px',
              height: '150px',
              background: 'linear-gradient(135deg, rgba(220, 53, 69, 0.05) 0%, rgba(220, 53, 69, 0.02) 100%)',
              borderRadius: '50%',
              zIndex: 0
            }}></div>

            {/* Mission Icon */}
            <div style={{
              width: '70px',
              height: '70px',
              background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '30px',
              boxShadow: '0 8px 25px rgba(220, 53, 69, 0.3)',
              position: 'relative',
              zIndex: 1
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>

            <h2 style={{
              color: '#1a1a1a',
              marginBottom: '25px',
              fontSize: '2.2rem',
              fontWeight: '800',
              lineHeight: '1.3',
              letterSpacing: '-0.5px',
              position: 'relative',
              zIndex: 1
            }}>
              Our Mission
            </h2>

            <p style={{
              color: '#4a5568',
              lineHeight: '1.8',
              fontSize: '1.15rem',
              fontWeight: '400',
              margin: 0,
              position: 'relative',
              zIndex: 1
            }}>
              To create a <strong style={{color: '#dc3545', fontWeight: '600'}}>seamless, efficient, and life-saving</strong> blood donation network that connects willing donors
              with hospitals and patients in need. We believe every person deserves access to safe blood when they need it most.
            </p>

            {/* Mission Stats */}
            <div style={{
              marginTop: '35px',
              display: 'flex',
              gap: '25px',
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{
                textAlign: 'center',
                padding: '15px 20px',
                background: 'rgba(220, 53, 69, 0.05)',
                borderRadius: '12px',
                flex: 1
              }}>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: '800',
                  color: '#dc3545',
                  marginBottom: '5px'
                }}>50K+</div>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#6b7280',
                  fontWeight: '500'
                }}>Lives Saved</div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '15px 20px',
                background: 'rgba(220, 53, 69, 0.05)',
                borderRadius: '12px',
                flex: 1
              }}>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: '800',
                  color: '#dc3545',
                  marginBottom: '5px'
                }}>24/7</div>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#6b7280',
                  fontWeight: '500'
                }}>Available</div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div style={{
            background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
            padding: '50px 45px',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 8px 25px rgba(0,0,0,0.04)',
            border: '1px solid rgba(59, 130, 246, 0.08)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.12), 0 12px 35px rgba(0,0,0,0.06)';
            e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.08), 0 8px 25px rgba(0,0,0,0.04)';
            e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.08)';
          }}>
            {/* Decorative Background Element */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '150px',
              height: '150px',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.02) 100%)',
              borderRadius: '50%',
              zIndex: 0
            }}></div>

            {/* Vision Icon */}
            <div style={{
              width: '70px',
              height: '70px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '30px',
              boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)',
              position: 'relative',
              zIndex: 1
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </div>

            <h2 style={{
              color: '#1a1a1a',
              marginBottom: '25px',
              fontSize: '2.2rem',
              fontWeight: '800',
              lineHeight: '1.3',
              letterSpacing: '-0.5px',
              position: 'relative',
              zIndex: 1
            }}>
              Our Vision
            </h2>

            <p style={{
              color: '#4a5568',
              lineHeight: '1.8',
              fontSize: '1.15rem',
              fontWeight: '400',
              margin: 0,
              position: 'relative',
              zIndex: 1
            }}>
              A world where <strong style={{color: '#3b82f6', fontWeight: '600'}}>no life is lost due to blood shortage</strong>. We envision a future where blood donation
              is as common as helping a neighbor, creating a <strong style={{color: '#3b82f6', fontWeight: '600'}}>community of life-savers</strong>.
            </p>

            {/* Vision Goals */}
            <div style={{
              marginTop: '35px',
              display: 'flex',
              gap: '25px',
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{
                textAlign: 'center',
                padding: '15px 20px',
                background: 'rgba(59, 130, 246, 0.05)',
                borderRadius: '12px',
                flex: 1
              }}>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: '800',
                  color: '#3b82f6',
                  marginBottom: '5px'
                }}>100%</div>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#6b7280',
                  fontWeight: '500'
                }}>Coverage</div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '15px 20px',
                background: 'rgba(59, 130, 246, 0.05)',
                borderRadius: '12px',
                flex: 1
              }}>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: '800',
                  color: '#3b82f6',
                  marginBottom: '5px'
                }}>∞</div>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#6b7280',
                  fontWeight: '500'
                }}>Impact</div>
              </div>
            </div>
          </div>
        </div>

        {/* 🌟 ENHANCED SPECTACULAR IMPACT SECTION WITH AMAZING EFFECTS 🌟 */}
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)',
          padding: '50px',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          marginBottom: '60px',
          position: 'relative',
          overflow: 'hidden',
          animation: 'sectionPulse 8s ease-in-out infinite'
        }}>
          {/* Enhanced animated starfield background */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            zIndex: 0
          }}>
            {/* Twinkling stars with enhanced effects */}
            {[...Array(25)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                background: `hsl(${200 + Math.random() * 60}, 70%, 80%)`,
                borderRadius: '50%',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `enhancedTwinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: 0.7,
                boxShadow: `0 0 ${5 + Math.random() * 10}px currentColor`
              }}></div>
            ))}
          </div>

          {/* Enhanced animated light beams with movement */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 60%)',
            animation: 'enhancedLightBeams 10s ease-in-out infinite',
            pointerEvents: 'none',
            zIndex: 1
          }}></div>

          {/* New floating energy orbs */}
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: `${15 + Math.random() * 20}px`,
              height: `${15 + Math.random() * 20}px`,
              background: `radial-gradient(circle, rgba(${100 + Math.random() * 155}, ${150 + Math.random() * 105}, 255, 0.3) 0%, transparent 70%)`,
              borderRadius: '50%',
              top: `${10 + Math.random() * 80}%`,
              left: `${10 + Math.random() * 80}%`,
              animation: `floatingOrbs ${8 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
              pointerEvents: 'none',
              zIndex: 1
            }}></div>
          ))}

          {/* Animated border glow effect */}
          <div style={{
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            right: '-2px',
            bottom: '-2px',
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(168, 85, 247, 0.5), rgba(236, 72, 153, 0.5), rgba(59, 130, 246, 0.5))',
            borderRadius: '12px',
            animation: 'borderGlow 6s linear infinite',
            zIndex: -1,
            filter: 'blur(3px)'
          }}></div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{
              textAlign: 'center',
              color: 'white',
              marginBottom: '40px',
              fontSize: '2.2rem',
              fontWeight: '800',
              letterSpacing: '-0.5px',
              lineHeight: '1.2',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              Why Blood Donation Matters
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
              {/* Enhanced Card 1 - Saves Lives */}
              <div style={{
                textAlign: 'center',
                background: 'rgba(59, 130, 246, 0.1)',
                padding: '30px 20px',
                borderRadius: '15px',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                animation: 'cardMagicAppear 1.2s ease-out',
                animationDelay: '0.1s',
                animationFillMode: 'both'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.4)';
                e.currentTarget.style.border = '1px solid rgba(59, 130, 246, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.border = '1px solid rgba(59, 130, 246, 0.3)';
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '15px',
                  animation: 'iconGlow 2s ease-in-out infinite',
                  filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.8))'
                }}>❤️</div>
                <h3 style={{
                  color: 'white',
                  marginBottom: '10px',
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  animation: 'textMagicShimmer 3s ease-in-out infinite'
                }}>Saves Lives</h3>
                <p style={{
                  color: '#cbd5e1',
                  fontSize: '1rem',
                  animation: 'fadeInUp 1s ease-out 0.3s both'
                }}>One donation can save up to 3 lives</p>
              </div>

              {/* Enhanced Card 2 - Emergency Ready */}
              <div style={{
                textAlign: 'center',
                background: 'rgba(239, 68, 68, 0.1)',
                padding: '30px 20px',
                borderRadius: '15px',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                animation: 'cardMagicAppear 1.2s ease-out',
                animationDelay: '0.3s',
                animationFillMode: 'both'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(239, 68, 68, 0.4)';
                e.currentTarget.style.border = '1px solid rgba(239, 68, 68, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.border = '1px solid rgba(239, 68, 68, 0.3)';
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '15px',
                  animation: 'emergencyGlow 1.5s ease-in-out infinite',
                  filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.8))'
                }}>🏥</div>
                <h3 style={{
                  color: 'white',
                  marginBottom: '10px',
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  animation: 'emergencyTextFlash 2s ease-in-out infinite'
                }}>Emergency Ready</h3>
                <p style={{
                  color: '#fecaca',
                  fontSize: '1rem',
                  animation: 'fadeInUp 1s ease-out 0.5s both'
                }}>Critical for surgeries and emergencies</p>
              </div>

              {/* Enhanced Card 3 - Cannot Be Made */}
              <div style={{
                textAlign: 'center',
                background: 'rgba(168, 85, 247, 0.1)',
                padding: '30px 20px',
                borderRadius: '15px',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                animation: 'cardMagicAppear 1.2s ease-out',
                animationDelay: '0.5s',
                animationFillMode: 'both'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(168, 85, 247, 0.4)';
                e.currentTarget.style.border = '1px solid rgba(168, 85, 247, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.border = '1px solid rgba(168, 85, 247, 0.3)';
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '15px',
                  animation: 'treasureGlow 3s ease-in-out infinite',
                  filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.8))'
                }}>🩸</div>
                <h3 style={{
                  color: 'white',
                  marginBottom: '10px',
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  animation: 'treasureTextShimmer 4s ease-in-out infinite'
                }}>Cannot Be Made</h3>
                <p style={{
                  color: '#e9d5ff',
                  fontSize: '1rem',
                  animation: 'fadeInUp 1s ease-out 0.7s both'
                }}>Blood cannot be manufactured artificially</p>
              </div>

              {/* Enhanced Card 4 - Always Needed */}
              <div style={{
                textAlign: 'center',
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '30px 20px',
                borderRadius: '15px',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                animation: 'cardMagicAppear 1.2s ease-out',
                animationDelay: '0.7s',
                animationFillMode: 'both'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(16, 185, 129, 0.4)';
                e.currentTarget.style.border = '1px solid rgba(16, 185, 129, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.border = '1px solid rgba(16, 185, 129, 0.3)';
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '15px',
                  animation: 'guardianGlow 4s ease-in-out infinite',
                  filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.8))'
                }}>⏰</div>
                <h3 style={{
                  color: 'white',
                  marginBottom: '10px',
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  animation: 'guardianTextPulse 5s ease-in-out infinite'
                }}>Always Needed</h3>
                <p style={{
                  color: '#a7f3d0',
                  fontSize: '1rem',
                  animation: 'fadeInUp 1s ease-out 0.9s both'
                }}>Constant demand from hospitals</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#1d3557', color: 'white', padding: '50px', borderRadius: '10px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Join Our Mission</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', lineHeight: '1.6' }}>
            Ready to become a life-saver? Join thousands of donors who are making a difference every day.
          </p>
          <a href="/signup" style={{
            backgroundColor: '#e63946',
            color: 'white',
            padding: '15px 30px',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            display: 'inline-block'
          }}>
            Become a Donor Today
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Donation Form Component - Wonderful Design
const DonationForm = () => (
  <div style={{ fontFamily: 'Arial, sans-serif' }}>
    <Navigation />

    {/* Hero Section - Simple & Attractive */}
    <div style={{
      background: 'linear-gradient(135deg, #d1495b 0%, #c53030 100%)',
      color: 'white',
      padding: '50px 20px',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>


        {/* Main Heading */}
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '700',
          marginBottom: '15px',
          textShadow: '0 2px 4px rgba(0,0,0,0.2)',
          letterSpacing: '-0.5px'
        }}>
          Be Someone's Hero Today
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '40px',
          opacity: 0.95,
          fontWeight: '300',
          maxWidth: '600px',
          margin: '0 auto 40px auto'
        }}>
          Your single donation can save up to <span style={{fontWeight: 'bold', color: '#fff3cd'}}>3 lives</span>.
          Join thousands of heroes who make a difference every day.
        </p>

        {/* Simple Stats Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          flexWrap: 'wrap',
          marginBottom: '30px'
        }}>
          <div className="donation-stats-card" style={{
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '2.2rem',
              fontWeight: 'bold',
              marginBottom: '5px',
              color: '#fff3cd'
            }}>50,247</div>
            <div style={{
              fontSize: '0.9rem',
              opacity: 0.9,
              fontWeight: '300'
            }}>Lives Saved This Year</div>
          </div>

          <div className="donation-stats-card" style={{
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '2.2rem',
              fontWeight: 'bold',
              marginBottom: '5px',
              color: '#fff3cd'
            }}>1,247</div>
            <div style={{
              fontSize: '0.9rem',
              opacity: 0.9,
              fontWeight: '300'
            }}>Donations This Month</div>
          </div>

          <div className="donation-stats-card" style={{
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '2.2rem',
              fontWeight: 'bold',
              marginBottom: '5px',
              color: '#fff3cd'
            }}>24/7</div>
            <div style={{
              fontSize: '0.9rem',
              opacity: 0.9,
              fontWeight: '300'
            }}>Emergency Ready</div>
          </div>
        </div>
      </div>
    </div>

    <div style={{ padding: '60px 20px', backgroundColor: '#f8fafc', minHeight: '80vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Quick Eligibility Check */}
        <div style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          padding: '40px',
          borderRadius: '20px',
          marginBottom: '50px',
          border: '2px solid #bae6fd',
          boxShadow: '0 8px 25px rgba(59, 130, 246, 0.1)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🏥</div>
            <h2 style={{
              color: '#0c4a6e',
              fontSize: '2.2rem',
              fontWeight: '700',
              marginBottom: '10px'
            }}>
              Quick Eligibility Check
            </h2>
            <p style={{ color: '#075985', fontSize: '1.1rem' }}>
              Make sure you're ready to donate - it only takes 30 seconds!
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px'
          }}>
            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '15px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              border: '1px solid #e0f2fe'
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '15px' }}>📅</div>
              <h3 style={{ color: '#0c4a6e', marginBottom: '10px', fontSize: '1.2rem' }}>Age Requirement</h3>
              <p style={{ color: '#075985', margin: 0, fontSize: '0.95rem' }}>
                Must be between <strong>18-65 years old</strong>
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '15px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              border: '1px solid #e0f2fe'
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '15px' }}>⚖️</div>
              <h3 style={{ color: '#0c4a6e', marginBottom: '10px', fontSize: '1.2rem' }}>Weight Requirement</h3>
              <p style={{ color: '#075985', margin: 0, fontSize: '0.95rem' }}>
                Minimum weight of <strong>50kg (110 lbs)</strong>
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '15px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              border: '1px solid #e0f2fe'
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '15px' }}>💪</div>
              <h3 style={{ color: '#0c4a6e', marginBottom: '10px', fontSize: '1.2rem' }}>Health Status</h3>
              <p style={{ color: '#075985', margin: 0, fontSize: '0.95rem' }}>
                In <strong>good general health</strong> and feeling well
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '15px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              border: '1px solid #e0f2fe'
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '15px' }}>🕐</div>
              <h3 style={{ color: '#0c4a6e', marginBottom: '10px', fontSize: '1.2rem' }}>Last Donation</h3>
              <p style={{ color: '#075985', margin: 0, fontSize: '0.95rem' }}>
                At least <strong>56 days</strong> since last donation
              </p>
            </div>
          </div>
        </div>

        {/* Main Donation Form */}
        <div style={{
          background: 'white',
          padding: '50px',
          borderRadius: '20px',
          boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
          border: '1px solid #e5e7eb',
          marginBottom: '50px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎯</div>
            <h2 style={{
              color: '#1f2937',
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '15px'
            }}>
              Schedule Your Life-Saving Donation
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1.2rem', lineHeight: '1.6' }}>
              Fill out the form below and we'll contact you within 24 hours to confirm your appointment
            </p>
          </div>

          <form style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>

            {/* Personal Information */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#1f2937',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}>
                Full Name *
              </label>
              <input
                type="text"
                required
                style={{
                  width: '100%',
                  padding: '14px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fafafa'
                }}
                placeholder="Enter your full name"
                onFocus={(e) => {
                  e.target.style.borderColor = '#dc2626';
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.backgroundColor = '#fafafa';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#1f2937',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}>
                Phone Number *
              </label>
              <input
                type="tel"
                required
                style={{
                  width: '100%',
                  padding: '14px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fafafa'
                }}
                placeholder="Enter your phone number"
                onFocus={(e) => {
                  e.target.style.borderColor = '#dc2626';
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.backgroundColor = '#fafafa';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#1f2937',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}>
                Email Address *
              </label>
              <input
                type="email"
                required
                style={{
                  width: '100%',
                  padding: '14px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fafafa'
                }}
                placeholder="Enter your email address"
                onFocus={(e) => {
                  e.target.style.borderColor = '#dc2626';
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.backgroundColor = '#fafafa';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#1f2937',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}>
                Blood Type *
              </label>
              <select
                required
                style={{
                  width: '100%',
                  padding: '14px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fafafa'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#dc2626';
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.backgroundColor = '#fafafa';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <option value="">Select Your Blood Type</option>
                <option value="A+">A+ (Can help A+, AB+)</option>
                <option value="A-">A- (Can help A+, A-, AB+, AB-)</option>
                <option value="B+">B+ (Can help B+, AB+)</option>
                <option value="B-">B- (Can help B+, B-, AB+, AB-)</option>
                <option value="AB+">AB+ (Universal Plasma Donor)</option>
                <option value="AB-">AB- (Can help AB+, AB-)</option>
                <option value="O+">O+ (Can help A+, B+, AB+, O+)</option>
                <option value="O-">O- (Universal Blood Donor)</option>
              </select>
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#1f2937',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}>
                Age *
              </label>
              <input
                type="number"
                required
                min="18"
                max="65"
                style={{
                  width: '100%',
                  padding: '14px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fafafa'
                }}
                placeholder="Enter your age"
                onFocus={(e) => {
                  e.target.style.borderColor = '#dc2626';
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.backgroundColor = '#fafafa';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#1f2937',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}>
                Weight (kg) *
              </label>
              <input
                type="number"
                required
                min="50"
                style={{
                  width: '100%',
                  padding: '14px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fafafa'
                }}
                placeholder="Minimum 50kg required"
                onFocus={(e) => {
                  e.target.style.borderColor = '#dc2626';
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.backgroundColor = '#fafafa';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#1f2937',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}>
                Preferred Date *
              </label>
              <input
                type="date"
                required
                style={{
                  width: '100%',
                  padding: '14px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fafafa'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#dc2626';
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.backgroundColor = '#fafafa';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#1f2937',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}>
                Preferred Time *
              </label>
              <select
                required
                style={{
                  width: '100%',
                  padding: '14px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fafafa'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#dc2626';
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.backgroundColor = '#fafafa';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <option value="">Select Your Preferred Time</option>
                <option value="9:00-10:00">9:00 AM - 10:00 AM</option>
                <option value="10:00-11:00">10:00 AM - 11:00 AM</option>
                <option value="11:00-12:00">11:00 AM - 12:00 PM</option>
                <option value="14:00-15:00">2:00 PM - 3:00 PM</option>
                <option value="15:00-16:00">3:00 PM - 4:00 PM</option>
                <option value="16:00-17:00">4:00 PM - 5:00 PM</option>
              </select>
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#1f2937',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}>
                Complete Address *
              </label>
              <textarea
                required
                style={{
                  width: '100%',
                  padding: '14px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  minHeight: '100px',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fafafa',
                  resize: 'vertical'
                }}
                placeholder="Enter your complete address including city and postal code"
                onFocus={(e) => {
                  e.target.style.borderColor = '#dc2626';
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.backgroundColor = '#fafafa';
                  e.target.style.boxShadow = 'none';
                }}
              ></textarea>
            </div>

            {/* Health Confirmation */}
            <div style={{
              gridColumn: '1 / -1',
              background: 'linear-gradient(135deg, #fef2f2 0%, #fef7f7 100%)',
              padding: '25px',
              borderRadius: '15px',
              border: '2px solid #fecaca',
              marginTop: '20px'
            }}>
              <h4 style={{
                color: '#dc2626',
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>🏥</span> Health Confirmation
              </h4>

              <label style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px',
                color: '#7f1d1d',
                fontSize: '1rem',
                lineHeight: '1.6',
                cursor: 'pointer'
              }}>
                <input
                  type="checkbox"
                  required
                  style={{
                    marginTop: '4px',
                    transform: 'scale(1.2)',
                    accentColor: '#dc2626'
                  }}
                />
                <span>
                  I confirm that I am in good health, meet all donation requirements, and understand that
                  my information will be verified during the screening process. I agree to the donation terms and conditions.
                </span>
              </label>
            </div>

            <a
              href="/thank-you"
              style={{
                gridColumn: '1 / -1',
                background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                color: 'white',
                padding: '20px',
                border: 'none',
                borderRadius: '15px',
                fontSize: '1.3rem',
                fontWeight: '700',
                cursor: 'pointer',
                marginTop: '30px',
                boxShadow: '0 8px 25px rgba(220, 38, 38, 0.3)',
                transition: 'all 0.3s ease',
                letterSpacing: '0.5px',
                textDecoration: 'none',
                display: 'block',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 12px 35px rgba(220, 38, 38, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 25px rgba(220, 38, 38, 0.3)';
              }}
            >
              SCHEDULE MY LIFE-SAVING DONATION
            </a>
          </form>
        </div>

        {/* What Happens Next Section */}
        <div style={{
          background: 'linear-gradient(135deg, #f0fdf4 0%, #f7fee7 100%)',
          padding: '40px',
          borderRadius: '20px',
          border: '2px solid #bbf7d0',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>✨</div>
          <h3 style={{
            color: '#15803d',
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '20px'
          }}>
            What Happens Next?
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginTop: '30px'
          }}>
            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '15px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '15px' }}>📞</div>
              <h4 style={{ color: '#15803d', marginBottom: '10px' }}>Confirmation Call</h4>
              <p style={{ color: '#166534', margin: 0, fontSize: '0.95rem' }}>
                We'll call you within 24 hours to confirm your appointment and answer any questions
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '15px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '15px' }}>🏥</div>
              <h4 style={{ color: '#15803d', marginBottom: '10px' }}>Health Screening</h4>
              <p style={{ color: '#166534', margin: 0, fontSize: '0.95rem' }}>
                Quick health check and questionnaire at our donation center (15 minutes)
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '15px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '15px' }}>❤️</div>
              <h4 style={{ color: '#15803d', marginBottom: '10px' }}>Save Lives</h4>
              <p style={{ color: '#166534', margin: 0, fontSize: '0.95rem' }}>
                Donation process takes 45 minutes, then enjoy refreshments and track your impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
// Admin Login Component
const AdminLogin = () => (
  <div style={{ fontFamily: 'Arial, sans-serif' }}>
    <Navigation />
    <div style={{ padding: '80px 20px', backgroundColor: '#f8f9fa', minHeight: '80vh' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ textAlign: 'center', color: '#1d3557', marginBottom: '30px', fontSize: '2rem' }}>
            🏥 Admin Login
          </h2>
          <div style={{ backgroundColor: '#fff3cd', padding: '15px', borderRadius: '6px', marginBottom: '25px', border: '1px solid #ffeaa7' }}>
            <p style={{ color: '#856404', margin: 0, fontSize: '0.9rem' }}>
              ⚠️ Authorized personnel only. This area is restricted to VitalDrop administrators.
            </p>
          </div>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#1d3557', fontWeight: 'bold' }}>Admin Email</label>
              <input type="email" style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '6px', fontSize: '1rem' }} placeholder="Enter admin email" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#1d3557', fontWeight: 'bold' }}>Admin Password</label>
              <input type="password" style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '6px', fontSize: '1rem' }} placeholder="Enter admin password" />
            </div>
            <a href="/admin-dashboard" style={{
              backgroundColor: '#457b9d',
              color: 'white',
              padding: '15px',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '10px',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'block'
            }}>
              Access Dashboard
            </a>
          </form>
        </div>
      </div>
    </div>
  </div>
);



// Thank You Page Component - Completely New Happy Design
const ThankYouPage = () => (
  <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', background: '#fafafa' }}>
    <Navigation showContact={true} />

    {/* Professional Blue Hero Section - Exact Match */}
    <div style={{
      background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)',
      color: 'white',
      padding: '60px 20px',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {/* Green Checkmark Circle */}
        <div style={{
          width: '80px',
          height: '80px',
          background: '#10b981',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 30px',
          fontSize: '2.5rem',
          color: 'white'
        }}>✓</div>

        {/* Main Heading */}
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '600',
          marginBottom: '20px',
          color: 'white'
        }}>
          Thank You for Your Contribution
        </h1>

        {/* Description */}
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '40px',
          opacity: 0.9,
          lineHeight: '1.6'
        }}>
          Your generous blood donation commitment will help save up to{' '}
          <span style={{
            color: '#fbbf24',
            fontWeight: '600'
          }}>three precious lives</span>.
          You are making a meaningful difference in your community.
        </p>

        {/* Stats Cards */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.15)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            minWidth: '100px'
          }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#fbbf24',
              marginBottom: '5px'
            }}>3</div>
            <div style={{
              fontSize: '0.9rem',
              opacity: 0.8
            }}>Lives Saved</div>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.15)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            minWidth: '100px'
          }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#fbbf24',
              marginBottom: '5px'
            }}>24hrs</div>
            <div style={{
              fontSize: '0.9rem',
              opacity: 0.8
            }}>Contact Time</div>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.15)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            minWidth: '100px'
          }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#fbbf24',
              marginBottom: '5px'
            }}>45min</div>
            <div style={{
              fontSize: '0.9rem',
              opacity: 0.8
            }}>Process Time</div>
          </div>
        </div>
      </div>
    </div>

    {/* Your Journey Section - Fun & Engaging */}
    <div style={{
      padding: '70px 20px',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚀</div>
          <h2 style={{
            fontSize: '2.8rem',
            fontWeight: '800',
            color: '#0c4a6e',
            marginBottom: '15px'
          }}>
            Your Hero Journey Starts Now!
          </h2>
          <p style={{
            fontSize: '1.3rem',
            color: '#0369a1',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Here's what happens next on your amazing life-saving adventure
          </p>
        </div>

        {/* Fun Timeline Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px'
        }}>
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '25px',
            boxShadow: '0 15px 35px rgba(59, 130, 246, 0.15)',
            textAlign: 'center',
            border: '3px solid #dbeafe',
            transform: 'translateY(0)',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{
              width: '90px',
              height: '90px',
              background: 'linear-gradient(135deg, #3b82f6, #1e40af)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 25px',
              fontSize: '2.5rem',
              boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)'
            }}>📞</div>
            <h3 style={{
              color: '#1e40af',
              marginBottom: '15px',
              fontSize: '1.4rem',
              fontWeight: '700'
            }}>
              Step 1: We'll Call You!
            </h3>
            <p style={{
              color: '#475569',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              Our friendly team will call you within 24 hours to confirm your appointment
              and answer any questions. We'll make sure you're 100% ready!
            </p>
          </div>

          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '25px',
            boxShadow: '0 15px 35px rgba(245, 158, 11, 0.15)',
            textAlign: 'center',
            border: '3px solid #fef3c7',
            transform: 'translateY(0)',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{
              width: '90px',
              height: '90px',
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 25px',
              fontSize: '2.5rem',
              boxShadow: '0 8px 20px rgba(245, 158, 11, 0.3)'
            }}>🏥</div>
            <h3 style={{
              color: '#d97706',
              marginBottom: '15px',
              fontSize: '1.4rem',
              fontWeight: '700'
            }}>
              Step 2: Quick Health Check
            </h3>
            <p style={{
              color: '#475569',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              Just 15 minutes for a simple health screening at our comfortable center.
              Our medical team will ensure you're feeling great!
            </p>
          </div>

          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '25px',
            boxShadow: '0 15px 35px rgba(239, 68, 68, 0.15)',
            textAlign: 'center',
            border: '3px solid #fecaca',
            transform: 'translateY(0)',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{
              width: '90px',
              height: '90px',
              background: 'linear-gradient(135deg, #ef4444, #dc2626)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 25px',
              fontSize: '2.5rem',
              boxShadow: '0 8px 20px rgba(239, 68, 68, 0.3)'
            }}>🦸‍♂️</div>
            <h3 style={{
              color: '#dc2626',
              marginBottom: '15px',
              fontSize: '1.4rem',
              fontWeight: '700'
            }}>
              Step 3: Become a Hero!
            </h3>
            <p style={{
              color: '#475569',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              The donation takes just 8-10 minutes. Relax, enjoy snacks, and celebrate
              knowing you've just saved lives!
            </p>
          </div>
        </div>

        {/* Compact Professional Excellence Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          padding: '40px 30px',
          borderRadius: '20px',
          textAlign: 'center',
          marginTop: '80px',
          border: '2px solid rgba(148, 163, 184, 0.2)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)',
          position: 'relative',
          overflow: 'hidden',
          maxWidth: '600px',
          margin: '80px auto 0'
        }}>
          {/* Animated Background Effects */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 70%)
            `,
            animation: 'backgroundPulse 4s ease-in-out infinite'
          }}></div>

          {/* Floating Particles Effect */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '15%',
            width: '3px',
            height: '3px',
            background: 'rgba(59, 130, 246, 0.6)',
            borderRadius: '50%',
            animation: 'professionalFloat 6s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '30%',
            right: '20%',
            width: '4px',
            height: '4px',
            background: 'rgba(16, 185, 129, 0.5)',
            borderRadius: '50%',
            animation: 'professionalFloat 8s ease-in-out infinite 2s'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '25%',
            left: '25%',
            width: '2px',
            height: '2px',
            background: 'rgba(168, 85, 247, 0.7)',
            borderRadius: '50%',
            animation: 'professionalFloat 7s ease-in-out infinite 1s'
          }}></div>

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '500px', margin: '0 auto' }}>


            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              textShadow: '0 0 20px rgba(248, 250, 252, 0.5)'
            }}>
              Share Your Impact
            </h3>

            <p style={{
              fontSize: '1rem',
              color: '#cbd5e1',
              marginBottom: '30px',
              lineHeight: '1.6',
              fontWeight: '400',
              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}>
              Join our community of life-savers and inspire others to make a difference.
            </p>

            {/* Compact Action Buttons */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '30px'
            }}>
              <button style={{
                background: 'linear-gradient(135deg, #1da1f2 0%, #0ea5e9 100%)',
                color: 'white',
                border: '2px solid rgba(29, 161, 242, 0.3)',
                padding: '12px 20px',
                borderRadius: '12px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: `
                  0 0 15px rgba(29, 161, 242, 0.4),
                  0 6px 20px rgba(29, 161, 242, 0.25),
                  inset 0 1px 0 rgba(255,255,255,0.2)
                `,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px) scale(1.02)';
                e.target.style.boxShadow = `
                  0 0 25px rgba(29, 161, 242, 0.6),
                  0 10px 30px rgba(29, 161, 242, 0.4),
                  inset 0 1px 0 rgba(255,255,255,0.3)
                `;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = `
                  0 0 15px rgba(29, 161, 242, 0.4),
                  0 6px 20px rgba(29, 161, 242, 0.25),
                  inset 0 1px 0 rgba(255,255,255,0.2)
                `;
              }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Twitter
              </button>

              <button style={{
                background: 'linear-gradient(135deg, #4267b2 0%, #5b7bd5 100%)',
                color: 'white',
                border: '2px solid rgba(66, 103, 178, 0.3)',
                padding: '12px 20px',
                borderRadius: '12px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: `
                  0 0 15px rgba(66, 103, 178, 0.4),
                  0 6px 20px rgba(66, 103, 178, 0.25),
                  inset 0 1px 0 rgba(255,255,255,0.2)
                `,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px) scale(1.02)';
                e.target.style.boxShadow = `
                  0 0 25px rgba(66, 103, 178, 0.6),
                  0 10px 30px rgba(66, 103, 178, 0.4),
                  inset 0 1px 0 rgba(255,255,255,0.3)
                `;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = `
                  0 0 15px rgba(66, 103, 178, 0.4),
                  0 6px 20px rgba(66, 103, 178, 0.25),
                  inset 0 1px 0 rgba(255,255,255,0.2)
                `;
              }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
            </div>

            {/* Compact Quote Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              padding: '20px',
              borderRadius: '15px',
              marginBottom: '25px',
              boxShadow: `
                0 0 20px rgba(59, 130, 246, 0.2),
                0 10px 25px rgba(0,0,0,0.15),
                inset 0 1px 0 rgba(255,255,255,0.1),
                inset 0 -1px 0 rgba(0,0,0,0.1)
              `,
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Subtle glow effect */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(16, 185, 129, 0.05))',
                borderRadius: '15px'
              }}></div>

              <p style={{
                fontSize: '0.95rem',
                color: '#e2e8f0',
                margin: 0,
                fontStyle: 'italic',
                lineHeight: '1.5',
                position: 'relative',
                zIndex: 1,
                textShadow: '0 1px 2px rgba(0,0,0,0.1)'
              }}>
                "Thank you for being the catalyst for positive change."
              </p>
            </div>

            {/* Compact Home Button */}
            <a href="/" style={{
              background: 'linear-gradient(135deg, #1e40af 0%, #3730a3 50%, #1e3a8a 100%)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              boxShadow: `
                0 0 20px rgba(30, 64, 175, 0.5),
                0 8px 25px rgba(30, 64, 175, 0.3),
                inset 0 1px 0 rgba(255,255,255,0.2)
              `,
              border: '2px solid rgba(30, 64, 175, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.03)';
              e.target.style.boxShadow = `
                0 0 30px rgba(30, 64, 175, 0.7),
                0 15px 35px rgba(30, 64, 175, 0.4),
                inset 0 1px 0 rgba(255,255,255,0.3)
              `;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = `
                0 0 20px rgba(30, 64, 175, 0.5),
                0 8px 25px rgba(30, 64, 175, 0.3),
                inset 0 1px 0 rgba(255,255,255,0.2)
              `;
            }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              Return to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/donate" element={<DonationScheduler />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/donor-dashboard" element={<DonorDashboard />} />
        <Route path="/notifications" element={<DonorNotifications />} />
        <Route path="/blood-banks" element={<BloodBankLocator />} />
        <Route path="/schedule" element={<DonationScheduler />} />
        <Route path="/emergency" element={<QuickEmergencyRequest />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;

