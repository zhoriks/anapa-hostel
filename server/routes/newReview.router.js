const router = require('express').Router();
const {
  newReview,
} = require('../controllers/newReview.controller');

// Добавить отзыв
router.post('/', newReview);

module.exports = router;
