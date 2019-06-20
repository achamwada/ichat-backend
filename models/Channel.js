const mongoose = require('mongoose');

const ChannelSchema = mongoose.Schema({
    channel_id:{
        type: BigInt
    }

});

module.exports = mongoose.model('channel', ChannelSchema);