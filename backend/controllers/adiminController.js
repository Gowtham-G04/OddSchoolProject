const School = require('../models/school');

// Add a new school (admin access)
const createSchool = async (req, res) => {
  try {
    const school = await School.create(req.body);
    res.status(201).json(school);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create school' });
  }
};

// Delete a school (admin access)
const deleteSchool = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await School.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ error: 'School not found' });
    res.status(200).json({ message: 'School deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete school' });
  }
};

module.exports = { createSchool, deleteSchool };
