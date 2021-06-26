const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Pik10078?",
    host: "localhost",
    port: 5432,
    database: "sukadurian"
});

module.exports = pool;