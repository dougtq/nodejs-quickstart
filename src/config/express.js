import express from 'express';
import bodyParser from 'body-parser';
import consign from 'consign';
import winston from 'winston';
import helmet from 'helmet';
import method from 'method-override';

global.winston = winston;

const app = express();

winston.level = 'debug';

// Create log file with the NODE_ENV's value
winston.add(winston.transports.File, {
  filename: `./logs/API_${process.env.NODE_ENV}.log`,
});

// Remove winston logs from the console
winston.remove(winston.transports.Console);

//  middleware
app.set('port', 3000); // porta de acesso
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Expose-Headers', 'Authorization');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(method());
app.use(express.static('./dist'));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
app.use(bodyParser.json({ limit: '5mb' }));

// carregamento de rotas, controllers e models
consign({ verbose: true }) /* setting the verbose property as false */
  .include('src/**/**')
  .then('src/config/*.js')
  .into(app);

module.exports = app;
