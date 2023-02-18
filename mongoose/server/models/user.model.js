const mongoose = require('mongoose')


//define the data that goes into the database collection and documents
const UserSchema = new mongoose.Schema({
    name: { 
        type: String, 
        //adds validations, so empty fields cannot be submitted
        required: [true, '{path} is required'], 
        minlength: [2, '{path} must be at least 2 characters'] 
    },
    age: {
        type: Number, 
        required: [true, '{path} is required'], 
        minlength: [1, '{path} must be at least 1 character'] 
    },
}, {timestamps: true}) // timestamps adds the created at and updated at for us


const User = mongoose.model('User', UserSchema)
module.exports = User;