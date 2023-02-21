const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/favorite_authors', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection with the database'))
    .catch(err => console.log('Something went wrong, not connected to database', err))