
const Student = require('../models/Student');

const subjects = [
    'Telugu',
    'Hindi',
    'English',
    'Maths',
    'Science',
    'Social',
    'Computer'
];

// Get marks
const getMarks = async (req, res) => {
    const student = await Student.findOne({
        rollNo: Number(req.params.rollNo),
        class: Number(req.params.class)
    }).select('name rollNo class Marks');

    if (!student) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    res.status(200).json(student);
};

// Update selected subjects
const updateMarks = async (req, res) => {
    const { Marks } = req.body;

    if (!Marks || typeof Marks !== 'object' || Array.isArray(Marks)) {
        return res.status(400).json({
            message: 'Provide Marks as an object'
        });
    }

    const updates = {};

    for (const subject of Object.keys(Marks)) {
        if (!subjects.includes(subject)) {
            return res.status(400).json({
                message: `Invalid subject: ${subject}`
            });
        }

        const value = Marks[subject];

        if (
            typeof value !== 'number' ||
            value < 0 ||
            value > 100
        ) {
            return res.status(400).json({
                message: `Marks for ${subject} must be between 0 and 100`
            });
        }

        updates[`Marks.${subject}`] = value;
    }

    if (Object.keys(updates).length === 0) {
        return res.status(400).json({
            message: 'Provide at least one subject mark'
        });
    }

    const student = await Student.findOneAndUpdate(
        {
            rollNo: Number(req.params.rollNo),
            class: Number(req.params.class)
        },
        { $set: updates },
        {  returnDocument: 'after', runValidators: true }
    ).select('name rollNo class Marks');

    if (!student) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    res.status(200).json({
        message: 'Marks updated successfully',
        data: student
    });
};

module.exports = {
    getMarks,
    updateMarks
};
