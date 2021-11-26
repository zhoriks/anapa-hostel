module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cleanings', [{
      RoomId: '1',
      dateOfCleaning: '2021-11-26',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      RoomId: '2',
      dateOfCleaning: '2021-11-26',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      RoomId: '3',
      dateOfCleaning: '2021-11-26',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      RoomId: '4',
      dateOfCleaning: '2021-11-24',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      RoomId: '5',
      dateOfCleaning: '2021-11-23',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      RoomId: '6',
      dateOfCleaning: '2021-11-25',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
