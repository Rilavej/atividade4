const mysql = require("mysql2/promise")

const dotenv = require("dotenv")
dotenv.config()

// const pool = (async  () => {
    
    // try {
        const pool = mysql.createPool({
            host: process.env.MYSQL_HOST, 
            user: process.env.MYSQL_USER, 
            password: process.env.MYSQL_PASSWORD, 
        })

        // const conn = await pool.getConnection()
        console.log("Conexão com servidor de banco de dados estabelecida.")

        
        // return pool
    // }
    // catch (err) {

    // }

// })();

/* 
;(async () => {
    try {
        const [results, fields] = await pool.query(`CREATE DATABASE IF NOT EXISTS atividade4;`);
        console.log(results)

        {const [results, fields] = await pool.query(`USE atividade4;`)
        console.log(results)}
        
    } catch (err) {
        console.log(err)
}})();
 */
module.exports = pool