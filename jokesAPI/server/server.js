const express = require('express')
const app = express()

app.use(express.json(), express.urlencoded({extended: true}))

app.listen(8000, () => console.log('Listening on 8000'))