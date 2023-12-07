const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Empty text value!']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Item', itemSchema)