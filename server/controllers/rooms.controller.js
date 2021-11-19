const { Room } = require('../db/models');

const allRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll({
    });
    res.status(200).json(rooms);
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

module.exports = allRooms;
