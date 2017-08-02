const sql = require('mssql');

let query;

const Executioner = function mssqlExec(req, res) {
  try {
    const pool = new sql.ConnectionPool(global.env, (err) => {
      pool.on('error', (poolErr) => {
        global.winston('debug', `At: ${new Date()} error:${poolErr}`);
        return res.status(500).json({ message: 'Erro com a conexão' });
      });

      if (err) {
        global.winston('debug', `At: ${new Date()} error:${err}`);
        return res.status(500).json({ message: 'Erro com a conexão' });
      }

      const request = new sql.Request(pool);
      request.on('error', (reqErr) => {
        global.winston('debug', `At: ${new Date()} error:${reqErr}`);
        return res.status(500).json({ message: 'Erro com a conexão' });
      });

      request.query(req, (queryErr, data) => {
        pool.close();
        if (queryErr) {
          global.winston('debug', `At: ${new Date()} error:${queryErr}`);
          return res.status(404).json({ message: 'Erro com a execução' });
        }
        query = data;
      });
    });
  } catch (error) {
    global.winston('debug', `At: ${new Date()} error:${error}`);
    return res.status(500).json({ message: 'Erro com a conexão' });
  }
  return res(query);
};

module.exports = function exporta() {
  return Executioner;
};
