const mongoose = require("mongoose");

const UserShema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
  /*,
  avatar: {
    type: String,
    required: false
  }*/
});

module.exports = mongoose.model('user', UserShema);
