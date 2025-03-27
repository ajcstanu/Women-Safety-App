const express = require('express');
const User = require('../models/userModel');
const router = express.Router();

// Register a new user
router.post('/register', async(req, res) => {
    try {
        const { name, email, phone, emergencyContacts, password } = req.body;
        const newUser = new User({ name, email, phone, emergencyContacts, password });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(400).json({ message: "Error registering user", error });
    }
});

module.exports = router;