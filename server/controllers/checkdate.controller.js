const { Op } = require('sequelize');
const { Book, Room } = require('../db/models');

const checkDate = async (req, res) => {
  const {
    checkInDate,
    checkOutDate,
    category,
  } = req.body;

  const books = await Book.findAll({
    where: {
      checkOutDate: {
        [Op.between]: [checkInDate, checkOutDate],
      },
      categoryRoom: category,
    },
  });

  const rooms = await Room.findAll({
    where: {
      type: 'Эконом',
    },
  });

  res.status(200).json(rooms);
};

module.exports = {
  checkDate,
};
