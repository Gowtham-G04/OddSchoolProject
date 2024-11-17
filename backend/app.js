const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
const publicRoutes = require('./routes/public/index');
const adminRoutes = require('./routes/admin/index');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/public', publicRoutes); // Public routes
app.use('/api/v1/admin', adminRoutes);  // Admin routes

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
