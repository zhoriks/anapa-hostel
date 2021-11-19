const router = require('express').Router();
const allBooking = require('../controllers/booking.controller');

router.route('/')
  .get(allBooking);

module.exports = router;
