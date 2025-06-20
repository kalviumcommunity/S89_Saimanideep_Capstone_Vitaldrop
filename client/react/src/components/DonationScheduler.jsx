import React, { useState, useEffect } from 'react';
import './DonationScheduler.css';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';



const DonationScheduler = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [donationType, setDonationType] = useState('whole-blood');
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Personal Information State
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    weight: '',
    bloodType: '',
    address: '',
    city: '',
    emergencyContact: '',
    emergencyPhone: '',
    medicalConditions: '',
    medications: '',
    lastDonation: '',
    preferredTime: 'morning'
  });

  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    bloodType: 'O+',
    lastDonation: '2024-01-15',
    eligibleDate: '2024-04-15'
  });

  // Generate available slots dynamically for any date
  const generateAvailableSlots = (date) => {
    if (!date) return [];

    const selectedDateObj = new Date(date);
    const dayOfWeek = selectedDateObj.getDay(); // 0 = Sunday, 6 = Saturday

    // Different schedules for different days
    if (dayOfWeek === 0) { // Sunday
      return ['10:00', '11:00', '14:00', '15:00'];
    } else if (dayOfWeek === 6) { // Saturday
      return ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
    } else { // Monday to Friday
      return ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];
    }
  };

  const locations = [
    {
      id: 1,
      name: 'City General Hospital',
      address: '123 Main Street, Downtown',
      type: 'Hospital',
      services: ['Whole Blood', 'Platelets', 'Plasma']
    },
    {
      id: 2,
      name: 'Community Blood Center',
      address: '456 Health Avenue, Midtown',
      type: 'Blood Center',
      services: ['Whole Blood', 'Platelets', 'Plasma', 'Double Red']
    },
    {
      id: 3,
      name: 'Mobile Blood Drive - Mall',
      address: 'Shopping Center Parking Lot',
      type: 'Mobile Unit',
      services: ['Whole Blood']
    }
  ];

  const donationTypes = [
    {
      id: 'whole-blood',
      name: 'Whole Blood',
      duration: '45 minutes',
      frequency: 'Every 8 weeks',
      description: 'Standard blood donation - helps all patients'
    },
    {
      id: 'platelets',
      name: 'Platelets',
      duration: '2 hours',
      frequency: 'Every 2 weeks',
      description: 'Helps cancer patients and trauma victims'
    },
    {
      id: 'plasma',
      name: 'Plasma',
      duration: '1.5 hours',
      frequency: 'Every 4 weeks',
      description: 'Used for burn victims and immune disorders'
    },
    {
      id: 'double-red',
      name: 'Double Red Cells',
      duration: '1 hour',
      frequency: 'Every 16 weeks',
      description: 'Concentrated red cells for trauma patients'
    }
  ];

  const isEligibleToDonate = () => {
    const today = new Date();
    const eligibleDate = new Date(userInfo.eligibleDate);
    return today >= eligibleDate;
  };

  const getDaysUntilEligible = () => {
    const today = new Date();
    const eligibleDate = new Date(userInfo.eligibleDate);
    const diffTime = eligibleDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const handleScheduleAppointment = () => {
    if (!selectedDate || !selectedTime || !selectedLocation) {
      alert('Please fill in all required fields');
      return;
    }

    if (!isEligibleToDonate()) {
      alert(`You are not eligible to donate yet. Please wait ${getDaysUntilEligible()} more days.`);
      return;
    }

    setShowConfirmation(true);
  };

  const confirmAppointment = () => {
    // Here you would typically send the appointment data to the backend
    // For now, we'll simulate a successful API call

    // Prepare appointment details for the thank you page
    const appointmentDetails = {
      name: personalInfo.name,
      email: personalInfo.email,
      bloodType: personalInfo.bloodType,
      date: selectedDate,
      time: selectedTime,
      location: locations.find(l => l.id == selectedLocation)?.name,
      donationType: donationTypes.find(t => t.id === donationType)?.name
    };

    // Navigate to thank you page with appointment details
    navigate('/thank-you', {
      state: appointmentDetails
    });
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30); // 30 days from today
    return maxDate.toISOString().split('T')[0];
  };

  // Handle personal info changes
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Validate current step
  const isStepValid = (step) => {
    switch (step) {
      case 1:
        return personalInfo.name && personalInfo.email && personalInfo.phone &&
               personalInfo.age && personalInfo.weight && personalInfo.bloodType;
      case 2:
        return donationType;
      case 3:
        return selectedLocation;
      case 4:
        return selectedDate && selectedTime;
      default:
        return false;
    }
  };

  // Navigate between steps
  const nextStep = () => {
    if (currentStep < 4 && isStepValid(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  return (
    <>
      <NavBar showContact={true} />
      <div className="donation-scheduler">
        {/* Enhanced Header with Step Indicator */}
        <div className="scheduler-header">
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📅</div>
            <h1 style={{
              fontSize: '2.5rem',
              color: '#1f2937',
              marginBottom: '15px',
              fontWeight: '700'
            }}>
              Schedule Your Life-Saving Donation
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: '#6b7280',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Follow these simple steps to book your blood donation appointment.
              Your donation can save up to 3 lives!
            </p>
          </div>

          {/* Enhanced Step Progress Indicator */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '40px',
            padding: '25px',
            backgroundColor: '#f8f9fa',
            borderRadius: '20px',
            border: '1px solid #e9ecef',
            flexWrap: 'wrap'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              backgroundColor: currentStep >= 1 ? '#dc3545' : '#6c757d',
              color: 'white',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: '600',
              border: currentStep === 1 ? '3px solid #fff' : 'none',
              boxShadow: currentStep === 1 ? '0 0 0 2px #dc3545' : 'none'
            }}>
              <span>1</span>
              <span>Personal Info</span>
              {isStepValid(1) && <span>✓</span>}
            </div>
            <div style={{ width: '25px', height: '2px', backgroundColor: '#dee2e6' }}></div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              backgroundColor: currentStep >= 2 ? '#dc3545' : '#6c757d',
              color: 'white',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: '600',
              border: currentStep === 2 ? '3px solid #fff' : 'none',
              boxShadow: currentStep === 2 ? '0 0 0 2px #dc3545' : 'none'
            }}>
              <span>2</span>
              <span>Donation Type</span>
              {isStepValid(2) && <span>✓</span>}
            </div>
            <div style={{ width: '25px', height: '2px', backgroundColor: '#dee2e6' }}></div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              backgroundColor: currentStep >= 3 ? '#dc3545' : '#6c757d',
              color: 'white',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: '600',
              border: currentStep === 3 ? '3px solid #fff' : 'none',
              boxShadow: currentStep === 3 ? '0 0 0 2px #dc3545' : 'none'
            }}>
              <span>3</span>
              <span>Location</span>
              {isStepValid(3) && <span>✓</span>}
            </div>
            <div style={{ width: '25px', height: '2px', backgroundColor: '#dee2e6' }}></div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              backgroundColor: currentStep >= 4 ? '#dc3545' : '#6c757d',
              color: 'white',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: '600',
              border: currentStep === 4 ? '3px solid #fff' : 'none',
              boxShadow: currentStep === 4 ? '0 0 0 2px #dc3545' : 'none'
            }}>
              <span>4</span>
              <span>Date & Time</span>
              {isStepValid(4) && <span>✓</span>}
            </div>
          </div>
        </div>

        {/* Enhanced Eligibility Status */}
        <div style={{
          background: isEligibleToDonate()
            ? 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)'
            : 'linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)',
          border: `2px solid ${isEligibleToDonate() ? '#28a745' : '#dc3545'}`,
          borderRadius: '20px',
          padding: '30px',
          marginBottom: '40px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              fontSize: '3rem',
              background: isEligibleToDonate() ? '#28a745' : '#dc3545',
              color: 'white',
              borderRadius: '50%',
              width: '80px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {isEligibleToDonate() ? '✅' : '⏳'}
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: isEligibleToDonate() ? '#155724' : '#721c24',
                marginBottom: '10px'
              }}>
                {isEligibleToDonate() ? '🎉 Great! You are eligible to donate!' : '⏰ Not eligible yet'}
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: isEligibleToDonate() ? '#155724' : '#721c24',
                marginBottom: '15px'
              }}>
                {isEligibleToDonate()
                  ? `Last donation: ${userInfo.lastDonation}. Thank you for being a hero!`
                  : `You can donate again in ${getDaysUntilEligible()} days. We'll be waiting for you!`
                }
              </p>
              {isEligibleToDonate() && (
                <div style={{
                  background: 'rgba(40, 167, 69, 0.1)',
                  padding: '10px 15px',
                  borderRadius: '10px',
                  border: '1px solid #28a745'
                }}>
                  <p style={{
                    margin: 0,
                    fontSize: '0.95rem',
                    color: '#155724',
                    fontWeight: '500'
                  }}>
                    💡 <strong>Tip:</strong> Make sure to eat well and stay hydrated before your donation!
                  </p>
                </div>
              )}
            </div>
            <div style={{
              background: isEligibleToDonate() ? '#28a745' : '#6c757d',
              color: 'white',
              padding: '15px 20px',
              borderRadius: '15px',
              textAlign: 'center',
              minWidth: '100px'
            }}>
              <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Your Blood Type</div>
              <div style={{ fontSize: '1.8rem', fontWeight: '700' }}>{userInfo.bloodType}</div>
            </div>
          </div>
        </div>

        <div className="scheduler-form">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
              marginBottom: '30px',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  color: '#1f2937',
                  fontWeight: '700',
                  marginBottom: '10px'
                }}>
                  👤 Step 1: Your Personal Information
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '1.1rem',
                  lineHeight: '1.6'
                }}>
                  Please provide your details so we can ensure a safe and personalized donation experience.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '25px'
              }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={personalInfo.name}
                    onChange={handlePersonalInfoChange}
                    placeholder="Enter your full name"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#dc3545'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={personalInfo.email}
                    onChange={handlePersonalInfoChange}
                    placeholder="Enter your email"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#dc3545'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={personalInfo.phone}
                    onChange={handlePersonalInfoChange}
                    placeholder="Enter your phone number"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#dc3545'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                    Blood Type *
                  </label>
                  <select
                    name="bloodType"
                    value={personalInfo.bloodType}
                    onChange={handlePersonalInfoChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      backgroundColor: 'white'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#dc3545'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  >
                    <option value="">Select your blood type</option>
                    {bloodTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                    Age *
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={personalInfo.age}
                    onChange={handlePersonalInfoChange}
                    placeholder="Enter your age"
                    min="18"
                    max="65"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#dc3545'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                    Weight (kg) *
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={personalInfo.weight}
                    onChange={handlePersonalInfoChange}
                    placeholder="Enter your weight"
                    min="50"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#dc3545'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={personalInfo.address}
                    onChange={handlePersonalInfoChange}
                    placeholder="Enter your address"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#dc3545'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Enhanced Donation Type Selection */}
          {currentStep === 2 && (
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
            marginBottom: '30px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h3 style={{
                fontSize: '1.8rem',
                color: '#1f2937',
                fontWeight: '700',
                marginBottom: '10px'
              }}>
                🩸 Step 2: Choose Your Donation Type
              </h3>
              <p style={{
                color: '#6b7280',
                fontSize: '1.1rem',
                lineHeight: '1.6'
              }}>
                Select the type of donation you'd like to make. Each type helps different patients in unique ways.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              {donationTypes.map(type => (
                <div
                  key={type.id}
                  onClick={() => setDonationType(type.id)}
                  style={{
                    background: donationType === type.id
                      ? 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)'
                      : 'white',
                    color: donationType === type.id ? 'white' : '#1f2937',
                    border: `2px solid ${donationType === type.id ? '#dc3545' : '#e5e7eb'}`,
                    borderRadius: '15px',
                    padding: '25px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: donationType === type.id
                      ? '0 8px 25px rgba(220, 53, 69, 0.3)'
                      : '0 4px 15px rgba(0,0,0,0.05)',
                    transform: donationType === type.id ? 'translateY(-2px)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (donationType !== type.id) {
                      e.target.style.borderColor = '#dc3545';
                      e.target.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (donationType !== type.id) {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.transform = 'none';
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      margin: 0,
                      flex: 1
                    }}>
                      {type.name}
                    </h4>
                    {donationType === type.id && (
                      <div style={{
                        background: 'rgba(255,255,255,0.2)',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1rem'
                      }}>
                        ✓
                      </div>
                    )}
                  </div>

                  <div style={{
                    display: 'flex',
                    gap: '15px',
                    marginBottom: '15px',
                    fontSize: '0.95rem',
                    opacity: donationType === type.id ? 0.9 : 0.7
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      ⏱️ {type.duration}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      🔄 {type.frequency}
                    </span>
                  </div>

                  <p style={{
                    margin: 0,
                    lineHeight: '1.5',
                    fontSize: '1rem',
                    opacity: donationType === type.id ? 0.95 : 0.8
                  }}>
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          )}

          {/* Step 3: Enhanced Location Selection */}
          {currentStep === 3 && (
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
            marginBottom: '30px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h3 style={{
                fontSize: '1.8rem',
                color: '#1f2937',
                fontWeight: '700',
                marginBottom: '10px'
              }}>
                📍 Step 3: Choose Your Donation Location
              </h3>
              <p style={{
                color: '#6b7280',
                fontSize: '1.1rem',
                lineHeight: '1.6'
              }}>
                Select a convenient location near you. All locations are safe, clean, and staffed by professionals.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '20px'
            }}>
              {locations.map(location => (
                <div
                  key={location.id}
                  onClick={() => setSelectedLocation(location.id)}
                  style={{
                    background: selectedLocation === location.id
                      ? 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)'
                      : 'white',
                    color: selectedLocation === location.id ? 'white' : '#1f2937',
                    border: `2px solid ${selectedLocation === location.id ? '#dc3545' : '#e5e7eb'}`,
                    borderRadius: '15px',
                    padding: '25px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: selectedLocation === location.id
                      ? '0 8px 25px rgba(220, 53, 69, 0.3)'
                      : '0 4px 15px rgba(0,0,0,0.05)',
                    transform: selectedLocation === location.id ? 'translateY(-2px)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedLocation !== location.id) {
                      e.target.style.borderColor = '#dc3545';
                      e.target.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedLocation !== location.id) {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.transform = 'none';
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      margin: 0
                    }}>
                      {location.name}
                    </h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{
                        background: selectedLocation === location.id
                          ? 'rgba(255,255,255,0.2)'
                          : '#f8f9fa',
                        color: selectedLocation === location.id ? 'white' : '#6c757d',
                        padding: '5px 12px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '600'
                      }}>
                        {location.type}
                      </span>
                      {selectedLocation === location.id && (
                        <div style={{
                          background: 'rgba(255,255,255,0.2)',
                          borderRadius: '50%',
                          width: '25px',
                          height: '25px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.9rem'
                        }}>
                          ✓
                        </div>
                      )}
                    </div>
                  </div>

                  <p style={{
                    margin: '0 0 20px 0',
                    fontSize: '1rem',
                    opacity: selectedLocation === location.id ? 0.9 : 0.7,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    📍 {location.address}
                  </p>

                  <div style={{ marginBottom: '15px' }}>
                    <div style={{
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      marginBottom: '8px',
                      opacity: selectedLocation === location.id ? 0.9 : 0.7
                    }}>
                      Available Services:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {location.services.map(service => (
                        <span
                          key={service}
                          style={{
                            background: selectedLocation === location.id
                              ? 'rgba(255,255,255,0.2)'
                              : '#e9ecef',
                            color: selectedLocation === location.id ? 'white' : '#495057',
                            padding: '4px 10px',
                            borderRadius: '12px',
                            fontSize: '0.8rem',
                            fontWeight: '500'
                          }}
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          )}

          {/* Step 4: Enhanced Date & Time Selection */}
          {currentStep === 4 && (
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
            marginBottom: '30px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h3 style={{
                fontSize: '1.8rem',
                color: '#1f2937',
                fontWeight: '700',
                marginBottom: '10px'
              }}>
                📅 Step 4: Pick Your Preferred Date & Time
              </h3>
              <p style={{
                color: '#6b7280',
                fontSize: '1.1rem',
                lineHeight: '1.6'
              }}>
                Choose a date and time that works best for your schedule. We have flexible hours to accommodate you.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '10px'
                }}>
                  📅 Select Your Preferred Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={getMinDate()}
                  max={getMaxDate()}
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    backgroundColor: '#f9fafb'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#dc3545';
                    e.target.style.backgroundColor = 'white';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.backgroundColor = '#f9fafb';
                  }}
                />
                <p style={{
                  fontSize: '0.9rem',
                  color: '#6b7280',
                  marginTop: '8px',
                  margin: '8px 0 0 0'
                }}>
                  💡 You can schedule up to 30 days in advance
                </p>
              </div>

              {selectedDate && generateAvailableSlots(selectedDate).length > 0 && (
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '10px'
                  }}>
                    ⏰ Available Time Slots
                  </label>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                    gap: '12px'
                  }}>
                    {generateAvailableSlots(selectedDate).map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        style={{
                          background: selectedTime === time
                            ? 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)'
                            : 'white',
                          color: selectedTime === time ? 'white' : '#374151',
                          border: `2px solid ${selectedTime === time ? '#dc3545' : '#e5e7eb'}`,
                          borderRadius: '12px',
                          padding: '12px 16px',
                          fontSize: '1rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: selectedTime === time
                            ? '0 4px 15px rgba(220, 53, 69, 0.3)'
                            : '0 2px 8px rgba(0,0,0,0.05)'
                        }}
                        onMouseEnter={(e) => {
                          if (selectedTime !== time) {
                            e.target.style.borderColor = '#dc3545';
                            e.target.style.transform = 'translateY(-1px)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (selectedTime !== time) {
                            e.target.style.borderColor = '#e5e7eb';
                            e.target.style.transform = 'none';
                          }
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#6b7280',
                    marginTop: '12px',
                    margin: '12px 0 0 0'
                  }}>
                    ✨ All times are available - choose what works best for you!
                  </p>
                </div>
              )}

              {selectedDate && generateAvailableSlots(selectedDate).length === 0 && (
                <div style={{
                  background: '#f8f9fa',
                  border: '2px dashed #dee2e6',
                  borderRadius: '12px',
                  padding: '30px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📅</div>
                  <p style={{ color: '#6c757d', margin: 0 }}>
                    No available slots for this date. Please select another date.
                  </p>
                </div>
              )}
            </div>
          </div>
          )}

          {/* Navigation Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '40px',
            marginBottom: '20px'
          }}>
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              style={{
                background: currentStep === 1 ? '#e9ecef' : 'linear-gradient(135deg, #6c757d 0%, #5a6268 100%)',
                color: currentStep === 1 ? '#6c757d' : 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: currentStep === 1 ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              ← Previous Step
            </button>

            <div style={{
              fontSize: '1rem',
              color: '#6b7280',
              fontWeight: '500'
            }}>
              Step {currentStep} of 4
            </div>

            {currentStep < 4 ? (
              <button
                onClick={nextStep}
                disabled={!isStepValid(currentStep)}
                style={{
                  background: !isStepValid(currentStep)
                    ? '#e9ecef'
                    : 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
                  color: !isStepValid(currentStep) ? '#6c757d' : 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: !isStepValid(currentStep) ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isStepValid(currentStep) ? '0 4px 15px rgba(220, 53, 69, 0.3)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (isStepValid(currentStep)) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(220, 53, 69, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (isStepValid(currentStep)) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(220, 53, 69, 0.3)';
                  }
                }}
              >
                Next Step →
              </button>
            ) : (
              <button
                onClick={handleScheduleAppointment}
                disabled={!isEligibleToDonate() || !isStepValid(4)}
                style={{
                  background: (!isEligibleToDonate() || !isStepValid(4))
                    ? '#e9ecef'
                    : 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                  color: (!isEligibleToDonate() || !isStepValid(4)) ? '#6c757d' : 'white',
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  cursor: (!isEligibleToDonate() || !isStepValid(4)) ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: (isEligibleToDonate() && isStepValid(4)) ? '0 4px 15px rgba(40, 167, 69, 0.3)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (isEligibleToDonate() && isStepValid(4)) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(40, 167, 69, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (isEligibleToDonate() && isStepValid(4)) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(40, 167, 69, 0.3)';
                  }
                }}
              >
                🎯 Schedule My Appointment
              </button>
            )}
          </div>

          {/* Summary Section for Final Step */}
          {currentStep === 4 && isStepValid(4) && (
            <div style={{
              background: 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)',
              border: '2px solid #28a745',
              borderRadius: '20px',
              padding: '30px',
              marginTop: '30px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🎉</div>
              <h4 style={{
                color: '#155724',
                margin: '0 0 15px 0',
                fontSize: '1.4rem',
                fontWeight: '700'
              }}>
                Perfect! You're All Set!
              </h4>
              <p style={{
                color: '#155724',
                margin: '0 0 20px 0',
                fontSize: '1.1rem',
                lineHeight: '1.6'
              }}>
                You've completed all steps successfully. Your donation will help save up to 3 lives!
              </p>

              <div style={{
                background: 'rgba(255,255,255,0.3)',
                borderRadius: '15px',
                padding: '20px',
                marginTop: '20px'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '15px',
                  fontSize: '0.95rem'
                }}>
                  <div><strong>👤 Name:</strong> {personalInfo.name}</div>
                  <div><strong>🩸 Blood Type:</strong> {personalInfo.bloodType}</div>
                  <div><strong>📅 Date:</strong> {selectedDate}</div>
                  <div><strong>⏰ Time:</strong> {selectedTime}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Confirmation Modal */}
        {showConfirmation && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}>
            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px',
              maxWidth: '500px',
              width: '100%',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎉</div>
              <h3 style={{
                fontSize: '1.8rem',
                color: '#1f2937',
                fontWeight: '700',
                marginBottom: '20px'
              }}>
                Confirm Your Life-Saving Appointment
              </h3>

              <div style={{
                background: '#f8f9fa',
                borderRadius: '15px',
                padding: '25px',
                marginBottom: '30px',
                textAlign: 'left'
              }}>
                <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2rem' }}>📅</span>
                  <div>
                    <strong style={{ color: '#374151' }}>Date:</strong>
                    <span style={{ marginLeft: '10px', color: '#6b7280' }}>{selectedDate}</span>
                  </div>
                </div>
                <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2rem' }}>⏰</span>
                  <div>
                    <strong style={{ color: '#374151' }}>Time:</strong>
                    <span style={{ marginLeft: '10px', color: '#6b7280' }}>{selectedTime}</span>
                  </div>
                </div>
                <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2rem' }}>📍</span>
                  <div>
                    <strong style={{ color: '#374151' }}>Location:</strong>
                    <span style={{ marginLeft: '10px', color: '#6b7280' }}>
                      {locations.find(l => l.id == selectedLocation)?.name}
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2rem' }}>🩸</span>
                  <div>
                    <strong style={{ color: '#374151' }}>Donation Type:</strong>
                    <span style={{ marginLeft: '10px', color: '#6b7280' }}>
                      {donationTypes.find(t => t.id === donationType)?.name}
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <button
                  onClick={confirmAppointment}
                  style={{
                    background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '15px 30px',
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(40, 167, 69, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(40, 167, 69, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(40, 167, 69, 0.3)';
                  }}
                >
                  ✅ Confirm Appointment
                </button>
                <button
                  onClick={() => setShowConfirmation(false)}
                  style={{
                    background: 'transparent',
                    color: '#6c757d',
                    border: '2px solid #dee2e6',
                    padding: '15px 30px',
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#6c757d';
                    e.target.style.color = '#495057';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#dee2e6';
                    e.target.style.color = '#6c757d';
                  }}
                >
                  ❌ Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DonationScheduler;
