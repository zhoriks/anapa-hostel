const router = require('express').Router();
const loginRouter = require('./login.router');
const logoutRouter = require('./logout.router');
const bookingRouter = require('./booking.router');
const roomsRouter = require('./rooms.router');
const checkdateRouter = require('./checkdate.router');
const sessionRouter = require('./session.router');
const adminReviewsRouter = require('./adminReview.router');
const reviewsRouter = require('./reviews.router');
const bookingFormRouter = require('./bookingForm.router');
const cleaningRouter = require('./cleaning.router');

router.use('/admin', loginRouter);
router.use('/admin/logout', logoutRouter);
router.use('/admin/booking', bookingRouter);
router.use('/admin/checkdate', checkdateRouter);
router.use('/admin/cleaning', cleaningRouter);
router.use('/admin/rooms', roomsRouter);
router.use('/admin/review', adminReviewsRouter);
router.use('/session', sessionRouter);
router.use('/reviews', reviewsRouter);
router.use('/post-new-booking', bookingFormRouter);

module.exports = router;
