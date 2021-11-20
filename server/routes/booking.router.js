const router = require('express').Router();
const { allBooking, livingNowBooking } = require('../controllers/booking.controller');

// Все бронирования
router.get('/', allBooking);
// Бронирования которые сейчас проживают
router.get('/now', livingNowBooking);

module.exports = router;
