const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate({ Book }) {
      this.belongsTo(Book, { foreignKey: 'roomId' });
    }
  }
  Room.init({
    type: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    numberOfBeds: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fullness: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0',
    },
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};
