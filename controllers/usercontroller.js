const User = require('../models/user');
const signup = async (req, res) => {
    const {username,password} = req.body;
    const newUser = await User.create({username,password});
    res.status(201).json({
        message: 'Signup successful',
        data: newUser
    });
};
const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.send('User not found');
    }
    if (user.password !== password) {
        return res.send('Password incorrect');
    }
    res.send('Login successful');
};
module.exports = { 
    signup, 
    login 
};
