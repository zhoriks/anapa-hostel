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
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};
