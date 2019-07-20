const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Status schema that relates to users and comments
const StatusShema = new schema({
  userID: {
    type: schema.Types.ObjectId,
    ref: 'user'
  },
  status: String,
  date_added: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
  images: [
    {
      url: String
    }
  ],
  comments: [
    {
      type: schema.Types.ObjectId,
      ref: 'comment'
    }
  ]
});

module.exports = mongoose.model('status', StatusShema);
