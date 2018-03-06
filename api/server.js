const express = require('express')
const cors = require('cors')
const colorRoutes = require('./routes/colors')
const starWars = require('./routes/starwars')
const buzzwords = require('./routes/buzzwords')
const fortuneCookies = require('./routes/fortune-cookies')
const emojisList = require('./routes/emojis')
const app = express()
app.use(cors({ credentials: true }))

// load routes here

app.get('/', (req, res) => res.send('5n1 API Server'))

colorRoutes(app)

starWars(app)

buzzwords(app)

fortuneCookies(app)

emojisList(app)

app.listen(5000)
console.log('Server listening at 5000')
