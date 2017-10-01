let Jwt = require('jsonwebtoken')
const _Secret = '4+d41asanw2iam4c'

module.exports.auth = (req, res) => {
  let { user, password } = req.body

  if (user && password) {
    let token = Jwt.sign({ user: user }, _Secret, { expiresIn: '5600' })

    res.status(202).json({ data: token })
  }
}
