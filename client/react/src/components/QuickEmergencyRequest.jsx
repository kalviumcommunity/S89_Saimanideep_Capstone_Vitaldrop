import React, { useState } from 'react';
import './QuickEmergencyRequest.css';
import NavBar from './NavBar';

const QuickEmergencyRequest = () => {
  const [emergencyData, setEmergencyData] = useState({
    bloodType: '',
    unitsNeeded: '',
    location: '',
    hospitalName: '',
    contactName: '',
    contactPhone: '',
    urgencyLevel: 'high',
    patientCondition: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [matchedDonors, setMatchedDonors] = useState([]);

  const bloodTypes = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];
  const urgencyLevels = [
    { value: 'critical', label: 'Critical (Life-threatening)', color: '#ef4444' },
    { value: 'high', label: 'High (Urgent)', color: '#f59e0b' },
    { value: 'medium', label: 'Medium (Important)', color: '#3b82f6' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmergencyData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitEmergency = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call to find matching donors
      const response = await fetch('/api/donors/emergency-match', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bloodType: emergencyData.bloodType,
          location: emergencyData.location,
          urgency: emergencyData.urgencyLevel,
          unitsNeeded: emergencyData.unitsNeeded
        })
      });

      if (response.ok) {
        const data = await response.json();
        setMatchedDonors(data.matchedDonors || []);
        setShowSuccess(true);
        
        // Send notifications to matched donors (simulate)
        console.log('Emergency request sent to', data.totalMatches, 'potential donors');
      } else {
        alert('Error submitting emergency request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setEmergencyData({
      bloodType: '',
      unitsNeeded: '',
      location: '',
      hospitalName: '',
      contactName: '',
      contactPhone: '',
      urgencyLevel: 'high',
      patientCondition: ''
    });
    setShowSuccess(false);
    setMatchedDonors([]);
  };

  if (showSuccess) {
    return (
      <>
        <NavBar showContact={true} />
        <div className="emergency-success">
        <div className="success-animation">
          <div className="success-icon">🚨</div>
          <h2>Emergency Request Sent!</h2>
          <p>Your emergency blood request has been broadcast to {matchedDonors.length} potential donors in your area.</p>
          
          <div className="request-summary">
            <div className="summary-item">
              <strong>Blood Type:</strong> {emergencyData.bloodType}
            </div>
            <div className="summary-item">
              <strong>Units Needed:</strong> {emergencyData.unitsNeeded}
            </div>
            <div className="summary-item">
              <strong>Location:</strong> {emergencyData.location}
            </div>
            <div className="summary-item">
              <strong>Urgency:</strong> {urgencyLevels.find(u => u.value === emergencyData.urgencyLevel)?.label}
            </div>
          </div>

          {matchedDonors.length > 0 && (
            <div className="matched-donors-preview">
              <h3>Notified Donors</h3>
              <div className="donors-list">
                {matchedDonors.slice(0, 5).map((donor, index) => (
                  <div key={index} className="donor-item">
                    <span className="donor-name">{donor.name}</span>
                    <span className="donor-blood-type">{donor.bloodType}</span>
                    <span className={`compatibility ${donor.compatibility}`}>
                      {donor.compatibility === 'exact' ? '✓ Exact Match' : '~ Compatible'}
                    </span>
                  </div>
                ))}
                {matchedDonors.length > 5 && (
                  <div className="more-donors">
                    +{matchedDonors.length - 5} more donors notified
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="success-actions">
            <button className="track-btn">
              📱 Track Responses
            </button>
            <button className="new-request-btn" onClick={resetForm}>
              🆕 New Request
            </button>
          </div>
        </div>
      </div>
      </>
    );
  }

  return (
    <>
      <NavBar showContact={true} />
      <div className="quick-emergency-request">
      <div className="emergency-header">
        <div className="emergency-icon">🚨</div>
        <h1>Emergency Blood Request</h1>
        <p>Submit an urgent blood request and instantly notify nearby donors</p>
      </div>

      <form onSubmit={handleSubmitEmergency} className="emergency-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Blood Type Required *</label>
            <select
              name="bloodType"
              value={emergencyData.bloodType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Blood Type</option>
              {bloodTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Units Needed *</label>
            <input
              type="number"
              name="unitsNeeded"
              value={emergencyData.unitsNeeded}
              onChange={handleInputChange}
              min="1"
              max="10"
              required
              placeholder="e.g., 2"
            />
          </div>

          <div className="form-group">
            <label>Urgency Level *</label>
            <div className="urgency-options">
              {urgencyLevels.map(level => (
                <label key={level.value} className="urgency-option">
                  <input
                    type="radio"
                    name="urgencyLevel"
                    value={level.value}
                    checked={emergencyData.urgencyLevel === level.value}
                    onChange={handleInputChange}
                  />
                  <span 
                    className="urgency-label"
                    style={{ borderColor: level.color, color: level.color }}
                  >
                    {level.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group full-width">
            <label>Hospital/Location *</label>
            <input
              type="text"
              name="hospitalName"
              value={emergencyData.hospitalName}
              onChange={handleInputChange}
              required
              placeholder="e.g., City General Hospital"
            />
          </div>

          <div className="form-group full-width">
            <label>Detailed Location/Address *</label>
            <input
              type="text"
              name="location"
              value={emergencyData.location}
              onChange={handleInputChange}
              required
              placeholder="e.g., 123 Main Street, Downtown, Emergency Room"
            />
          </div>

          <div className="form-group">
            <label>Contact Person *</label>
            <input
              type="text"
              name="contactName"
              value={emergencyData.contactName}
              onChange={handleInputChange}
              required
              placeholder="Dr. Smith"
            />
          </div>

          <div className="form-group">
            <label>Contact Phone *</label>
            <input
              type="tel"
              name="contactPhone"
              value={emergencyData.contactPhone}
              onChange={handleInputChange}
              required
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="form-group full-width">
            <label>Patient Condition (Optional)</label>
            <textarea
              name="patientCondition"
              value={emergencyData.patientCondition}
              onChange={handleInputChange}
              placeholder="Brief description of patient condition or reason for urgency..."
              rows="3"
            />
          </div>
        </div>

        <div className="form-actions">
          <button 
            type="submit" 
            className="emergency-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="loading-spinner"></span>
                Sending Emergency Request...
              </>
            ) : (
              <>
                🚨 Send Emergency Request
              </>
            )}
          </button>
        </div>
      </form>

      <div className="emergency-info">
        <div className="info-card">
          <h3>⚡ Instant Notification</h3>
          <p>Your request will be immediately sent to all compatible donors within a 10km radius</p>
        </div>
        <div className="info-card">
          <h3>📱 Real-time Tracking</h3>
          <p>Track donor responses and coordinate pickup in real-time</p>
        </div>
        <div className="info-card">
          <h3>🏥 Hospital Network</h3>
          <p>Connected to major hospitals and blood banks for faster coordination</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default QuickEmergencyRequest;
