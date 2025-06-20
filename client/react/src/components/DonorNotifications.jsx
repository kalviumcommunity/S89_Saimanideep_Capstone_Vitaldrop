import React, { useState, useEffect } from 'react';
import './DonorNotifications.css';
import NavBar from './NavBar';

const DonorNotifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'emergency',
      title: 'URGENT: Blood Needed',
      message: 'Emergency request for O+ blood at City Hospital. Patient in critical condition.',
      bloodType: 'O+',
      location: 'City Hospital, Downtown',
      urgency: 'critical',
      timeAgo: '2 minutes ago',
      unitsNeeded: 3,
      isRead: false,
      requestId: 'ER001'
    },
    {
      id: 2,
      type: 'reminder',
      title: 'Donation Reminder',
      message: 'You are eligible to donate blood again. Your last donation was 3 months ago.',
      timeAgo: '1 hour ago',
      isRead: false
    },
    {
      id: 3,
      type: 'match',
      title: 'You\'re a Match!',
      message: 'Your blood type A+ is needed at Regional Medical Center.',
      bloodType: 'A+',
      location: 'Regional Medical Center',
      urgency: 'high',
      timeAgo: '3 hours ago',
      unitsNeeded: 2,
      isRead: true,
      requestId: 'ER002'
    },
    {
      id: 4,
      type: 'reward',
      title: 'Reward Earned!',
      message: 'You earned 50 points for your recent donation. Thank you for saving lives!',
      timeAgo: '1 day ago',
      points: 50,
      isRead: true
    }
  ]);

  const [filter, setFilter] = useState('all');

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'emergency': return '🚨';
      case 'reminder': return '⏰';
      case 'match': return '🎯';
      case 'reward': return '🏆';
      default: return '📢';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'critical': return '#ef4444';
      case 'high': return '#f59e0b';
      case 'medium': return '#3b82f6';
      default: return '#64748b';
    }
  };

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, isRead: true }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const respondToEmergency = (requestId, response) => {
    alert(`Response "${response}" sent for emergency request ${requestId}`);
    // Here you would typically send the response to the backend
  };

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notif.isRead;
    return notif.type === filter;
  });

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <>
      <NavBar showContact={true} />
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        padding: '40px 20px'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {/* Simple Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <h1 style={{
              fontSize: '2.5rem',
              color: '#1f2937',
              marginBottom: '10px',
              fontWeight: '700'
            }}>
              🔔 Your Notifications
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: '#6b7280',
              marginBottom: '20px'
            }}>
              Stay updated with blood donation opportunities and reminders
            </p>
            {unreadCount > 0 && (
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#dc3545',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                <span>{unreadCount} new notification{unreadCount > 1 ? 's' : ''}</span>
                <button
                  onClick={markAllAsRead}
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    border: 'none',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '10px',
                    fontSize: '0.8rem',
                    cursor: 'pointer'
                  }}
                >
                  Mark all read
                </button>
              </div>
            )}
          </div>

          {/* Simple Filter Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '30px',
            flexWrap: 'wrap'
          }}>
            {[
              { key: 'all', label: 'All', icon: '📋' },
              { key: 'emergency', label: 'Urgent', icon: '🚨' },
              { key: 'reminder', label: 'Reminders', icon: '⏰' }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                style={{
                  background: filter === tab.key
                    ? 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)'
                    : 'white',
                  color: filter === tab.key ? 'white' : '#374151',
                  border: filter === tab.key ? 'none' : '2px solid #e5e7eb',
                  padding: '12px 20px',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: filter === tab.key
                    ? '0 4px 15px rgba(220, 53, 69, 0.3)'
                    : '0 2px 8px rgba(0,0,0,0.05)'
                }}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Simple Notification Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {filteredNotifications.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '60px 20px',
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📭</div>
                <h3 style={{ color: '#374151', marginBottom: '10px' }}>No notifications found</h3>
                <p style={{ color: '#6b7280' }}>You're all caught up!</p>
              </div>
            ) : (
              filteredNotifications.map(notification => (
                <div
                  key={notification.id}
                  onClick={() => markAsRead(notification.id)}
                  style={{
                    background: 'white',
                    borderRadius: '15px',
                    padding: '25px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                    border: !notification.isRead ? '2px solid #dc3545' : '2px solid #e5e7eb',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
                  }}
                >
                  {/* Unread indicator */}
                  {!notification.isRead && (
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      width: '12px',
                      height: '12px',
                      background: '#dc3545',
                      borderRadius: '50%'
                    }}></div>
                  )}

                  {/* Simple notification content */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <div style={{
                      fontSize: '2rem',
                      minWidth: '50px',
                      textAlign: 'center'
                    }}>
                      {getNotificationIcon(notification.type)}
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '10px'
                      }}>
                        <h3 style={{
                          fontSize: '1.3rem',
                          color: '#1f2937',
                          margin: 0,
                          fontWeight: '700'
                        }}>
                          {notification.title}
                        </h3>
                        <span style={{
                          fontSize: '0.9rem',
                          color: '#6b7280',
                          whiteSpace: 'nowrap',
                          marginLeft: '15px'
                        }}>
                          {notification.timeAgo}
                        </span>
                      </div>

                      <p style={{
                        fontSize: '1rem',
                        color: '#374151',
                        lineHeight: '1.5',
                        margin: '0 0 15px 0'
                      }}>
                        {notification.message}
                      </p>

                      {/* Blood type and location info */}
                      {notification.bloodType && (
                        <div style={{
                          display: 'flex',
                          gap: '10px',
                          flexWrap: 'wrap',
                          marginBottom: '15px'
                        }}>
                          <span style={{
                            background: '#dc3545',
                            color: 'white',
                            padding: '4px 12px',
                            borderRadius: '15px',
                            fontSize: '0.9rem',
                            fontWeight: '600'
                          }}>
                            🩸 {notification.bloodType}
                          </span>
                          {notification.location && (
                            <span style={{
                              background: '#f3f4f6',
                              color: '#374151',
                              padding: '4px 12px',
                              borderRadius: '15px',
                              fontSize: '0.9rem'
                            }}>
                              📍 {notification.location}
                            </span>
                          )}
                          {notification.unitsNeeded && (
                            <span style={{
                              background: '#fef3c7',
                              color: '#92400e',
                              padding: '4px 12px',
                              borderRadius: '15px',
                              fontSize: '0.9rem',
                              fontWeight: '600'
                            }}>
                              {notification.unitsNeeded} units needed
                            </span>
                          )}
                        </div>
                      )}

                      {/* Points earned */}
                      {notification.points && (
                        <div style={{
                          background: '#d1fae5',
                          color: '#065f46',
                          padding: '8px 15px',
                          borderRadius: '10px',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          marginBottom: '15px',
                          display: 'inline-block'
                        }}>
                          🏆 +{notification.points} points earned
                        </div>
                      )}

                      {/* Emergency action buttons */}
                      {notification.type === 'emergency' && notification.requestId && (
                        <div style={{
                          display: 'flex',
                          gap: '10px',
                          marginTop: '15px'
                        }}>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              respondToEmergency(notification.requestId, 'accept');
                            }}
                            style={{
                              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                              color: 'white',
                              border: 'none',
                              padding: '10px 20px',
                              borderRadius: '10px',
                              fontSize: '0.9rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease'
                            }}
                          >
                            ✓ I Can Help
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              respondToEmergency(notification.requestId, 'decline');
                            }}
                            style={{
                              background: 'transparent',
                              color: '#6b7280',
                              border: '2px solid #e5e7eb',
                              padding: '10px 20px',
                              borderRadius: '10px',
                              fontSize: '0.9rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease'
                            }}
                          >
                            ✗ Not Available
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DonorNotifications;
