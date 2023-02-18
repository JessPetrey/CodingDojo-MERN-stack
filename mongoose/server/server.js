// import dependencies
const express = require('express')
const app = express()

// configs 
require('./config/mongoose.config')
app.use( express.json(), express.urlencoded({extended: true}) )

// get the routes
const Routes = require('./routes/user.routes')
Routes(app)


//listen to the port
app.listen(8000, () => console.log('Listening on 8000'))