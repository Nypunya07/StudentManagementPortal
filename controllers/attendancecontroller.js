
const Attendance = require('../models/attendance');

// Get attendance records for a student
const getAttendance = async (req, res) => {
    const { rollNo, class: studentClass } = req.params;

    const records = await Attendance.find({
        rollNo: Number(rollNo),
        class: Number(studentClass)
    }).sort({ date: -1 });

    res.status(200).json(records);
};

// Record attendance
const addAttendance = async (req, res) => {
    const { rollNo, class: studentClass } = req.params;
    const { date, status } = req.body;

    const record = await Attendance.create({
        rollNo: Number(rollNo),
        class: Number(studentClass),
        date,
        status
    });

    res.status(201).json({
        message: 'Attendance recorded successfully',
        data: record
    });
};

// Update attendance by record ID
const updateAttendance = async (req, res) => {
    const record = await Attendance.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true, runValidators: true }
    );

    if (!record) {
        return res.status(404).json({
            message: 'Attendance record not found'
        });
    }

    res.status(200).json({
        message: 'Attendance updated successfully',
        data: record
    });
};

module.exports = {
    getAttendance,
    addAttendance,
    updateAttendance
};
