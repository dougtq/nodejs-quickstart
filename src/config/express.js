import * as express from 'express'
import * as bodyParser from 'bodyParser'
import * as consign from 'consign'
import * as winston from 'winston'
import * as method from 'method-override'
import * as http from 'http-status'
import { config } from 'dotenv'

const app = express()(function globalWinston() {
  config()
  winston.level = 'debug'
  winston.add(global.winston.transports.File, {
    filename: `../../logs/API_${process.env.NODE_ENV}.log`
  })

  global.winston = winston
})()
//  middleware
app.set('port', process.env.PORT) // porta de acesso
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.use(method())
app.use(express.static('./dist'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// carregamento de rotas, controllers e models
consign({ verbose: true }) /* setting the verbose property as false */
  .include('src/authExample/auth.route.js')
  .then('src/example/example.route.js')
  .into(app)

export default app
