import app from './src/config/express';
import env from './src/env/env_mssql';

try {
  app.listen(app.set('port'), () => {
    global.app = app;
    global.winston.log('debug', `Server rodando na porta ${global.app.set('port')}`);
    global.winston.remove(global.winston.transports.Console);
  });
} catch (err) {
  global.winston.error('debug', `Erro ao iniciar server: ${err}`);
}
