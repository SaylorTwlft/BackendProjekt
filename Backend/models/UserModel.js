const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Puste pole: Imię'],
    },
    email: {
        type: String,
        required: [true, 'Puste pole: Email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Puste pole: Hasło'],
    },
}, {
    timestamps: true,
})


module.exports = mongoose.model('User', userSchema)