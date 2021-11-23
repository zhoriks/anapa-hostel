const { Comment } = require('../db/models');

const allComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.status(200).json(comments);
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

module.exports = {
  allComments,
};
