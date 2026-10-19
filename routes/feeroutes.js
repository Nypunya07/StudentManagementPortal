
const express = require('express');
const router = express.Router();

const feeController = require('../controllers/feecontroller');

router.get('/', feeController.getFee);
router.post('/', feeController.createFee);
router.patch('/', feeController.updateFee);

module.exports = router;
