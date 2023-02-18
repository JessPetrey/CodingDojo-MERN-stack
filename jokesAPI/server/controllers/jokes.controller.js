const Joke = require('../models/jokes.model')

module.exports.testing = (req, res) => {
    res.json({ status: 'successful connection' })
}

// get all 
module.exports.getAll = (req, res) => {
    Joke.find()
        .then((response) => res.json(response))
        .catch(err => res.json(err))
}

//get one by id
module.exports.getOne = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then((response) => res.json(response))
        .catch(err => res.json(err))
}

// create
module.exports.addOne = (req, res) => {
    Joke.create(req.body)
        .then((response) => res.json(response))
        .catch(err => res.json(err))
}

//update by id
module.exports.updateOne = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then((response) => res.json(response))
        .catch(err => res.json(err))
}

//delete by id
module.exports.deleteOne = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then((response) => res.json(response))
        .catch(err => res.json(err))
}