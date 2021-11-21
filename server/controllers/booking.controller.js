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
    const { id, comment, status } = req.body;
    // console.log(comment, status, id, 'COMMENT STATUS ID');
    const booking = await Book.findOne({
      where: {
        id,
      },
    });
    // booking.update({ comment, status });
    booking.comment = comment;
    booking.status = status;
    // booking.save();
    const bookings = await Book.findAll({
    });
    // console.log(booking[0].comment, 'BOOKING');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

const createNewBooking = async (req, res) => {
  const {
    guestFirstName,
    guestLastName,
    guestPatronymic,
    checkInDate,
    checkOutDate,
    categoryRoom,
    guestsNumber,
    email,
    telephone,
    status,
    RoomId,
    comment,
  } = req.body;
  try {
    const booking = await Book.create({
      guestFirstName,
      guestLastName,
      guestPatronymic,
      checkInDate,
      checkOutDate,
      categoryRoom,
      guestsNumber,
      email,
      telephone,
      status,
      RoomId,
      comment,
    });
    res.status(200).json(booking);
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

module.exports = { allBooking, livingNowBooking, createNewBooking, changeBooking };
