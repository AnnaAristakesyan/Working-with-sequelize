const { Sequelize } = require('sequelize');

function registerModels(sequelize) {
  // Example model
  const User = sequelize.define('User', {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  // Add more models here

  return sequelize;
}

module.exports = { registerModels };
