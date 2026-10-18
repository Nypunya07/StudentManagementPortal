const mongoose = require("mongoose");

const attendanceschema = new mongoose.Schema({
    studentId: String,
    date: String,
    status: String
});

module.exports = mongoose.model("attendance", attendanceschema);