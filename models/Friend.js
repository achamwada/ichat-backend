const mongoose = require('mongoose');
const schema = mongoose.Schema;

const friendSchema = schema({
    relating_user: {
        type: schema.Types.ObjectId,
        ref: 'user'

    },
    related_user: {
        type: schema.Types.ObjectId,
        ref: 'user'
    },
    relationship: {
        type: String,
        enum: ['acquaintance','close','professional'],
        default: 'acquaintance'
    },
    acceptance: {
        type: Boolean,
        default: false
    },
    date_added: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('friend', friendSchema);