import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BloodInventory.css';

const BloodInventory = () => {
  const [inventoryData, setInventoryData] = useState({
    bloodTypes: [
      { type: 'A+', current: 45, minimum: 20, maximum: 100, status: 'good', lastUpdated: '2024-02-15 14:30' },
      { type: 'A-', current: 12, minimum: 15, maximum: 50, status: 'low', lastUpdated: '2024-02-15 14:25' },
      { type: 'B+', current: 38, minimum: 20, maximum: 80, status: 'good', lastUpdated: '2024-02-15 14:20' },
      { type: 'B-', current: 8, minimum: 10, maximum: 40, status: 'critical', lastUpdated: '2024-02-15 14:15' },
      { type: 'AB+', current: 15, minimum: 10, maximum: 30, status: 'good', lastUpdated: '2024-02-15 14:10' },
      { type: 'AB-', current: 3, minimum: 5, maximum: 20, status: 'critical', lastUpdated: '2024-02-15 14:05' },
      { type: 'O+', current: 67, minimum: 30, maximum: 120, status: 'good', lastUpdated: '2024-02-15 14:35' },
      { type: 'O-', current: 18, minimum: 25, maximum: 60, status: 'low', lastUpdated: '2024-02-15 14:00' }
    ],
    totalUnits: 206,
    expiringUnits: 12,
    recentTransactions: [
      { id: 1, type: 'donation', bloodType: 'O+', units: 2, donor: 'John Smith', time: '14:30', date: '2024-02-15' },
      { id: 2, type: 'request', bloodType: 'A-', units: 1, hospital: 'City Hospital', time: '14:15', date: '2024-02-15' },
      { id: 3, type: 'donation', bloodType: 'B+', units: 1, donor: 'Sarah Johnson', time: '13:45', date: '2024-02-15' },
      { id: 4, type: 'request', bloodType: 'O-', units: 3, hospital: 'Emergency Center', time: '13:20', date: '2024-02-15' },
      { id: 5, type: 'donation', bloodType: 'AB+', units: 1, donor: 'Mike Wilson', time: '12:50', date: '2024-02-15' }
    ]
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const getStatusColor = (status) => {
    switch (status) {
      case 'critical': return '#ef4444';
      case 'low': return '#f59e0b';
      case 'good': return '#22c55e';
      default: return '#64748b';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'critical': return '🚨';
      case 'low': return '⚠️';
      case 'good': return '✅';
      default: return '📊';
    }
  };

  const filteredBloodTypes = inventoryData.bloodTypes.filter(blood => {
    const matchesFilter = activeFilter === 'all' || blood.status === activeFilter;
    const matchesSearch = blood.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const criticalCount = inventoryData.bloodTypes.filter(b => b.status === 'critical').length;
  const lowCount = inventoryData.bloodTypes.filter(b => b.status === 'low').length;

  return (
    <div className="blood-inventory">
      {/* Header */}
      <div className="inventory-header">
        <div className="header-left">
          <button className="back-btn" onClick={() => navigate('/admin-dashboard')}>
            ← Back to Dashboard
          </button>
          <div className="header-title">
            <h1>Blood Inventory Management</h1>
            <p>Real-time blood stock monitoring and management system</p>
          </div>
        </div>
        <div className="header-actions">
          <button className="refresh-btn">
            <span className="refresh-icon">🔄</span>
            Refresh
          </button>
          <button className="export-btn">
            <span className="export-icon">📊</span>
            Export Report
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="quick-stats">
        <div className="stat-card total">
          <div className="stat-icon">🩸</div>
          <div className="stat-content">
            <div className="stat-number">{inventoryData.totalUnits}</div>
            <div className="stat-label">Total Units</div>
          </div>
        </div>
        <div className="stat-card critical">
          <div className="stat-icon">🚨</div>
          <div className="stat-content">
            <div className="stat-number">{criticalCount}</div>
            <div className="stat-label">Critical Levels</div>
          </div>
        </div>
        <div className="stat-card low">
          <div className="stat-icon">⚠️</div>
          <div className="stat-content">
            <div className="stat-number">{lowCount}</div>
            <div className="stat-label">Low Stock</div>
          </div>
        </div>
        <div className="stat-card expiring">
          <div className="stat-icon">⏰</div>
          <div className="stat-content">
            <div className="stat-number">{inventoryData.expiringUnits}</div>
            <div className="stat-label">Expiring Soon</div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="inventory-controls">
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Types
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'critical' ? 'active' : ''}`}
            onClick={() => setActiveFilter('critical')}
          >
            Critical
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'low' ? 'active' : ''}`}
            onClick={() => setActiveFilter('low')}
          >
            Low Stock
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'good' ? 'active' : ''}`}
            onClick={() => setActiveFilter('good')}
          >
            Good Stock
          </button>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search blood type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      {/* Blood Type Grid */}
      <div className="blood-grid">
        {filteredBloodTypes.map((blood) => (
          <div key={blood.type} className={`blood-card ${blood.status}`}>
            <div className="blood-header">
              <div className="blood-type">
                <span className="type-label">{blood.type}</span>
                <span className="status-icon">{getStatusIcon(blood.status)}</span>
              </div>
              <div className="status-badge" style={{ backgroundColor: getStatusColor(blood.status) }}>
                {blood.status.toUpperCase()}
              </div>
            </div>
            
            <div className="blood-stats">
              <div className="current-stock">
                <span className="stock-number">{blood.current}</span>
                <span className="stock-label">Units Available</span>
              </div>
              
              <div className="stock-bar">
                <div className="stock-progress">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${(blood.current / blood.maximum) * 100}%`,
                      backgroundColor: getStatusColor(blood.status)
                    }}
                  ></div>
                </div>
                <div className="stock-range">
                  <span>Min: {blood.minimum}</span>
                  <span>Max: {blood.maximum}</span>
                </div>
              </div>
            </div>

            <div className="blood-footer">
              <div className="last-updated">
                Last updated: {blood.lastUpdated}
              </div>
              <div className="blood-actions">
                <button className="action-btn request">Request</button>
                <button className="action-btn update">Update</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="transactions-section">
        <div className="section-header">
          <h2>Recent Transactions</h2>
          <button className="view-all-btn">View All</button>
        </div>
        <div className="transactions-list">
          {inventoryData.recentTransactions.map((transaction) => (
            <div key={transaction.id} className={`transaction-item ${transaction.type}`}>
              <div className="transaction-icon">
                {transaction.type === 'donation' ? '📥' : '📤'}
              </div>
              <div className="transaction-details">
                <div className="transaction-main">
                  <span className="blood-type-badge">{transaction.bloodType}</span>
                  <span className="units">{transaction.units} unit{transaction.units > 1 ? 's' : ''}</span>
                  <span className="transaction-type">{transaction.type}</span>
                </div>
                <div className="transaction-meta">
                  <span className="source">
                    {transaction.donor ? `Donor: ${transaction.donor}` : `Hospital: ${transaction.hospital}`}
                  </span>
                  <span className="timestamp">{transaction.date} at {transaction.time}</span>
                </div>
              </div>
              <div className="transaction-status">
                <span className={`status-indicator ${transaction.type}`}></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Alerts */}
      {(criticalCount > 0 || lowCount > 0) && (
        <div className="emergency-alerts">
          <div className="alert-header">
            <h3>⚠️ Inventory Alerts</h3>
          </div>
          <div className="alerts-list">
            {inventoryData.bloodTypes
              .filter(blood => blood.status === 'critical' || blood.status === 'low')
              .map((blood) => (
                <div key={blood.type} className={`alert-item ${blood.status}`}>
                  <div className="alert-icon">
                    {blood.status === 'critical' ? '🚨' : '⚠️'}
                  </div>
                  <div className="alert-content">
                    <div className="alert-title">
                      {blood.type} Blood Type - {blood.status === 'critical' ? 'Critical' : 'Low'} Stock
                    </div>
                    <div className="alert-message">
                      Current: {blood.current} units | Minimum required: {blood.minimum} units
                    </div>
                  </div>
                  <div className="alert-actions">
                    <button className="alert-btn urgent">Send Alert</button>
                    <button className="alert-btn secondary">Find Donors</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BloodInventory;
