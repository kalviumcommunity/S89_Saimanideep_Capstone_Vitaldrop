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
