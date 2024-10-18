const Sequelize = require("sequelize");

const sequelize = new Sequelize("node", "root", "101022", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;