const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    static associate(models) {
      // define association here
    }
  }
  Books.init({
    guestName: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    checkInDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    checkOutDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    categoryRoom: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    guestsNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    telephone: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 'Ожидает подтверждения',
    },
    roomId: {
      type: DataTypes.INTEGER,
    },
    comment: {
      type: DataTypes.text,
    },
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};
