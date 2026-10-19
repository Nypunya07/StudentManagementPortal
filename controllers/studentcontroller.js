
const Student = require('../models/Student');

// Create student
const createStudent = async (req, res) => {
    const student = await Student.create(req.body);

    res.status(201).json({
        message: 'Student created successfully',
        data: student
    });
};

// Search students by name or roll number
const getStudents = async (req, res) => {
    const { name, rollNo } = req.query;
    const filter = {};

    if (name) {
        filter.name = { $regex: name, $options: 'i' };
    }

    if (rollNo !== undefined) {
        const parsedRollNo = Number(rollNo);

        if (!Number.isInteger(parsedRollNo)) {
            return res.status(400).json({
                message: 'Invalid roll number'
            });
        }

        filter.rollNo = parsedRollNo;
    }

    const students = await Student.find(filter);

    res.status(200).json({
        count: students.length,
        data: students
    });
};

// Update student by name or roll number
const updateStudent = async (req, res) => {
    const { name, rollNo } = req.query;

    if (!name && rollNo === undefined) {
        return res.status(400).json({
            message: 'Provide name or rollNo to identify the student'
        });
    }

    const filter = {};

    if (name) {
        filter.name = { $regex: `^${name}$`, $options: 'i' };
    }

    if (rollNo !== undefined) {
        const parsedRollNo = Number(rollNo);

        if (!Number.isInteger(parsedRollNo)) {
            return res.status(400).json({
                message: 'Invalid roll number'
            });
        }

        filter.rollNo = parsedRollNo;
    }

    const matches = await Student.find(filter);

    if (matches.length === 0) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    if (matches.length > 1) {
        return res.status(409).json({
            message: 'Multiple students found. Provide a more specific filter.',
            data: matches
        });
    }

    const student = await Student.findOneAndUpdate(
        filter,
        { $set: req.body },
        { new: true, runValidators: true }
    );

    res.status(200).json({
        message: 'Student updated successfully',
        data: student
    });
};

// Delete student by name or roll number
const deleteStudent = async (req, res) => {
    const { name, rollNo } = req.query;

    if (!name && rollNo === undefined) {
        return res.status(400).json({
            message: 'Provide name or rollNo to identify the student'
        });
    }

    const filter = {};

    if (name) {
        filter.name = { $regex: `^${name}$`, $options: 'i' };
    }

    if (rollNo !== undefined) {
        const parsedRollNo = Number(rollNo);

        if (!Number.isInteger(parsedRollNo)) {
            return res.status(400).json({
                message: 'Invalid roll number'
            });
        }

        filter.rollNo = parsedRollNo;
    }

    const matches = await Student.find(filter);

    if (matches.length === 0) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    if (matches.length > 1) {
        return res.status(409).json({
            message: 'Multiple students found. Provide a more specific filter.',
            data: matches
        });
    }

    await Student.deleteOne(filter);

    res.status(200).json({
        message: 'Student deleted successfully'
    });
};

module.exports = {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent
};
