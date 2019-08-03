const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ChatSchema = schema({
  message: String,
  created_at: {
    type: Date,
    default: Date.now()
  },
  user: {
    type: schema.Types.ObjectId,
    ref: 'user'
  },
  channel: {
    type: schema.Types.ObjectId,
    ref: 'channel'
  }
});

module.exports = mongoose.model('chat', ChatSchema);
