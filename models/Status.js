const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Comment schema that relates to statuses as inner comments
const Comment = new schema({
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
});

// Status schema that relates to users and comments
const Status = new schema({
  userID: {
    type: schema.Types.ObjectId(),
    ref: 'user'
  },
  status: String,
  date_created: {
    default: Date.now()
  },
  likes: Number,
  views: Number,
  comments: [
    {
      type: schema.Types.ObjectId,
      ref: 'comment'
    }
  ]
});


// Creating models from defined schemas
CommentModel = mongoose.model('comment', Comment);
StatusModel = mongoose.model('status', Status);

module.exports = {
  CommentModel,
  StatusModel
};
