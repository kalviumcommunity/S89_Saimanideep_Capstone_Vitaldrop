const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');


// Update contact submission status (Admin only)
router.put('/submissions/:id/status', async (req, res) => {
  try {
    const { status, adminNotes, responseMessage, approvedBy } = req.body;

    if (!['pending', 'approved', 'rejected', 'responded'].includes(status)) {
      return res.status(400).json({ 
        message: 'Invalid status. Must be: pending, approved, rejected, or responded' 
      });
    }

    const updateData = { 
      status,
      adminNotes,
      responseMessage
    };

    if (status === 'approved' && approvedBy) {
      updateData.approvedBy = approvedBy;
      updateData.approvedAt = new Date();
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({ 
        message: 'Contact submission not found' 
      });
    }

    res.json({
      message: `Contact submission ${status} successfully`,
      contact
    });

  } catch (error) {
    console.error('Error updating contact submission:', error);
    res.status(500).json({ 
      message: 'Failed to update contact submission' 
    });
  }
});

// Delete contact submission (Admin only)
router.delete('/submissions/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ 
        message: 'Contact submission not found' 
      });
    }

    res.json({
      message: 'Contact submission deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting contact submission:', error);
    res.status(500).json({ 
      message: 'Failed to delete contact submission' 
    });
  }
});