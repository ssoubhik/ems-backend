// Import Module - Mongoose
const mongoose = require('mongoose');

// Employees Schema
const employeeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    emp_no: {type: Number, required: true},
    birth_date: {type: String, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    gender: {type: String, required: true},
    hire_date: {type: String, required: true}
});

module.exports = mongoose.model("Employees", employeeSchema);