const action = fn => (req, res, next) =>
  fn(req, res, next).catch(next)

module.exports = action

