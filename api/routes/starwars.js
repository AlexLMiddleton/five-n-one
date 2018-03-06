const starWarsNames = require('starwars-names')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

// create color document
const starWars = k => ({
  id: uuid.v4(),
  name: k
})

const swNames = map(starWars, starWarsNames.all)

module.exports = app => {
  app.get('/starwars', (req, res) => {
    res.send(swNames)
  })
}
