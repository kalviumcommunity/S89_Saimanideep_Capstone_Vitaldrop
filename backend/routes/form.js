const express = require('express');
const router = express.Router();

// POST endpoint to handle form submissions
router.post('/submit', (req, res) => {
  const { name, email, telephone, address, weight, bloodGroup, age, diseases } = req.body;

  // Validate input
  if (!name || !email || !telephone || !address || !weight || !bloodGroup || !age) {
    return res.status(400).json({ error: 'All fields except diseases are required' });
  }

  // Save to database (mock implementation)
  // In a real scenario, you would save the data to MongoDB using the Form model
  console.log('Form data:', { name, email, telephone, address, weight, bloodGroup, age, diseases });

  res.status(200).json({ message: 'Form submitted successfully' });
});

module.exports = router;