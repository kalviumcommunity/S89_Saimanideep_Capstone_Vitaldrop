require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Vitaldrop Backend Running');
});

// Import Routes
const authRoutes = require('./routes/auth');
const formRoutes = require('./routes/form');
app.use('/api', authRoutes);
app.use('/api/form', formRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});