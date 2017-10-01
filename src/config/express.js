let express = require('express')
let bodyParser = require('body-parser')
let consign = require('consign')
let winston = require('winston')
let method = require('method-override')
let status = require('http-status')

const app = express()
global.http = status
global.winston = winston
global.winston.level = 'debug'
global.winston.add(global.winston.transports.File, {
  filename: `../../logs/API_${process.env.NODE_ENV}.log`
})

//  middleware
app.set('port', 3000) // porta de acesso
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
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())

// carregamento de rotas, controllers e models
consign({ verbose: true }) /* setting the verbose property as false */
  .include('src/authExample/auth.route.js')
  .into(app)

module.exports = app
