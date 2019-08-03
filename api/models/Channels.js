const mongoose = require('mongoose');

const schema = mongoose.Schema;

const ChannelSchema = schema({
  title: {
    type: String,
    unique: true
  },
  description: String,
  date_created: {
    type: Date,
    default: Date.now()
  },
  owner: {
    type: schema.Types.ObjectId,
    ref: 'user'
  },
  avatar: {
    type: String,
    default: 'http://localhost:3000/static/media/alex.c9fed323.jpg'
  },
  members: [
    {
      type: schema.Types.ObjectId,
      ref: 'user'
    }
  ],
  channelChats: [
    {
      type: schema.Types.ObjectId,
      ref: 'chat'
    }
  ]
});

module.exports = mongoose.model('channel', ChannelSchema);
