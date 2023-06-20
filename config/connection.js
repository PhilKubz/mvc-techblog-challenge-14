const Sequelize = require('sequelize');

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

// Create a new Sequelize instance with the configuration
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// Export the sequelize instance
module.exports = sequelize;
