const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {}
  }
  Review.init({
    guestName: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    guestTelephone: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    moderate: {
      type: DataTypes.TEXT,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
