'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => { // faça
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false, // não pode ser vazio
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false, // não pode ser vazio
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false, // não pode ser vazio
      },
      create_at: {
        type: Sequelize.DATE,
        allowNull: false, // não pode ser vazio
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false, // não pode ser vazio
      }
    })
},

   down: async (queryInterface, Sequelize) => { // se der errado
    return queryInterface.dropTable('users');
  }
};
