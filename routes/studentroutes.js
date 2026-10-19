
const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentcontroller');

router.post('/', studentController.createStudent);
router.get('/', studentController.getStudents);
router.patch('/', studentController.updateStudent);
router.delete('/', studentController.deleteStudent);

module.exports = router;
