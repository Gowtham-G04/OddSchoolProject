const schoolModel = require('../../models/ModPublic/publicmodel');

// Controller function to get all schools
const getAllSchools = async (req, res) => {
  try {
    const schools = await schoolModel.getSchools();
    res.json(schools);  // Send back the list of schools
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch schools' });
  }
};

// Controller function to get details of a single school by ID
const getSchoolById = async (req, res) => {
  const schoolId = req.params.id;
  try {
    const school = await schoolModel.getSchoolById(schoolId);
    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }
    res.json(school);  // Send back the school details
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch school details' });
  }
};

// Controller function for searching schools based on a keyword
const searchSchools = async (req, res) => {
  const searchKeyword = req.query.search;
  try {
    const schools = await schoolModel.searchSchools(searchKeyword);
    res.json(schools);  // Send back the filtered schools based on search keyword
  } catch (error) {
    res.status(500).json({ error: 'Unable to perform search' });
  }
};

// Controller function for paginated list of schools
const getPaginatedSchools = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;  // Default to page 1 and limit 10
  const offset = (page - 1) * limit;

  try {
    const schools = await schoolModel.getPaginatedSchools(offset, limit);
    res.json(schools);  // Send back the paginated list of schools
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch schools' });
  }
};

// Controller function for viewing school resources by school ID
const getSchoolResources = async (req, res) => {
  const schoolId = req.params.id;
  try {
    const resources = await schoolModel.getSchoolResources(schoolId);
    res.json(resources);  // Send back the resources for the specific school
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch school resources' });
  }
};

module.exports = {
  getAllSchools,
  getSchoolById,
  searchSchools,
  getPaginatedSchools,
  getSchoolResources,
};
