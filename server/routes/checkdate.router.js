const router = require('express').Router();
const { checkDate } = require('../controllers/checkdate.controller');

router.route('/')
// Проверка доступности броннирования на выбранные даты
  .post(checkDate);

module.exports = router;
