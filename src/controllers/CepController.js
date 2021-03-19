const { consultarCep } = require('correios-brasil');

const { isEmpty } = require('../utils/utilityFunctions');

class CepController {
  async execute(req, res, next) {
    try {
      const cepCode = req.params.code;

      const response = await consultarCep(cepCode);

      if (isEmpty(response)) {
        return res.status(404).json({
          error:
            'Não conseguimos encontrar o seu pacote, verifique o cep tente novamente!',
        });
      }

      return res.json(response);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new CepController();
