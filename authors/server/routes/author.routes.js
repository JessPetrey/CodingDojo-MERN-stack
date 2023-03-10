const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    app.get('/api', AuthorController.index)
    app.get('/api/authors', AuthorController.getAllAuthors)
    app.get('/api/authors/:id', AuthorController.getAuthor)
    app.post('/api/authors/new', AuthorController.createAuthor)
    app.put('/api/authors/edit/:id', AuthorController.updateAuthor)
    app.delete('/api/authors/:id', AuthorController.deleteAuthor)
}