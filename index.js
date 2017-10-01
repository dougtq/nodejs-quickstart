let app = require('./src/config/express')

app.listen(app.set('port'), err => {
  if (err) throw err

  console.log('Server rodando na porta ', app.set('port'))

})
