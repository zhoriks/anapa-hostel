const { Op } = require('sequelize');
const { Book } = require('../db/models');

const allBooking = async (req, res) => {
  try {
    const booking = await Book.findAll({
    });
    res.status(200).json(booking);
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

const livingNowBooking = async (req, res) => {
  try {
    const booking = await Book.findAll({
      where: {
        status: 'Проживает',
      },
    });
    res.status(200).json(booking);
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

const changeBooking = async (req, res) => {
  try {
    const { comment, status } = req.body;
    console.log(comment, status);
    const booking = await Book.findAll({
      where: {
        status: 'Проживает',
      },
    });
    res.status(200).json(booking);
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

module.exports = { allBooking, livingNowBooking, changeBooking };
