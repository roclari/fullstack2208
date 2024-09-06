const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize("postgresql://postgres:JBroQImklLBTCqbzZoQBZCrBTYdneoQF@junction.proxy.rlwy.net:27078/railway", {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

module.exports = sequelize;
