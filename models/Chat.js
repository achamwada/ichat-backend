const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    user_id:{
        type: String
    },
    channel_id: {
        type: String
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