module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
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
      checkInDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      checkOutDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      categoryRoom: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      guestsNumber: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      telephone: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue: 'Ожидает подтверждения',
      },
      roomId: {
        type: Sequelize.INTEGER,
      },
      comment: {
        type: Sequelize.text,
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
    await queryInterface.dropTable('Books');
  },
};
