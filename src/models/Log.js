const mongoose = require('mongoose');
const { Schema } = mongoose;

const logSchema = new Schema({
    timestamp: {
        type: String,
        default: + new Date()
    },
    description: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('logs', logSchema);