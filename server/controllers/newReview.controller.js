const { Comment } = require('../db/models');

const newReview = async (req, res) => {
  const { guestName, guestTelephone, comment } = req.body;
  try {
    await Comment.create({
      guestName,
      guestTelephone,
      comment,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

module.exports = { newReview };
