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
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      checkOutDate: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      categoryRoom: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      guestsNumber: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      telephone: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      status: {
        type: Sequelize.TEXT,
        defaultValue: 'Ожидает подтверждения',
      },
      roomId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Rooms',
        },
      },
      comment: {
        type: Sequelize.TEXT,
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
