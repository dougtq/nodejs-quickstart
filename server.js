import app from './src/config/express';

try {
  app.listen(app.set('port'), () => {
    global.app = app;
    global.winston.log('debug', `Server rodando na porta ${app.set('port')}`);
    global.winston.add(global.winston.transports.File, { filename: `../../logs/API_${process.env.NODE_ENV}.log` });
    global.winston.remove(global.winston.transports.Console);
  });
} catch (err) {
  global.winston.error('debug', `Erro ao iniciar server: ${err}`);
}
