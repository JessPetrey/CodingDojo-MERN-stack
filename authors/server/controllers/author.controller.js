const {Author} = require('../models/authors.model')

module.exports.index = (req, res) => {
    res.json({
        message: 'Hello World'
    })
}