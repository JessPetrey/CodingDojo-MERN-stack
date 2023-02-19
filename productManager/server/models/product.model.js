const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, '{PATH} is required'],
        minlength: [2, '{PATH} must be at least 2 characters']
    },
    price: {
        type: Number,
        required: [true, '{PATH} is required'],
        minlength: [1, '{PATH} must be at least 1 characters']
    },
    description: {
        type: String,
        required: [true, '{PATH} is required'],
        minlength: [10, '{PATH} must be at least 10 characters']
    }
}, {timestamps: true})

module.exports.Product = mongoose.model('Product', ProductSchema)