const router = require('express').Router();
const { allCleanings, updateCleanings } = require('../controllers/cleaning.controller');

// Все уборки
router.get('/', allCleanings);

// Обновление даты уборки
router.post('/update', updateCleanings);

module.exports = router;
