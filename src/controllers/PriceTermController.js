const { calcularPrecoPrazo } = require('correios-brasil');
const { validationResult } = require('express-validator');

const { resolveObjectPriceTerm } = require('../utils/utilityFunctions');

class PriceTermController {
  async calculate(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const response = await calcularPrecoPrazo(req.body);

      const result = resolveObjectPriceTerm(response);

      if (!result) {
        return res.status(400).send();
      }
      return res.json(result);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new PriceTermController();
