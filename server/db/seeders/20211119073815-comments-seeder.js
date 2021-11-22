module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comments', [{
      guestName: 'Лена',
      guestTelephone: '+78005553535',
      comment: 'Первый отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      guestName: 'Олег',
      guestTelephone: '78005553535',
      comment: 'Второй отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      guestName: 'Юра',
      guestTelephone: '78005553535',
      comment: 'Третий отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      guestName: 'Надя',
      guestTelephone: '78005553535',
      comment: 'Четвертый отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      guestName: 'Георгий',
      guestTelephone: '78005553535',
      comment: 'Пятый отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      guestName: 'Екатерина',
      guestTelephone: '78005553535',
      comment: 'Шестой отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      guestName: 'Кристина',
      guestTelephone: '78005553535',
      comment: 'Седьмой отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      guestName: 'Эдуард',
      guestTelephone: '78005553535',
      comment: 'Восьмой отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      guestName: 'Алексей',
      guestTelephone: '78005553535',
      comment: 'Девятый отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      guestName: 'Денис',
      guestTelephone: '78005553535',
      comment: 'Десятый отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      guestName: 'Аюша',
      guestTelephone: '78005553535',
      comment: 'Одиннадцатый отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      guestName: 'Дина',
      guestTelephone: '78005553535',
      comment: 'Двенадцатый отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
