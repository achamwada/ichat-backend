const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ChannelSchema = Schema({
    title: String,
    description: String,
    admininstrators: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    },


});

module.exports = mongoose.model('channel', ChannelSchema);