'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('user', 'peopleId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'people', // Nome da tabela referenciada
        key: 'id'         // Chave primária da tabela 'Pessoas'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE' // Se uma pessoa for deletada, o login também será removido
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('user', 'peopleId');
  }
};
