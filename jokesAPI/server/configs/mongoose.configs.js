const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

mongoose.connect('mongodb://127.0.0.1:27017/jokes_api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established database connection'))
    .catch(err => console.log('Something went wrong, not connected to database', err))

