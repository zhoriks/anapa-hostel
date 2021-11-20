const router = require('express').Router();
const { logout } = require('../controllers/logout.controller');

// Выход из админ панели
router.get('/', logout);

module.exports = router;
