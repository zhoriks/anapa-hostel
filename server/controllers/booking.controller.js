const { Op } = require('sequelize');
const { Book } = require('../db/models');

const allBooking = async (req, res) => {
  try {
    const booking = await Book.findAll({
      order: [['updatedAt', 'DESC']],
      where: {
        [Op.or]: [{ status: 'Проживает' }, { status: 'Ожидает подтверждения' }, { status: 'Подтверждено' }],
      },
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
      order: [['updatedAt', 'DESC']],
    });
    res.status(200).json(booking);
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

const changeBooking = async (req, res) => {
  try {
    const { id, comment, status } = req.body;

    await Book.update(
      { comment, status },
      { where: { id } },
    );
    const bookings = await Book.findAll({
      order: [['updatedAt', 'DESC']],
      where: {
        [Op.or]: [{ status: 'Проживает' }, { status: 'Ожидает подтверждения' }, { status: 'Подтверждено' }],
      },
    });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(404).json({ updated: false, error: error.message });
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
    await Book.create({
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
    const bookings = await Book.findAll({
      order: [['updatedAt', 'DESC']],
    });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(404).json({ error });
  }
};

module.exports = {
  allBooking, livingNowBooking, createNewBooking, changeBooking,
};
