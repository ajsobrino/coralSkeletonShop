const Sequelize = require('sequelize');

const sequelize = require('./database');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    },
    size: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'SIZE_OF_PRODUCT'
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    haveBase: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }

})