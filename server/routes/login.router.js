const router = require('express').Router();
const { loginAdmin } = require('../controllers/login.controller');

router.route('/')
// Вход в админ панель
  .post(loginAdmin);

module.exports = router;
