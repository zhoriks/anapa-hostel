const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cleaning extends Model {
    static associate({ Room }) {
      this.hasOne(Room);
    }
  }
  Cleaning.init({
    RoomId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Room',
        key: 'id',
      },
    },
    dateOfCleaning: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Cleaning',
  });
  return Cleaning;
};
