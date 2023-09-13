// Import Modules - Dotenv, Express, Mongoose
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Import Model - Salaries
const Salaries = require('../models/salary');

// Initiate Router object
const router = express.Router();

// All Salaries List GET method
router.get('/all', (req, res, next) => {  
    // Find all topics from MongoDB
    Salaries
    .find()
    .exec()
    .then(results => {
        res.status(200).json({ 
            status: 200,
            message: 'Fetched Salaries',
            result: results
        });
    })
    .catch(err => {            
        res.status(500).json({
            error: err
        });
    });
});

// Salaries of Employee List GET method
router.get('/', (req, res, next) => {  
    // Find all topics from MongoDB
    Salaries
    .find({emp_no: req.query.emp_no})
    .exec()
    .then(results => {
        res.status(200).json({ 
            status: 200,
            message: 'Fetched Salaries of Employee',
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