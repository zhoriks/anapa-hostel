const { Op } = require('sequelize');
const Sequelize = require('sequelize');
const { Book, Room } = require('../db/models');

const checkDate = async (req, res) => {
  // Обьявляем массив доступных номеров
  const aviableRooms = [];
  const unAviableRooms = [];
  const {
    checkInDate,
    checkOutDate,
    guestsNumber,
  } = req.body;

  try {
    // Список всех комнта
    const rooms = await Room.findAll();

    // Высчитываем количество гостей в номерах на эти даты
    const occupiedRooms = await Book.findAll({
      where: {
        [Op.or]: [{
          checkInDate: { [Op.lte]: checkInDate },
          checkOutDate: { [Op.gte]: checkOutDate },
        },
        {
          checkInDate: { [Op.gte]: checkInDate },
          checkOutDate: { [Op.lte]: checkOutDate },
        }],
      },
      attributes: [
        [Sequelize.fn('SUM', Sequelize.col('Book.guestsNumber')), 'totalGuestsAmount'],
      ],
      include: [
        {
          model: Room,
        },
      ],
      group: ['Room.id'],
    });
    // Проверяем доступность номеров на заданное количество людей
    occupiedRooms.forEach((book) => {
      if (Number(book.dataValues.totalGuestsAmount)
      + Number(guestsNumber)
      <= Number(book.Room.numberOfBeds)) {
        aviableRooms.push(book.Room);
      } else {
        unAviableRooms.push(book.Room);
      }
    });

    // Проверяем пустые номера
    rooms.forEach((room) => {
      if ((!aviableRooms.find((element) => element.id === room.id))
     && (!unAviableRooms.find((element) => element.id === room.id))) {
        aviableRooms.push(room);
      }
    });

    // Отправляем ответ
    return res.status(200).json({ aviableRooms });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  checkDate,
};
