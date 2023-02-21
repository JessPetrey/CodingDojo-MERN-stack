const {Author} = require('../models/authors.model')

module.exports.index = (req, res) => {
    res.json({
        message: 'Hello World'
    })
}

module.exports.createAuthor = (req, res) => {
    const {name} = req.body
    Author.create({ name })
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err))
}

module.exports.getAllAuthors = (req, res) => {
    Author.find({})
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err))
}

module.exports.getAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {
            new:true,
            runValidators: true
        }
        )
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}