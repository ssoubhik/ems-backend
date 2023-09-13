// Import Modules - Dotenv, Express, Morgan, Body-Parser, Mongoose
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Import Routes
const employeesRoutes = require('./api/routes/employee');
const salariesRoutes = require('./api/routes/salary');

// Initiate Express object
const app = express();

// Use morgan to log requests
app.use(morgan('dev'));

// Use body-parser to parse request body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Add necessary headers to avoid CORS error
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Access, Authorization'); 
 
    if (req.method === 'OPTIONS') {
         res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE');
         return res.status(200).json({});
    }
 
    next();
 });

// Create All API routes
app.use('/employees', employeesRoutes);
app.use('/salaries', salariesRoutes);

// Connect MongoDB
mongoose.connect('mongodb+srv://soubhiksarkhel:1TF2OHpx4QrcrGQj@ems.hxnfhae.mongodb.net/?retryWrites=true&w=majority');

// Error Handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);   
});

app.use((error, req, res, next) => {
    res.status = (error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;