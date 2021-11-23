const router = require('express').Router();
const {
  newBook,
} = require('../controllers/bookingForm.controller');

// Добавление нового бронирования со стороны клиента
router.post('/', newBook);

module.exports = router;
