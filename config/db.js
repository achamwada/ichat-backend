const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoDBURI");

const dbConnect = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("connected to Mongo");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = dbConnect;
