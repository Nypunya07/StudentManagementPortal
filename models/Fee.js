
const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
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
    totalfee: {
        type: Number,
        required: true,
        min: 0
    },
    feepaid: {
        type: Number,
        default: 0,
        min: 0
    },
    balance: {
        type: Number,
        required: true,
        min: 0
    }
});

const fee = mongoose.model('Fee', feeSchema);
module.exports=fee;
