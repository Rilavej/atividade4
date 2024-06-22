import mysql2 from "mysql2/promise";

import { config } from "dotenv";
config()

// import { pid } from 'node:process'
console.log(process.pid)

//encapsulado para poder exportar
const pool = (async () => {
    try {
        const pool =  mysql2.createPool({
            host: process.env.MYSQL_HOST, 
            user: process.env.MYSQL_USER, 
            password: process.env.MYSQL_PASSWORD, 
        })

        console.log("Conexão com servidor de banco de dados estabelecida.")
        
        const connection = await pool.getConnection()

        console.log(`#0 SHOW STATUS LIKE "%conn%"`)

        const [result] = await connection.query(`SHOW STATUS LIKE "%conn%"`)
        console.log(result)

        connection.release()

        return pool

    } catch (err) {
        console.error(err)
    }
})();

export default await pool