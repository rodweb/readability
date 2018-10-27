const timeout = (ms, fn) =>
  new Promise((resolve, reject) => {
    fn(resolve, reject)

    setTimeout(() => {
      reject(`Promise timed out after ${ms} ms`)
    }, ms)
  })

module.exports = timeout
