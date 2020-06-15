const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'username', 'password', { dialect: 'mysql', host: 'localhost' })
module.exports = sequelize;