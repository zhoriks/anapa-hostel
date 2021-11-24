const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate({ Book, Cleaning }) {
      this.hasOne(Book);
      this.belongsTo(Cleaning);
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
    price: {
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
