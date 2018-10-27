const { Router } = require('express')

const { action } = require('./utils')
const { parse } = require('./article-parser')

const router = Router()
router.get('/healthcheck', action(async (req, res) => {
  res.send('OK')
}))

router.post('/parse-article', action(async (req, res) => {
  const { content, title } = await parse(req.body.uri)

  res.json({ content, title })
}))

module.exports = router
