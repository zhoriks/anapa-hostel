module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Admins', [{
      login: 'admin',
      password: '$2a$10$lVqbm.YmjGZ5Jw2r9KpHXep340bbED5nFfCrNgs79y53kBfFkkCUG',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
