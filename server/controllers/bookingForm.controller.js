const { Book } = require('../db/models');

const newBook = async (req, res) => {
  // вытаскиваем данные из тела fetch-запроса fetchBookInDB, отправленного с sagaClient
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
    RoomId,
    comment,
  } = req.body;
  try {
    // создаем в базе данных в таблице Books запись с полученными данными
    await Book.create({
      guestFirstName,
      guestLastName,
      guestPatronymic,
      email,
      checkInDate,
      checkOutDate,
      categoryRoom,
      guestsNumber,
      telephone,
      RoomId,
      comment,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

module.exports = { newBook };
