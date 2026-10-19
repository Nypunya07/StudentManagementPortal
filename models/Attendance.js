const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    rollNo: {
        type: Number,
        required: true
    },
    class: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['Present', 'Absent'],
        required: true
    }
});
attendanceSchema.index(
    { rollNo: 1, class: 1, date: 1 },
    { unique: true }
);

const attendance = mongoose.model('Attendance', attendanceSchema);
module.exports = attendance;