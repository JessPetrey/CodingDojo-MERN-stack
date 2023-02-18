const UserController = require('../controllers/user.controller')

module.exports = (app) => {
    //? the order of the routes matters! put all get routes together, with any using :id below others
    app.get('/api/test', UserController.testApi) // this is just to test connection
    app.get('/api/users', UserController.allUsers) // this is to get all 
    app.get('/api/users/:id', UserController.oneUser) // get only one by id
//? these seem to be okay like this because they are different types -- put vs delete
//?  the post /users does not interfere with the get /users
    app.post('/api/users', UserController.addUser) // add a new user
    app.put('/api/users/:id', UserController.updateUser) // update a user by id
    app.delete('/api/users/:id', UserController.deleteUser) // removes a user document by the id
}