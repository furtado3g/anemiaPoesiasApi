const path = require('path')

module.exports = {
  client: 'mysql',
  connection: {
    host: '172.18.0.2',
    user: 'root',
    password: 'Thereva7x',
    database: 'anemiaPoesias'
  },
  migrations: {
    directory: path.resolve(__dirname, "database", "migrations"),
  },
};