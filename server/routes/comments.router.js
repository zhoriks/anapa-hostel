const router = require('express').Router();
const { allComments } = require('../controllers/comments.controller');

router.route('/')
// Получить список всех коментариев
  .get(allComments);

module.exports = router;
