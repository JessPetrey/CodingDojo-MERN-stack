const JokesController = require('../controllers/jokes.controller')

module.exports = (app) => {
    app.get('/api/testing', JokesController.testing)
    app.get('/api/getAll', JokesController.getAll)
    app.get('/api/getOne', JokesController.getOne)
    app.get('/api/getRandom', JokesController.getRandom)
    app.get('/api/addOne', JokesController.addOne)
    app.get('/api/updateOne', JokesController.updateOne)
    app.get('/api/deleteOne', JokesController.deleteOne)
}
