const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = Schema({
    user_id:{
        type: Schema.Types.ObjectId
    },
    channel_id: {
        type: Schema.Types.ObjectId,
        ref: 'Channel'
    },
    message:{
        type: String
    },
    date_added:{
        type: Date,
        default: Date.now
    }


});

module.exports = mongoose.model('user', userSchema);