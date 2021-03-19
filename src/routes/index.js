const { Router } = require('express');

const trackingRouter = require('./tracking');
const postalCodeRouter = require('./postalCode');
const priceTermRouter = require('./priceTerm');

const router = Router();

router.use('/tracking', trackingRouter);
router.use('/postal-code', postalCodeRouter);
router.use('/price-term', priceTermRouter);

router.get('/check', (req, res) => {
  let date = new Date();
  let time = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

  return res.json({
    message: 'Server running',
    status: 200,
    time,
  });
});

module.exports = router;