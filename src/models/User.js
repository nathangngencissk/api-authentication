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
  role: {
    type: String,
    require: true
  }
});

userSchema.methods.print = function () {
  console.log(this.name);
}

module.exports = mongoose.model('users', userSchema);