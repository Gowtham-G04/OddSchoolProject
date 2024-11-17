const express = require('express');
const { getAllSchools } = require('../../controllers/publicController');
const router = express.Router();

router.get('/schools', getAllSchools);

module.exports = router;
