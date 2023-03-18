const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

        // Create a new user
        const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        });

        // Save the user to the database
        await user.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    };

    const login = async (req, res) => {
    try {
        // Find the user by their email
        const user = await User.findOne({ email: req.body.email });

        // Check if the user exists
        if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Check if the password is correct
        const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        user.password
        );
        if (!isPasswordCorrect) {
        return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    };

    const logout = async (req, res) => {
    res.status(200).json({ message: 'Logout successful' });
};

module.exports = { register, login, logout };
