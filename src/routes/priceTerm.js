const { Router } = require('express');
const PriceTermController = require('../controllers/PriceTermController');
const { priceTermValidator } = require('../middlewares/requestValidator');

const router = Router();

router.route('/').post(priceTermValidator, PriceTermController.calculate);

module.exports = router;
