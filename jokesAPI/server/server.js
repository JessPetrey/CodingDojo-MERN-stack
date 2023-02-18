const express = require('express')
const app = express()

require('./configs/mongoose.configs')
app.use(express.json(), express.urlencoded({extended: true}))

const Routes = require('./routes/jokes.routes')
Routes(app)

app.listen(8000, () => console.log('Listening on 8000'))