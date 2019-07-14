const faker = require('faker');

const fs = require('fs');

// Uncomment to generate User seeds
const users = [];

for (var i = 0; i < 20; i++) {
    var id = faker.random.uuid().replace('-', '').substring(0, 8);
    var user = {
      _id: id,
    user_name: faker.name.firstName(),
    email_address: faker.internet.email(),
    date_added: "2019-06-24T20:16:23.642Z",
    avatar: faker.image.avatar(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    phone_number: faker.phone.phoneNumber(),
    skills: faker.name.jobDescriptor(),
    bio: faker.lorem.sentence(30),
    __v: 0,
    password: "$2a$10$PYekEA65UwEzsrEJED3iq.5alSUbwsOMaaE3cvji3DkIbOG/2Iupe"
  }

  users.push(user)


}

fs.writeFile('users.json', JSON.stringify(users), 'utf8', function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});



// Uncomment to generate Friends to a given user
const user_ids = [
  '1cd658dd',
  '62a5764d',
  '3a7c1d62',
  'cb39816c',
  '00756f20',
  'ae445b92',
  '769b4165',
  'e546c4a3',
  '746297aa',
  '47c0e079',
  '951cc10f',
  'c2037c0b',
  'de3772fd'
];
const friends = [];

for (var i = 1; i < 11; i++) {
  var relating_user_id = user_ids[0];
  var friend = {
    _id: i,
    relationship: 'acquaintance',
    relating_user: '5d290cd064803d0d7ce61a48',
    related_user: relating_user_id,
    date_added: '2019-06-24T20:16:23.642Z',
    __v: 0
  };

  friends.push(friend);
}

fs.writeFile('friends.json', JSON.stringify(friends), 'utf8', function(err) {
  if (err) {
    return console.log(err);
  }

  console.log('The file was saved!');
});


// Generate seeds for Statuses
const Status = [];

for (let i = 0; i < 20; i++) {
  let new_comment = {
    userID: faker.random.number(20),
    status: faker.lorem.sentences(),
    date_created: faker.date.past(2019),
    likes: faker.random.number(70),
    views: faker.random.number({min: 70}),
    comments: [
      faker.random.number({min: 1000, max: 10000}),
      faker.random.number({min: 1000, max: 10000}),
      faker.random.number({min: 1000, max: 10000})
    ]
  };

  Status.push(new_comment);
}

const statusData = JSON.stringify(Status);

fs.writeFile('Status.json', statusData, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Done Statuses file!');
  }
});




const commentStruct = {
  userID: {
    type: schema.Types.ObjectId,
    ref: 'user'
  },
  message: String,
  date_added: {
    default: Date.now()
  },
  inner_comments: [
    {
      type: schema.Types.ObjectId,
      ref: 'status'
    }
  ]
};


const comments = [];

for(let i = 0; i<20; i++){
  let new_comment = {
    userID: faker.random.number(20),
    message: faker.lorem.sentences(),
    date_added: faker.random.d,
    inner_comments: [
      {
        type: schema.Types.ObjectId,
        ref: 'status'
      }
    ]
  };

}