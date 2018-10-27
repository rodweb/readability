const readability = require('node-readability')

const { timeout } = require('./utils')

const parse = uri =>
  timeout(5000, (resolve, reject) => {
    readability(uri, (err, article) => {
      if (err) reject(err)
      if (!article.content) reject('Could not parse article')
      resolve(article)
    })
  })

module.exports = {
  parse,
}
