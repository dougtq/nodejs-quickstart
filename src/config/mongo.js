import mongo from 'mongodb';

const mongoClient = mongo.MongoClient();
const url = 'mongodb://localhost/example';

mongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Erro na conexão');
  }
   /* Ações */
  /*       */

  db.close();
});

