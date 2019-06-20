const mongoose = require('mongoose');
const config = require('config');
const db = config.get('localDB'); //config.get("mongoDBURI");

const DBconn = async () => {
  try {
    await mongoose.connect(config.get('mongoDBURI'), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
  console.log('connected to mongoDB');
};

module.exports = DBconn;
