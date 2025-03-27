const mongoose = require('mongoose');

const sosSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    location: { latitude: Number, longitude: Number },
    timestamp: { type: Date, default: Date.now },
    threatLevel: String
});

module.exports = mongoose.model('SOS', sosSchema);