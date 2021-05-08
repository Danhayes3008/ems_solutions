const Pool = require("pg").Pool;
const dotenv = require('dotenv');
require('dotenv').config();

const pool = new Pool({
    user: process.env.user,
    password: process.env.password,
    host: "localhost",
    port: process.env.port,
    database: process.env.database
});

module.exports = pool;