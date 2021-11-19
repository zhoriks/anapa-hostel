const router = require('express').Router();
const checkDate = require('../controllers/checkdate.controller');

router.route('/')
  .get();

module.exports = router;
