const { Review } = require('../db/models');

const allViewReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      moderate: true,
    });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

const newReview = async (req, res) => {
  const { guestName, guestTelephone, comment } = req.body;
  try {
    await Review.create({
      guestName,
      guestTelephone,
      comment,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

const allReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

const editReview = async (req, res) => {
  const {
    idReview,
    status,
  } = req.body;
  try {
    const reviews = await Review.update({
      where: { idReview },
      moderate: !status,
    });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

module.exports = {
  allViewReviews,
  allReviews,
  newReview,
  editReview,
};
