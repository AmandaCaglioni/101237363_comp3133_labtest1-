const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    from_user: {
        type: String,
        required: false,
        trim: true,
    },
    to_user: {
        type: String,
        required: false,
        trim: true,

    },
    room: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,

    },
}, {
    timestamps: true,
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;