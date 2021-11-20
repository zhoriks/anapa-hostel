const { Op } = require('sequelize');
const { Book, Room } = require('../db/models');

const checkDate = async (req, res) => {
  const {
    checkInDate,
    category,
    guestsNumber,
  } = req.body;

  const books = await Book.findAll({
    where: {
      checkInDate: {
        [Op.gte]: checkInDate,
      },
      categoryRoom: category,
    },
    incluxde: Room,
  });

  const rooms = await Room.findAll({
    where: {
      type: category,
    },
  });

  const allRoomsBad = rooms.reduce((acc, room) => acc + room.numberOfBeds, 0);
  const allPeopleLive = books.reduce((acc, book) => acc + book.guestsNumber, 0);

  if (allRoomsBad > allPeopleLive + guestsNumber) {
    return res.status(200).json({ message: 'Мы можем подселить вас на эти даты' });
  }
  res.status(200).json({ message: 'Мы не можем подселить вас на эти даты' });
};

module.exports = {
  checkDate,
};
