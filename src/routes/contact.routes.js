const express = require('express');
const router = express.Router();
const Contact = require('../shared/db/mongodb/schemas/contact.Schema'); // Adjust path if needed

router.post('/contact', async (req, res) => {
  try {
    const {
      full_name,
      email,
      phone,
      company_name,
      project_name,
      project_desc,
      department,
      message,
      file
    } = req.body;

    const newContact = new Contact({
      full_name,
      email,
      phone,
      company_name,
      project_name,
      project_desc,
      department,
      message,
      file
    });

    await newContact.save(); // Save to MongoDB
    res.status(200).json({ message: 'Contact saved successfully!' });
  } catch (error) {
    console.error(error);
    
    // Error message
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation failed', errors: error.errors });
    }

    res.status(500).json({ message: 'Something went wrong!' });
  }
});

function registerContactRoutes(app) {
  app.use('/api', router); // All routes under /api
}

module.exports = { registerContactRoutes };
