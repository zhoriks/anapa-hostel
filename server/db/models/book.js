const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate({ Room }) {
      this.belongsTo(Room);
    }
  }
  Book.init({
    guestFirstName: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    guestLastName: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    guestPatronymic: {
      type: DataTypes.TEXT,
    },
    checkInDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    checkOutDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    categoryRoom: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    guestsNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    telephone: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.TEXT,
      defaultValue: 'Ожидает подтверждения',
    },
    RoomId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Room',
        key: 'id',
      },
    },
    comment: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
