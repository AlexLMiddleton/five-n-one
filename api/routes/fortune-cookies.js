const fortuneCookie = require('fortune-cookie')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')
// create color document
console.log(fortuneCookie)

const cookie = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, fortuneCookie)
})

const cookies = map(cookie, keys(fortuneCookie))

module.exports = app => {
  app.get('/fortune-cookies', (req, res) => {
    res.send(cookies)
  })
}
