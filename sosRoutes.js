const express = require('express');
const SOS = require('../models/sosModel');
const User = require('../models/userModel');
const { spawn } = require('child_process');

const router = express.Router();

// Handle SOS requests
router.post('/', async(req, res) => {
    try {
        const { userId, location, audioData } = req.body;

        // Validate user
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        // Run Machine Learning Model
        const pythonProcess = spawn('python3', ['ml/ml_model.py', audioData]);

        pythonProcess.stdout.on('data', async(data) => {
            const threatLevel = data.toString().trim();

            const newSOS = new SOS({ user: userId, location, threatLevel });
            await newSOS.save();

            res.json({ message: 'SOS Alert Sent Successfully!', threatLevel });
        });

        pythonProcess.stderr.on('data', (err) => {
            console.error(`Error in ML Model: ${err}`);
            res.status(500).json({ message: 'ML Processing Error', error: err.toString() });
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

// Get all SOS alerts
router.get('/', async(req, res) => {
    try {
        const sosAlerts = await SOS.find().populate('user', 'name email phone');
        res.json(sosAlerts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching SOS alerts", error });
    }
});

module.exports = router;