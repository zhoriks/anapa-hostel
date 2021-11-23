const router = require('express').Router();
const loginRouter = require('./login.router');
const logoutRouter = require('./logout.router');
const bookingRouter = require('./booking.router');
const roomsRouter = require('./rooms.router');
const checkdateRouter = require('./checkdate.router');
const sessionRouter = require('./session.router');
const adminReviewsRouter = require('./adminReview.router');
const reviewsRouter = require('./reviews.router');

router.use('/admin', loginRouter);
router.use('/admin/logout', logoutRouter);
router.use('/admin/booking', bookingRouter);
router.use('/admin/checkdate', checkdateRouter);
router.use('/admin/rooms', roomsRouter);
router.use('/admin/review', adminReviewsRouter);
router.use('/session', sessionRouter);
router.use('/reviews', reviewsRouter);

module.exports = router;
