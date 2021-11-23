const router = require('express').Router();
const { newReview, allViewReviews } = require('../controllers/reviews.controller');

// Получить список всех модерированых отзывов
router.get('/', allViewReviews);

// Добавить отзыв
router.post('/', newReview);

module.exports = router;
