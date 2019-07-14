const faker = require("faker");
const mongoose = require("mongoose");
//const config = require("config");
const User = require("../models/User");
//const dbURI = config.get("mongoDBURI");
mongoose.set("useCreateIndex", true);
mongoose.connect(
  "mongodb://localhost:27017/ichat",
  { useNewUrlParser: true }
);

for (let i = 0; i < 20; i++) {
  new User({
    _id: faker.random.uuid(),
    user_name: faker.name.firstName(),
    email_address: faker.internet.email(),
    date_added: "2019-06-24T20:16:23.642Z",
    avatar: faker.image.people(100, 100),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    phone_number: faker.phone.phoneNumber(),
    skills: faker.name.jobDescriptor(),
    bio: faker.lorem.sentence(30),
    __v: 0,
    password: "$2a$10$PYekEA65UwEzsrEJED3iq.5alSUbwsOMaaE3cvji3DkIbOG/2Iupe"
  }).save((err, res) => {
    if (i == 19) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
