const {
  Model,
} = require('DataTypes');

module.exports = (DataTypes, DataTypes) => {
  class Book extends Model {
    static associate({ Room }) {
      this.belongsTo(Room, { foreignKey: 'roomId' });
    }
  }
  Book.init({
    guestName: {
      type: DataTypes.TEXT,
      allowNull: true,
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
    telephone: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.TEXT,
      defaultValue: 'Ожидает подтверждения',
    },
    roomId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Room',
      },
    },
    comment: {
      type: DataTypes.TEXT,
    },
  }, {
    DataTypes,
    modelName: 'Book',
  });
  return Book;
};
