module.exports = function rotaExample(application) {
  application.get('/api/example', (req, res) => {
    application.src.example.model.example(application, req, res);
  });

  application.get('/api/example/:id', (req, res) => {
    res.status(200).json(`Seu Id de exemplo é: ${req.params.id}`);
  });
};
