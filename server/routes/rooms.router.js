const router = require('express').Router();
const allRooms = require('../controllers/rooms.controller');

router.route('/')
// Получить список всех комнат
  .get(allRooms);

module.exports = router;
