const router = require('express').Router();
const { allCleanings, updateCleanings, checkCleanings } = require('../controllers/cleaning.controller');

// Все уборки
router.get('/', allCleanings);

// Обновление даты уборки
router.put('/update', updateCleanings);

// Обновление даты уборки
router.get('/check', updateCleanings);

module.exports = router;
