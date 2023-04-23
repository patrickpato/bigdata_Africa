const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"dare200Win!",
    host:"localhost", 
    port: 5432, 
    database:"wingukuu_001"
})

module.exports = pool;