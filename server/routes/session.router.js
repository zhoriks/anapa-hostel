const express = require('express');
const session = require('../controllers/session.controller');

const router = express.Router();

router.route('/')
  .get(session);

module.exports = router;
