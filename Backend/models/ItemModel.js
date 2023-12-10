const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        requried: true,
        ref: 'User',
    },
    text: {
        type: String,
        required: [true, 'Pusta nazwa prezentu!']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Item', itemSchema)