const emojisList = require('emojis-list')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

// create color document
const emoji = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, emojisList)
})

const emojis = map(emoji, keys(emojisList))

module.exports = app => {
  app.get('/emojis', (req, res) => {
    res.send(emojis)
  })
}
