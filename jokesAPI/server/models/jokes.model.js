const mongoose = require('mongoose')

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, '{path} is required'],
        minlength: [10, '{path} must be at least 10 characters']
    },
    punchline: {
        type: String,
        required: [true, '{path} is required'],
        minlength: [3, '{path} must be at least 3 characters']
    }
}, {timestamps: true})

const Joke = mongoose.model('Joke', JokesSchema)
module.exports = Joke