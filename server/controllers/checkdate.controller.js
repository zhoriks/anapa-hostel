const { Op } = require('sequelize');
const Sequelize = require('sequelize');
const { Book, Room } = require('../db/models');

const checkDate = async (req, res) => {
  const {
    checkInDate,
    checkOutDate,
    guestsNumber,
  } = req.body;

  const bookss = await Book.findAll({
    where: {
      checkInDate: {
        [Op.gte]: checkInDate,
      },
      // checkOutDate: {
      //   [Op.lte]: checkOutDate,
      // },
    },
  });

  const books = await Book.findAll({
    where: {
      checkInDate: {
        [Op.gte]: checkInDate,
      },
    },
    attributes: [
      [Sequelize.fn('SUM', Sequelize.col('Book.guestsNumber')), 'totalInvoiceAmount'],
    ],
    include: [
      {
        model: Room,
      },
    ],
    group: ['Room.id'],
  });

  // const rooms = await Room.findAll();

  // rooms.forEach((room) => {
  //   let allPeopleLiveInRoom = 0;
  //   books.forEach((book) => {
  //     if (room.id === book.RoomId) {
  //       console.log('Нашлась команата');
  //       allPeopleLiveInRoom += Number(book.guestsNumber);
  //     }
  //   });
  //   if (allPeopleLiveInRoom + guestsNumber <= room.numberOfBeds) {
  //     console.log('Добавилась');
  //     return roomsAviable.push(room);
  //   }
  // });
  // console.log(roomsAviable);
  return res.status(200).json({ bookss });
  // if (Number(0) >= Number(allPeopleLive) + Number(guestsNumber)) {
  //   return res.status(200).json({ message: 'Мы можем подселить вас на эти даты' });
  // }
  // res.status(200).json({ message: 'Мы не можем подселить вас на эти даты' });
};

module.exports = {
  checkDate,
};
