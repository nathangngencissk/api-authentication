const mongoose = require('mongoose');
const { Schema } = mongoose;

const permissionSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    route: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    }
});

module.exports = mongoose.model('permissions', permissionSchema);