const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unqiue: true,
        required: true,
        trim: true,
    },
    firstname: {
        type: String,
        required: false,
        trim: true,
    },
    lastname: {
        type: String,
        required: false,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
    },
    room: [
        {
            type: String,
            required: false,
        }
    ]
}, {
    timestamps: true
},
);

const User = mongoose.model('User', userSchema);

module.exports = User;