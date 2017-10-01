let handler = require('./auth.controller')

module.exports = function rotaExample(application) {
  application.get('/auth/session', (req, res) => {
    handler.auth(req, res)
  })
}
