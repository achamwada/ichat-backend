var mongoose = require('mongoose');
var schema = mongoose.Schema;

// Comment schema that relates to statuses as inner comments
const CommentShema = schema({
  userID: {
    type: schema.Types.ObjectId,
    ref: 'user'
  },
  message: String,
  date_added: {
    type: Date,
    default: Date.now
  },
  inner_comments: [
    {
      type: schema.Types.ObjectId,
      ref: 'status'
    }
  ]
});

module.exports = mongoose.model('comment', CommentShema);
