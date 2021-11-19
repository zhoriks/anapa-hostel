module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Rooms', [{
      type: 'Эконом',
      name: 'Lastochka',
      numberOfBeds: '8',
      price: '1500',
      fullness: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: 'Эконом',
      name: 'Morshoy briz',
      numberOfBeds: '8',
      price: '1500',
      fullness: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: 'Комфорт',
      name: 'Voshod',
      numberOfBeds: '4',
      price: '3000',
      fullness: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: 'Комфорт',
      name: 'Zakat',
      numberOfBeds: '4',
      price: '3000',
      fullness: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: 'Люкс',
      name: 'President lux',
      numberOfBeds: '2',
      price: '6000',
      fullness: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: 'Люкс',
      name: 'Grand lux',
      numberOfBeds: '2',
      price: '6000',
      fullness: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
