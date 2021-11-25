const { Room } = require('../db/models');

const allRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll({
      order: [['id', 'ASC']],
    });
    res.status(200).json(rooms);
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

// изменение заполненности номера
const updateFullness = async (req, res) => {
  const { guestNumber, roomId, fullness } = req.body;

  try {
    await Room.update(
      { fullness: guestNumber + fullness },
      {
        where: { id: roomId },
        returning: true,
      },
    );
    const rooms = await Room.findAll({
      order: [['id', 'ASC']],
    });
    res.status(200).json(rooms);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { allRooms, updateFullness };
