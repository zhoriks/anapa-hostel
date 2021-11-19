const { Op } = require('sequelize');
const { Book, Room } = require('../db/models');

const checkDate = async (req, res) => {
  const {
    checkInDate,
    checkOutDate,
    category,
  } = req.body;

  try {
    const books = await Book.findAll({
      where: {
        checkOutDate: {
          [Op.between]: [checkInDate, checkOutDate],
        },
        categoryRoom: category,
      },
    });
    if (books.length) {
      res.status(200).json(books);
    }
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

module.exports = {
  checkDate,
};
