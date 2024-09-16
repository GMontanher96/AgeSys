const Sequelize = require('sequelize');
const configDB = require('../config/database');

const connection = new Sequelize(configDB); // conexão com o banco;

module.exports = connection