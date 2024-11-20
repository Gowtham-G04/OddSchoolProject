const express = require('express');
const publicController = require('../../controllers/ConPublic/publicController'); // Corrected path (removed .js extension)
const router = express.Router();

// Route to get all schools
router.get('/schools', publicController.getAllSchools);

// Route to get a single school by ID
router.get('/school/:id', publicController.getSchoolById);

// Route for searching schools
router.get('/schools/search', publicController.searchSchools); // Changed to a specific search route

// Route for paginated list of schools
router.get('/schools/paginated', publicController.getPaginatedSchools); // Changed to a specific paginated route

// Route to get resources for a specific school
router.get('/school/:id/resources', publicController.getSchoolResources);

module.exports = router;