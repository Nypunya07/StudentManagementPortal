
const express = require('express');
const router = express.Router();

const marksController =
    require('../controllers/markscontroller');

router.get('/:class/:rollNo', marksController.getMarks);
router.patch('/:class/:rollNo', marksController.updateMarks);

module.exports = router;
