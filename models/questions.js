const mongoose = require('mongoose')
const { Schema } = mongoose

const questionSchema = new Schema({
    text: {type: String, required: true, unique: true},
    explanation: {
        type: String,
        required: true
    },
    options: [
        {
            text: {
                type: String,
                required: true,
            },
            isCorrect: {
                type: Boolean,
                default: false
            }
        }
    ],
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('Question', questionSchema)