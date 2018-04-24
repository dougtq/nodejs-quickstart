import * as app from './src/config/express'

app.listen(app.set('port'), err => {
  if (err) {
    console.error(err.message)
    process.exit(1)
  }

  console.log('Server rodando na porta ', app.set('port'))
})
