module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      guestName: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      guestTelephone: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      guestPhoto: {
        type: Sequelize.TEXT,
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      moderate: {
        type: Sequelize.TEXT,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Reviews');
  },
};
