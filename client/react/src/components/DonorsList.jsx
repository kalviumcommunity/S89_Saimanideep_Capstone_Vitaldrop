import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DonorsList.css';

const DonorsList = () => {
  const [donors, setDonors] = useState([
    {
      id: '86963',
      name: 'Alok Kumar',
      email: 'alok15@gmail.com',
      address: '123,vizag',
      bloodType: 'A-',
      diseases: 'BP',
      phone: '+91 9876543210',
      age: 28,
      weight: 65,
      lastDonation: '2024-01-15',
      status: 'Active'
    },
    {
      id: '86563',
      name: 'Saim Ahmed',
      email: 'sai34@gmail.com',
      address: 'Gajuwaka',
      bloodType: 'B-',
      diseases: 'HPV',
      phone: '+91 9876543211',
      age: 32,
      weight: 70,
      lastDonation: '2024-02-10',
      status: 'Active'
    },
    {
      id: '86903',
      name: 'Mourya Reddy',
      email: 'mouri6@gmail.com',
      address: 'Amalapuram',
      bloodType: 'AB+',
      diseases: 'Sugar',
      phone: '+91 9876543212',
      age: 25,
      weight: 68,
      lastDonation: '2024-01-28',
      status: 'Active'
    },
    {
      id: '86173',
      name: 'Virat Singh',
      email: 'virat5@gmail.com',
      address: 'Rajahmundry',
      bloodType: 'A-',
      diseases: 'HPV',
      phone: '+91 9876543213',
      age: 30,
      weight: 75,
      lastDonation: '2024-02-05',
      status: 'Inactive'
    },
    {
      id: '86093',
      name: 'Chethan Kumar',
      email: 'che12@gmail.com',
      address: 'Nellore',
      bloodType: 'B+',
      diseases: 'BP',
      phone: '+91 9876543214',
      age: 27,
      weight: 72,
      lastDonation: '2024-01-20',
      status: 'Active'
    }
  ]);

  const [loading, setLoading] = useState(false);

  const [selectedDonors, setSelectedDonors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBloodType, setFilterBloodType] = useState('');
  const [showNewDonorForm, setShowNewDonorForm] = useState(false);
  const [editingDonor, setEditingDonor] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const [newDonor, setNewDonor] = useState({
    name: '',
    email: '',
    address: '',
    bloodType: '',
    diseases: '',
    phone: '',
    age: '',
    weight: ''
  });

  const navigate = useNavigate();

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  // Fetch donors from backend
  const fetchDonors = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5001/api/donors');
      if (response.ok) {
        const data = await response.json();
        setDonors(data);
      }
    } catch (error) {
      console.error('Error fetching donors:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  // Filter and search donors
  const filteredDonors = donors.filter(donor => {
    const matchesSearch = donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donor.id.includes(searchTerm);
    const matchesBloodType = filterBloodType === '' || donor.bloodType === filterBloodType;
    return matchesSearch && matchesBloodType;
  });

  // Sort donors
  const sortedDonors = [...filteredDonors].sort((a, b) => {
    if (!sortConfig.key) return 0;
    
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    
    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedDonors.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedDonors = sortedDonors.slice(startIndex, startIndex + rowsPerPage);

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedDonors(paginatedDonors.map(donor => donor.id));
    } else {
      setSelectedDonors([]);
    }
  };

  const handleSelectDonor = (donorId, checked) => {
    if (checked) {
      setSelectedDonors([...selectedDonors, donorId]);
    } else {
      setSelectedDonors(selectedDonors.filter(id => id !== donorId));
    }
  };

  const handleAddDonor = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5001/api/donors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDonor),
      });

      if (response.ok) {
        const result = await response.json();
        setDonors([...donors, result.donor]);
        setNewDonor({
          name: '',
          email: '',
          address: '',
          bloodType: '',
          diseases: '',
          phone: '',
          age: '',
          weight: ''
        });
        setShowNewDonorForm(false);
        alert('Donor added successfully!');
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to add donor');
      }
    } catch (error) {
      console.error('Error adding donor:', error);
      alert('Failed to add donor. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditDonor = (donor) => {
    setEditingDonor(donor);
    setNewDonor(donor);
    setShowNewDonorForm(true);
  };

  const handleUpdateDonor = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5001/api/donors/${editingDonor.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDonor),
      });

      if (response.ok) {
        const result = await response.json();
        setDonors(donors.map(donor =>
          donor.id === editingDonor.id ? result.donor : donor
        ));
        setEditingDonor(null);
        setNewDonor({
          name: '',
          email: '',
          address: '',
          bloodType: '',
          diseases: '',
          phone: '',
          age: '',
          weight: ''
        });
        setShowNewDonorForm(false);
        alert('Donor updated successfully!');
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to update donor');
      }
    } catch (error) {
      console.error('Error updating donor:', error);
      alert('Failed to update donor. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteDonor = async (donorId) => {
    if (window.confirm('Are you sure you want to delete this donor?')) {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5001/api/donors/${donorId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setDonors(donors.filter(donor => donor.id !== donorId));
          setSelectedDonors(selectedDonors.filter(id => id !== donorId));
          alert('Donor deleted successfully!');
        } else {
          const error = await response.json();
          alert(error.message || 'Failed to delete donor');
        }
      } catch (error) {
        console.error('Error deleting donor:', error);
        alert('Failed to delete donor. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleBulkDelete = () => {
    if (selectedDonors.length === 0) return;
    if (window.confirm(`Are you sure you want to delete ${selectedDonors.length} selected donors?`)) {
      setDonors(donors.filter(donor => !selectedDonors.includes(donor.id)));
      setSelectedDonors([]);
    }
  };

  return (
    <div className="donors-list-page">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-section">
          <div className="logo">
            <span className="logo-icon">🩸</span>
            <span className="logo-text">
              <span className="vital">VITAL</span>
              <span className="drop">DROP</span>
            </span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-item" onClick={() => navigate('/admin-dashboard')}>
            <span className="nav-icon">🏠</span>
            <span className="nav-text">Home</span>
          </div>
          <div className="nav-item" onClick={() => navigate('/donor-dashboard')}>
            <span className="nav-icon">👤</span>
            <span className="nav-text">Profile</span>
          </div>
          <div className="nav-item active">
            <span className="nav-icon">👥</span>
            <span className="nav-text">Donors</span>
          </div>
          <div className="nav-item" onClick={() => navigate('/blood-inventory')}>
            <span className="nav-icon">🩸</span>
            <span className="nav-text">Prospects</span>
          </div>
          <div className="nav-item" onClick={() => navigate('/emergency-requests')}>
            <span className="nav-icon">📋</span>
            <span className="nav-text">Orders</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">⚙️</span>
            <span className="nav-text">Settings</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">💾</span>
            <span className="nav-text">Backups</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">📊</span>
            <span className="nav-text">Charts</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">📅</span>
            <span className="nav-text">Calendar</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Header */}
        <div className="top-header">
          <div className="header-left">
            <h1>All Donors</h1>
          </div>
          <div className="header-right">
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="/about">About us</a>
              <a href="/contact">Contact us</a>
            </div>
            <button 
              className="new-donor-btn"
              onClick={() => setShowNewDonorForm(true)}
            >
              New Donor
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="table-controls">
          <div className="controls-left">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search donors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <select
              value={filterBloodType}
              onChange={(e) => setFilterBloodType(e.target.value)}
              className="filter-select"
            >
              <option value="">All Blood Types</option>
              {bloodTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="controls-right">
            {selectedDonors.length > 0 && (
              <button className="bulk-delete-btn" onClick={handleBulkDelete}>
                Delete Selected ({selectedDonors.length})
              </button>
            )}
          </div>
        </div>

        {/* Donors Table */}
        <div className="table-container">
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading donors...</p>
            </div>
          ) : (
            <table className="donors-table">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      checked={selectedDonors.length === paginatedDonors.length && paginatedDonors.length > 0}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                    />
                  </th>
                  <th onClick={() => handleSort('id')} className="sortable">
                    Id {sortConfig.key === 'id' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('name')} className="sortable">
                    Name {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('email')} className="sortable">
                    Email {sortConfig.key === 'email' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('address')} className="sortable">
                    Address {sortConfig.key === 'address' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('bloodType')} className="sortable">
                    BloodType {sortConfig.key === 'bloodType' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('diseases')} className="sortable">
                    Diseases {sortConfig.key === 'diseases' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {paginatedDonors.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="no-data">
                      <div className="no-data-message">
                        <span className="no-data-icon">👥</span>
                        <h3>No donors found</h3>
                        <p>Start by adding your first donor to the system.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  paginatedDonors.map((donor) => (
                    <tr key={donor.id}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedDonors.includes(donor.id)}
                          onChange={(e) => handleSelectDonor(donor.id, e.target.checked)}
                        />
                      </td>
                      <td className="donor-id">{donor.id.slice(-5)}</td>
                      <td className="donor-name">{donor.name}</td>
                      <td className="donor-email">{donor.email}</td>
                      <td className="donor-address">{donor.address}</td>
                      <td>
                        <span className={`blood-type-badge ${donor.bloodType.replace('+', 'pos').replace('-', 'neg')}`}>
                          {donor.bloodType}
                        </span>
                      </td>
                      <td className="donor-diseases">{donor.diseases}</td>
                      <td>
                        <button
                          className="edit-btn"
                          onClick={() => handleEditDonor(donor)}
                          disabled={loading}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="delete-btn"
                          onClick={() => handleDeleteDonor(donor.id)}
                          disabled={loading}
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <div className="pagination-info">
            <span>Rows per page:</span>
            <select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              className="rows-select"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span>
              {startIndex + 1}-{Math.min(startIndex + rowsPerPage, sortedDonors.length)} of {sortedDonors.length}
            </span>
          </div>
          <div className="pagination-controls">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="page-btn"
            >
              &lt;
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="page-btn"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* New/Edit Donor Modal */}
      {showNewDonorForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{editingDonor ? 'Edit Donor' : 'Add New Donor'}</h2>
              <button 
                className="close-btn"
                onClick={() => {
                  setShowNewDonorForm(false);
                  setEditingDonor(null);
                  setNewDonor({
                    name: '',
                    email: '',
                    address: '',
                    bloodType: '',
                    diseases: '',
                    phone: '',
                    age: '',
                    weight: ''
                  });
                }}
              >
                ×
              </button>
            </div>
            <form onSubmit={editingDonor ? handleUpdateDonor : handleAddDonor} className="donor-form">
              <div className="form-grid">
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    value={newDonor.name}
                    onChange={(e) => setNewDonor({...newDonor, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    value={newDonor.email}
                    onChange={(e) => setNewDonor({...newDonor, email: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone *</label>
                  <input
                    type="tel"
                    value={newDonor.phone}
                    onChange={(e) => setNewDonor({...newDonor, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Blood Type *</label>
                  <select
                    value={newDonor.bloodType}
                    onChange={(e) => setNewDonor({...newDonor, bloodType: e.target.value})}
                    required
                  >
                    <option value="">Select Blood Type</option>
                    {bloodTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Age *</label>
                  <input
                    type="number"
                    min="18"
                    max="65"
                    value={newDonor.age}
                    onChange={(e) => setNewDonor({...newDonor, age: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Weight (kg) *</label>
                  <input
                    type="number"
                    min="50"
                    value={newDonor.weight}
                    onChange={(e) => setNewDonor({...newDonor, weight: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="form-group full-width">
                <label>Address *</label>
                <input
                  type="text"
                  value={newDonor.address}
                  onChange={(e) => setNewDonor({...newDonor, address: e.target.value})}
                  required
                />
              </div>
              <div className="form-group full-width">
                <label>Medical Conditions</label>
                <input
                  type="text"
                  value={newDonor.diseases}
                  onChange={(e) => setNewDonor({...newDonor, diseases: e.target.value})}
                  placeholder="e.g., BP, Diabetes, None"
                />
              </div>
              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={() => {
                  setShowNewDonorForm(false);
                  setEditingDonor(null);
                }}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  {editingDonor ? 'Update Donor' : 'Add Donor'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonorsList;
