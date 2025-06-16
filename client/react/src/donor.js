const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Form = require('../models/FormModel');

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, address, bloodType, age, weight, diseases } = req.body;
    
    // Try to find in Form collection first
    let donor = await Form.findById(id);
    let isUser = false;
    
    if (!donor) {
      // Try to find in User collection
      donor = await User.findById(id);
      isUser = true;
    }
    
    if (!donor) {
      return res.status(404).json({ message: 'Donor not found' });
    }
    
    // Update the donor
    if (isUser) {
      // Update User model
      donor.name = name;
      donor.email = email;
      donor.phone = phone;
      donor.city = address;
      donor.bloodGroup = bloodType;
      donor.age = age;
    } else {
      // Update Form model
      donor.name = name;
      donor.email = email;
      donor.telephone = phone;
      donor.address = address;
      donor.bloodGroup = bloodType;
      donor.age = parseInt(age);
      donor.weight = parseInt(weight);
      donor.diseases = diseases || 'None';
    }
    
    await donor.save();
    
    res.json({
      message: 'Donor updated successfully',
      donor: {
        id: donor._id.toString(),
        name: donor.name,
        email: donor.email,
        address: isUser ? donor.city : donor.address,
        bloodType: donor.bloodGroup,
        diseases: isUser ? 'None specified' : donor.diseases,
        phone: isUser ? donor.phone : donor.telephone,
        age: donor.age,
        weight: isUser ? 'Not specified' : donor.weight,
        lastDonation: 'Never',
        status: 'Active'
      }
    });
  } catch (error) {
    console.error('Error updating donor:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});



// GET all donors - combines data from User and Form models
router.get('/', async (req, res) => {
  try {
    // Get users with blood group information
    const users = await User.find({ bloodGroup: { $exists: true, $ne: '' } });
    
    // Get form submissions
    const forms = await Form.find({});
    
    // Combine and format the data
    const donors = [];
    
    // Add users as donors
    users.forEach(user => {
      if (user.bloodGroup) {
        donors.push({
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          address: user.city || 'Not specified',
          bloodType: user.bloodGroup,
          diseases: 'None specified',
          phone: user.phone || 'Not provided',
          age: user.age || 'Not specified',
          weight: 'Not specified',
          lastDonation: 'Never',
          status: 'Active',
          source: 'user'
        });
      }
    });
    
    // Add form submissions as donors
    forms.forEach(form => {
      donors.push({
        id: form._id.toString(),
        name: form.name,
        email: form.email,
        address: form.address,
        bloodType: form.bloodGroup,
        diseases: form.diseases || 'None',
        phone: form.telephone,
        age: form.age,
        weight: form.weight,
        lastDonation: 'Never',
        status: 'Active',
        source: 'form'
      });
    });
    
    // Remove duplicates based on email
    const uniqueDonors = donors.filter((donor, index, self) => 
      index === self.findIndex(d => d.email === donor.email)
    );
    
    res.json(uniqueDonors);
  } catch (error) {
    console.error('Error fetching donors:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});
