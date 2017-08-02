const environment = process.env.NODE_ENV;

const dev = {
  dbConfig: {
    endpoint: 'localhost',
    user: 'sa',
    password: '123456',
    database: 'master',
    port: 1433,
  },
};
const prod = {
  dbConfig: {
    endpoint: '',
    user: '',
    password: '',
    database: '',
    port: 1433,
  },
};

(function config() {
  if (environment.toString().toUpperCase() === 'PROD') {
    global.env = `mssql://${prod.dbConfig.user}:${prod.dbConfig.password}@${prod.dbConfig.endpoint}:${prod.dbConfig.port}/${prod.dbConfig.database}`;
    return;
  }
  global.env = `mssql://${dev.dbConfig.user}:${dev.dbConfig.password}@${dev.dbConfig.endpoint}:${dev.dbConfig.port}/${dev.dbConfig.database}`;
}());
