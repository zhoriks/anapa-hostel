const router = require('express').Router();
const { allBooking, livingNowBooking, createNewBooking } = require('../controllers/booking.controller');

// Все бронирования
router.get('/', allBooking);
// Бронирования которые сейчас проживают
router.get('/now', livingNowBooking);
// Создать бронирование
router.post('/', createNewBooking);

module.exports = router;
