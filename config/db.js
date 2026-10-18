const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/studentportal');
        console.log('Database connected');
    } catch (error) {
        console.log('Database not connected', error);
    }
};

module.exports = connectdb;