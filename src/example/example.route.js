module.exports = function rotaExample(application) {
  application.get('/api/example', (req, res) => {
    application.src.example.model.example(application, req, res);
  });
};
