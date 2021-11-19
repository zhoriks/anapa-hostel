const router = require('express').Router();
const loginRouter = require('./login.router');

router.use('/admin', loginRouter);

module.exports = router;
