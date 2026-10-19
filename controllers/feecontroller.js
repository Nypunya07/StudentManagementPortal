
const Fee = require('../models/Fee');

// Find fee by name, optionally narrowed by roll number
const getFee = async (req, res) => {
    const { name, rollNo, class: studentClass } = req.query;

    if (!name) {
        return res.status(400).json({
            message: 'Name is required'
        });
    }

    const filter = { name };

    if (rollNo !== undefined) filter.rollNo = Number(rollNo);
    if (studentClass !== undefined) filter.class = Number(studentClass);

    const fees = await Fee.find(filter);

    if (fees.length === 0) {
        return res.status(404).json({
            message: 'Fee record not found'
        });
    }

    if (fees.length > 1) {
        return res.status(409).json({
            message: 'Multiple students found. Provide rollNo and class.',
            students: fees.map(fee => ({
                name: fee.name,
                rollNo: fee.rollNo,
                class: fee.class
            }))
        });
    }

    res.status(200).json(fees[0]);
};

// Create fee record
const createFee = async (req, res) => {
    const { name, rollNo, class: studentClass, totalfee, feepaid = 0 } = req.body;

    if (
        !name ||
        rollNo === undefined ||
        studentClass === undefined ||
        typeof totalfee !== 'number' ||
        typeof feepaid !== 'number' ||
        totalfee < 0 ||
        feepaid < 0 ||
        feepaid > totalfee
    ) {
        return res.status(400).json({
            message: 'Provide valid student details and fee amounts'
        });
    }

    const fee = await Fee.create({
        name,
        rollNo,
        class: studentClass,
        totalfee,
        feepaid,
        balance: totalfee - feepaid
    });

    res.status(201).json({
        message: 'Fee record created successfully',
        data: fee
    });
};

// Update fee
const updateFee = async (req, res) => {
    const { name, rollNo, class: studentClass } = req.query;

    if (!name || rollNo === undefined || studentClass === undefined) {
        return res.status(400).json({
            message: 'Provide name, rollNo, and class'
        });
    }

    const filter = {
        name,
        rollNo: Number(rollNo),
        class: Number(studentClass)
    };

    const fee = await Fee.findOne(filter);

    if (!fee) {
        return res.status(404).json({
            message: 'Fee record not found'
        });
    }

    const totalfee = req.body.totalfee ?? fee.totalfee;
    const feepaid = req.body.feepaid ?? fee.feepaid;

    if (
        typeof totalfee !== 'number' ||
        typeof feepaid !== 'number' ||
        totalfee < 0 ||
        feepaid < 0 ||
        feepaid > totalfee
    ) {
        return res.status(400).json({
            message: 'Fee amounts must be valid, and paid fee cannot exceed total fee'
        });
    }

    fee.totalfee = totalfee;
    fee.feepaid = feepaid;
    fee.balance = totalfee - feepaid;

    await fee.save();

    res.status(200).json({
        message: 'Fee updated successfully',
        data: fee
    });
};

module.exports = {
    getFee,
    createFee,
    updateFee
};
