const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    phone: String,
    emergencyContacts: [{ name: String, phone: String }],
    password: String // In production, use bcrypt to hash this
});

module.exports = mongoose.model('User', userSchema);