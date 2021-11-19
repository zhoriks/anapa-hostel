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
    login: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};
