const mongoose = require('mongoose');
const { Schema } = mongoose;

const roleSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    }
});

module.exports = mongoose.model('roles', roleSchema);