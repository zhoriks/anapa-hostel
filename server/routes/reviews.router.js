const router = require('express').Router();
const { allReviews } = require('../controllers/reviews.controller');

router.route('/')
// Получить список всех коментариев
  .get(allReviews);

module.exports = router;
