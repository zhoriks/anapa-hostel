const { Book } = require('../db/models');

const allBooking = async (req, res) => {
  try {
    const booking = await Book.findAll({
    });
    console.log(booking);
    res.status(200).json(booking);
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

module.exports = allBooking;
