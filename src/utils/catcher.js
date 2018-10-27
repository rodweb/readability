// eslint-disable-next-line
const catcher = (err, req, res, next) => {
  if (err instanceof Error) {
    console.error(err)
    res.status(500).send('Internal error')
  } else {
    res.status(400).send({ error: err })
  }
}

module.exports = catcher
