const { rastrearEncomendas } = require('correios-brasil');

const { isEmpty } = require('../utils/utilityFunctions');

class TrackingController {
  async execute(req, res, next) {
    try {
      const trackingCode = req.params.code;

      const response = await rastrearEncomendas([trackingCode]);

      if (isEmpty(response)) {
        return res.status(404).json({
          error:
            'Não conseguimos encontrar o seu pacote, verifique o código tente novamente!',
        });
      }

      return res.json(response['0']);
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }
}

module.exports = new TrackingController();
