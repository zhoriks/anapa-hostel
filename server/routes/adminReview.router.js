const router = require('express').Router();
const { allReviews, editReview } = require('../controllers/reviews.controller');

// Получить список всех отзывов
router.get('/', allReviews);

// Добавить отзы
router.put('/', editReview);

module.exports = router;
