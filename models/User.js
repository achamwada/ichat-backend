const mongoose = require("mongoose");
const schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

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

/*schema.pre('save', async function(next){

  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(this.password, salt);
    this.password = passwordHash;
    
  } catch (error) {
    thow error;
    
  }


  next();

});*/

module.exports = mongoose.model('user', userSchema);