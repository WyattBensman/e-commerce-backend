const Sequelize = require('sequelize');
// require & load dotenv
require('dotenv').config();

// Create a connection object
const sequelize = new Sequelize(
    // Database Name
    process.env.DB_NAME,
    // Username
    process.env.DB_USER,
    // Password
    process.env.DB_PASSWORD,
    {
        // Database location
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

module.exports = sequelize;