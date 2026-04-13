const mysql = require('mysql2');

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"mystore",
    port:3306,
    multipleStatements:false
})

module.exports = pool.promise();