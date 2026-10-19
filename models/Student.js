const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollNo: {
        type: Number,
        required: true
    },
    class: {
        type: Number,
        required: true
    },
    age: Number,
    gender: String,
    fathername: String,
    mothersname: String,
    DateofAdmission: Date,
    Marks: {
        Telugu: { type: Number, min: 0, max: 100 },
        Hindi: { type: Number, min: 0, max: 100 },
        English: { type: Number, min: 0, max: 100 },
        Maths: { type: Number, min: 0, max: 100 },
        Science: { type: Number, min: 0, max: 100 },
        Social: { type: Number, min: 0, max: 100 },
        Computer: { type: Number, min: 0, max: 100 }
    }
});

const student = mongoose.model('Student', studentSchema);
module.exports = student;
