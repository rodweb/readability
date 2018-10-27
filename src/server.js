const express = require('express')
const bodyParser = require('body-parser')

const { catcher } = require('./utils')

const routes = require('./routes')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)
app.use(catcher)

const port = 3000 || process.env.PORT

const start = () => {
  app.listen(port)
}

module.exports = {
  start,
}
