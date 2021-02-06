const {createPool} = require('mysql')
const config = require('../config.json')

const db_pool = createPool({
    port: config.DatabaseConfig.DBPort,
    host: config.DatabaseConfig.host,
    user: config.DatabaseConfig.user,
    password: config.DatabaseConfig.password,
    database: config.DatabaseConfig.database,
    connectionLimit: config.DatabaseConfig.connectionLimit
})

module.exports = db_pool;