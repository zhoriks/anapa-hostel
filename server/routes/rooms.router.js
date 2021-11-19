const router = require('express').Router();
const allRooms = require('../controllers/rooms.controller');

router.route('/')
  .get(allRooms);

module.exports = router;
