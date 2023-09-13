// Import Modules - Dotenv, Express, Mongoose
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Import Model - Employees
const Employees = require('../models/employee');

// Initiate Router object
const router = express.Router();

// All Employess List GET method
router.get('/', (req, res, next) => {  
    // Find all topics from MongoDB
    Employees
    .find()
    .exec()
    .then(results => {
        res.status(200).json({ 
            status: 200,
            message: 'Fetched Employees',
            result: results
        });
    })
    .catch(err => {            
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;