require('dotenv').config();
const Sequelize = require('sequelize');
const { strategies } = require('./passport');

// Define the database connection configuration
const config = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT || 3306,
  dialectOptions: {
    decimalNumbers: true,
  },
};

console.log(process.env.DB_NAME);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_HOST);
console.log(process.env.DB_PORT);

// Create a new Sequelize instance with the configuration
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// Export the sequelize instance
module.exports = sequelize;
