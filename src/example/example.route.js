module.exports = function rotaExample(application) {
  application.get('/api/example', (req, res) => {
    application.src.example.model.example(application, req, res);
  });

  application.get('/api/example/:id', (req, res) => {
    res.status(200).json(`Seu Id de exemplo é: ${req.params.id}`);
  });

  application.post('/api/example/', (req, res) => {
    res.status(200).json('Exemplo a ser criado ');
  });

  application.put('/api/example/:id', (req, res) => {
    res.status(200).json(`Seu Id de exemplo a ser alterado é: ${req.params.id}`);
  });

  application.patch('/api/example/:id', (req, res) => {
    res.status(200).json(`Seu Id de exemplo a ser alterado parcialmente é: ${req.params.id}`);
  });

  application.delete('/api/example/:id', (req, res) => {
    res.status(200).json(`Seu Id de exemplo a ser deletado é: ${req.params.id}`);
  });
};
