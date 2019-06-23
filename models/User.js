const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = schema({
  user_name: {
    type: String,
    required: true,
    unique: true
  },
  email_address: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  first_name: String,
  last_name: String,
  phone_number: String,
  avatar: String,
  skills: String,
  bio: String,
  date_added: {
      type: Date,
      default: Date.now
  }
});

module.exports = mongoose.model('user', userSchema);