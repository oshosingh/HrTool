const {createPool} = require('mysql')

const db_pool = createPool({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "9333",
    database: "nanotech",
    connectionLimit: 10
})

module.exports = db_pool;