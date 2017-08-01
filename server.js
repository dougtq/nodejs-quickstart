import app from './src/config/express';

try {
  app.listen(app.set('port'), () => {
    global.winston.log('debug', `Server rodando na porta ${app.set('port')}`);
    // Remove winston logs from the console
    global.winston.remove(global.winston.transports.Console);
    // Create log file with the NODE_ENV's value
    global.winston.add(global.winston.transports.File, { filename: `../../logs/API_${process.env.NODE_ENV}.log` });
    global.app = app;
  });
} catch (e) {
  global.winston.error('debug', `Erro ao iniciar server ${e}`);
}
