const { Router } = require('express');
const CepController = require('../controllers/CepController');

const router = Router();

router.route('/:code').get(CepController.execute);

module.exports = router;