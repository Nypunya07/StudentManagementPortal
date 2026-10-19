
const express = require('express');
const router = express.Router();

const attendanceController =
    require('../controllers/attendancecontroller');

router.get(
    '/:class/:rollNo',
    attendanceController.getAttendance
);

router.post(
    '/:class/:rollNo',
    attendanceController.addAttendance
);

router.patch(
    '/record/:id',
    attendanceController.updateAttendance
);

module.exports = router;
