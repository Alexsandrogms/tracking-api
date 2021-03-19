const { body, check } = require('express-validator');

const priceTermValidator = [
  body('sCepOrigem').notEmpty().trim().escape(),
  body('sCepDestino').notEmpty().trim().escape(),
  body('nVlPeso').notEmpty().trim().escape(),
  body('nCdFormato').notEmpty().trim().isInt().escape(),
  body('nVlComprimento').notEmpty().trim().isDecimal().escape(),
  body('nVlAltura').notEmpty().trim().isDecimal().escape(),
  body('nVlLargura').notEmpty().trim().isDecimal().escape(),
  body('nVlDiametro').notEmpty().trim().isDecimal().escape(),
  check('nCdServico').custom((_, { req }) => {
    if (req.body.nCdServico.length === 0) {
      throw new Error('Does not exists service code');
    }
    const serviceCode = [
      '04014',
      '04065',
      '04510',
      '04707',
      '40169',
      '40215',
      '40290',
    ];

    req.body.nCdServico.map((code) => {
      if (!serviceCode.includes(code)) {
        throw new Error(`Service code ${code} invalid`);
      }
    });

    return true;
  }),
  body('nVlDiametro').notEmpty().trim().isDecimal().escape(),
];

module.exports = {
  priceTermValidator,
};
