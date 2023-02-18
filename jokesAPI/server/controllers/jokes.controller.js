const Joke = require('../models/jokes.model')

module.exports.testing = (req, res) => {
    res.json({status: 'successful connection'})
}

// get all 
module.exports.getAll = (req, res) => {
    res.json()
}

//get one by id
module.exports.getOne = (req, res) => {
    res.json()
}

//get random
module.exports.getRandom = (req, res) => {
    res.json()
}

// create
module.exports.addOne = (req, res) => {
    res.json()
}

//update by id
module.exports.updateOne = (req, res) => {
    res.json()
}

//delete by id
module.exports.deleteOne = (req, res) => {
    res.json()
}