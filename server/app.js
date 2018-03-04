const express = require('express')
const path = require('path')
const app = express()
const publicDir = path.join(__dirname, '../public')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(express.static(publicDir))

/*****************************/

app.use('/', require('./routes/root'))
app.use('/game', require('./routes/game'))

/*****************************/

app.listen(3000, () => console.log('Example app listening on port 3000!'))
