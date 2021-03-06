const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    permissions: [{
        type: Schema.Types.ObjectId,
        ref: "Permission"
    }]
});

module.exports = mongoose.model('users', userSchema);