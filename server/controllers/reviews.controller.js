const { Comment } = require('../db/models');

const allReviews = async (req, res) => {
  try {
    const reviews = await Comment.findAll();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

module.exports = {
  allReviews,
};
