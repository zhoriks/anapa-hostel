const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {}
  }
  Comment.init({
    guestName: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    guestTelephone: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    guestPhoto: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
