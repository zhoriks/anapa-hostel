const nodemailer = require('nodemailer');
const axios = require('axios');
const qs = require('qs');
const { Book } = require('../db/models');
const { dateToTextFormat } = require('../data/dateToTextFormat');

const BEARER = 'eyJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcl9pZCI6MzI3NSwiZGF0ZXRpbWUiOjE2Mzc3NjcwNzN9.VcWvZZhXN8yCHPVqBoUz4Abxg5UyIv9HUD8U1tuAPjE';

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

  const checkInDateToTEXT = dateToTextFormat(checkInDate);
  const checkOutDateToTEXT = dateToTextFormat(checkOutDate);

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

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'anapa.guest.info@gmail.com',
        pass: 'anapa.guest122021$$',
      },
    });

    const mailOptions = {
      from: 'anapa.guest.info@gmail.com',
      to: email,
      subject: 'Anapa Guest House - Информация о бронировании',
      html: `${guestFirstName}, мы рады, что вы решили провести свой отдых у нас!<br/><br/>

            Вы забронировали ${guestsNumber} места с ${checkInDateToTEXT} по ${checkOutDateToTEXT}.<br/>
            В ближайшее время с вами свяжется наш менеджер для подтверждения.<br/><br/>
            Желаем вам отличного отдыха!<br/><br/>
      
            С уважением,<br/>
            команда Anapa Guest House!`,
    };

    transporter.sendMail(mailOptions);

    // подключаем уведомления по телефону
    const data = qs.stringify({
      phone: telephone,
      text: `Вы забронировали ${guestsNumber} места с ${checkInDateToTEXT} по ${checkOutDateToTEXT} в Anapa Guest House`,
    });

    const config = {
      method: 'post',
      url: 'https://api.pushsms.ru/api/v1/delivery',
      headers: {
        Authorization: BEARER,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data,
    };

    await axios(config);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

module.exports = { newBook };
