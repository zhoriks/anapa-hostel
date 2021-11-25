const router = require('express').Router();
const { allRooms, updateFullness } = require('../controllers/rooms.controller');

router.route('/')
  // Получить список всех комнат
  .get(allRooms);

router.route('/')
  // Получить список всех комнат
  .put(updateFullness);

module.exports = router;
