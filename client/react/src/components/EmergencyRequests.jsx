import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmergencyRequests.css';

const EmergencyRequests = () => {
  const [emergencyRequests, setEmergencyRequests] = useState([
    {
      id: 1,
      patientName: 'Sarah Johnson',
      bloodType: 'O-',
      unitsNeeded: 4,
      urgency: 'critical',
      hospital: 'City General Hospital',
      contactPerson: 'Dr. Smith',
      contactPhone: '+1 (555) 123-4567',
      timeRequested: '2024-02-15 15:30',
      estimatedTime: '2 hours',
      status: 'active',
      location: 'Emergency Room 3',
      medicalCondition: 'Severe trauma from car accident',
      donorsFound: 2,
      donorsNeeded: 4
    },
    {
      id: 2,
      patientName: 'Michael Chen',
      bloodType: 'A+',
      unitsNeeded: 2,
      urgency: 'high',
      hospital: 'St. Mary\'s Medical Center',
      contactPerson: 'Dr. Williams',
      contactPhone: '+1 (555) 987-6543',
      timeRequested: '2024-02-15 14:45',
      estimatedTime: '4 hours',
      status: 'active',
      location: 'Surgery Unit 2',
      medicalCondition: 'Scheduled surgery complications',
      donorsFound: 1,
      donorsNeeded: 2
    },
    {
      id: 3,
      patientName: 'Emma Davis',
      bloodType: 'B-',
      unitsNeeded: 3,
      urgency: 'medium',
      hospital: 'Regional Medical Center',
      contactPerson: 'Dr. Brown',
      contactPhone: '+1 (555) 456-7890',
      timeRequested: '2024-02-15 13:20',
      estimatedTime: '6 hours',
      status: 'pending',
      location: 'ICU Ward 1',
      medicalCondition: 'Post-operative bleeding',
      donorsFound: 0,
      donorsNeeded: 3
    }
  ]);

  const [activeFilter, setActiveFilter] = useState('all');
  const [showNewRequestForm, setShowNewRequestForm] = useState(false);
  const [newRequest, setNewRequest] = useState({
    patientName: '',
    bloodType: '',
    unitsNeeded: '',
    urgency: 'medium',
    hospital: '',
    contactPerson: '',
    contactPhone: '',
    location: '',
    medicalCondition: ''
  });

  const navigate = useNavigate();

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'critical': return '#ef4444';
      case 'high': return '#f59e0b';
      case 'medium': return '#3b82f6';
      default: return '#64748b';
    }
  };

  const getUrgencyIcon = (urgency) => {
    switch (urgency) {
      case 'critical': return '🚨';
      case 'high': return '⚠️';
      case 'medium': return '📋';
      default: return '📄';
    }
  };

  const filteredRequests = emergencyRequests.filter(request => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'active') return request.status === 'active';
    if (activeFilter === 'pending') return request.status === 'pending';
    return request.urgency === activeFilter;
  });

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    const request = {
      ...newRequest,
      id: Date.now(),
      timeRequested: new Date().toISOString().slice(0, 16).replace('T', ' '),
      status: 'active',
      donorsFound: 0,
      donorsNeeded: parseInt(newRequest.unitsNeeded),
      estimatedTime: newRequest.urgency === 'critical' ? '1 hour' : 
                    newRequest.urgency === 'high' ? '3 hours' : '6 hours'
    };
    
    setEmergencyRequests([request, ...emergencyRequests]);
    setNewRequest({
      patientName: '',
      bloodType: '',
      unitsNeeded: '',
      urgency: 'medium',
      hospital: '',
      contactPerson: '',
      contactPhone: '',
      location: '',
      medicalCondition: ''
    });
    setShowNewRequestForm(false);
  };

  const handleFindDonors = (requestId) => {
    // Simulate finding donors
    setEmergencyRequests(prev => 
      prev.map(req => 
        req.id === requestId 
          ? { ...req, donorsFound: Math.min(req.donorsFound + 1, req.donorsNeeded) }
          : req
      )
    );
  };

  const criticalCount = emergencyRequests.filter(r => r.urgency === 'critical').length;
  const activeCount = emergencyRequests.filter(r => r.status === 'active').length;

  return (
    <div className="emergency-requests">
      {/* Header */}
      <div className="emergency-header">
        <div className="header-left">
          <button className="back-btn" onClick={() => navigate('/admin-dashboard')}>
            ← Back to Dashboard
          </button>
          <div className="header-title">
            <h1>Emergency Blood Requests</h1>
            <p>Urgent blood donation requests requiring immediate attention</p>
          </div>
        </div>
        <div className="header-actions">
          <button 
            className="new-request-btn"
            onClick={() => setShowNewRequestForm(true)}
          >
            <span className="plus-icon">+</span>
            New Emergency Request
          </button>
        </div>
      </div>

      {/* Alert Banner */}
      {criticalCount > 0 && (
        <div className="alert-banner critical">
          <div className="alert-icon">🚨</div>
          <div className="alert-content">
            <h3>Critical Emergency Alert</h3>
            <p>{criticalCount} critical blood request{criticalCount > 1 ? 's' : ''} requiring immediate attention!</p>
          </div>
          <button className="alert-action-btn">Send Mass Alert</button>
        </div>
      )}

      {/* Quick Stats */}
      <div className="emergency-stats">
        <div className="stat-card total">
          <div className="stat-icon">📋</div>
          <div className="stat-content">
            <div className="stat-number">{emergencyRequests.length}</div>
            <div className="stat-label">Total Requests</div>
          </div>
        </div>
        <div className="stat-card active">
          <div className="stat-icon">⚡</div>
          <div className="stat-content">
            <div className="stat-number">{activeCount}</div>
            <div className="stat-label">Active Requests</div>
          </div>
        </div>
        <div className="stat-card critical">
          <div className="stat-icon">🚨</div>
          <div className="stat-content">
            <div className="stat-number">{criticalCount}</div>
            <div className="stat-label">Critical Cases</div>
          </div>
        </div>
        <div className="stat-card donors">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <div className="stat-number">
              {emergencyRequests.reduce((sum, req) => sum + req.donorsFound, 0)}
            </div>
            <div className="stat-label">Donors Found</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="request-filters">
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Requests
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'critical' ? 'active' : ''}`}
            onClick={() => setActiveFilter('critical')}
          >
            Critical
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'high' ? 'active' : ''}`}
            onClick={() => setActiveFilter('high')}
          >
            High Priority
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'active' ? 'active' : ''}`}
            onClick={() => setActiveFilter('active')}
          >
            Active
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'pending' ? 'active' : ''}`}
            onClick={() => setActiveFilter('pending')}
          >
            Pending
          </button>
        </div>
      </div>

      {/* Requests List */}
      <div className="requests-list">
        {filteredRequests.map((request) => (
          <div key={request.id} className={`request-card ${request.urgency} ${request.status}`}>
            <div className="request-header">
              <div className="request-urgency">
                <span className="urgency-icon">{getUrgencyIcon(request.urgency)}</span>
                <span 
                  className="urgency-badge"
                  style={{ backgroundColor: getUrgencyColor(request.urgency) }}
                >
                  {request.urgency.toUpperCase()}
                </span>
              </div>
              <div className="request-time">
                <span className="time-label">Requested:</span>
                <span className="time-value">{request.timeRequested}</span>
              </div>
            </div>

            <div className="request-body">
              <div className="patient-info">
                <h3 className="patient-name">{request.patientName}</h3>
                <div className="blood-requirement">
                  <span className="blood-type-badge">{request.bloodType}</span>
                  <span className="units-needed">{request.unitsNeeded} units needed</span>
                </div>
                <div className="medical-condition">
                  <strong>Condition:</strong> {request.medicalCondition}
                </div>
              </div>

              <div className="hospital-info">
                <div className="hospital-name">
                  <span className="hospital-icon">🏥</span>
                  {request.hospital}
                </div>
                <div className="location">
                  <span className="location-icon">📍</span>
                  {request.location}
                </div>
                <div className="contact-info">
                  <div className="contact-person">
                    <span className="person-icon">👨‍⚕️</span>
                    {request.contactPerson}
                  </div>
                  <div className="contact-phone">
                    <span className="phone-icon">📞</span>
                    {request.contactPhone}
                  </div>
                </div>
              </div>

              <div className="donor-progress">
                <div className="progress-header">
                  <span>Donors Found</span>
                  <span>{request.donorsFound}/{request.donorsNeeded}</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${(request.donorsFound / request.donorsNeeded) * 100}%`,
                      backgroundColor: getUrgencyColor(request.urgency)
                    }}
                  ></div>
                </div>
                <div className="estimated-time">
                  <span className="time-icon">⏰</span>
                  Estimated time: {request.estimatedTime}
                </div>
              </div>
            </div>

            <div className="request-actions">
              <button 
                className="action-btn find-donors"
                onClick={() => handleFindDonors(request.id)}
                disabled={request.donorsFound >= request.donorsNeeded}
              >
                <span className="search-icon">🔍</span>
                Find Donors
              </button>
              <button className="action-btn contact">
                <span className="phone-icon">📞</span>
                Contact Hospital
              </button>
              <button className="action-btn alert">
                <span className="alert-icon">📢</span>
                Send Alert
              </button>
              <button className="action-btn details">
                <span className="details-icon">📋</span>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* New Request Form Modal */}
      {showNewRequestForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Create Emergency Blood Request</h2>
              <button 
                className="close-btn"
                onClick={() => setShowNewRequestForm(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmitRequest} className="request-form">
              <div className="form-grid">
                <div className="form-group">
                  <label>Patient Name *</label>
                  <input
                    type="text"
                    value={newRequest.patientName}
                    onChange={(e) => setNewRequest({...newRequest, patientName: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Blood Type *</label>
                  <select
                    value={newRequest.bloodType}
                    onChange={(e) => setNewRequest({...newRequest, bloodType: e.target.value})}
                    required
                  >
                    <option value="">Select Blood Type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Units Needed *</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={newRequest.unitsNeeded}
                    onChange={(e) => setNewRequest({...newRequest, unitsNeeded: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Urgency Level *</label>
                  <select
                    value={newRequest.urgency}
                    onChange={(e) => setNewRequest({...newRequest, urgency: e.target.value})}
                    required
                  >
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="critical">Critical</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Hospital *</label>
                  <input
                    type="text"
                    value={newRequest.hospital}
                    onChange={(e) => setNewRequest({...newRequest, hospital: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Contact Person *</label>
                  <input
                    type="text"
                    value={newRequest.contactPerson}
                    onChange={(e) => setNewRequest({...newRequest, contactPerson: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Contact Phone *</label>
                  <input
                    type="tel"
                    value={newRequest.contactPhone}
                    onChange={(e) => setNewRequest({...newRequest, contactPhone: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Location/Ward *</label>
                  <input
                    type="text"
                    value={newRequest.location}
                    onChange={(e) => setNewRequest({...newRequest, location: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="form-group full-width">
                <label>Medical Condition *</label>
                <textarea
                  value={newRequest.medicalCondition}
                  onChange={(e) => setNewRequest({...newRequest, medicalCondition: e.target.value})}
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={() => setShowNewRequestForm(false)}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Create Emergency Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyRequests;
