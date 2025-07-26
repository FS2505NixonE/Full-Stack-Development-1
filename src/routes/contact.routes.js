const express = require('express');
const router = express.Router();
const Contact = require('../shared/db/mongodb/schemas/contact.Schema'); // adjust path if needed

router.post('/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body); // create a new contact using form data
    await newContact.save(); // save to DB
    res.status(200).json({ message: 'Contact saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
});
function registerContactRoutes(app) {
    app.use('/api', router); // mount all contact routes under /api
}

module.exports = {registerContactRoutes};
