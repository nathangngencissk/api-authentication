const mongoose = require('mongoose');
const { Schema } = mongoose;

const logSchema = new Schema({
    timestamp: {
        type: String,
        default: + new Date()
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    description: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('logs', logSchema);