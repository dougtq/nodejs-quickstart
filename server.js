import app from './src/config/express';

try {
  app.listen(app.set('port'), () => {
    global.winston.log('debug', `Server rodando na porta ${app.set('port')}`);
    console.log('Ok');
    global.app = app;
  });
} catch (e) {
  global.winston.error('debug', `Erro ao iniciar server ${e}`);
  console.log('NOT Ok');
}
