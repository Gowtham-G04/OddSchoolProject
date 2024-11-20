const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();  // Load environment variables from .env file
const app = express();

// Import routes
// const publicRoutes = require('./routes/Rpublic/index');  // Public routes
// const adminRoutes = require('./routes/Radmin/index');    // Admin routes

// Middleware
app.use(cors());  // Enable Cross-Origin Resource Sharing
app.use(express.json());  // Parse incoming JSON requests

// API Routes
// app.use('/api/v1/Rpublic', publicRoutes);   // Public routes
// app.use('/api/v1/Radmin', adminRoutes);    // Admin routes

// Handle 404 errors for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware (generic error handler)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong on the server' });
});

// Start the server
const PORT = process.env.PORT || 3000;  // Use the port from environment or default to 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
