// Import Module - Mongoose
const mongoose = require('mongoose');

// Salary Schema
const salarySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    emp_no: {type: Number, required: true},
    salary: {type: Number, required: true},
    from_date: {type: String, required: true},
    to_date: {type: String, required: true}
});

module.exports = mongoose.model("Salaries", salarySchema);