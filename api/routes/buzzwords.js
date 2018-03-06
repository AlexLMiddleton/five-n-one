const buzzwords = require('buzzwords')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

// create color document
const words = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, buzzwords)
})

const bWords = map(words, keys(buzzwords))

module.exports = app => {
  app.get('/buzzwords', (req, res) => {
    res.send(bWords)
  })
}
