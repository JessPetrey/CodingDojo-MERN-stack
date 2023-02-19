const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/product_manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection with the database'))
    .catch(err => console.log('Something went wrong, not connected to database', err))