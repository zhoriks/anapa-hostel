const router = require('express').Router();
const { loginAdmin } = require('../controllers/login.controller');

router.route('/')
  .post(loginAdmin);

module.exports = router;
