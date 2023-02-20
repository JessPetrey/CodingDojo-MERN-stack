const {Person} = require('../models/person.model')


module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPerson = (req, res) => {
    const {firstName, lastName} = req.body
    Person.create({
        firstName,
        lastName
    })
    .then(person => res.json(person))
    .catch(err => res.json(err))
}

module.exports.getAllPeople = (req, res) => {
    Person.find({})
    .then(people => res.json(people))
    .catch(err => res.json(err))
}

module.exports.getPerson = (req, res) => {
    Person.findOne({_id: req.params.id})
        .then(person => res.json(person))
        .catch(err => res.json(err))
}