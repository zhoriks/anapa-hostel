const router = require('express').Router();
const { allBooking, livingNowBooking, changeBooking } = require('../controllers/booking.controller');

// Все бронирования
router.get('/', allBooking);
// Бронирования которые сейчас проживают
router.get('/now', livingNowBooking);
// Бронирования, которые должен изменить админ
router.put('/change', changeBooking);

module.exports = router;
