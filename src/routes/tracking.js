const { Router } = require('express');
const TrackingController = require('../controllers/TrackingController');

const router = Router();

router.route('/:code').get(TrackingController.execute);

module.exports = router;
