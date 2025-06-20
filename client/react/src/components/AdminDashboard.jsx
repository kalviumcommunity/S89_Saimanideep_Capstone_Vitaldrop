import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [adminUser, setAdminUser] = useState(null);
  const [activeSection, setActiveSection] = useState('Home');
  const [donorsData, setDonorsData] = useState([]);
  const [prospectsData, setProspectsData] = useState([]);
  const [ordersData, setOrdersData] = useState([]);
  const [settingsData, setSettingsData] = useState({});
  const [chartsData, setChartsData] = useState({});
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [pendingApprovals, setPendingApprovals] = useState([]);

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [approvalFilter, setApprovalFilter] = useState('all');
  const [animatedNumbers, setAnimatedNumbers] = useState({
    totalDonors: 0,
    bloodUnits: 0,
    partnerHospitals: 0,
    emergencyRequests: 0
  });
  const [dashboardData, setDashboardData] = useState({
    totalDonors: 8547,
    bloodUnits: 15234,
    partnerHospitals: 127,
    emergencyRequests: 23,
    recentDonations: [
      { id: 1, donor: 'John Smith', bloodType: 'O+', date: 'Today', amount: '450ml' },
      { id: 2, donor: 'Sarah Johnson', bloodType: 'A+', date: 'Today', amount: '450ml' },
      { id: 3, donor: 'Mike Davis', bloodType: 'B-', date: 'Yesterday', amount: '450ml' },
    ],
    bloodGroupDistribution: {
      'O+': 32, 'A+': 18, 'B+': 15, 'AB+': 12, 'O-': 8, 'Others': 15
    },
    trends: {
      donors: '+12% this month',
      bloodUnits: '+8% this month',
      hospitals: '+3 new partners',
      requests: 'Needs attention'
    },
    contactSubmissions: [
      { id: 1, name: 'Alice Cooper', email: 'alice@email.com', subject: 'Donation Inquiry', message: 'I want to become a regular donor and help save lives', date: '2024-01-15', status: 'Pending', priority: 'Medium' },
      { id: 2, name: 'Bob Wilson', email: 'bob@email.com', subject: 'Partnership Request', message: 'Our hospital would like to partner with VitalDrop for blood supply', date: '2024-01-14', status: 'Approved', priority: 'High' },
      { id: 3, name: 'Carol Smith', email: 'carol@email.com', subject: 'General Question', message: 'What are the requirements for blood donation?', date: '2024-01-13', status: 'Pending', priority: 'Low' },
      { id: 4, name: 'David Johnson', email: 'david@email.com', subject: 'Emergency Request', message: 'Urgent need for O- blood type at our facility', date: '2024-01-15', status: 'Processing', priority: 'Critical' },
      { id: 5, name: 'Emma Davis', email: 'emma@email.com', subject: 'Volunteer Inquiry', message: 'I would like to volunteer for blood drives', date: '2024-01-12', status: 'Approved', priority: 'Medium' }
    ],
    bloodInventory: {
      'O+': { units: 45, expiring: 3, reserved: 8, available: 34 },
      'A+': { units: 32, expiring: 2, reserved: 5, available: 25 },
      'B+': { units: 28, expiring: 1, reserved: 3, available: 24 },
      'AB+': { units: 15, expiring: 0, reserved: 2, available: 13 },
      'O-': { units: 22, expiring: 1, reserved: 7, available: 14 },
      'A-': { units: 18, expiring: 0, reserved: 2, available: 16 },
      'B-': { units: 12, expiring: 0, reserved: 1, available: 11 },
      'AB-': { units: 8, expiring: 0, reserved: 1, available: 7 }
    },
    emergencyOrders: [
      { id: 1, hospital: 'City General Hospital', contact: 'Dr. Smith', bloodType: 'O-', units: 5, urgency: 'Critical', date: '2024-01-15 14:30', status: 'Processing', address: '123 Medical Ave' },
      { id: 2, hospital: 'Metro Medical Center', contact: 'Dr. Johnson', bloodType: 'A+', units: 3, urgency: 'High', date: '2024-01-15 13:15', status: 'Delivered', address: '456 Health St' },
      { id: 3, hospital: 'Regional Hospital', contact: 'Dr. Brown', bloodType: 'B+', units: 2, urgency: 'Medium', date: '2024-01-15 12:00', status: 'Pending', address: '789 Care Blvd' }
    ],
    notifications: [
      { id: 1, type: 'success', title: 'New Donation', message: 'John Doe donated O+ blood', time: '2m ago', read: false },
      { id: 2, type: 'info', title: 'Daily Goal', message: '85% of today\'s goal achieved', time: '5m ago', read: false },
      { id: 3, type: 'warning', title: 'Low Stock Alert', message: 'O- blood type running low', time: '10m ago', read: false },
      { id: 4, type: 'urgent', title: 'Emergency Request', message: 'Critical blood needed at City Hospital', time: '15m ago', read: true },
      { id: 5, type: 'info', title: 'New Donor Registration', message: 'Sarah Johnson registered as new donor', time: '1h ago', read: true }
    ]
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is logged in
    const token = localStorage.getItem('adminToken');
    const user = localStorage.getItem('adminUser');

    if (!token) {
      navigate('/admin');
      return;
    }

    if (user) {
      setAdminUser(JSON.parse(user));
    }

    // Initialize all section data
    initializeSectionData();

    // Start number animations immediately
    animateNumbers();
  }, [navigate]);

  const initializeSectionData = () => {
    // Initialize Donors Data
    setDonorsData([
      { id: 1, name: 'John Smith', email: 'john@email.com', bloodType: 'O+', phone: '123-456-7890', lastDonation: '2024-01-15', status: 'Active', totalDonations: 12 },
      { id: 2, name: 'Sarah Johnson', email: 'sarah@email.com', bloodType: 'A+', phone: '234-567-8901', lastDonation: '2024-01-10', status: 'Active', totalDonations: 8 },
      { id: 3, name: 'Mike Davis', email: 'mike@email.com', bloodType: 'B-', phone: '345-678-9012', lastDonation: '2024-01-05', status: 'Inactive', totalDonations: 15 },
      { id: 4, name: 'Emily Wilson', email: 'emily@email.com', bloodType: 'AB+', phone: '456-789-0123', lastDonation: '2024-01-20', status: 'Active', totalDonations: 6 },
      { id: 5, name: 'David Brown', email: 'david@email.com', bloodType: 'O-', phone: '567-890-1234', lastDonation: '2024-01-12', status: 'Active', totalDonations: 20 }
    ]);

    // Initialize Prospects Data
    setProspectsData([
      { id: 1, name: 'Alex Thompson', email: 'alex@email.com', phone: '678-901-2345', bloodType: 'A+', source: 'Website', status: 'New', priority: 'High' },
      { id: 2, name: 'Lisa Garcia', email: 'lisa@email.com', phone: '789-012-3456', bloodType: 'O+', source: 'Referral', status: 'Contacted', priority: 'Medium' },
      { id: 3, name: 'Robert Lee', email: 'robert@email.com', phone: '890-123-4567', bloodType: 'B+', source: 'Social Media', status: 'Interested', priority: 'High' },
      { id: 4, name: 'Maria Rodriguez', email: 'maria@email.com', phone: '901-234-5678', bloodType: 'AB-', source: 'Event', status: 'New', priority: 'Low' }
    ]);

    // Initialize Orders Data
    setOrdersData([
      { id: 1, hospital: 'City General Hospital', bloodType: 'O+', units: 5, urgency: 'Critical', status: 'Pending', requestDate: '2024-01-22', requiredBy: '2024-01-23' },
      { id: 2, hospital: 'St. Mary Medical Center', bloodType: 'A-', units: 3, urgency: 'High', status: 'Processing', requestDate: '2024-01-21', requiredBy: '2024-01-24' },
      { id: 3, hospital: 'Regional Medical Center', bloodType: 'B+', units: 2, urgency: 'Medium', status: 'Completed', requestDate: '2024-01-20', requiredBy: '2024-01-22' },
      { id: 4, hospital: 'Emergency Care Hospital', bloodType: 'AB+', units: 1, urgency: 'Low', status: 'Pending', requestDate: '2024-01-19', requiredBy: '2024-01-25' }
    ]);

    // Initialize Settings Data
    setSettingsData({
      notifications: { email: true, sms: true, push: false },
      security: { twoFactor: true, sessionTimeout: 30, passwordExpiry: 90 },
      system: { autoBackup: true, maintenanceMode: false, debugMode: false },
      preferences: { theme: 'light', language: 'en', timezone: 'UTC-5' }
    });

    // Initialize Charts Data
    setChartsData({
      donationTrends: [65, 78, 82, 95, 88, 92, 105, 98, 87, 93, 89, 96],
      bloodTypeDistribution: { 'O+': 38, 'A+': 34, 'B+': 9, 'AB+': 3, 'O-': 7, 'A-': 6, 'B-': 2, 'AB-': 1 },
      monthlyStats: { donations: 234, newDonors: 45, emergencyRequests: 12, hospitalPartners: 8 }
    });

    // Initialize Calendar Events
    setCalendarEvents([
      { id: 1, title: 'Blood Drive - Downtown', date: '2024-01-25', time: '09:00', type: 'drive', location: 'Community Center' },
      { id: 2, title: 'Donor Appreciation Event', date: '2024-01-28', time: '18:00', type: 'event', location: 'Hotel Grand' },
      { id: 3, title: 'Hospital Visit - City General', date: '2024-01-30', time: '14:00', type: 'visit', location: 'City General Hospital' },
      { id: 4, title: 'Staff Training Session', date: '2024-02-02', time: '10:00', type: 'training', location: 'VitalDrop Office' }
    ]);

    // Initialize Pending Approvals
    setPendingApprovals([
      {
        id: 1,
        name: 'Alex Johnson',
        email: 'alex.johnson@email.com',
        phone: '+1 (555) 234-5678',
        age: 25,
        weight: 68,
        bloodType: 'O+',
        address: '123 Main St, New York, NY',
        submissionDate: '2024-01-20',
        medicalHistory: {
          diseases: 'None',
          medications: 'None',
          allergies: 'None',
          surgeries: 'None',
          lastDonation: 'Never'
        },
        eligibilityChecks: {
          ageRequirement: true,
          weightRequirement: true,
          healthStatus: true,
          donationInterval: true,
          riskFactors: true
        },
        status: 'pending',
        priority: 'normal',
        documents: ['ID Copy', 'Medical Certificate']
      },
      {
        id: 2,
        name: 'Maria Rodriguez',
        email: 'maria.rodriguez@email.com',
        phone: '+1 (555) 345-6789',
        age: 32,
        weight: 58,
        bloodType: 'A-',
        address: '456 Oak Ave, Los Angeles, CA',
        submissionDate: '2024-01-19',
        medicalHistory: {
          diseases: 'Mild Hypertension (controlled)',
          medications: 'Lisinopril 10mg daily',
          allergies: 'Penicillin',
          surgeries: 'Appendectomy (2018)',
          lastDonation: '2023-08-15'
        },
        eligibilityChecks: {
          ageRequirement: true,
          weightRequirement: false,
          healthStatus: true,
          donationInterval: true,
          riskFactors: false
        },
        status: 'pending',
        priority: 'review',
        documents: ['ID Copy', 'Medical Certificate', 'Doctor Clearance']
      },
      {
        id: 3,
        name: 'David Chen',
        email: 'david.chen@email.com',
        phone: '+1 (555) 456-7890',
        age: 28,
        weight: 75,
        bloodType: 'B+',
        address: '789 Pine St, Chicago, IL',
        submissionDate: '2024-01-18',
        medicalHistory: {
          diseases: 'None',
          medications: 'Multivitamin',
          allergies: 'None',
          surgeries: 'None',
          lastDonation: '2023-11-20'
        },
        eligibilityChecks: {
          ageRequirement: true,
          weightRequirement: true,
          healthStatus: true,
          donationInterval: true,
          riskFactors: true
        },
        status: 'pending',
        priority: 'urgent',
        documents: ['ID Copy', 'Medical Certificate']
      }
    ]);
  };

  const animateNumbers = () => {
    const targets = {
      totalDonors: dashboardData.totalDonors,
      bloodUnits: dashboardData.bloodUnits,
      partnerHospitals: dashboardData.partnerHospitals,
      emergencyRequests: dashboardData.emergencyRequests
    };

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 FPS
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      // Easing function for realistic animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setAnimatedNumbers({
        totalDonors: Math.floor(targets.totalDonors * easeOutQuart),
        bloodUnits: Math.floor(targets.bloodUnits * easeOutQuart),
        partnerHospitals: Math.floor(targets.partnerHospitals * easeOutQuart),
        emergencyRequests: Math.floor(targets.emergencyRequests * easeOutQuart)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedNumbers(targets); // Ensure exact final values
      }
    }, stepDuration);
  };

  const handleBackToHome = () => {
    console.log('Back to home button clicked!'); // Debug log
    navigate('/');
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleNotifications = () => {
    setNotificationOpen(!notificationOpen);
  };

  const markNotificationAsRead = (notificationId) => {
    setDashboardData(prev => ({
      ...prev,
      notifications: prev.notifications.map(notif =>
        notif.id === notificationId ? { ...notif, read: true } : notif
      )
    }));
  };

  const menuItems = [
    { name: 'Home', icon: '🏠', color: '#333', path: '#', section: 'main' },
    { name: 'Profile', icon: '👤', color: '#333', path: '/donor-dashboard', section: 'main' },
    { name: 'Donors', icon: '🤝', color: '#333', path: '/donors-list', section: 'main' },
    { name: 'Eligibility Approvals', icon: '✅', color: '#333', path: '#', section: 'main' },
    { name: 'Prospects', icon: '👥', color: '#333', path: '/blood-inventory', section: 'main' },
    { name: 'Orders', icon: '📋', color: '#333', path: '/emergency-requests', section: 'main' },
    { name: 'Settings', icon: '⚙️', color: '#333', path: '#', section: 'secondary' },
    { name: 'Backups', icon: '💾', color: '#333', path: '#', section: 'secondary' },
    { name: 'Charts', icon: '📊', color: '#333', path: '#', section: 'secondary' },
    { name: 'Calendar', icon: '📅', color: '#333', path: '#', section: 'secondary' }
  ];

  const handleSectionChange = (sectionName) => {
    setActiveSection(sectionName);
  };

  // Enhanced Approval handlers with full functionality
  const handleApproveApplication = (applicationId) => {
    const application = pendingApprovals.find(app => app.id === applicationId);
    if (!application) return;

    // Show confirmation dialog
    if (window.confirm(`Are you sure you want to approve ${application.name}'s application?`)) {
      setPendingApprovals(prev =>
        prev.map(app =>
          app.id === applicationId
            ? {
                ...app,
                status: 'approved',
                approvedDate: new Date().toISOString(),
                approvedBy: adminUser?.name || 'Admin',
                notes: 'Application approved - all eligibility criteria met'
              }
            : app
        ).filter(app => app.status !== 'approved')
      );

      // Add to approved donors list
      setDonorsData(prev => [...prev, {
        id: Date.now(),
        name: application.name,
        email: application.email,
        phone: application.phone,
        bloodType: application.bloodType,
        status: 'Active',
        lastDonation: 'Never',
        totalDonations: 0,
        joinDate: new Date().toISOString().split('T')[0],
        eligibilityStatus: 'Approved'
      }]);

      // Show success notification
      alert(`✅ ${application.name}'s application has been approved successfully!`);
      console.log(`Application ${applicationId} approved by ${adminUser?.name || 'Admin'}`);
    }
  };

  const handleRejectApplication = (applicationId) => {
    const application = pendingApprovals.find(app => app.id === applicationId);
    if (!application) return;

    // Get rejection reason
    const reason = prompt(`Please provide a reason for rejecting ${application.name}'s application:`);
    if (reason === null) return; // User cancelled

    if (window.confirm(`Are you sure you want to reject ${application.name}'s application?`)) {
      setPendingApprovals(prev =>
        prev.map(app =>
          app.id === applicationId
            ? {
                ...app,
                status: 'rejected',
                rejectedDate: new Date().toISOString(),
                rejectedBy: adminUser?.name || 'Admin',
                rejectionReason: reason || 'No reason provided',
                notes: `Application rejected: ${reason || 'No reason provided'}`
              }
            : app
        ).filter(app => app.status !== 'rejected')
      );

      // Show rejection notification
      alert(`❌ ${application.name}'s application has been rejected.`);
      console.log(`Application ${applicationId} rejected by ${adminUser?.name || 'Admin'}: ${reason}`);
    }
  };

  const handleRequestMoreInfo = (applicationId) => {
    const application = pendingApprovals.find(app => app.id === applicationId);
    if (!application) return;

    // Get specific information needed
    const infoNeeded = prompt(`What additional information is needed from ${application.name}?`);
    if (infoNeeded === null) return; // User cancelled

    if (infoNeeded.trim()) {
      setPendingApprovals(prev =>
        prev.map(app =>
          app.id === applicationId
            ? {
                ...app,
                status: 'info_requested',
                priority: 'review',
                infoRequestDate: new Date().toISOString(),
                requestedBy: adminUser?.name || 'Admin',
                infoNeeded: infoNeeded,
                notes: `Additional information requested: ${infoNeeded}`
              }
            : app
        )
      );

      // Show info request notification
      alert(`📋 Information request sent to ${application.name}: ${infoNeeded}`);
      console.log(`More information requested for application ${applicationId}: ${infoNeeded}`);
    } else {
      alert('Please specify what information is needed.');
    }
  };

  const handleViewFullDetails = (applicationId) => {
    const application = pendingApprovals.find(app => app.id === applicationId);
    if (!application) return;

    // Create detailed view modal content
    const details = `
DONOR APPLICATION DETAILS
========================

Personal Information:
• Name: ${application.name}
• Email: ${application.email}
• Phone: ${application.phone}
• Age: ${application.age} years
• Weight: ${application.weight} kg
• Blood Type: ${application.bloodType}
• Address: ${application.address}

Medical History:
• Diseases: ${application.medicalHistory.diseases}
• Current Medications: ${application.medicalHistory.medications}
• Allergies: ${application.medicalHistory.allergies}
• Previous Surgeries: ${application.medicalHistory.surgeries}
• Last Blood Donation: ${application.medicalHistory.lastDonation}

Eligibility Criteria:
• Age Requirement (18-65): ${application.eligibilityChecks.ageRequirement ? '✅ PASSED' : '❌ FAILED'}
• Weight Requirement (≥50kg): ${application.eligibilityChecks.weightRequirement ? '✅ PASSED' : '❌ FAILED'}
• Health Status: ${application.eligibilityChecks.healthStatus ? '✅ GOOD' : '❌ CONCERNS'}
• Donation Interval: ${application.eligibilityChecks.donationInterval ? '✅ ELIGIBLE' : '❌ TOO SOON'}
• Risk Factors: ${application.eligibilityChecks.riskFactors ? '✅ LOW RISK' : '❌ HIGH RISK'}

Application Status:
• Status: ${application.status.toUpperCase()}
• Priority: ${application.priority.toUpperCase()}
• Submission Date: ${application.submissionDate}
• Documents: ${application.documents.join(', ')}

${application.notes ? `\nNotes: ${application.notes}` : ''}
    `;

    alert(details);
    console.log('Viewing full details for application:', applicationId);
  };

  // Filter applications based on selected filter
  const getFilteredApplications = () => {
    switch (approvalFilter) {
      case 'pending':
        return pendingApprovals.filter(app => app.status === 'pending');
      case 'urgent':
        return pendingApprovals.filter(app => app.priority === 'urgent');
      case 'review':
        return pendingApprovals.filter(app => app.priority === 'review' || app.status === 'info_requested');
      case 'normal':
        return pendingApprovals.filter(app => app.priority === 'normal');
      default:
        return pendingApprovals;
    }
  };

  // Handle filter change
  const handleFilterChange = (event) => {
    setApprovalFilter(event.target.value);
    console.log('Filter changed to:', event.target.value);
  };

  // Bulk approval actions
  const handleBulkApprove = () => {
    const eligibleApps = pendingApprovals.filter(app =>
      app.status === 'pending' &&
      Object.values(app.eligibilityChecks).every(check => check === true)
    );

    if (eligibleApps.length === 0) {
      alert('No eligible applications found for bulk approval.');
      return;
    }

    if (window.confirm(`Are you sure you want to approve ${eligibleApps.length} eligible applications?`)) {
      eligibleApps.forEach(app => handleApproveApplication(app.id));
      alert(`✅ ${eligibleApps.length} applications have been approved!`);
    }
  };

  // Handle document viewing
  const handleViewDocument = (applicationId, documentName) => {
    const application = pendingApprovals.find(app => app.id === applicationId);
    if (!application) return;

    alert(`📄 Viewing document: ${documentName}\n\nFor: ${application.name}\nDocument Type: ${documentName}\n\nNote: In a real application, this would open the actual document file.`);
    console.log(`Viewing document ${documentName} for application ${applicationId}`);
  };

  const getBloodTypeColor = (bloodType) => {
    const colors = {
      'O+': '#ef4444',
      'A+': '#f59e0b',
      'B+': '#10b981',
      'AB+': '#8b5cf6',
      'O-': '#3b82f6',
      'Others': '#6b7280'
    };
    return colors[bloodType] || '#6b7280';
  };



  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className="sidebar-clean">
        <div className="logo-section-clean">
          <div className="logo-clean">
            <div className="logo-icon-clean">
              <svg width="24" height="24" viewBox="0 0 32 32" className="droplet-icon-clean">
                <path d="M16 2C16 2 8 10 8 18C8 22.4183 11.5817 26 16 26C20.4183 26 24 22.4183 24 18C24 10 16 2 16 2Z" fill="#dc3545"/>
                <path d="M12 20C12 20 14 18 16 18C18 18 20 20 20 20" fill="#007bff" opacity="0.6"/>
              </svg>
            </div>
            <span className="logo-text-clean">
              <span className="vital-clean">VITAL</span>
              <span className="drop-clean">DROP</span>
            </span>
          </div>
        </div>

        <nav className="sidebar-nav-clean">
          {/* Main Navigation Items */}
          {menuItems.filter(item => item.section === 'main').map((item, index) => (
            <div
              key={item.name}
              className={`nav-item-clean ${activeSection === item.name ? 'active' : ''}`}
              onClick={() => {
                if (item.path && item.path !== '#') {
                  navigate(item.path);
                } else {
                  handleSectionChange(item.name);
                }
              }}
            >
              <span className="nav-icon-clean">{item.icon}</span>
              <span className="nav-text-clean">{item.name}</span>
            </div>
          ))}

          {/* Separator Line */}
          <div className="nav-separator"></div>

          {/* Secondary Navigation Items */}
          {menuItems.filter(item => item.section === 'secondary').map((item, index) => (
            <div
              key={item.name}
              className={`nav-item-clean ${activeSection === item.name ? 'active' : ''}`}
              onClick={() => {
                if (item.path && item.path !== '#') {
                  navigate(item.path);
                } else {
                  handleSectionChange(item.name);
                }
              }}
            >
              <span className="nav-icon-clean">{item.icon}</span>
              <span className="nav-text-clean">{item.name}</span>
            </div>
          ))}

          {/* Another Separator Line */}
          <div className="nav-separator"></div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content-clean">
        {/* Impressive New Header */}
        <div className="impressive-header">
          <div className="header-background-pattern"></div>
          <div className="header-glow-effect"></div>

          <div className="header-content">
            <div className="header-main">
              <div className="brand-section">
                <div className="brand-icon-container">
                  <div className="brand-icon">
                    <svg width="40" height="40" viewBox="0 0 32 32" className="vitaldrop-icon">
                      <path d="M16 2C16 2 8 10 8 18C8 22.4183 11.5817 26 16 26C20.4183 26 24 22.4183 24 18C24 10 16 2 16 2Z" fill="url(#gradient1)"/>
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ef4444"/>
                          <stop offset="100%" stopColor="#dc2626"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="icon-pulse-ring"></div>
                  <div className="icon-pulse-ring delay-1"></div>
                </div>

                <div className="brand-text">
                  <h1 className="brand-title">
                    <span className="admin-portal-text">Admin Portal</span>
                  </h1>
                  <div className="brand-tagline">Blood Donation Management System</div>
                </div>
              </div>

              <div className="dashboard-title-section">
                <h2 className="dashboard-title">
                  {activeSection === 'Home' ? 'Administrative Dashboard' : activeSection}
                </h2>
                <div className="title-underline"></div>
              </div>
            </div>

            <div className="header-actions">
              {/* Modern Header Design */}
              <div className="modern-header-container">
                {/* Back to Home Button */}
                <div className="back-to-home-section">
                  <button
                    className="back-to-home-btn"
                    onClick={handleBackToHome}
                    title="Go back to homepage"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Home</span>
                  </button>
                </div>

                {/* Welcome Section */}
                <div className="welcome-card">
                  <div className="welcome-content">
                    <div className="welcome-greeting">Welcome back,</div>
                    <div className="admin-name-modern">{adminUser?.name || 'Admin'}</div>
                    <div className="status-badge-modern">
                      <div className="status-dot-modern"></div>
                      <span className="status-text-modern">ONLINE</span>
                    </div>
                  </div>
                </div>

                {/* Modern Notification Bell */}
                <div className="notification-card-modern" style={{ position: 'relative' }}>
                  <div className="notification-glow"></div>
                  <div
                    className="notification-content-modern"
                    onClick={toggleNotifications}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="notification-icon-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="notification-bell-icon">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2"/>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <div className="notification-pulse-ring"></div>
                      <div className="notification-pulse-ring delay"></div>
                    </div>
                    <div className="notification-badge-modern">
                      <span className="notification-count">{dashboardData.notifications?.filter(n => !n.read).length || 0}</span>
                      <div className="badge-shine"></div>
                    </div>
                  </div>
                  <div className="notification-tooltip">
                    <span>New notifications</span>
                  </div>

                  {/* Notification Dropdown */}
                  {notificationOpen && (
                    <div className="notification-dropdown">
                      <div className="notification-dropdown-header">
                        <h3>Notifications</h3>
                        <button
                          className="close-notifications"
                          onClick={() => setNotificationOpen(false)}
                        >
                          ✕
                        </button>
                      </div>
                      <div className="notification-dropdown-body">
                        {dashboardData.notifications?.map(notification => (
                          <div
                            key={notification.id}
                            className={`notification-item ${notification.type} ${notification.read ? 'read' : 'unread'}`}
                            onClick={() => markNotificationAsRead(notification.id)}
                          >
                            <div className="notification-icon">
                              {notification.type === 'success' && '✅'}
                              {notification.type === 'info' && '📊'}
                              {notification.type === 'warning' && '⚠️'}
                              {notification.type === 'urgent' && '🚨'}
                            </div>
                            <div className="notification-content">
                              <div className="notification-title">{notification.title}</div>
                              <div className="notification-text">{notification.message}</div>
                            </div>
                            <div className="notification-time">{notification.time}</div>
                          </div>
                        ))}
                      </div>
                      <div className="notification-dropdown-footer">
                        <button className="view-all-notifications">View All Notifications</button>
                      </div>
                    </div>
                  )}
                </div>




              </div>
            </div>
          </div>

          <div className="header-stats-bar">
            <div className="quick-stat-item">
              <div className="stat-icon">👥</div>
              <div className="stat-info">
                <div className="stat-value">8,547</div>
                <div className="stat-label">Active Donors</div>
              </div>
            </div>
            <div className="quick-stat-item">
              <div className="stat-icon">🩸</div>
              <div className="stat-info">
                <div className="stat-value">15,234</div>
                <div className="stat-label">Units Collected</div>
              </div>
            </div>
            <div className="quick-stat-item">
              <div className="stat-icon">🏥</div>
              <div className="stat-info">
                <div className="stat-value">127</div>
                <div className="stat-label">Partner Hospitals</div>
              </div>
            </div>
            <div className="quick-stat-item urgent">
              <div className="stat-icon">⚡</div>
              <div className="stat-info">
                <div className="stat-value">23</div>
                <div className="stat-label">Urgent Requests</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          {activeSection === 'Home' && (
            <>
              {/* Stats Section Header */}
              <div className="stats-section-header">
                <div className="header-decoration">
                  <div className="pulse-dot"></div>
                  <div className="pulse-dot delay-1"></div>
                  <div className="pulse-dot delay-2"></div>
                </div>
                <h2 className="stats-title">Blood Donation Impact</h2>
                <p className="stats-subtitle">See the lives you're helping save through blood donations</p>
                <div className="live-indicator">
                  <span className="live-dot"></span>
                  <span className="live-text">Live Data</span>
                </div>
              </div>

              {/* System Status Overview */}
              <div className="system-status-overview">
                <div className="status-header">
                  <h3>System Status</h3>
                  <div className="status-indicator">
                    <span className="status-dot online"></span>
                    <span className="status-text">All Systems Operational</span>
                  </div>
                </div>
                <div className="status-grid">
                  <div className="status-item">
                    <div className="status-icon">🏥</div>
                    <div className="status-info">
                      <div className="status-label">Blood Bank</div>
                      <div className="status-value">98% Capacity</div>
                    </div>
                  </div>
                  <div className="status-item">
                    <div className="status-icon">🚨</div>
                    <div className="status-info">
                      <div className="status-label">Emergency Requests</div>
                      <div className="status-value">{dashboardData.emergencyRequests} Active</div>
                    </div>
                  </div>
                  <div className="status-item">
                    <div className="status-icon">📊</div>
                    <div className="status-info">
                      <div className="status-label">Daily Target</div>
                      <div className="status-value">85% Complete</div>
                    </div>
                  </div>
                  <div className="status-item">
                    <div className="status-icon">⏰</div>
                    <div className="status-info">
                      <div className="status-label">Next Drive</div>
                      <div className="status-value">2 Days</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats Bar */}
              <div className="quick-stats-bar">
                <div className="quick-stat">
                  <span className="quick-stat-icon">⚡</span>
                  <span className="quick-stat-text">Live: 47 donations</span>
                </div>
                <div className="quick-stat">
                  <span className="quick-stat-icon">🎯</span>
                  <span className="quick-stat-text">Target: 85% reached</span>
                </div>
                <div className="quick-stat">
                  <span className="quick-stat-icon">🚀</span>
                  <span className="quick-stat-text">Next: 2 days</span>
                </div>
                <div className="quick-stat">
                  <span className="quick-stat-icon">💎</span>
                  <span className="quick-stat-text">Premium: 4.9/5</span>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="stats-section">
                <div className="stat-card donors-card">
                  <div className="card-accent-line"></div>
                  <div className="stat-header">
                    <div className="stat-icon donors-icon">👥</div>
                    <div className="stat-trend-subtle">+12%</div>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">{animatedNumbers.totalDonors.toLocaleString()}</div>
                    <div className="stat-label">Generous Donors</div>
                  </div>
                  <div className="stat-footer">
                    <div className="progress-line">
                      <div className="progress-fill" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="stat-card blood-units-card">
                  <div className="card-accent-line"></div>
                  <div className="stat-header">
                    <div className="stat-icon blood-units-icon">🩸</div>
                    <div className="stat-trend-subtle">+8%</div>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">{animatedNumbers.bloodUnits.toLocaleString()}</div>
                    <div className="stat-label">Lives Saved</div>
                  </div>
                  <div className="stat-footer">
                    <div className="progress-line">
                      <div className="progress-fill" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="stat-card hospitals-card">
                  <div className="card-accent-line"></div>
                  <div className="stat-header">
                    <div className="stat-icon hospitals-icon">🏥</div>
                    <div className="stat-trend-subtle">+15%</div>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">{animatedNumbers.partnerHospitals.toLocaleString()}</div>
                    <div className="stat-label">Healthcare Partners</div>
                  </div>
                  <div className="stat-footer">
                    <div className="progress-line">
                      <div className="progress-fill" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="stat-card emergency-card">
                  <div className="card-accent-line urgent"></div>
                  <div className="stat-header">
                    <div className="stat-icon emergency-icon">⚡</div>
                    <div className="stat-trend-subtle urgent">+23</div>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">{animatedNumbers.emergencyRequests}</div>
                    <div className="stat-label">Urgent Requests</div>
                  </div>
                  <div className="stat-footer">
                    <div className="progress-line">
                      <div className="progress-fill urgent" style={{ width: '23%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="performance-metrics">
                <div className="metric-card">
                  <div className="metric-header">
                    <h3>Weekly Performance</h3>
                    <span className="metric-badge trending-up">📈 +15%</span>
                  </div>
                  <div className="metric-chart">
                    <div className="chart-bar" style={{ height: '60%' }}></div>
                    <div className="chart-bar" style={{ height: '75%' }}></div>
                    <div className="chart-bar" style={{ height: '45%' }}></div>
                    <div className="chart-bar" style={{ height: '90%' }}></div>
                    <div className="chart-bar" style={{ height: '85%' }}></div>
                    <div className="chart-bar" style={{ height: '95%' }}></div>
                    <div className="chart-bar" style={{ height: '100%' }}></div>
                  </div>
                  <div className="metric-labels">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <h3>Blood Type Demand</h3>
                    <span className="metric-badge high-demand">🔥 High</span>
                  </div>
                  <div className="demand-list">
                    <div className="demand-item">
                      <span className="blood-type">O+</span>
                      <div className="demand-bar">
                        <div className="demand-fill" style={{ width: '90%' }}></div>
                      </div>
                      <span className="demand-percent">90%</span>
                    </div>
                    <div className="demand-item">
                      <span className="blood-type">A+</span>
                      <div className="demand-bar">
                        <div className="demand-fill" style={{ width: '75%' }}></div>
                      </div>
                      <span className="demand-percent">75%</span>
                    </div>
                    <div className="demand-item">
                      <span className="blood-type">B+</span>
                      <div className="demand-bar">
                        <div className="demand-fill" style={{ width: '60%' }}></div>
                      </div>
                      <span className="demand-percent">60%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity Section */}
              <div className="activity-section">
                <div className="recent-donations">
                  <div className="section-header">
                    <h3>Recent Donations</h3>
                    <button className="view-all-btn">View All</button>
                  </div>
                  <div className="donations-list">
                    {dashboardData.recentDonations.map((donation, index) => (
                      <div key={donation.id} className="donation-item" style={{ '--item-delay': `${index * 0.1}s` }}>
                        <div className="donor-avatar">
                          <span>{donation.donor.charAt(0)}</span>
                        </div>
                        <div className="donation-details">
                          <div className="donor-name">{donation.donor}</div>
                          <div className="donation-meta">
                            <span className="blood-type">{donation.bloodType}</span>
                            <span className="donation-amount">{donation.amount}</span>
                            <span className="donation-date">{donation.date}</span>
                          </div>
                        </div>
                        <div className="donation-status">
                          <span className="status-badge completed">✓</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="blood-group-distribution">
                  <div className="section-header">
                    <h3>Blood Group Distribution</h3>
                    <button className="refresh-btn">🔄</button>
                  </div>
                  <div className="distribution-grid">
                    {Object.entries(dashboardData.bloodGroupDistribution).map(([bloodType, percentage], index) => (
                      <div key={bloodType} className="distribution-item" style={{ '--item-delay': `${index * 0.1}s` }}>
                        <div className="percentage-display">
                          <div className="percentage-number">{percentage}%</div>
                          <div className="blood-type-name">{bloodType}</div>
                        </div>
                        <div className="percentage-bar">
                          <div
                            className="percentage-fill"
                            style={{
                              width: `${percentage}%`,
                              backgroundColor: getBloodTypeColor(bloodType)
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>


            </>
          )}

          {/* Profile Section */}
          {activeSection === 'Profile' && (
            <div className="section-content profile-section">
              <div className="section-header">
                <h2>Admin Profile</h2>
                <button className="edit-btn">✏️ Edit Profile</button>
              </div>
              <div className="profile-container">
                <div className="profile-card">
                  <div className="profile-avatar-large">
                    <span>{adminUser?.name?.charAt(0) || 'A'}</span>
                  </div>
                  <div className="profile-info">
                    <h3>{adminUser?.name || 'Admin User'}</h3>
                    <p className="profile-role">System Administrator</p>
                    <p className="profile-email">{adminUser?.email || 'admin@vitaldrop.com'}</p>
                  </div>
                </div>
                <div className="profile-stats">
                  <div className="stat-item">
                    <div className="stat-number">156</div>
                    <div className="stat-label">Approvals Made</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">89</div>
                    <div className="stat-label">Days Active</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">24</div>
                    <div className="stat-label">Reports Generated</div>
                  </div>
                </div>
                <div className="profile-details">
                  <div className="detail-row">
                    <span className="detail-label">Department:</span>
                    <span className="detail-value">Blood Bank Management</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Access Level:</span>
                    <span className="detail-value">Full Administrator</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Last Login:</span>
                    <span className="detail-value">Today, 2:30 PM</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Account Status:</span>
                    <span className="detail-value status-active">Active</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Donors Section */}
          {activeSection === 'Donors' && (
            <div className="section-content donors-section">
              <div className="section-header">
                <h2>Donor Management</h2>
                <button className="add-btn">+ Add New Donor</button>
              </div>
              <div className="donors-table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Blood Type</th>
                      <th>Phone</th>
                      <th>Last Donation</th>
                      <th>Total Donations</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donorsData.map((donor) => (
                      <tr key={donor.id}>
                        <td className="name-cell">
                          <div className="donor-avatar">
                            <span>{donor.name.charAt(0)}</span>
                          </div>
                          <span>{donor.name}</span>
                        </td>
                        <td>{donor.email}</td>
                        <td>
                          <span className={`blood-type-badge ${donor.bloodType.toLowerCase().replace('+', 'pos').replace('-', 'neg')}`}>
                            {donor.bloodType}
                          </span>
                        </td>
                        <td>{donor.phone}</td>
                        <td>{donor.lastDonation}</td>
                        <td>
                          <span className="donation-count">{donor.totalDonations}</span>
                        </td>
                        <td>
                          <span className={`status-badge ${donor.status.toLowerCase()}`}>
                            {donor.status}
                          </span>
                        </td>
                        <td>
                          <button className="action-btn view">👁️</button>
                          <button className="action-btn edit">✏️</button>
                          <button className="action-btn contact">📞</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Eligibility Approvals Section */}
          {activeSection === 'Eligibility Approvals' && (
            <div className="section-content eligibility-approvals-section">
              {/* Modern Section Header */}
              <div className="eligibility-header">
                <div className="header-content">
                  <div className="header-icon-container">
                    <div className="header-icon">✅</div>
                    <div className="icon-glow"></div>
                  </div>
                  <div className="header-text">
                    <h2 className="section-title">Donor Eligibility Approvals</h2>
                    <p className="section-subtitle">Review and approve donor applications based on eligibility criteria</p>
                  </div>
                </div>
                <div className="header-actions">
                  <select
                    className="modern-filter-select"
                    value={approvalFilter}
                    onChange={handleFilterChange}
                  >
                    <option value="all">All Applications ({pendingApprovals.length})</option>
                    <option value="pending">Pending Review ({pendingApprovals.filter(app => app.status === 'pending').length})</option>
                    <option value="urgent">Urgent Priority ({pendingApprovals.filter(app => app.priority === 'urgent').length})</option>
                    <option value="review">Needs Review ({pendingApprovals.filter(app => app.priority === 'review' || app.status === 'info_requested').length})</option>
                    <option value="normal">Normal Priority ({pendingApprovals.filter(app => app.priority === 'normal').length})</option>
                  </select>
                  <button
                    className="modern-action-btn primary"
                    onClick={handleBulkApprove}
                    title="Approve all eligible applications"
                  >
                    <span className="btn-icon">✅</span>
                    Bulk Approve
                  </button>
                </div>
              </div>

              {/* Approval Statistics */}
              <div className="approval-stats">
                <div className="approval-stat-card">
                  <div className="stat-icon">📋</div>
                  <div className="stat-info">
                    <div className="stat-number">{pendingApprovals.length}</div>
                    <div className="stat-label">Pending Applications</div>
                  </div>
                  <div className="stat-trend positive">+3 today</div>
                </div>
                <div className="approval-stat-card">
                  <div className="stat-icon">⚡</div>
                  <div className="stat-info">
                    <div className="stat-number">{pendingApprovals.filter(a => a.priority === 'urgent').length}</div>
                    <div className="stat-label">Urgent Reviews</div>
                  </div>
                  <div className="stat-trend urgent">Action needed</div>
                </div>
                <div className="approval-stat-card">
                  <div className="stat-icon">⚠️</div>
                  <div className="stat-info">
                    <div className="stat-number">{pendingApprovals.filter(a => a.priority === 'review').length}</div>
                    <div className="stat-label">Needs Review</div>
                  </div>
                  <div className="stat-trend warning">Medical check</div>
                </div>
                <div className="approval-stat-card">
                  <div className="stat-icon">✅</div>
                  <div className="stat-info">
                    <div className="stat-number">89%</div>
                    <div className="stat-label">Approval Rate</div>
                  </div>
                  <div className="stat-trend positive">+2% this month</div>
                </div>
              </div>

              {/* Approval Applications Grid */}
              <div className="approval-applications-grid">
                {getFilteredApplications().length === 0 ? (
                  <div className="no-applications-message">
                    <div className="no-apps-icon">📋</div>
                    <h3>No applications found</h3>
                    <p>No applications match the current filter criteria.</p>
                  </div>
                ) : (
                  getFilteredApplications().map(application => (
                  <div key={application.id} className={`approval-application-card ${application.priority}`}>
                    {/* Application Header */}
                    <div className="application-header">
                      <div className="applicant-info">
                        <div className="applicant-avatar">
                          <span>{application.name.charAt(0)}</span>
                        </div>
                        <div className="applicant-details">
                          <h3 className="applicant-name">{application.name}</h3>
                          <p className="applicant-email">{application.email}</p>
                          <p className="applicant-phone">{application.phone}</p>
                        </div>
                      </div>
                      <div className="application-meta">
                        <div className={`priority-badge ${application.priority}`}>
                          {application.priority === 'urgent' && '🚨'}
                          {application.priority === 'review' && '⚠️'}
                          {application.priority === 'normal' && '📋'}
                          {application.priority.toUpperCase()}
                        </div>
                        <div className="submission-date">
                          Submitted: {new Date(application.submissionDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    {/* Basic Information */}
                    <div className="application-basic-info">
                      <div className="info-grid">
                        <div className="info-item">
                          <span className="info-label">Age:</span>
                          <span className="info-value">{application.age} years</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Weight:</span>
                          <span className="info-value">{application.weight} kg</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Blood Type:</span>
                          <span className={`blood-type-badge ${application.bloodType.toLowerCase().replace('+', 'pos').replace('-', 'neg')}`}>
                            {application.bloodType}
                          </span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Address:</span>
                          <span className="info-value">{application.address}</span>
                        </div>
                      </div>
                    </div>

                    {/* Eligibility Checklist */}
                    <div className="eligibility-checklist">
                      <h4>Eligibility Criteria</h4>
                      <div className="criteria-grid">
                        <div className={`criteria-item ${application.eligibilityChecks.ageRequirement ? 'passed' : 'failed'}`}>
                          <span className="criteria-icon">
                            {application.eligibilityChecks.ageRequirement ? '✅' : '❌'}
                          </span>
                          <span className="criteria-text">Age Requirement (18-65)</span>
                        </div>
                        <div className={`criteria-item ${application.eligibilityChecks.weightRequirement ? 'passed' : 'failed'}`}>
                          <span className="criteria-icon">
                            {application.eligibilityChecks.weightRequirement ? '✅' : '❌'}
                          </span>
                          <span className="criteria-text">Weight Requirement (≥50kg)</span>
                        </div>
                        <div className={`criteria-item ${application.eligibilityChecks.healthStatus ? 'passed' : 'failed'}`}>
                          <span className="criteria-icon">
                            {application.eligibilityChecks.healthStatus ? '✅' : '❌'}
                          </span>
                          <span className="criteria-text">Health Status</span>
                        </div>
                        <div className={`criteria-item ${application.eligibilityChecks.donationInterval ? 'passed' : 'failed'}`}>
                          <span className="criteria-icon">
                            {application.eligibilityChecks.donationInterval ? '✅' : '❌'}
                          </span>
                          <span className="criteria-text">Donation Interval</span>
                        </div>
                        <div className={`criteria-item ${application.eligibilityChecks.riskFactors ? 'passed' : 'failed'}`}>
                          <span className="criteria-icon">
                            {application.eligibilityChecks.riskFactors ? '✅' : '❌'}
                          </span>
                          <span className="criteria-text">Risk Factors</span>
                        </div>
                      </div>
                    </div>

                    {/* Medical History Summary */}
                    <div className="medical-history-summary">
                      <h4>Medical History</h4>
                      <div className="medical-grid">
                        <div className="medical-item">
                          <span className="medical-label">Diseases:</span>
                          <span className="medical-value">{application.medicalHistory.diseases}</span>
                        </div>
                        <div className="medical-item">
                          <span className="medical-label">Medications:</span>
                          <span className="medical-value">{application.medicalHistory.medications}</span>
                        </div>
                        <div className="medical-item">
                          <span className="medical-label">Allergies:</span>
                          <span className="medical-value">{application.medicalHistory.allergies}</span>
                        </div>
                        <div className="medical-item">
                          <span className="medical-label">Last Donation:</span>
                          <span className="medical-value">{application.medicalHistory.lastDonation}</span>
                        </div>
                      </div>
                    </div>

                    {/* Documents */}
                    <div className="documents-section">
                      <h4>Submitted Documents</h4>
                      <div className="documents-list">
                        {application.documents.map((doc, index) => (
                          <div key={index} className="document-item">
                            <span className="document-icon">📄</span>
                            <span className="document-name">{doc}</span>
                            <button
                              className="document-view-btn"
                              onClick={() => handleViewDocument(application.id, doc)}
                              title={`View ${doc}`}
                            >
                              👁️
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="application-actions">
                      <button
                        className="action-btn approve-btn"
                        onClick={() => handleApproveApplication(application.id)}
                      >
                        <span className="btn-icon">✅</span>
                        Approve Application
                      </button>
                      <button
                        className="action-btn reject-btn"
                        onClick={() => handleRejectApplication(application.id)}
                      >
                        <span className="btn-icon">❌</span>
                        Reject Application
                      </button>
                      <button
                        className="action-btn review-btn"
                        onClick={() => handleRequestMoreInfo(application.id)}
                      >
                        <span className="btn-icon">📋</span>
                        Request More Info
                      </button>
                      <button
                        className="action-btn details-btn"
                        onClick={() => handleViewFullDetails(application.id)}
                      >
                        <span className="btn-icon">👁️</span>
                        View Full Details
                      </button>
                    </div>
                  </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Prospects Section - Blood Inventory Management */}
          {activeSection === 'Prospects' && (
            <div className="section-content prospects-section">
              <div className="section-header">
                <h2>Blood Inventory Management</h2>
                <div className="header-actions">
                  <button className="add-btn">+ Add Stock</button>
                  <button className="export-btn">📊 Export Report</button>
                </div>
              </div>

              <div className="inventory-overview">
                <div className="inventory-stat-card">
                  <div className="stat-icon">🩸</div>
                  <div className="stat-info">
                    <div className="stat-number">{Object.values(dashboardData.bloodInventory || {}).reduce((sum, blood) => sum + blood.units, 0)}</div>
                    <div className="stat-label">Total Units</div>
                  </div>
                </div>
                <div className="inventory-stat-card">
                  <div className="stat-icon">⚠️</div>
                  <div className="stat-info">
                    <div className="stat-number">{Object.values(dashboardData.bloodInventory || {}).reduce((sum, blood) => sum + blood.expiring, 0)}</div>
                    <div className="stat-label">Expiring Soon</div>
                  </div>
                </div>
                <div className="inventory-stat-card">
                  <div className="stat-icon">🔒</div>
                  <div className="stat-info">
                    <div className="stat-number">{Object.values(dashboardData.bloodInventory || {}).reduce((sum, blood) => sum + blood.reserved, 0)}</div>
                    <div className="stat-label">Reserved</div>
                  </div>
                </div>
                <div className="inventory-stat-card">
                  <div className="stat-icon">✅</div>
                  <div className="stat-info">
                    <div className="stat-number">{Object.values(dashboardData.bloodInventory || {}).reduce((sum, blood) => sum + blood.available, 0)}</div>
                    <div className="stat-label">Available</div>
                  </div>
                </div>
              </div>

              <div className="blood-inventory-grid">
                {Object.entries(dashboardData.bloodInventory || {}).map(([bloodType, data]) => (
                  <div key={bloodType} className="blood-type-card">
                    <div className="blood-type-header">
                      <div className="blood-type-badge" style={{ backgroundColor: getBloodTypeColor(bloodType) }}>
                        {bloodType}
                      </div>
                      <div className="blood-type-status">
                        {data.units < 20 ? (
                          <span className="status-low">Low Stock</span>
                        ) : data.units < 35 ? (
                          <span className="status-medium">Medium</span>
                        ) : (
                          <span className="status-good">Good Stock</span>
                        )}
                      </div>
                    </div>

                    <div className="blood-type-stats">
                      <div className="stat-row">
                        <span className="stat-label">Total Units:</span>
                        <span className="stat-value">{data.units}</span>
                      </div>
                      <div className="stat-row">
                        <span className="stat-label">Available:</span>
                        <span className="stat-value available">{data.available}</span>
                      </div>
                      <div className="stat-row">
                        <span className="stat-label">Reserved:</span>
                        <span className="stat-value reserved">{data.reserved}</span>
                      </div>
                      <div className="stat-row">
                        <span className="stat-label">Expiring:</span>
                        <span className="stat-value expiring">{data.expiring}</span>
                      </div>
                    </div>

                    <div className="blood-type-progress">
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${(data.available / data.units) * 100}%`,
                            backgroundColor: getBloodTypeColor(bloodType)
                          }}
                        ></div>
                      </div>
                      <div className="progress-label">
                        {Math.round((data.available / data.units) * 100)}% Available
                      </div>
                    </div>

                    <div className="blood-type-actions">
                      <button className="action-btn primary">📦 Add Stock</button>
                      <button className="action-btn secondary">📋 View Details</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="prospects-table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Blood Type</th>
                      <th>Source</th>
                      <th>Status</th>
                      <th>Priority</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prospectsData.map((prospect) => (
                      <tr key={prospect.id}>
                        <td className="name-cell">
                          <div className="prospect-avatar">
                            <span>{prospect.name.charAt(0)}</span>
                          </div>
                          <span>{prospect.name}</span>
                        </td>
                        <td>{prospect.email}</td>
                        <td>{prospect.phone}</td>
                        <td>
                          <span className={`blood-type-badge ${prospect.bloodType.toLowerCase().replace('+', 'pos').replace('-', 'neg')}`}>
                            {prospect.bloodType}
                          </span>
                        </td>
                        <td>
                          <span className="source-badge">{prospect.source}</span>
                        </td>
                        <td>
                          <span className={`status-badge ${prospect.status.toLowerCase()}`}>
                            {prospect.status}
                          </span>
                        </td>
                        <td>
                          <span className={`priority-badge ${prospect.priority.toLowerCase()}`}>
                            {prospect.priority}
                          </span>
                        </td>
                        <td>
                          <button className="action-btn contact">📞</button>
                          <button className="action-btn email">📧</button>
                          <button className="action-btn convert">✅</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Orders Section */}
          {activeSection === 'Orders' && (
            <div className="section-content orders-section">
              <div className="section-header">
                <h2>Emergency Blood Orders & Requests</h2>
                <button className="add-btn">+ New Emergency Order</button>
              </div>
              <div className="orders-stats">
                <div className="stat-card critical">
                  <div className="stat-icon">🚨</div>
                  <div className="stat-info">
                    <div className="stat-number">{dashboardData.emergencyOrders?.filter(o => o.urgency === 'Critical').length || 0}</div>
                    <div className="stat-label">Critical Orders</div>
                  </div>
                </div>
                <div className="stat-card pending">
                  <div className="stat-icon">⏳</div>
                  <div className="stat-info">
                    <div className="stat-number">{dashboardData.emergencyOrders?.filter(o => o.status === 'Pending').length || 0}</div>
                    <div className="stat-label">Pending Orders</div>
                  </div>
                </div>
                <div className="stat-card processing">
                  <div className="stat-icon">🔄</div>
                  <div className="stat-info">
                    <div className="stat-number">{dashboardData.emergencyOrders?.filter(o => o.status === 'Processing').length || 0}</div>
                    <div className="stat-label">Processing</div>
                  </div>
                </div>
                <div className="stat-card completed">
                  <div className="stat-icon">✅</div>
                  <div className="stat-info">
                    <div className="stat-number">{dashboardData.emergencyOrders?.filter(o => o.status === 'Delivered').length || 0}</div>
                    <div className="stat-label">Delivered Today</div>
                  </div>
                </div>
              </div>

              <div className="emergency-orders-list">
                {dashboardData.emergencyOrders?.map(order => (
                  <div key={order.id} className={`emergency-order-card ${order.urgency.toLowerCase()}`}>
                    <div className="order-header">
                      <div className="hospital-info">
                        <div className="hospital-icon">🏥</div>
                        <div className="hospital-details">
                          <div className="hospital-name">{order.hospital}</div>
                          <div className="contact-person">Contact: {order.contact}</div>
                          <div className="hospital-address">{order.address}</div>
                        </div>
                      </div>
                      <div className="order-meta">
                        <div className={`urgency-badge ${order.urgency.toLowerCase()}`}>
                          {order.urgency === 'Critical' && '🚨'} {order.urgency}
                        </div>
                        <div className={`status-badge ${order.status.toLowerCase()}`}>
                          {order.status}
                        </div>
                        <div className="order-time">{order.date}</div>
                      </div>
                    </div>

                    <div className="order-details">
                      <div className="blood-request">
                        <div className="blood-type-display">
                          <span className="blood-type-badge" style={{ backgroundColor: getBloodTypeColor(order.bloodType) }}>
                            {order.bloodType}
                          </span>
                          <span className="units-needed">{order.units} units needed</span>
                        </div>
                      </div>
                    </div>

                    <div className="order-actions">
                      {order.status === 'Pending' && (
                        <>
                          <button className="action-btn approve-btn">
                            <span className="btn-icon">✅</span>
                            Approve & Process
                          </button>
                          <button className="action-btn assign-btn">
                            <span className="btn-icon">📦</span>
                            Assign Stock
                          </button>
                        </>
                      )}
                      {order.status === 'Processing' && (
                        <>
                          <button className="action-btn dispatch-btn">
                            <span className="btn-icon">🚚</span>
                            Dispatch
                          </button>
                          <button className="action-btn track-btn">
                            <span className="btn-icon">📍</span>
                            Track
                          </button>
                        </>
                      )}
                      <button className="action-btn contact-btn">
                        <span className="btn-icon">📞</span>
                        Contact Hospital
                      </button>
                      <button className="action-btn details-btn">
                        <span className="btn-icon">👁️</span>
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="orders-table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Hospital</th>
                      <th>Blood Type</th>
                      <th>Units</th>
                      <th>Urgency</th>
                      <th>Status</th>
                      <th>Request Date</th>
                      <th>Required By</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ordersData.map((order) => (
                      <tr key={order.id} className={order.urgency === 'Critical' ? 'critical-row' : ''}>
                        <td className="hospital-cell">
                          <div className="hospital-icon">🏥</div>
                          <span>{order.hospital}</span>
                        </td>
                        <td>
                          <span className={`blood-type-badge ${order.bloodType.toLowerCase().replace('+', 'pos').replace('-', 'neg')}`}>
                            {order.bloodType}
                          </span>
                        </td>
                        <td>
                          <span className="units-badge">{order.units} units</span>
                        </td>
                        <td>
                          <span className={`urgency-badge ${order.urgency.toLowerCase()}`}>
                            {order.urgency}
                          </span>
                        </td>
                        <td>
                          <span className={`status-badge ${order.status.toLowerCase()}`}>
                            {order.status}
                          </span>
                        </td>
                        <td>{order.requestDate}</td>
                        <td className={new Date(order.requiredBy) <= new Date() ? 'overdue' : ''}>
                          {order.requiredBy}
                        </td>
                        <td>
                          <button className="action-btn fulfill">✅</button>
                          <button className="action-btn contact">📞</button>
                          <button className="action-btn details">👁️</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeSection === 'Analytics' && (
            <div className="section-content analytics-section">
              <div className="section-header">
                <h2>Analytics & Reports</h2>
                <button className="export-btn">📊 Export</button>
              </div>
              <div className="analytics-container">
                <p className="coming-soon">Analytics dashboard coming soon...</p>
              </div>
            </div>
          )}



          {/* Settings Section */}
          {activeSection === 'Settings' && (
            <div className="section-content settings-section">
              <div className="section-header">
                <h2>System Settings</h2>
                <button className="save-btn">💾 Save Changes</button>
              </div>
              <div className="settings-container">
                <div className="settings-grid">
                  <div className="settings-card">
                    <h3>🔔 Notifications</h3>
                    <div className="setting-item">
                      <label>Email Notifications</label>
                      <input type="checkbox" checked={settingsData.notifications?.email} readOnly />
                    </div>
                    <div className="setting-item">
                      <label>SMS Alerts</label>
                      <input type="checkbox" checked={settingsData.notifications?.sms} readOnly />
                    </div>
                    <div className="setting-item">
                      <label>Push Notifications</label>
                      <input type="checkbox" checked={settingsData.notifications?.push} readOnly />
                    </div>
                  </div>

                  <div className="settings-card">
                    <h3>🔒 Security</h3>
                    <div className="setting-item">
                      <label>Two-Factor Authentication</label>
                      <input type="checkbox" checked={settingsData.security?.twoFactor} readOnly />
                    </div>
                    <div className="setting-item">
                      <label>Session Timeout (minutes)</label>
                      <input type="number" value={settingsData.security?.sessionTimeout} readOnly />
                    </div>
                    <div className="setting-item">
                      <label>Password Expiry (days)</label>
                      <input type="number" value={settingsData.security?.passwordExpiry} readOnly />
                    </div>
                  </div>

                  <div className="settings-card">
                    <h3>⚙️ System</h3>
                    <div className="setting-item">
                      <label>Auto Backup</label>
                      <input type="checkbox" checked={settingsData.system?.autoBackup} readOnly />
                    </div>
                    <div className="setting-item">
                      <label>Maintenance Mode</label>
                      <input type="checkbox" checked={settingsData.system?.maintenanceMode} readOnly />
                    </div>
                    <div className="setting-item">
                      <label>Debug Mode</label>
                      <input type="checkbox" checked={settingsData.system?.debugMode} readOnly />
                    </div>
                  </div>

                  <div className="settings-card">
                    <h3>🎨 Preferences</h3>
                    <div className="setting-item">
                      <label>Theme</label>
                      <select value={settingsData.preferences?.theme} readOnly>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                      </select>
                    </div>
                    <div className="setting-item">
                      <label>Language</label>
                      <select value={settingsData.preferences?.language} readOnly>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                      </select>
                    </div>
                    <div className="setting-item">
                      <label>Timezone</label>
                      <select value={settingsData.preferences?.timezone} readOnly>
                        <option value="UTC-5">UTC-5</option>
                        <option value="UTC-6">UTC-6</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Backups Section */}
          {activeSection === 'Backups' && (
            <div className="section-content backups-section">
              <div className="section-header">
                <h2>System Backups</h2>
                <button className="backup-btn">💾 Create Backup</button>
              </div>
              <div className="backups-container">
                <div className="backup-stats">
                  <div className="stat-card">
                    <div className="stat-icon">📁</div>
                    <div className="stat-info">
                      <div className="stat-number">12</div>
                      <div className="stat-label">Total Backups</div>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">⏰</div>
                    <div className="stat-info">
                      <div className="stat-number">2h ago</div>
                      <div className="stat-label">Last Backup</div>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">💾</div>
                    <div className="stat-info">
                      <div className="stat-number">2.4 GB</div>
                      <div className="stat-label">Total Size</div>
                    </div>
                  </div>
                </div>
                <div className="backups-list">
                  <div className="backup-item">
                    <div className="backup-info">
                      <div className="backup-name">Daily_Backup_2024-01-22</div>
                      <div className="backup-details">Size: 245 MB • Created: Today 2:00 AM</div>
                    </div>
                    <div className="backup-actions">
                      <button className="action-btn download">⬇️</button>
                      <button className="action-btn restore">🔄</button>
                      <button className="action-btn delete">🗑️</button>
                    </div>
                  </div>
                  <div className="backup-item">
                    <div className="backup-info">
                      <div className="backup-name">Weekly_Backup_2024-01-21</div>
                      <div className="backup-details">Size: 512 MB • Created: Yesterday 11:30 PM</div>
                    </div>
                    <div className="backup-actions">
                      <button className="action-btn download">⬇️</button>
                      <button className="action-btn restore">🔄</button>
                      <button className="action-btn delete">🗑️</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Charts Section */}
          {activeSection === 'Charts' && (
            <div className="section-content charts-section">
              <div className="section-header">
                <h2>Analytics & Charts</h2>
                <button className="export-btn">📊 Export Data</button>
              </div>
              <div className="charts-container">
                <div className="chart-card">
                  <h3>Monthly Donation Trends</h3>
                  <div className="chart-placeholder">
                    <div className="chart-bars">
                      {chartsData.donationTrends?.map((value, index) => (
                        <div key={index} className="chart-bar" style={{ height: `${value}%` }}>
                          <span className="bar-value">{value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="chart-labels">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
                        <span key={month}>{month}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="chart-card">
                  <h3>Blood Type Distribution</h3>
                  <div className="pie-chart-placeholder">
                    {Object.entries(chartsData.bloodTypeDistribution || {}).map(([type, percentage]) => (
                      <div key={type} className="pie-segment">
                        <span className="segment-label">{type}: {percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="chart-card">
                  <h3>Monthly Statistics</h3>
                  <div className="stats-grid">
                    <div className="stat-item">
                      <div className="stat-number">{chartsData.monthlyStats?.donations}</div>
                      <div className="stat-label">Donations</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">{chartsData.monthlyStats?.newDonors}</div>
                      <div className="stat-label">New Donors</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">{chartsData.monthlyStats?.emergencyRequests}</div>
                      <div className="stat-label">Emergency Requests</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">{chartsData.monthlyStats?.hospitalPartners}</div>
                      <div className="stat-label">Hospital Partners</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Profile Section */}
          {activeSection === 'Profile' && (
            <div className="section-content profile-section">
              <div className="section-header">
                <h2>Admin Profile</h2>
                <button className="edit-profile-btn">✏️ Edit Profile</button>
              </div>

              <div className="profile-container">
                <div className="profile-card">
                  <div className="profile-avatar-large">
                    <span>{adminUser?.name?.charAt(0) || 'A'}</span>
                  </div>
                  <div className="profile-info">
                    <h3 className="profile-name">{adminUser?.name || 'Admin'}</h3>
                    <p className="profile-role">System Administrator</p>
                    <div className="profile-status">
                      <span className="status-dot online"></span>
                      <span className="status-text">Online</span>
                    </div>
                  </div>
                </div>

                <div className="profile-details-grid">
                  <div className="detail-card">
                    <div className="detail-icon">📧</div>
                    <div className="detail-info">
                      <div className="detail-label">Email</div>
                      <div className="detail-value">admin@vitaldrop.com</div>
                    </div>
                  </div>
                  <div className="detail-card">
                    <div className="detail-icon">🔐</div>
                    <div className="detail-info">
                      <div className="detail-label">Role</div>
                      <div className="detail-value">System Administrator</div>
                    </div>
                  </div>
                  <div className="detail-card">
                    <div className="detail-icon">⏰</div>
                    <div className="detail-info">
                      <div className="detail-label">Last Login</div>
                      <div className="detail-value">Today, 2:30 PM</div>
                    </div>
                  </div>
                  <div className="detail-card">
                    <div className="detail-icon">🛡️</div>
                    <div className="detail-info">
                      <div className="detail-label">Account Status</div>
                      <div className="detail-value">Active</div>
                    </div>
                  </div>
                </div>

                <div className="profile-settings">
                  <h4>Security Settings</h4>
                  <div className="settings-grid">
                    <div className="setting-item">
                      <div className="setting-info">
                        <div className="setting-label">Two-Factor Authentication</div>
                        <div className="setting-description">Add an extra layer of security</div>
                      </div>
                      <div className="setting-toggle">
                        <input type="checkbox" id="2fa" defaultChecked />
                        <label htmlFor="2fa" className="toggle-switch"></label>
                      </div>
                    </div>
                    <div className="setting-item">
                      <div className="setting-info">
                        <div className="setting-label">Email Notifications</div>
                        <div className="setting-description">Receive updates via email</div>
                      </div>
                      <div className="setting-toggle">
                        <input type="checkbox" id="email-notif" defaultChecked />
                        <label htmlFor="email-notif" className="toggle-switch"></label>
                      </div>
                    </div>
                    <div className="setting-item">
                      <div className="setting-info">
                        <div className="setting-label">SMS Alerts</div>
                        <div className="setting-description">Get emergency alerts via SMS</div>
                      </div>
                      <div className="setting-toggle">
                        <input type="checkbox" id="sms-alerts" />
                        <label htmlFor="sms-alerts" className="toggle-switch"></label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="profile-activity">
                  <h4>Recent Activity</h4>
                  <div className="activity-list">
                    <div className="activity-item">
                      <div className="activity-icon">👥</div>
                      <div className="activity-info">
                        <div className="activity-text">Approved 3 new donor registrations</div>
                        <div className="activity-time">2 hours ago</div>
                      </div>
                    </div>
                    <div className="activity-item">
                      <div className="activity-icon">📊</div>
                      <div className="activity-info">
                        <div className="activity-text">Generated monthly blood inventory report</div>
                        <div className="activity-time">5 hours ago</div>
                      </div>
                    </div>
                    <div className="activity-item">
                      <div className="activity-icon">🚨</div>
                      <div className="activity-info">
                        <div className="activity-text">Processed emergency blood request</div>
                        <div className="activity-time">1 day ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}



          {/* Calendar Section */}
          {activeSection === 'Calendar' && (
            <div className="section-content calendar-section">
              <div className="section-header">
                <h2>Event Calendar</h2>
                <button className="add-btn">+ Add Event</button>
              </div>
              <div className="calendar-container">
                <div className="calendar-header">
                  <button className="nav-btn">‹</button>
                  <h3>January 2024</h3>
                  <button className="nav-btn">›</button>
                </div>
                <div className="calendar-grid">
                  <div className="calendar-day-header">Sun</div>
                  <div className="calendar-day-header">Mon</div>
                  <div className="calendar-day-header">Tue</div>
                  <div className="calendar-day-header">Wed</div>
                  <div className="calendar-day-header">Thu</div>
                  <div className="calendar-day-header">Fri</div>
                  <div className="calendar-day-header">Sat</div>

                  {Array.from({ length: 31 }, (_, i) => (
                    <div key={i + 1} className={`calendar-day ${i + 1 === 22 ? 'today' : ''}`}>
                      <span className="day-number">{i + 1}</span>
                      {calendarEvents.filter(event => new Date(event.date).getDate() === i + 1).map(event => (
                        <div key={event.id} className={`event-dot ${event.type}`} title={event.title}></div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="upcoming-events">
                  <h4>Upcoming Events</h4>
                  {calendarEvents.map(event => (
                    <div key={event.id} className="event-item">
                      <div className="event-date">{event.date}</div>
                      <div className="event-details">
                        <div className="event-title">{event.title}</div>
                        <div className="event-meta">{event.time} • {event.location}</div>
                      </div>
                      <div className={`event-type-badge ${event.type}`}>{event.type}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Floating Notifications */}
      <div className="floating-notifications">
        <div className="notification-item success">
          <div className="notification-icon">✅</div>
          <div className="notification-content">
            <div className="notification-title">New Donation</div>
            <div className="notification-text">John Doe donated O+ blood</div>
          </div>
          <div className="notification-time">2m ago</div>
        </div>

        <div className="notification-item info">
          <div className="notification-icon">📊</div>
          <div className="notification-content">
            <div className="notification-title">Daily Goal</div>
            <div className="notification-text">85% of today's goal achieved</div>
          </div>
          <div className="notification-time">5m ago</div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="floating-action-btn">
        <button className="fab-main">
          <span className="fab-icon">+</span>
        </button>
        <div className="fab-menu">
          <button className="fab-item" title="Add Donor">👥</button>
          <button className="fab-item" title="Blood Request">🩸</button>
          <button className="fab-item" title="Emergency">🚨</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
