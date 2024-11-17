const express = require('express');
const { authenticate, authorizeRole } = require('../../middlewares/auth');
const { createSchool, deleteSchool } = require('../../controllers/adminController');
const router = express.Router();

// Admin-only routes
router.post('/schools', authenticate, authorizeRole(['admin']), createSchool);
router.delete('/schools/:id', authenticate, authorizeRole(['admin']), deleteSchool);

module.exports = router;
