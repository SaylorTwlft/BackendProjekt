const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Empty name field!'],
    },
    email: {
        type: String,
        required: [true, 'Empty email field!'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Empty password field!'],
    },
}, {
    timestamps: true,
})


module.exports = mongoose.model('User', userSchema)