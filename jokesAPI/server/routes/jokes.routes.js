const JokesController = require('../controllers/jokes.controller')

module.exports = (app) => {
    app.get('/api/testing', JokesController.testing)
    app.get('/api/jokes', JokesController.getAll)
    app.get('/api/jokes/:id', JokesController.getOne)
    app.post('/api/jokes/new', JokesController.addOne)
    app.put('/api/jokes/update/:id', JokesController.updateOne)
    app.delete('/api/jokes/delete/:id', JokesController.deleteOne)
}
