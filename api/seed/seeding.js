const faker = require('faker');

const fs = require('fs');

// Uncomment to generate User seeds
var Base_User = {
  //_id: '5d290cd064803d0d7ce61a48',
  user_name: faker.name.firstName(),
  email_address: 'alexchams@gmail.com',
  date_added: '2019-06-24T20:16:23.642Z',
  avatar: faker.image.avatar(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  phone_number: faker.phone.phoneNumber(),
  skills: faker.name.jobDescriptor(),
  bio: faker.lorem.sentence(30),
  __v: 0,
  password: '$2a$10$PYekEA65UwEzsrEJED3iq.5alSUbwsOMaaE3cvji3DkIbOG/2Iupe'
};

const users = [Base_User];
const user_ids = [];

for (var i = 1; i < 30; i++) {
  var id = faker.random
    .uuid()
    .replace('-', '')
    .substring(0, 8);
  var user = {
    //_id: id,
    user_name: faker.name.firstName(),
    email_address: faker.internet.email(),
    date_added: '2019-06-24T20:16:23.642Z',
    avatar: faker.image.avatar(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    phone_number: faker.phone.phoneNumber(),
    skills: faker.name.jobDescriptor(),
    bio: faker.lorem.sentence(30),
    __v: 0,
    password: faker.internet.password(30)
  };

  users.push(user);
  user_ids.push(id);
}

fs.writeFile('users.json', JSON.stringify(users), 'utf8', function(err) {
  if (err) {
    return console.log(err);
  }

  console.log('-> users.json was saved!');
});

// Uncomment to generate Friends to a given user
const friends = [];

for (var i = 1; i < 11; i++) {
  var related_user_id = user_ids[i];
  var friend = {
    relationship: 'acquaintance',
    acceptance: true,
    date_added: '2019-06-24T20:16:23.642Z',
    __v: 0
  };

  friends.push(friend);
}

fs.writeFile('friends.json', JSON.stringify(friends), 'utf8', function(err) {
  if (err) {
    return console.log(err);
  }

  console.log('-> friends.json was saved!');
});

// Generate seeds for Statuses
const Status = [];
const comments_ids = [];
for (let i = 1; i < 20; i++) {
  let status_comment_ids = [
    faker.random.number({ min: 1000, max: 10000 }),
    faker.random.number({ min: 1000, max: 10000 }),
    faker.random.number({ min: 1000, max: 10000 })
  ];

  let new_comment = {
    userID: user_ids[faker.random.number({ min: 0, max: user_ids.length - 1 })],
    status: faker.lorem.sentences(),
    image: [
      {
        url: faker.image.imageUrl()
      },
      {
        url: faker.image.imageUrl()
      },
      {
        url: faker.image.imageUrl()
      }
    ],
    date_created: faker.date.past(2018),
    likes: faker.random.number(70),
    views: faker.random.number({ min: 70 }),
    comments: status_comment_ids
  };

  Status.push(new_comment);
  comments_ids.push(status_comment_ids);
}

const statusData = JSON.stringify(Status);

fs.writeFile('Status.json', statusData, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('-> Statuses.json was saved!');
  }
});

const comments = [];

for (let i = 1; i < comments_ids.length; i++) {
  let new_comment_comments = {
    message: faker.lorem.sentences(),
    date_added: faker.date.past(2019),
    userID: user_ids[faker.random.number({ min: 0, max: user_ids.length - 1 })],
    inner_comments: [
      {
        userID:
          user_ids[faker.random.number({ min: 0, max: user_ids.length - 1 })],
        message: faker.lorem.sentences(),
        date_added: Date.now(),
        inner_comments: [
          {
            userID:
              user_ids[
                faker.random.number({ min: 0, max: user_ids.length - 1 })
              ],
            message: faker.lorem.sentences(),
            date_added: Date.now()
          },
          {
            userID:
              user_ids[
                faker.random.number({ min: 0, max: user_ids.length - 1 })
              ],
            message: faker.lorem.sentences(),
            date_added: Date.now()
          },
          {
            userID:
              user_ids[
                faker.random.number({ min: 0, max: user_ids.length - 1 })
              ],
            message: faker.lorem.sentences(),
            date_added: Date.now()
          }
        ]
      },
      {
        userID:
          user_ids[faker.random.number({ min: 0, max: user_ids.length - 1 })],
        message: faker.lorem.sentences(),
        date_added: Date.now(),
        inner_comments: [
          {
            userID:
              user_ids[
                faker.random.number({ min: 0, max: user_ids.length - 1 })
              ],
            message: faker.lorem.sentences(),
            date_added: Date.now()
          },
          {
            userID:
              user_ids[
                faker.random.number({ min: 0, max: user_ids.length - 1 })
              ],
            message: faker.lorem.sentences(),
            date_added: Date.now()
          },
          {
            userID:
              user_ids[
                faker.random.number({ min: 0, max: user_ids.length - 1 })
              ],
            message: faker.lorem.sentences(),
            date_added: Date.now()
          }
        ]
      },
      {
        userID:
          user_ids[faker.random.number({ min: 0, max: user_ids.length - 1 })],
        message: faker.lorem.sentences(),
        date_added: Date.now(),
        inner_comments: [
          {
            userID:
              user_ids[
                faker.random.number({ min: 0, max: user_ids.length - 1 })
              ],
            message: faker.lorem.sentences(),
            date_added: Date.now()
          },
          {
            userID:
              user_ids[
                faker.random.number({ min: 0, max: user_ids.length - 1 })
              ],
            message: faker.lorem.sentences(),
            date_added: Date.now()
          },
          {
            userID:
              user_ids[
                faker.random.number({ min: 0, max: user_ids.length - 1 })
              ],
            message: faker.lorem.sentences(),
            date_added: Date.now()
          }
        ]
      },
      {
        userID:
          user_ids[faker.random.number({ min: 0, max: user_ids.length - 1 })],
        message: faker.lorem.sentences(),
        date_added: Date.now(),
        inner_comments: [
          {
            userID:
              user_ids[
                faker.random.number({ min: 0, max: user_ids.length - 1 })
              ],
            message: faker.lorem.sentences(),
            date_added: Date.now()
          },
          {
            userID:
              user_ids[
                faker.random.number({ min: 0, max: user_ids.length - 1 })
              ],
            message: faker.lorem.sentences(),
            date_added: Date.now()
          },
          {
            userID:
              user_ids[
                faker.random.number({ min: 0, max: user_ids.length - 1 })
              ],
            message: faker.lorem.sentences(),
            date_added: Date.now()
          }
        ]
      }
    ]
  };

  comments.push(new_comment_comments);
}
// console.log(comments);

fs.writeFile('Comments.json', JSON.stringify(comments), err => {
  if (err) {
    return console.log(err);
  }

  console.log('-> Comments.json was saved!');
});
