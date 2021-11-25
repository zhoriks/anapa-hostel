const { Cleaning, Room } = require('../db/models');

const allCleanings = async (req, res) => {
  try {
    const cleanings = await Cleaning.findAll({
      include: Room,
      order: [['RoomId', 'ASC']],
    });
    res.status(200).json(cleanings);
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

const updateCleanings = async (req, res) => {
  const { RoomId, date } = req.body;

  try {
    await Cleaning.update(
      { dateOfCleaning: date },
      { where: { RoomId } },
    );
    const cleanings = await Cleaning.findAll({
      include: Room,
      order: [['RoomId', 'ASC']],
    });
    res.status(200).json(cleanings);
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

const checkCleanings = async (req, res) => {
  try {
    const cleanings = await Cleaning.findAll({
      include: Room,
      order: [['RoomId', 'ASC']],
    });
    res.status(200).json(cleanings);
  } catch (error) {
    res.status(404).json({ error: 'error' });
  }
};

module.exports = { allCleanings, updateCleanings, checkCleanings };
