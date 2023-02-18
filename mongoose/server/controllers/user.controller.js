const User = require('../models/user.model')


module.exports.testApi = (req, res) => {
    res.json({status: 'ok'})
}

module.exports.allUsers = (req, res) => {
    User.find()
    .then((response) => res.json(response))
    .catch(err => res.json(err))
}

module.exports.oneUser = (req, res) => {
    User.findOne( {_id: req.params.id} )
    .then((response) => res.json(response))
    .catch(err => res.json(err))
}

module.exports.addUser = (req, res) => {
    User.create( req.body )
    .then((response) => res.json(response))
    .catch(err => res.json(err))
}

module.exports.updateUser = (req, res) => {
    User.findOneAndUpdate( 
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
    .then((response) => res.json(response))
    .catch(err => res.json(err))
}

module.exports.deleteUser = (req, res) => {
    User.deleteOne( {_id: req.params.id} )
    .then((response) => res.json(response))
    .catch(err => res.json(err))
}
