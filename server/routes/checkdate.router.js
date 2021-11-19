const router = require('express').Router();
const { checkDate } = require('../controllers/checkdate.controller');

router.route('/')
  .post(checkDate);

module.exports = router;
