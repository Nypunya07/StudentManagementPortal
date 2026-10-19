const express = require('express');
const app = express();

const connectdb = require('./config/db');

const studentroutes = require('./routes/studentroutes');
const attendanceroutes = require('./routes/attendanceroutes');
const marksroutes = require('./routes/marksroutes');
const feeroutes = require('./routes/feeroutes');
const userroutes = require('./routes/authroutes');

// Middleware
app.use(express.json());

// Routes
app.use('/students', studentroutes);
app.use('/attendance', attendanceroutes);
app.use('/marks', marksroutes);
app.use('/fee', feeroutes);
app.use('/', userroutes);

// Database connection and server startup
const startServer = async () => {
    await connectdb();

    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
};

startServer();