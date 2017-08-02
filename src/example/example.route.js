module.exports = function rotaExample(application) {
  /**
   * @api {get} /api/examples/:id GetExample
   * @apiName GetExample
   * @apiGroup Example
   * @apiPermission user
   * @apiHeader {Token} Authorization Token JWT.
   * @apiHeaderExample Header-Example:
   * {
   *   "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjQsImV4cCI6MTQ5NDU5NjY2MDg0OH0.oW4RNq7AuHuUqPNcuCBy5LP_L-hbqCoH4qF8Q-xNf2w"
   * }
   * @apiExample {curl} Example usage:
   *  curl -i http://localhost/api/examples/7
   * @apiParam {Number} id Example_Id do example.
   *
   *
   *
   * @apiSuccess (200) {String} descricao - descricao do exemplo
   * @apiSuccess (200) {Boolean} ativo Estado do exemplo se está ativa ou cancelada
   * @apiSuccess (200) {Int} tipo Tipo do exemplo
   *
   * @apiSuccessExample {json} Sucesso
   *    HTTP/1.1 200 OK
   *    {
   *      "descricao" : "Examplo Default"
   *      "ativo" : "1"
   *      "tipo" : "2"
   *    }
   * @apiError (404) {Error} APITIMEOUT API TIMEOUT
   *
   * @apiErrorExample Error-Response:
   *    HTTP/1.1 404 Not Found
   *    {
   *      "message": "Falha na API"
   *    }
   */
  application.get('/api/examples/:id', (req, res) => {
    res.status(200).json(`Seu Id de exemplo é: ${req.params.id}`);
  });

  application.get('/api/examples', (req, res) => {
    application.src.example.controller.example(application, req, res);
  });

  application.post('/api/examples/', (req, res) => {
    res.status(200).json('Exemplo a ser criado ');
  });

  application.put('/api/examples/:id', (req, res) => {
    res.status(200).json(`Seu Id de exemplo a ser alterado é: ${req.params.id}`);
  });

  application.patch('/api/examples/:id', (req, res) => {
    res.status(200).json(`Seu Id de exemplo a ser alterado parcialmente é: ${req.params.id}`);
  });

  application.delete('/api/examples/:id', (req, res) => {
    res.status(200).json(`Seu Id de exemplo a ser deletado é: ${req.params.id}`);
  });
};
