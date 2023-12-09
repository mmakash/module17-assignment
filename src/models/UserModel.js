const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    // This field is optional, so no 'required' property is set.
  },
  phoneNumber: {
    type: String,
    // This field is optional, so no 'required' property is set.
  },
},
{timestamps: true,versionKey: false}
);

const User = mongoose.model('User', userSchema);

module.exports = User;