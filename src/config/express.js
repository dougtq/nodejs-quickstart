import express from 'express';
import bodyParser from 'body-parser';
import consign from 'consign';
import winston from 'winston';
import helmet from 'helmet';
import method from 'method-override';

const app = express();

global.winston = winston;
global.winston.level = 'debug';
/**/

//  middleware
app.set('port', 3000); // porta de acesso
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.setHeader('Access-Control-Expose-Headers', 'Authorization');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(method());
app.use(express.static('./dist'));
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(helmet());

// carregamento de rotas, controllers e models
consign({ verbose: false }) /* setting the verbose property as false */
  .include('src/example/example.route.js')
  .then('src/config/*.js')
  .into(app);

module.exports = app;
