const router = require('express').Router();
const loginRouter = require('./login.router');
const logoutRouter = require('./logout.router');
const bookingRouter = require('./booking.router');
const roomsRouter = require('./rooms.router');
const checkdateRouter = require('./checkdate.router');

router.use('/admin', loginRouter);
router.use('/admin/logut', logoutRouter);
router.use('/admin/booking', bookingRouter);
router.use('/admin/checkdate', checkdateRouter);
router.use('/admin/rooms', roomsRouter);

module.exports = router;
