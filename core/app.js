const express = require('express');
const cors = require('cors');
const userRoutes = require('../routes/userRoutes');
const ApiError = require('../entities/ApiError');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

module.exports = app;
