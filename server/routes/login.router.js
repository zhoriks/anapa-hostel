const router = require('express').Router();
const { login } = require('../controllers/login.controller');

router.route('/')
  .post(login);

module.exports = router;
