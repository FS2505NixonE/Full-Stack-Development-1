// src/shared/db/mongodb/schemas/contact.Schema.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  company_name: {
    type: String,
    trim: true
  },
  project_name: {
    type: String,
    trim: true
  },
  project_desc: {
    type: String,
    trim: true
  },
  department: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  file: {                  
    type: String,           
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contact', contactSchema); // Capital "C" is conventional
